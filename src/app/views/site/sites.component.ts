import {Component} from '@angular/core';

import {TableInf} from '../../models/table-inf';
import {RestapiService} from '../../services/restapi.service';

@Component({
  selector: 'app-sites',
  template: '<app-table [tableInf]="tableInf"></app-table>',
  styleUrls: []
})
export class SitesComponent {

  tableInf: TableInf = {
    listTitle: 'Site List',
    searchPName: 'url',
    routeName: 'sites',
    getItemsFunc: this.siteService.getSitesPage.bind(this.siteService),
    addCreateButton: false
  };

  constructor(private siteService: RestapiService) {
  }

}
