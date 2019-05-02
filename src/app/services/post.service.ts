import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppErrorHandler} from '../common/app-error-handler';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Injectable()
export class PostService {
   private url = 'https://jsonplaceholder.typicode.com/posts' ;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppErrorHandler());
      });

  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppErrorHandler());
      });
  }
}
