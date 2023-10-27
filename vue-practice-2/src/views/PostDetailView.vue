<script lang="ts" setup>
import Post from '@/models/Post'
import PostService from '@/services/PostService'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

let postService: PostService = new PostService()

const post: Ref<Post> = ref<Post>({})

onMounted(async () => {
  const route = useRoute()
  await postService.fetchOnePost(Number(route.params.id))
  post.value = postService.getPost()
})
</script>
<template>
  <section class="post">
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>
    <h5>User ID: {{ post.userId }}</h5>
    <RouterLink :to="{ name: 'post-list' }">Volver al inicio</RouterLink>
  </section>
</template>
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  margin: 20px;
  padding: 10px;
}
</style>
