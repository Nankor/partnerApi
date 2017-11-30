import {Component} from '@angular/core';

import {TableInf} from '../../models/table-inf';
import {RestapiService} from '../../services/restapi.service';

@Component({
  selector: 'app-promos',
  template: '<app-table [tableInf]="tableInf"></app-table>',
  styleUrls: []
})
export class PromosComponent {

  tableInf: TableInf = {
    listTitle: 'Promos List',
    searchPName: 'promoCode',
    routeName: 'promos',
    getItemsFunc: this.restapiService.getPromoPages.bind(this.restapiService),
    addCreateButton: false
  };

  constructor(private restapiService: RestapiService) {
  }

}
