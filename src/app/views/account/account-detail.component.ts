import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/account';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {RestapiService} from '../../services/restapi.service';


@Component({
  selector: 'app-account-detail',
  templateUrl: '../detail.component.html'
})
export class AccountDetailComponent implements OnInit {
  detailTitle = 'Account Detail';
  item: Account;
  objKeys: string[];

  constructor(private accountService: RestapiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.route.paramMap
      .switchMap((params: ParamMap) => this.accountService.getAccount(+params.get('id')))
      .subscribe(account => {
        this.item = account as Account;
        this.objKeys = Object.keys(account);
      });
  }
}
