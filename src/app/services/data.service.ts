import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { AppErrorHandler} from '../common/app-error-handler';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import {post} from 'selenium-webdriver/http';


@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url)
      .map(response => response)
      .catch(this.handleError);
  }

  create(resource) {
    return Observable.throw(new AppErrorHandler());

    // return this.http.post(this.url, JSON.stringify(resource))
      // .map(response => response)
     // .catch(this.handleError);

  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .map(response => response)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput());

      if (error.status === 404) {
        return Observable.throw(new NotFoundError());
      }
      return Observable.throw(new AppErrorHandler());
    }
  }
}
