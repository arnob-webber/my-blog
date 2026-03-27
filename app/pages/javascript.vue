<script setup lang="ts">

const { data: posts } = await useAsyncData('javascript-posts', () => {
  return queryCollection('content')
    .where('category', '=', 'JavaScript')
    .all()
})
</script>

<template>
  <div class="max-w-7xl mx-auto py-16 px-6">
    <header class="mb-16 text-center max-w-2xl mx-auto">
      <h1 class="text-5xl font-black text-white tracking-tight mb-4 bg-gradient-to-r from-gold-warm to-candy-pink bg-clip-text text-transparent">
        JavaScript & Frameworks
      </h1>
      <p class="text-pink-100/50 text-xl leading-relaxed">
        Master the art of modern web development with our deep dives into JS and its ecosystem.
      </p>
    </header>

    <div v-if="posts && posts.length" class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink 
        v-for="(post, index) in posts" 
        :key="post.path" 
        :to="post.path"
        class="group relative bg-warm-gray rounded-3xl overflow-hidden border border-warm-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,0,127,0.15)] flex flex-col hover:border-candy-pink/30"
        :style="{ transitionDelay: `${index * 50}ms` }"
      >

        <div v-if="post.category" class="absolute top-4 left-4 z-10">
          <span class="px-4 py-1.5 rounded-full bg-warm-dark/80 backdrop-blur-md text-xs font-bold text-gold-warm shadow-sm border border-warm-accent uppercase tracking-widest">
            {{ post.category }}
          </span>
        </div>

        <div class="relative overflow-hidden aspect-[4/3]">
          <img 
            :src="post.image" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            :alt="post.title" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-warm-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div class="p-8 flex-grow flex flex-col">
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-xs font-bold text-pink-100/30 uppercase tracking-widest">{{ post.date }}</span>
          </div>
          
          <h2 class="text-2xl font-black mb-4 text-white leading-tight group-hover:text-candy-pink transition-colors">
            {{ post.title }}
          </h2>
          
          <p class="text-pink-100/50 line-clamp-2 text-base leading-relaxed mb-6">
            {{ post.description }}
          </p>
          
          <div class="mt-auto pt-6 border-t border-warm-accent flex items-center justify-between">
            <span class="text-candy-pink text-sm font-black uppercase tracking-widest group-hover:mr-2 transition-all">
              Watch Experience
            </span>
            <div class="w-10 h-10 rounded-full bg-warm-brown flex items-center justify-center group-hover:bg-candy-pink group-hover:text-white transition-all duration-300">
              <svg class="w-5 h-5 translate-x-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </NuxtLink>
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
</template>
