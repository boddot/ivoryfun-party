<template>
  <div v-if="event">
    <!-- Hero -->
    <section class="relative h-64 md:h-80 overflow-hidden">
      <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 max-w-6xl mx-auto">
        <div class="flex items-center gap-2 mb-2">
          <span class="bg-white/90 backdrop-blur text-sm font-bold px-3 py-1 rounded-full">{{ event.emoji }} {{ event.category }}</span>
          <span class="bg-coral-500 text-white text-sm font-bold px-3 py-1 rounded-full">{{ event.price }}</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-black text-white">{{ event.title }}</h1>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-6xl mx-auto px-6 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 class="text-xl font-black mb-4">📝 活动介绍</h2>
            <p class="text-gray-600 leading-relaxed">{{ event.description }}</p>
          </div>

          <!-- Schedule -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 class="text-xl font-black mb-4">⏰ 活动流程</h2>
            <div class="space-y-0">
              <div v-for="(item, i) in event.schedule" :key="i"
                class="flex items-start gap-4 pb-4 relative">
                <div class="flex flex-col items-center">
                  <div class="w-3 h-3 rounded-full bg-coral-500 mt-1.5"></div>
                  <div v-if="i < event.schedule.length - 1" class="w-0.5 h-full bg-coral-200 absolute top-5"></div>
                </div>
                <div>
                  <span class="text-sm font-bold text-coral-500">{{ item.time }}</span>
                  <p class="text-gray-700">{{ item.activity }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 class="text-xl font-black mb-4">📍 活动地点</h2>
            <p class="text-gray-500 text-sm mb-4">{{ event.location }}</p>
            <EventMap :lat="event.lat" :lng="event.lng" :title="event.title" />
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Info Card -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
            <h3 class="font-black text-lg mb-4">📋 活动信息</h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-3">
                <span class="text-xl">📅</span>
                <div>
                  <p class="font-bold">{{ formatDate(event.date) }}</p>
                  <p class="text-gray-400">{{ formatTime(event.date) }} - {{ formatTime(event.endDate) }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xl">📍</span>
                <div>
                  <p class="font-bold text-gray-700">{{ event.location }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xl">👥</span>
                <div>
                  <p class="font-bold">{{ event.signed }} / {{ event.maxPeople }} 人已报名</p>
                  <div class="w-full h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500"
                      :class="progress >= 80 ? 'bg-red-400' : 'bg-mint-400'"
                      :style="{ width: progress + '%' }"></div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xl">💵</span>
                <div>
                  <p class="font-bold text-coral-500">{{ event.price }}</p>
                </div>
              </div>
            </div>

            <!-- Highlights -->
            <div class="mt-6 pt-6 border-t border-gray-100">
              <h4 class="font-bold mb-3">✨ 活动亮点</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="h in event.highlights" :key="h"
                  class="bg-coral-50 text-coral-600 text-xs font-bold px-3 py-1.5 rounded-full">
                  {{ h }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <router-link :to="`/register/${event.id}`"
              class="btn-coral w-full text-center mt-6 !rounded-2xl text-lg no-underline inline-block">
              立即报名 🎉
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center py-32">
    <div class="text-6xl mb-4">🤷</div>
    <p class="text-gray-400 text-lg">活动不存在</p>
    <router-link to="/events" class="btn-coral inline-flex mt-6 no-underline">返回活动列表</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '../data/events.js'
import EventMap from '../components/EventMap.vue'

const route = useRoute()
const event = computed(() => events.find(e => e.id === Number(route.params.id)))
const progress = computed(() => event.value ? Math.round(event.value.signed / event.value.maxPeople * 100) : 0)

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${weekdays[d.getDay()]}`
}
function formatTime(dateStr) {
  const d = new Date(dateStr)
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
}
</script>
