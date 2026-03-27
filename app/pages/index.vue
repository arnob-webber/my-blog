
<script setup lang="ts">

const { data: recentPosts } = await useAsyncData('recent-posts', () => {
  return queryCollection('content')
    .order('date', 'DESC')
    .limit(4)
    .all()
})


const ytVideos = [
  { id: '1', title: 'The Future of Web Design in 2026', thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Why I Switched to Nuxt 4', thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Nuxt Content v3 Deep Dive', thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800' }
]

const socialPosts = [
  { id: '1', platform: 'Instagram', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', likes: '1.2k' },
  { id: '2', platform: 'Twitter', image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800', likes: '850' },
  { id: '3', platform: 'Facebook', image: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=80&w=800', likes: '2.4k' }
]

const githubProjects = [
  { name: 'Arnob-Blog', description: 'A premium blog starter with Nuxt 4 and Tailwind CSS.', stars: 124, lang: 'Vue' },
  { name: 'Nuxt-Magic-UI', description: 'A collection of high-end UI components for Nuxt users.', stars: 89, lang: 'TypeScript' },
  { name: 'AI-Art-Generator', description: 'Generating aesthetic masterpieces using modern AI hooks.', stars: 312, lang: 'Python' },
  { name: 'Tailwind-Glass', description: 'Utility classes for glassmorphism effects.', stars: 67, lang: 'CSS' }
]
</script>

<template>
  <div class="space-y-32 pb-32">

    <section class="relative pt-32 pb-20 px-6 overflow-hidden">

      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,0,127,0.15)_0%,transparent_100%)]"></div>
      
      <div class="max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-candy-pink/10 text-candy-pink text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in border border-candy-pink/20">
          <span class="relative flex h-2 w-2 mr-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-candy-glow opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-candy-pink"></span>
          </span>
          Exploring the Digital Frontier
        </div>
        
        <h1 class="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto">
          Design. Code. <br />
          <span class="bg-gradient-to-r from-candy-pink via-candy-glow to-gold-warm bg-clip-text text-transparent">Create the Future.</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-pink-100/70 max-w-3xl mx-auto leading-relaxed mb-12">
          Documenting my journey through the intersection of aesthetic digital art and cutting-edge software engineering.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <NuxtLink to="/blog" class="px-10 py-5 bg-candy-pink text-white rounded-full text-lg font-black hover:bg-candy-glow hover:shadow-[0_20px_40px_-10px_rgba(255,0,127,0.4)] transition-all transform hover:-translate-y-1">
            Read My Stories
          </NuxtLink>
          <NuxtLink to="/javascript" class="px-10 py-5 bg-warm-gray border-2 border-warm-accent text-white rounded-full text-lg font-black hover:bg-warm-brown hover:border-candy-pink/30 transition-all transition-transform hover:-translate-y-1">
            Explore JavaScript
          </NuxtLink>
        </div>
      </div>
    </section>


    <section class="max-w-7xl mx-auto px-6">
      <div class="flex items-end justify-between mb-12">
        <div>
          <h2 class="text-4xl font-black text-white mb-4">Latest Insights</h2>
          <p class="text-pink-100/50 text-lg">Freshly baked thoughts from the blog.</p>
        </div>
        <NuxtLink to="/blog" class="text-candy-pink font-bold hover:underline hidden sm:block">View all posts →</NuxtLink>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <NuxtLink v-for="post in recentPosts" :key="post.path" :to="post.path" class="group bg-warm-gray rounded-3xl overflow-hidden border border-warm-accent transition-all hover:shadow-2xl hover:border-candy-pink/30 hover:-translate-y-2">
          <div class="relative overflow-hidden aspect-[4/3]">
            <img :src="post.image" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-warm-dark/60 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-black text-white mb-2 line-clamp-2 group-hover:text-candy-pink transition-colors">{{ post.title }}</h3>
            <p class="text-gray-500 text-sm font-bold uppercase tracking-widest">{{ post.date }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>


    <section class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

      <div>
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-12 h-12 bg-red-700 rounded-md flex items-center justify-center text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-white">Official Channel</h2>
            <p class="text-pink-100/50 font-medium">New videos every Friday.</p>
          </div>
        </div>
        
        <div class="space-y-6">
          <div v-for="video in ytVideos" :key="video.id" class="group relative flex gap-6 p-4 rounded-3xl hover:bg-warm-gray transition-colors border border-transparent hover:border-warm-accent">
            <div class="relative w-40 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img :src="video.thumbnail" class="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div class="absolute inset-0 bg-candy-pink/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <h3 class="text-lg font-bold text-white mb-1 group-hover:text-candy-pink transition-colors">{{ video.title }}</h3>
              <p class="text-pink-100/30 text-sm font-bold uppercase">Watch Now</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-12 h-12 bg-gradient-to-tr from-gold-warm via-candy-pink to-candy-glow rounded-2xl flex items-center justify-center text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-white">Life on Instagram</h2>
            <p class="text-pink-100/50 font-medium">@arnob_creates</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="post in socialPosts" :key="post.id" class="group relative aspect-square rounded-3xl overflow-hidden shadow-sm border border-warm-accent">
            <img :src="post.image" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125" />
            <div class="absolute inset-0 bg-candy-pink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white space-x-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span class="font-black text-xl">{{ post.likes }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-white mb-6">Open Source Projects</h2>
        <p class="text-pink-100/50 text-xl max-w-2xl mx-auto italic">Building tools for the future developer.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a v-for="repo in githubProjects" :key="repo.name" href="#" class="group p-8 bg-warm-gray rounded-[2.5rem] border border-transparent hover:border-candy-pink/30 hover:bg-warm-brown transition-all duration-300 hover:shadow-2xl">
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 bg-warm-dark rounded-2xl flex items-center justify-center text-candy-pink shadow-sm border border-warm-accent">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <div class="flex items-center space-x-1.5 text-gold-warm font-bold text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span>{{ repo.stars }}</span>
            </div>
          </div>
          <h3 class="text-xl font-black text-white mb-3 group-hover:text-candy-pink">{{ repo.name }}</h3>
          <p class="text-pink-100/50 text-sm leading-relaxed mb-6">{{ repo.description }}</p>
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full" :class="repo.lang === 'Vue' ? 'bg-candy-pink' : 'bg-gold-warm'"></span>
            <span class="text-xs font-bold text-pink-100/30 uppercase tracking-widest">{{ repo.lang }}</span>
          </div>
        </a>
      </div>
    </section>


    <section class="max-w-5xl mx-auto px-6 py-20 bg-candy-pink/5 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl border border-candy-pink/10 backdrop-blur-sm">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-gold-warm/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
      
      <h2 class="text-4xl md:text-5xl font-black mb-6 relative z-10">Have a project in mind?</h2>
      <p class="text-xl text-pink-50 mb-10 max-w-xl mx-auto relative z-10">Whether you need a full-scale web app or just want to chat about art, my inbox is always open.</p>
      <NuxtLink to="/" class="inline-flex px-12 py-5 bg-white text-candy-pink rounded-full text-xl font-black hover:bg-pink-50 transition-all transform hover:-translate-y-1 relative z-10 shadow-xl">
        Let's Get Started
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
