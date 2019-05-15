
import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import {AppErrorHandler} from '../common/app-error-handler';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;


  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
        this.posts.splice(0, 0, post);
        },
        (error: AppErrorHandler ) => {
          if (error instanceof BadInput) {
            // // this.form.setErrors(error.originalError;
          }
        else throw error;
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
        } );
  }
  deletePost(post) {
    this.service.delete(345)
      .subscribe(() => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        },
        (error: AppErrorHandler) => {
                if (error instanceof NotFoundError) {
                alert('This post has already been deleted.');
                } else throw error;
      });
  }
}
