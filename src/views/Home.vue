<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-coral-400 via-coral-500 to-coral-600 text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 text-8xl">🎉</div>
        <div class="absolute top-20 right-20 text-7xl">🎈</div>
        <div class="absolute bottom-10 left-1/4 text-6xl">🎯</div>
        <div class="absolute bottom-20 right-1/4 text-7xl">🎪</div>
        <div class="absolute top-1/2 left-1/2 text-9xl opacity-50">⭐</div>
      </div>
      <div class="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 text-sm mb-6">
            <span class="w-2 h-2 bg-sunny-300 rounded-full animate-pulse"></span>
            已有 127 位小伙伴加入我们
          </div>
          <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6">
            找到你的
            <span class="relative">
              下一次
              <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M5 5 Q100 12 195 5" stroke="#FFE825" stroke-width="6" stroke-linecap="round" fill="none"/>
              </svg>
            </span>
            <br/>精彩聚会
          </h1>
          <p class="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            户外露营、水上狂欢、桌游之夜、城市探索……<br/>
            不管你喜欢什么，这里总有一群志同道合的朋友在等你。
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/events" class="btn bg-sunny-400 text-gray-900 font-bold py-3.5 px-8 rounded-2xl hover:bg-sunny-300 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 no-underline">
              探索活动 🔍
            </router-link>
            <router-link to="/about" class="btn bg-white/20 backdrop-blur text-white font-bold py-3.5 px-8 rounded-2xl hover:bg-white/30 transition-all inline-flex items-center justify-center gap-2 no-underline border border-white/30">
              了解更多 👋
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
          <div class="text-3xl mb-1">🎯</div>
          <div class="text-2xl font-black text-coral-500">50+</div>
          <div class="text-sm text-gray-500">精彩活动</div>
        </div>
        <div class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
          <div class="text-3xl mb-1">👥</div>
          <div class="text-2xl font-black text-mint-500">127</div>
          <div class="text-sm text-gray-500">活跃成员</div>
        </div>
        <div class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
          <div class="text-3xl mb-1">⭐</div>
          <div class="text-2xl font-black text-sunny-500">4.9</div>
          <div class="text-sm text-gray-500">活动评分</div>
        </div>
        <div class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
          <div class="text-3xl mb-1">📍</div>
          <div class="text-2xl font-black text-coral-400">15+</div>
          <div class="text-sm text-gray-500">覆盖城市</div>
        </div>
      </div>
    </section>

    <!-- Featured Events -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="section-title">
        🔥 近期热门活动
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard v-for="event in featuredEvents" :key="event.id" :event="event" />
      </div>
      <div class="text-center mt-10">
        <router-link to="/events" class="btn-mint inline-flex items-center gap-2 no-underline">
          查看全部活动 →
        </router-link>
      </div>
    </section>

    <!-- Categories -->
    <section class="bg-white py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="section-title">🎪 活动类型</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="cat in categories" :key="cat.name"
            class="flex flex-col items-center p-6 rounded-2xl bg-gray-50 hover:bg-coral-50 transition-colors cursor-pointer group">
            <span class="text-4xl mb-3 group-hover:scale-125 transition-transform">{{ cat.emoji }}</span>
            <span class="font-bold text-sm text-gray-700 group-hover:text-coral-600">{{ cat.name }}</span>
            <span class="text-xs text-gray-400 mt-1">{{ cat.count }}个活动</span>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="section-title">🚀 如何参与</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="(step, i) in steps" :key="i" class="text-center">
          <div class="relative w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
            :class="step.bg">
            <span class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white bg-coral-500 shadow">{{ i+1 }}</span>
          </div>
          <h3 class="font-black text-lg mb-2">{{ step.title }}</h3>
          <p class="text-sm text-gray-500">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-mint-400 to-mint-500 text-white py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-black mb-4">准备好加入了吗？ 🎉</h2>
        <p class="text-white/80 mb-8 text-lg">别再一个人宅在家了，找到你的组织！</p>
        <router-link to="/events" class="inline-flex items-center gap-2 no-underline bg-white text-mint-600 font-bold py-3.5 px-10 rounded-2xl hover:bg-gray-50 transition-all transform hover:scale-105">
          查看最新活动 →
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { events } from '../data/events.js'
import EventCard from '../components/EventCard.vue'

const featuredEvents = events.slice(0, 3)

const categories = [
  { emoji: '🏕️', name: '户外探险', count: 12 },
  { emoji: '🎲', name: '桌游聚会', count: 8 },
  { emoji: '🏃', name: '运动健身', count: 10 },
  { emoji: '🧁', name: '手工DIY', count: 6 },
  { emoji: '🎵', name: '音乐派对', count: 7 },
  { emoji: '🗺️', name: '城市探索', count: 9 },
]

const steps = [
  { title: '浏览活动', desc: '从各种精彩活动中找到你感兴趣的', bg: 'bg-coral-50' },
  { title: '在线报名', desc: '一键报名，简单快捷', bg: 'bg-mint-50' },
  { title: '按时参加', desc: '按时到达活动地点参与聚会', bg: 'bg-sunny-50' },
  { title: '分享快乐', desc: '结交新朋友，分享美好回忆', bg: 'bg-coral-50' },
]
</script>
