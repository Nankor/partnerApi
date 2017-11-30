import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EntryListComponent} from './views/entry-list.component';
import {AccountsComponent} from './views/account/accounts.component';
import {AccountDetailComponent} from './views/account/account-detail.component';
import {SitesComponent} from './views/site/sites.component';
import {SiteDetailComponent} from './views/site/site-detail.component';
import {InvoicesComponent} from './views/invoice/invoices.component';
import {InvoiceDetailComponent} from './views/invoice/invoice-detail.component';
import {AccountsNewComponent} from './views/account/accouts-new.component';
import {PromoSalesComponent} from './views/promo/promo-sales.component';
import {PromoSaleDetailComponent} from './views/promo/promo-sale-detail.component';
import {PromosComponent} from './views/promo/promos.component';
import {PromoDetailComponent} from "./views/promo/promo-detail.component";
import {PartnerDetailComponent} from "./views/partner-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: EntryListComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/new', component: AccountsNewComponent},
  {path: 'accounts/:id', component: AccountDetailComponent},
  {path: 'sites', component: SitesComponent},
  {path: 'sites/:id', component: SiteDetailComponent},
  {path: 'invoices', component: InvoicesComponent},
  {path: 'invoices/:id', component: InvoiceDetailComponent},
  {path: 'promos', component: PromosComponent},
  {path: 'promos/:id', component: PromoDetailComponent},
  {path: 'promo_sales', component: PromoSalesComponent},
  {path: 'promo_sales/:id', component: PromoSaleDetailComponent},
  {path: 'info', component: PartnerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
