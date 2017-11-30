import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {EntryListComponent} from './views/entry-list.component';
import {AppRoutingModule} from './app-routing.module';
import {TokenService} from './services/token.service';
import {AccountsComponent} from './views/account/accounts.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './services/message.service';
import {AccountDetailComponent} from './views/account/account-detail.component';
import {SitesComponent} from './views/site/sites.component';
import {SiteDetailComponent} from './views/site/site-detail.component';
import {TableComponent} from './views/table.component';
import {InvoicesComponent} from './views/invoice/invoices.component';
import {InvoiceDetailComponent} from './views/invoice/invoice-detail.component';
import {AccountsNewComponent} from './views/account/accouts-new.component';
import {PromoSalesComponent} from './views/promo/promo-sales.component';
import {PromoSaleDetailComponent} from './views/promo/promo-sale-detail.component';
import {RestapiService} from './services/restapi.service';
import {PromosComponent} from './views/promo/promos.component';
import {PromoDetailComponent} from './views/promo/promo-detail.component';
import {PartnerDetailComponent} from './views/partner-detail.component';


@NgModule({
  declarations: [
    AppComponent, EntryListComponent, AccountsComponent,
    MessagesComponent, AccountDetailComponent, SitesComponent,
    SiteDetailComponent, TableComponent, InvoicesComponent,
    InvoiceDetailComponent, AccountsNewComponent,
    PromoSalesComponent, PromoSaleDetailComponent,
    PromosComponent, PromoDetailComponent, PartnerDetailComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [TokenService, MessageService, RestapiService], //AccountService, SiteService, InvoiceService,
  bootstrap: [AppComponent]
})
export class AppModule {
}
