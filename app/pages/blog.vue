<script setup lang="ts">

const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('content').all()
})
</script>

<template>
  <div class="max-w-7xl mx-auto py-16 px-6">
    <section>
      <div class="container py-10 mx-auto">
        <h1 class="text-4xl font-black text-white capitalize lg:text-5xl mb-12 bg-gradient-to-r from-candy-pink to-gold-warm bg-clip-text text-transparent">
          From the blog
        </h1>

        <div v-if="posts && posts.length" class="grid grid-cols-1 gap-12 mt-8 md:mt-16 md:grid-cols-2">
          <div v-for="post in posts" :key="post.path" class="lg:flex group">
            <NuxtLink :to="post.path" class="w-full lg:w-64 flex-shrink-0">
              <img 
                class="object-cover w-full h-56 rounded-2xl lg:w-64 transition-transform duration-500 group-hover:scale-105" 
                :src="post.image" 
                :alt="post.title"
              >
            </NuxtLink>

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <NuxtLink :to="post.path" class="text-2xl font-bold text-white hover:underline group-hover:text-candy-pink transition-colors duration-300">
                {{ post.title }}
              </NuxtLink>
              
              <div class="flex flex-col space-y-2 mt-4">
                <span class="text-sm text-pink-100/50">On: {{ post.date }}</span>
                <p class="text-pink-100/40 line-clamp-2 text-sm">
                  {{ post.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-32 bg-warm-gray rounded-3xl border-2 border-dashed border-warm-accent">
          <div class="mb-6 inline-flex w-20 h-20 items-center justify-center rounded-full bg-warm-brown text-pink-100/30">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <p class="text-pink-100/30 text-xl font-medium">Our stories are currently being written.<br>Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
