import {Component} from '@angular/core';

import {TableInf} from '../../models/table-inf';
import {RestapiService} from '../../services/restapi.service';

@Component({
  selector: 'app-accounts',
  template: '<app-table [tableInf]="tableInf"></app-table>',
  styleUrls: []
})
export class AccountsComponent {
  tableInf: TableInf = {
    listTitle: 'Account',
    searchPName: 'url',
    routeName: 'accounts',
    getItemsFunc: this.accountService.getAccountsPage.bind(this.accountService),
    addCreateButton: true
  };

  constructor(private accountService: RestapiService) {
  }
}
