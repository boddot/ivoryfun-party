<template>
  <nav class="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-coral-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="flex items-center gap-2 text-2xl font-bold no-underline">
          <span class="text-3xl">🐘</span>
          <span class="bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent font-black">象牙娱乐</span>
        </router-link>
        <div class="hidden md:flex items-center gap-1">
          <router-link to="/" class="nav-link" exact-active-class="nav-active">首页</router-link>
          <router-link to="/events" class="nav-link" active-class="nav-active">活动列表</router-link>
          <router-link to="/about" class="nav-link" active-class="nav-active">关于我们</router-link>
          <router-link to="/events" class="ml-4 btn-coral text-sm py-2 px-5 !rounded-xl">
            立即报名 ✨
          </router-link>
        </div>
        <button @click="open = !open" class="md:hidden p-2 text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="open" class="md:hidden bg-white border-t border-coral-100 px-4 py-3 flex flex-col gap-2">
      <router-link @click="open=false" to="/" class="nav-link-mobile" exact-active-class="nav-active-mobile">🎯 首页</router-link>
      <router-link @click="open=false" to="/events" class="nav-link-mobile" active-class="nav-active-mobile">📋 活动列表</router-link>
      <router-link @click="open=false" to="/about" class="nav-link-mobile" active-class="nav-active-mobile">👥 关于我们</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.nav-link {
  @apply px-4 py-2 rounded-xl text-gray-600 font-medium text-sm hover:bg-coral-50 hover:text-coral-600 transition-all;
}
.nav-active {
  @apply bg-coral-50 text-coral-600 font-bold;
}
.nav-link-mobile {
  @apply block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-coral-50 transition-all;
}
.nav-active-mobile {
  @apply bg-coral-50 text-coral-600 font-bold;
}
</style>
