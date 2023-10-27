<script lang="ts" setup>
import { onBeforeMount, ref, type Ref } from 'vue'
import PostService from '@/services/PostService'
import Post from '@/models/Post'

let postService: PostService = new PostService()

const posts: Ref<Array<Post>> = ref([])

onBeforeMount(async () => {
  await postService.fetchAllPost()
  posts.value = postService.getPosts()
})
</script>
<template>
  <div class="container">
    <ul class="post">
      <li v-for="post in posts" v-bind:key="post.id">
        <RouterLink class="router" :to="{ name: 'post-detail', params: { id: post.id } }">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.post {
  flex: 3;
}
.detail {
  flex: 1;
  height: 300px;
}
ul {
  list-style-type: none;
  margin-right: 30px;
}

li {
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  padding: 10px;
  margin: 5px;
}

li:hover {
  background-color: aliceblue;
}
.router {
  color: #000;
  text-decoration: none;
}
</style>
