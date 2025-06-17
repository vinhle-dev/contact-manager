import {Injectable} from '@angular/core';
import {IEntity} from "../../data/IEntity";
import {TestDataBuilder} from "../../data/TestDataBuilder";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private _entities: { [type: string]: IEntity[] } = {};

  protected constructor() {
    if (environment.env === "dev") {
      TestDataBuilder.buildTestData().forEach(item => {
        item.data.forEach(entity => {
          this.add(item.type, entity);
        });
      });
    }
  }

  private generateId(type: string): number {
    let length = this.getEntityByType(type).length;
    if (length > 0) {
      return length + 1;
    }

    return 1;
  }

  add(type: string, entity: IEntity): void {
    entity.id = this.generateId(type);
    if (this._entities[type]) {
      this._entities[type].push(entity);
    } else {
      this._entities[type] = [entity];
    }
  }

  remove(type: string, id: number): void {
    if (this._entities[type]) {
      this._entities[type] = this._entities[type].filter(entity => entity.id !== id);
    }
  }


  updateEntity(type: string, updatedEntity: IEntity): void {
    if (this._entities[type] && updatedEntity.id != null) {
      const index = this._entities[type].findIndex(entity => entity.id === updatedEntity.id);
      if (index !== -1) {
        this._entities[type][index] = updatedEntity;
      }
    } else {
      this.add(type, updatedEntity);
    }
  }

  getEntityByType(type: string): IEntity[] {
    return this._entities[type] || [];
  }

  getEntityById(type: string, id: number | null) {
    let entity = undefined;
    if (this._entities[type] && id) {
      entity = this._entities[type].find(entity => entity.id === id);
    }
    return entity !== undefined ? entity : null;
  }
}
