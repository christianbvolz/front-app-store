import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../interfaces/Category';
import { Product } from '../interfaces/Product';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlApiService {
  #http = inject(HttpClient);
  
  public getCategories$ = (): Observable<Category[]> =>
    this.#http.get<Category[]>(environment.categoriesUrl);

  public getProduct$ = (productId: string): Observable<Product> => {
    const urlWithId = environment.productUrl + `/${productId}`
    return this.#http.get<Product>(urlWithId);
  }

  // endpoint cagado do ml
  public getProductsList$ = (productIds: string): Observable<Product[]> =>{
    const urlWithId = environment.productUrl + `?ids=${productIds}`
    return this.#http.get<Product[]>(urlWithId);
  }
  
  public getSearchProductsList$ = 
    (categoryId?: string, searchInput?: string): Observable<{ results: Product[] }> => {
      const searchUrl: URL = new URL(environment.searchUrl);
      if (categoryId) searchUrl.searchParams.set('category', categoryId);
      if (searchInput) searchUrl.searchParams.set('q', searchInput);
      
      return this.#http.get<{ results: Product[] }>(searchUrl.toString());
  }
}
