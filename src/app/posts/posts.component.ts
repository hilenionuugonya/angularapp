
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;
  private handleError(error: any): Promise<any> {
    console.log('An error occured ', error);
    return Promise.reject(error.message || error);
}


  constructor( http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response;
        console.log('Posts ' + JSON.stringify(response));
      });
  }

}
