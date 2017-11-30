import {Component} from '@angular/core';

// Observable operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {TableInf} from '../../models/table-inf';
import {RestapiService} from '../../services/restapi.service';

@Component({
  selector: 'app-invoices',
  template: '<app-table [tableInf]="tableInf"></app-table>',
  styleUrls: []
})
export class InvoicesComponent {
  tableInf: TableInf = {
    listTitle: 'Invoice List',
    searchPName: 'email',
    routeName: 'invoices',
    getItemsFunc: this.invoiceService.getInvoicesPage.bind(this.invoiceService),
    addCreateButton: false
  };

  constructor(public invoiceService: RestapiService) {
  }
}
