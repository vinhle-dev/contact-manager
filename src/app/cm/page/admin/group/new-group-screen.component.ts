import {Component, inject, Input} from '@angular/core';
import {Group} from "../../../../core/data/entity/Group";
import {UserGroup} from "../../../../core/data/entity/UserGroup";
import {UserService} from "../../../../core/service/data/user.service";
import {GroupService} from "../../../../core/service/data/group.service";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";

@Component({
  selector: 'new-group-screen',
  templateUrl: './new-group-screen.component.html'
})
export class NewGroupScreenComponent extends BaseScreen {
  @Input({required: true}) group!: Group;
  @Input({required: true}) userGroups!: UserGroup[];

  protected userService = inject(UserService);
  protected groupService = inject(GroupService)

  parentOptions = [this.groupService.getRootGroup().name]
  supervisorOptions = [...this.userService.getAll().map(u => u.name)]
  //TODO create type list
  typeOptions = ["Home Office U.W.", "Regional UW", "Branch UW", "Home Office L.C.", "Regional L.C.", "Branch L.C.", "Regional Audit", "Branch Audit", "Premium Accounting", "Customer Service", "Home Office Marketing", "Regional Marketing", "Branch Marketing", "Clerical support", "Solutions Group", "Special investigative unit", "Fac Reinsurance Unit", "Web Services unit", "Corporate headquarters", "Finance and Treasury", "Fee Audit", "Fee Inspection", "System administrators", "Actuary Unit", "Managing General Agt", "Producer", "General", "Home Office Admin Services", "Policy Services", "Auto - fast track", "Auto", "Auto - complex", "Property - fast track", "Property", "Property - complex", "Liability - fast track", "Liability", "Liability - complex", "Liability specialists", "Workers' comp - med only", "Workers' comp - lost time", "Workers' comp", "Regional service center", "Local office", "Auto damage appraisers", "Defense attorneys", "Clean-up services", "Drive-in centers", "Independent adjusters", "Injury liability specialists", "New claim processing", "Litigation unit", "Medical management", "Policy processing", "Preferred repair shops", "Property damage appraisers", "Rehab/nursing", "Salvage unit", "Subrogation unit", "Underwriting", "Police"]

  toAddUserGroup(listData: UserGroup[]) {
    listData.push(new UserGroup());
  }

  toRemoveUserGroup(listData: UserGroup[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }
}
