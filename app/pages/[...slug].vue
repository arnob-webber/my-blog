<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const scrollProgress = ref(0)
const blogUrl = ref('')

onMounted(() => {
  blogUrl.value = window.location.href
  window.addEventListener('scroll', updateScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})

const updateScrollProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

const isBangla = computed(() => {
  if (!page.value?.title) return false
  const banglaRegex = /[\u0980-\u09FF]/
  return banglaRegex.test(page.value.title)
})

const banglaFonts = ['SohidOsmanHadi', 'FNShaymolBangla', 'FNShyamolBanglaItalic'] as const
const banglaParaFonts = ['FNMahinNarailAM', 'FNMahinNarailPM'] as const

const selectedBanglaFont = ref<string>(banglaFonts[0])
const selectedBanglaContentFont = ref<string>(banglaFonts[0])
const selectedBanglaParaFont = ref<string>(banglaParaFonts[0])

onMounted(() => {
  if (page.value && isBangla.value) {
    
    const firstIndex = Math.floor(Math.random() * banglaFonts.length)
    selectedBanglaFont.value = banglaFonts[firstIndex] ?? banglaFonts[0]
    
    
    let secondIndex = Math.floor(Math.random() * banglaFonts.length)
    if (banglaFonts.length > 1) {
      while (secondIndex === firstIndex) {
        secondIndex = Math.floor(Math.random() * banglaFonts.length)
      }
    }
    selectedBanglaContentFont.value = banglaFonts[secondIndex] ?? banglaFonts[0]

    
    selectedBanglaParaFont.value = banglaParaFonts[Math.floor(Math.random() * banglaParaFonts.length)] ?? banglaParaFonts[0]
  }
  
  
  setTimeout(enhanceCodeBlocks, 500)
})

const enhanceCodeBlocks = () => {
  const preBlocks = document.querySelectorAll('.prose pre')
  preBlocks.forEach((pre) => {
    if (pre.querySelector('.code-header')) return
    
    
    const header = document.createElement('div')
    header.className = 'code-header absolute top-0 left-0 w-full h-10 flex items-center justify-between px-6 pointer-events-none'
    
    
    const lang = pre.querySelector('code')?.getAttribute('class')?.replace('language-', '') || 'code'
    const badge = document.createElement('span')
    badge.className = 'text-[10px] font-black uppercase tracking-[2px] opacity-40'
    badge.innerText = lang
    
    
    const copyBtn = document.createElement('button')
    copyBtn.className = 'copy-btn pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0'
    copyBtn.innerHTML = `<svg class="w-4 h-4 text-pink-100/50 hover:text-candy-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>`
    copyBtn.onclick = () => {
      const code = pre.querySelector('code')?.innerText || ''
      navigator.clipboard.writeText(code)
      copyBtn.innerHTML = `<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`
      setTimeout(() => {
        copyBtn.innerHTML = `<svg class="w-4 h-4 text-pink-100/50 hover:text-candy-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>`
      }, 2000)
    }
    
    header.appendChild(badge)
    header.appendChild(copyBtn)
    pre.appendChild(header)
    pre.classList.add('group')
  })
}

const headerFont = computed(() => {
  if (isBangla.value) {
    return selectedBanglaFont.value || banglaFonts[0]
  }
  return "'Iosevka Charon Mono', monospace"
})

const contentHeaderFont = computed(() => {
  if (isBangla.value) {
    return selectedBanglaContentFont.value || banglaFonts[0]
  }
  return "'Iosevka Charon Mono', monospace"
})

const paraFont = computed(() => {
  if (isBangla.value) {
    return selectedBanglaParaFont.value || banglaParaFonts[0]
  }
  return 'inherit'
})
</script>

<template>
  <main class="min-h-screen bg-warm-dark">
    
    <div class="fixed top-0 left-0 w-full h-1.5 z-[60] bg-warm-accent">
      <div 
        class="h-full bg-gradient-to-r from-candy-pink to-gold-warm transition-all duration-150 ease-out"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    
    <div class="sticky top-16 z-30 bg-warm-dark/80 backdrop-blur-lg border-b border-warm-accent py-4 px-6 md:px-12 flex justify-between items-center transition-all">
      <NuxtLink to="/blog" class="group flex items-center text-sm font-bold text-pink-100/50 hover:text-candy-pink transition-colors">
        <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Stories
      </NuxtLink>
      
      <div class="hidden md:block" v-if="page">
        <ShareButtons :title="page.title" :url="blogUrl" />
      </div>
    </div>

    <div class="max-w-4xl mx-auto py-16 px-6 md:px-12 text-pink-50">
      <div v-if="page">
        <header class="mb-16">
          <div v-if="page.category" class="mb-6">
            <span class="px-4 py-1.5 rounded-full bg-candy-pink/10 text-xs font-bold text-candy-pink uppercase tracking-widest border border-candy-pink/20">
              {{ page.category }}
            </span>
          </div>
          
          <h1 
            class="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight"
            :style="{ fontFamily: headerFont }"
          >
            {{ page.title }}
          </h1>
          
          <p class="text-xl md:text-2xl text-pink-100/50 leading-relaxed mb-12 font-medium italic border-l-4 border-warm-accent pl-8">
            {{ page.description }}
          </p>
          
          <div class="flex items-center space-x-4 mb-12 p-1 border-b border-warm-accent pb-8">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-candy-pink to-gold-warm flex items-center justify-center text-white font-bold text-xl shadow-lg">
              A
            </div>
            <div>
              <div class="font-bold text-white leading-none mb-1">Arnob</div>
              <div class="text-sm text-pink-100/30 font-medium">{{ page.date }}</div>
            </div>
          </div>

          <div class="relative group rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01] border border-warm-accent">
            <img v-if="page.image" :src="page.image" class="w-full h-auto object-cover" />
            <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
          </div>
        </header>

        <article class="prose prose-pink prose-invert prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white prose-p:text-pink-100/70 prose-li:text-pink-100/70 prose-marker:text-candy-pink prose-p:leading-relaxed prose-blockquote:border-candy-pink prose-blockquote:bg-candy-pink/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-a:text-candy-pink hover:prose-a:text-candy-glow prose-strong:text-white">
          <ContentRenderer :value="page" />
        </article>

        
        <div class="mt-24 pt-12 border-t border-warm-accent flex flex-col items-center space-y-6">
          <p class="text-pink-100/30 font-bold uppercase tracking-widest text-sm text-center">Loved this story? Share it with the world</p>
          <ShareButtons :title="page.title" :url="blogUrl" />
        </div>
      </div>

      <div v-else class="text-center py-32 bg-warm-gray rounded-[3rem] border border-warm-accent">
        <h1 class="text-3xl font-black text-white mb-6">Story not found</h1>
        <p class="text-pink-100/50 mb-8 max-w-sm mx-auto">We couldn't find the story you're looking for. It might have been moved or removed.</p>
        <NuxtLink to="/blog" class="inline-flex items-center px-8 py-4 bg-candy-pink text-white font-bold rounded-full hover:bg-candy-glow transition-all shadow-lg hover:shadow-candy-pink/30">
          Go back to the blog
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="postcss">
.prose {
  @apply max-w-none;
}
.prose h1 {
  font-family: v-bind(contentHeaderFont);
}
.prose h2 {
  @apply mt-16 mb-8 text-3xl font-black text-white;
}
.prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  font-family: v-bind(headerFont);
}
.prose p {
  @apply mb-8 text-lg md:text-xl text-pink-100/70 leading-relaxed;
  font-family: v-bind(paraFont);
}
.prose img {
  @apply rounded-3xl shadow-xl my-12 transition-transform duration-500 hover:scale-[1.02] border border-warm-accent;
}


