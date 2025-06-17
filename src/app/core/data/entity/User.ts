import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";
import {StringUtil} from "../../util/StringUtil";

export class User implements IEntity {
  constructor(
    public id: number | null = null,
    public contactId: number | null = null,
    public name: string | null = null,
    public firstName: string | null = null,
    public lastName: string | null = null,
    public userName: string | null = null,
    public password: string | null = null,
    public active: boolean | null = null,
    public locked: boolean | null = null,
    public vacationStatus: string | null = null,
    public prefix: string | null = null,
    public middleName: string | null = null,
    public suffix: string | null = null,
    public backupUser: string | null = null,
    public sectionTimeout: number | null = null,
    public jobTitle: string | null = null,
    public department: string | null = null,
    public experienceLevel: string | null = null,
    public userLanguage: string | null = null,
    public userLocal: string | null = null,
    public userDefaultCountry: string | null = null,
    public userDefaultPhoneCountry: string | null = null,
    public externalUser: boolean | null = null,
    public type = EntityTypeKey.User,
  ) {
  }

  get FullName() {
    let values = [this.firstName, this.middleName, this.lastName];
    return StringUtil.join(values, " ")
  }
}
