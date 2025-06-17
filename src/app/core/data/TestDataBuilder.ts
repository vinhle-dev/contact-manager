import {User} from "./entity/User";
import {Group} from "./entity/Group";
import {UserGroup} from "./entity/UserGroup";
import {Role} from "./entity/Role";
import {Permission} from "./entity/Permission";
import {RolePrivilege} from "./entity/RolePrivilege";
import {UserRole} from "./entity/UserRole";
import {Contact} from "./entity/Contact";
import {Address} from "./entity/Address";
import {Phone} from "./entity/Phone";
import {Region} from "./entity/Region";
import {ContactAddress} from "./entity/ContactAddress";
import {Document} from "./entity/Document";
import {Service} from "./entity/Service";
import {History} from "./entity/History";
import {GroupRegion} from "./entity/GroupRegion";
import {UserRegion} from "./entity/UserRegion";
import {EntityTypeKey} from "./typekey/EntityTypeKey";

export class TestDataBuilder {

  static buildTestData() {
    return [
      {
        type: EntityTypeKey.Address,
        data: TestDataBuilder.getAddresses()
      },
      {
        type: EntityTypeKey.Contact,
        data: TestDataBuilder.getContacts()
      },
      {
        type: EntityTypeKey.ContactAddress,
        data: TestDataBuilder.getContactAddresses()
      },
      {
        type: EntityTypeKey.Document,
        data: TestDataBuilder.getDocuments()
      },
      {
        type: EntityTypeKey.EFTData,
        data: []
      },
      {
        type: EntityTypeKey.Group,
        data: TestDataBuilder.getGroups()
      },
      {
        type: EntityTypeKey.GroupRegion,
        data: TestDataBuilder.getGroupRegions()
      },
      {
        type: EntityTypeKey.History,
        data: TestDataBuilder.getHistories()
      },
      {
        type: EntityTypeKey.Permission,
        data: TestDataBuilder.getPermissions()
      },
      {
        type: EntityTypeKey.Phone,
        data: TestDataBuilder.getPhones()
      },
      {
        type: EntityTypeKey.Region,
        data: TestDataBuilder.getRegions()
      },
      {
        type: EntityTypeKey.Role,
        data: TestDataBuilder.getRoles()
      },
      {
        type: EntityTypeKey.RolePrivilege,
        data: TestDataBuilder.getRolePrivileges()
      },
      {
        type: EntityTypeKey.ServiceRequest,
        data: TestDataBuilder.getServices()
      },
      {
        type: EntityTypeKey.User,
        data: TestDataBuilder.getUsers()
      },
      {
        type: EntityTypeKey.UserGroup,
        data: TestDataBuilder.getUserGroups()
      },
      {
        type: EntityTypeKey.UserRegion,
        data: TestDataBuilder.getUserRegions()
      },
      {
        type: EntityTypeKey.UserRole,
        data: TestDataBuilder.getUserRoles()
      }
    ];
  }

  static getGroups(): Group[] {
    return [
      new Group(
        1,
        "Default Root Group",
        "General",
        null,
        "Super User"),
      new Group(
        2,
        "Test Group 1",
        "General",
        1,
        "Super User"),
      new Group(
        3,
        "Test Group 2",
        "General",
        1,
        "Super User"),
      new Group(
        4,
        "Test Group 3",
        "General",
        2,
        "Super User"),
    ];
  }

  static getRoles(): Role[] {
    return [
      new Role(
        1,
        "Default Owner",
        "Default Owner"
      ),
      new Role(
        2,
        "Super User",
        "Super User"
      )
    ];
  }

  static getRolePrivileges(): RolePrivilege[] {
    return [
      new RolePrivilege(1, 1, this.getPermissions()[0].id as number),
      new RolePrivilege(2, 2, this.getPermissions()[1].id as number)
    ];
  }

  static getPermissions(): Permission[] {
    return [
      new Permission(1, "Default Owner", "default_owner", "Default Owner"),
      new Permission(2, "Super User", "super_user", "Super User"),
      new Permission(3, "Test 1", "test_1", "Test 1"),
      new Permission(4, "Test 2", "test_2", "Test 2"),
      new Permission(5, "Test 3", "test_3", "Test 3")
    ];
  }

  static getContacts(): Contact[] {
    return [
      new Contact(1, "Test Contact", "Person", 1, "12345", "testemail@test.com")
    ];
  }

  static getContactAddresses(): ContactAddress[] {
    return [
      new ContactAddress(1, 1, 1, true)
    ]
  }

  static getDocuments(): Document[] {
    return [
      new Document(1, 'Test Document', 'Approved', 'Test User', '07/23/2024 6:10 PM', 'Final', 1)
    ]
  }

  static getServices(): Service[] {
    return [
      new Service(1, 'Property', 'Construction services', 'Carpentry', 1),
      new Service(2, 'Property', 'Construction services', 'Drying', 1),
      new Service(3, 'Property', 'Construction services', 'Flooring', 1),
      new Service(4, 'Property', 'Construction services', 'Painting', 1),
      new Service(5, 'Property', 'Construction services', 'Plumber', 1),
      new Service(6, 'Property', 'Inspection', 'Independent appraisal', 1),
    ]
  }

  static getHistories(): History[] {
    return [
      new History(1, 'Contact Created', 'su', '', '07/17/2024 1:48 PM', 'Contact was created', '', 1),
      new History(2, 'Document Associated', 'su', '', '07/23/2024 6:10 PM', 'Document Test Document was associated with this contact', '', 1),
      new History(3, 'Address Added', 'su', '', '07/23/2024 10:10 PM', 'A new secondary address was added', '', 1),
    ]
  }

  static getAddresses(): Address[] {
    return [
      new Address(1, "Vietnamese", "123 Test Address", "", "", "Ho Chi Minh", "1", "", "70000", "Business")
    ];
  }

  static getPhones(): Phone[] {
    return [
      new Phone(1, "Work", "0123456789", "0123456789", "0123456789", "0123456789")
    ];
  }

  static getRegions(): Region[] {
    return [new Region(1, "Test", "FL", "United States", "State")];
  }

  static getGroupRegions(): GroupRegion[] {
    return [];
  }

  static getUserRegions(): UserRegion[] {
    return [];
  }

  static getUsers(): User[] {
    return [
      new User(1,
        null,
        "Default Owner",
        "Default",
        "Owner",
        "defaultowner",
        "default",
        false,
        false,
        "At work"),

      new User(
        2,
        null,
        "Super User",
        "Super",
        "User",
        "su",
        "default",
        true,
        false,
        "At work")
    ];
  }

  static getUserRoles(): UserRole[] {
    return [
      new UserRole(1, 1, 1),
      new UserRole(2, 2, 2)
    ]
  }

  static getUserGroups(): UserGroup[] {
    return [
      new UserGroup(1, 1, 1, "Default Owner", true, false),
      new UserGroup(2, 2, 1, "Super User", true, false),
      new UserGroup(3, 1, 2, "Default Owner", true, false),
      new UserGroup(4, 2, 3, "Super User", true, false),
      new UserGroup(5, 1, 4, "Default Owner", true, false),
      new UserGroup(6, 2, 4, "Super User", true, false)
    ]
  }
}
