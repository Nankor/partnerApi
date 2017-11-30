import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Site} from '../../models/site';
import {RestapiService} from '../../services/restapi.service';


@Component({
  selector: 'app-site-detail',
  templateUrl: '../detail.component.html'
})
export class SiteDetailComponent implements OnInit {
  detailTitle = 'Site Detail';
  item: Site;
  objKeys: string[];

  constructor(private siteService: RestapiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.route.paramMap
      .switchMap((params: ParamMap) => this.siteService.getSite(+params.get('id')))
      .subscribe(site => {
        this.item = site as Site;
        this.objKeys = Object.keys(site);
      });
  }

}
