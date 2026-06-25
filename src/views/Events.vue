<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-coral-400 to-coral-500 text-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-4xl font-black mb-3">📋 全部活动</h1>
        <p class="text-white/80 text-lg">找到你感兴趣的活动，立即报名参加吧！</p>
      </div>
    </section>

    <!-- Filters -->
    <section class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-5 py-2 rounded-xl font-bold text-sm transition-all"
          :class="activeCategory === cat
            ? 'bg-coral-500 text-white shadow-lg shadow-coral-200'
            : 'bg-white text-gray-600 hover:bg-coral-50 border border-gray-200'"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Event Grid -->
    <section class="max-w-6xl mx-auto px-6 pb-20">
      <div v-if="filteredEvents.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <p class="text-gray-400 text-lg">暂无该类型的活动，换个类型试试吧～</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { events } from '../data/events.js'
import EventCard from '../components/EventCard.vue'

const activeCategory = ref('全部')
const categories = ['全部', '户外', '运动', '聚会', '手工', '游戏']

const filteredEvents = computed(() => {
  if (activeCategory.value === '全部') return events
  return events.filter(e => e.category === activeCategory.value)
})
</script>
