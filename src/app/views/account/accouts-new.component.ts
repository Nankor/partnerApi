import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Account, countryCodes} from '../../models/account';
import {RestapiService} from '../../services/restapi.service';


@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-new.component.html'
  // styleUrls: ['./hero-form.component.css']
})
export class AccountsNewComponent {
  countryCodes = countryCodes;
  model = new Account();
  // submitted = false;
  accountForm: FormGroup;
  // newAccountId: number;

  constructor(private fb: FormBuilder,
              private accountService: RestapiService,
              private rooter: Router) {
    this.createForm();
  }

  createForm() {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nameSurname: '',
      company: '',
      gsm: '',
      address: this.fb.group({
        countryCode: '',
        state: '',
        city: '',
        streetFirst: '',
        streetSecond: '',
        postalCode: ''
      })
    });
  }

  get email() {
    return this.accountForm.get('email');
  }

  get nameSurname() {
    return this.accountForm.get('nameSurname');
  }

  get company() {
    return this.accountForm.get('company');
  }

  onSubmit() {
    // this.submitted = true;
    this.accountService.addAccount(this.accountForm.value as Account)
      .subscribe(newAccount => {
        if (!newAccount) {
          alert('New Account could not be submitted!');
        } else {
          this.rooter.navigate([`/accounts/${newAccount.id}`]);
          // this.newAccountId = newAccount.id;
          // this.submitted = true;
        }
      });
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
