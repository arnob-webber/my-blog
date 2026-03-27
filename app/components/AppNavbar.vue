<script setup lang="ts">
const isMenuOpen = ref(false)
const isJSOpen = ref(false)


watch(isMenuOpen, (val) => {
  if (val) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})


watch(isMenuOpen, (val) => {
  if (!val) isJSOpen.value = false
})

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Tech', path: '/tech' },
  { name: 'Design', path: '/design' },
  { name: 'About', path: '/' },
]

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Remix', 'Astro']
</script>

<template>
  <nav class="sticky top-0 z-50 bg-warm-dark/80 backdrop-blur-md border-b border-warm-accent">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-2xl font-black bg-gradient-to-r from-candy-pink to-gold-warm bg-clip-text text-transparent hover:opacity-80 transition">
            ARNOB
          </NuxtLink>
        </div>

        
        <div class="hidden md:flex space-x-8 items-center">
          <NuxtLink v-for="link in navLinks.slice(0, 4)" :key="link.name" :to="link.path" class="text-gray-400 hover:text-candy-pink font-medium transition duration-200">
            {{ link.name }}
          </NuxtLink>
          
          
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-400 hover:text-candy-pink font-medium transition duration-200 py-4 focus:outline-none">
              <span>JavaScript</span>
              <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            
            <div class="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
              <div class="bg-warm-gray/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-warm-accent p-2 transform origin-top scale-95 group-hover:scale-100 transition-transform duration-300">
                <div class="grid grid-cols-1 divide-y divide-warm-accent">
                  <div class="p-2 grid grid-cols-2 gap-1">
                    <NuxtLink v-for="fw in frameworks" 
                      :key="fw" 
                      to="/javascript" 
                      class="px-3 py-2 text-sm text-gray-400 hover:text-candy-pink hover:bg-candy-pink/10 rounded-xl transition-all duration-200 font-medium"
                    >
                      {{ fw }}
                    </NuxtLink>
                  </div>
                </div>
                
                <div class="mt-1 p-2 border-t border-warm-accent">
                  <NuxtLink to="./javascript" class="flex items-center justify-between px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-candy-pink transition-colors">
                    Explore All
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <NuxtLink v-if="navLinks[4]" :to="navLinks[4].path" class="text-gray-400 hover:text-candy-pink font-medium transition duration-200">{{ navLinks[4].name }}</NuxtLink>
          <NuxtLink 
            to="/" 
            class="bg-candy-pink text-white px-5 py-2 rounded-full font-semibold hover:bg-candy-glow hover:shadow-[0_10px_20px_-5px_rgba(255,0,127,0.4)] transition duration-300 transform hover:-translate-y-0.5"
          >
            Contact
          </NuxtLink>
        </div>

        
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-400 hover:text-candy-pink focus:outline-none transition-colors p-2">
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-warm-dark/95 backdrop-blur-xl border-b border-warm-accent overflow-hidden">
        <div class="px-4 pt-2 pb-8 space-y-1">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.name" 
            :to="link.path"
            @click="isMenuOpen = false"
            class="block px-4 py-3 text-lg font-bold text-gray-300 hover:text-candy-pink hover:bg-candy-pink/10 rounded-2xl transition-all"
          >
            {{ link.name }}
          </NuxtLink>
          
          <div class="pt-2 pb-2">
            <button 
              @click="isJSOpen = !isJSOpen"
              class="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-gray-300 hover:text-candy-pink hover:bg-candy-pink/10 rounded-2xl transition-all"
            >
              <span>JavaScript</span>
              <svg 
                class="w-5 h-5 transition-transform duration-200" 
                :class="{ 'rotate-180': isJSOpen }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="isJSOpen" class="px-4 pt-2">
                <div class="grid grid-cols-2 gap-2">
                  <NuxtLink 
                    v-for="fw in frameworks" 
                    :key="fw" 
                    to="/javascript"
                    @click="isMenuOpen = false"
                    class="px-4 py-2 text-sm text-gray-400 hover:text-candy-pink hover:bg-candy-pink/10 rounded-xl transition-all font-medium border border-warm-accent"
                  >
                    {{ fw }}
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>

          <div class="pt-6 px-4">
            <NuxtLink 
              to="/" 
              @click="isMenuOpen = false"
              class="block w-full text-center bg-candy-pink text-white py-4 rounded-2xl font-black shadow-lg shadow-candy-pink/20"
            >
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active:not(.bg-candy-pink) {
  @apply text-candy-pink font-bold;
}
</style>
