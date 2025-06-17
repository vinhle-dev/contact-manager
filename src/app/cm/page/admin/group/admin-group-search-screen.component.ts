import {Component, inject, Input} from '@angular/core';
import {Group} from "../../../../core/data/entity/Group";
import {GroupCriteria} from "../../../../core/data/entity/GroupCriteria";
import {GroupService} from "../../../../core/service/data/group.service";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";

@Component({
  selector: 'admin-group-search-screen',
  templateUrl: './admin-group-search-screen.component.html'
})
export class AdminGroupSearchScreenComponent extends BaseScreen {
  @Input({required: true}) groupCriteria!: GroupCriteria;

  protected groups: Group[] = [];
  // TODO create type list
  protected typeOptions = ["Home Office U.W.", "Regional UW", "Branch UW", "Home Office L.C.", "Regional L.C.", "Branch L.C.", "Regional Audit", "Branch Audit", "Premium Accounting", "Customer Service", "Home Office Marketing", "Regional Marketing", "Branch Marketing", "Clerical support", "Solutions Group", "Special investigative unit", "Fac Reinsurance Unit", "Web Services unit", "Corporate headquarters", "Finance and Treasury", "Fee Audit", "Fee Inspection", "System administrators", "Actuary Unit", "Managing General Agt", "Producer", "General", "Home Office Admin Services", "Policy Services", "Auto - fast track", "Auto", "Auto - complex", "Property - fast track", "Property", "Property - complex", "Liability - fast track", "Liability", "Liability - complex", "Liability specialists", "Workers' comp - med only", "Workers' comp - lost time", "Workers' comp", "Regional service center", "Local office", "Auto damage appraisers", "Defense attorneys", "Clean-up services", "Drive-in centers", "Independent adjusters", "Injury liability specialists", "New claim processing", "Litigation unit", "Medical management", "Policy processing", "Preferred repair shops", "Property damage appraisers", "Rehab/nursing", "Salvage unit", "Subrogation unit", "Underwriting", "Police"]
  protected groupService = inject(GroupService);

  protected search(groupService: GroupService, groups: Group[]) {
    groupService.getAll().forEach(g => {
      groups.push(g);
    })
  }
}
