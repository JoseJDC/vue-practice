import type Post from "@/models/Post";
import { ref, type Ref } from "vue";

export default class PostService {
    private posts: Ref<Array<Post>>;
    private post: Ref<Post>;

    constructor() {
        this.posts = ref<Array<Post>>([]);
        this.post = ref<Post>({});
    }

    async fetchAllPost() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => resp.json())
            .then((resp) => {
                this.posts.value = resp;
            })
    }

    async fetchOnePost(id: number) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((resp) => resp.json())
            .then((resp) => {
                this.post.value = resp;
            })
    }

    getPosts() {
        return this.posts.value;
    }

    getPost() {
        return this.post.value;
    }
}