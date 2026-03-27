<template>
  <div class="min-h-screen bg-warm-dark text-pink-50 selection:bg-candy-glow/30">
    <AppNavbar />
    <main class="py-10">
      <NuxtPage />
    </main>
    <footer class="border-t border-warm-accent py-10 text-center text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} <span class="text-candy-pink font-bold">Arnob</span>. All rights reserved.
    </footer>
  </div>
</template>