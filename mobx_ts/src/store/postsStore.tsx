import { makeAutoObservable } from "mobx";
import { Posts, getPosts } from "../api/getPosts";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

class PostsStore {
  posts?: IPromiseBasedObservable<Posts[]>;

  constructor() {
    makeAutoObservable(this, {});
  }

  getPostsAction = async () => {
    this.posts = fromPromise(getPosts());
  };
}

const PostsInst = new PostsStore();

export default PostsInst;
