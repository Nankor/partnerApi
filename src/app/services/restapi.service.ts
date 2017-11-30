import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {TokenService} from './token.service';
import {MessageService} from './message.service';
import {ItemsPage} from '../models/items-page';
import {Item} from '../models/item';
import {environment} from '../../environments/environment';

@Injectable()
export class RestapiService {
  // private restApiUrl = 'http://localhost:8080/api/v0';  // URL to web api
  private restApiUrl = environment.restApiUrl;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private messageService: MessageService) {
  }

  getItemsPage(itemsPath: string, pageSize = 10, pageNumber = 0): Observable<ItemsPage> {
    this.log(`fetching ${itemsPath} page`);
    const url = `${this.restApiUrl}/${itemsPath}?size=${pageSize}&page=${pageNumber}`;

    return this.http.get<ItemsPage>(url, this.tokenService.getHttpHeaders())
      .pipe(
        map(resp => new ItemsPage(itemsPath, resp)),
        tap(_ => this.log(`fetched ${itemsPath}`)),
        catchError(this.handleError<ItemsPage>(`get${itemsPath}Page`))
      );
  }

  getItem(itemsPath: string, id: number): Observable<Item> {
    this.log(`fetching ${itemsPath} id : ${id}`);
    const url = `${this.restApiUrl}/${itemsPath}/${id}`;

    return this.http.get<Item>(url, this.tokenService.getHttpHeaders())
      .pipe(
        tap(_ => this.log(`fetched ${itemsPath} id=${id}`)),
        catchError(this.handleError<Item>(`get${itemsPath} id=${id}`))
      );
  }

  getTheItem(itemPath: string): Observable<Item> {
    this.log(`fetching ${itemPath}`);
    const url = `${this.restApiUrl}/${itemPath}`;

    return this.http.get<Item>(url, this.tokenService.getHttpHeaders())
      .pipe(
        tap(_ => this.log(`fetched ${itemPath}`)),
        catchError(this.handleError<Item>(`get${itemPath}`))
      );
  }

  addItem(itemsPath: string, item: Item): Observable<Item> {
    this.log(`posting new ${itemsPath}`);
    const url = `${this.restApiUrl}/${itemsPath}`;

    return this.http.post<Item>(url, item, this.tokenService.getHttpHeaders())
      .pipe(
        tap((newItem: Item) => this.log(`added ${itemsPath} w/ id=${item.id}`)),
        catchError(this.handleError<Item>(`new ${itemsPath} request error`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      if (error.error) {
        console.error(error.status + ' : ' + error.error.message || error.error);
        this.log(`${operation} failed: ${error.status + ' : ' + error.error.message || error.error}`);
      } else {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add('RestapiService: ' + message);
  }

  // account functions
  getAccountsPage(pageSize = 10, pageNumber = 0): Observable<ItemsPage> {
    return this.getItemsPage('accounts', pageSize, pageNumber);
  }

  getAccount(id: number): Observable<Item> {
    return this.getItem('accounts', id);
  }

  addAccount(account: Item): Observable<Item> {
    return this.addItem('accounts', account);
  }

  // invoice functions
  getInvoicesPage(pageSize = 10, pageNumber = 0): Observable<ItemsPage> {
    return this.getItemsPage('invoices', pageSize, pageNumber);
  }

  getInvoice(id: number): Observable<Item> {
    return this.getItem('invoices', id);
  }

  // promo invoice functions
  getPromoInvoicesPage(pageSize = 10, pageNumber = 0): Observable<ItemsPage> {
    return this.getItemsPage('promo_sales', pageSize, pageNumber);
  }

  getPromoInvoice(id: number): Observable<Item> {
    return this.getItem('promo_sales', id);
  }

  // site functions
  getSitesPage(pageSize = 10, pageNumber = 0): Observable<ItemsPage> {
    return this.getItemsPage('sites', pageSize, pageNumber);
  }

  getSite(id: number): Observable<Item> {
    return this.getItem('sites', id);
  }

  // promo info
  getPromoPages(pageSize = 10, pageNumber = 0): Observable<ItemsPage> {
    return this.getItemsPage('promos', pageSize, pageNumber);
  }

  getPromo(id: number): Observable<Item> {
    return this.getItem('promos', id);
  }

}