.prose pre {
  @apply relative pt-14 pb-6 px-6 rounded-[2rem] overflow-hidden border border-warm-accent/50 bg-warm-dark/30 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:shadow-candy-pink/5 hover:border-candy-pink/20;
}

.prose pre::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-candy-pink/10 via-gold-warm/5 to-transparent border-b border-white/5;
  z-index: 1;
}

.prose pre::after {
  content: '● ● ●';
  @apply absolute top-2.5 left-8 text-[10px] tracking-[4px] font-black;
  background: linear-gradient(to right, #ff5f56, #ffbd2e, #27c93f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
  z-index: 2;
}

.prose code {
  @apply relative z-0 text-pink-100/90 font-mono text-sm md:text-base;
}

.prose .code-header {
  z-index: 3;
}

.prose :not(pre) > code {
  @apply bg-candy-pink/10 text-candy-pink px-2 py-0.5 rounded-lg border border-candy-pink/20 font-bold;
}


.prose pre::-webkit-scrollbar {
  height: 8px;
}
.prose pre::-webkit-scrollbar-track {
  @apply bg-transparent;
}
.prose pre::-webkit-scrollbar-thumb {
  @apply bg-warm-accent/50 rounded-full hover:bg-candy-pink/30 transition-colors;
}


.prose pre code .line .shiki-token {
  filter: saturate(2) contrast(1.1) brightness(1.1);
}


.prose pre code .line span {
  transition: all 0.3s ease;
}

.prose pre code .line span:hover {
  filter: brightness(1.5) saturate(2.5);
  text-shadow: 0 0 12px currentColor;
}


.prose pre code .line span[style*="color:#bb9af7"], .prose pre code .line span[style*="color:#BB9AF7"] { color: #d0b0ff !important; text-shadow: 0 0 5px #d0b0ff33; }
.prose pre code .line span[style*="color:#9ece6a"], .prose pre code .line span[style*="color:#9ECE6A"] { color: #b0ff80 !important; text-shadow: 0 0 5px #b0ff8033; }
.prose pre code .line span[style*="color:#7aa2f7"], .prose pre code .line span[style*="color:#7AA2F7"] { color: #80b0ff !important; text-shadow: 0 0 5px #80b0ff33; }
.prose pre code .line span[style*="color:#e0af68"], .prose pre code .line span[style*="color:#E0AF68"] { color: #ffcc66 !important; text-shadow: 0 0 5px #ffcc6633; }
.prose pre code .line span[style*="color:#f7768e"], .prose pre code .line span[style*="color:#F7768E"] { color: #ff80a0 !important; text-shadow: 0 0 5px #ff80a033; }
.prose pre code .line span[style*="color:#7dcfff"], .prose pre code .line span[style*="color:#7DCFFF"] { color: #a0e0ff !important; text-shadow: 0 0 5px #a0e0ff33; }

.prose pre code .line .shiki-token[style*="color: #abb2bf"] { /* General text fallback */
  color: #e0e6f0 !important;
}
.prose pre code .line {
  @apply transition-opacity duration-300;
}

.prose pre:hover code .line:not(:hover) {
  opacity: 0.5;
}
</style>
