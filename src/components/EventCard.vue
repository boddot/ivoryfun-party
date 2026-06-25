<template>
  <router-link :to="`/events/${event.id}`" class="block group no-underline">
    <div class="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
      <div class="relative h-48 overflow-hidden">
        <img :src="event.image" :alt="event.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute top-3 left-3">
          <span class="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-700">
            {{ event.emoji }} {{ event.category }}
          </span>
        </div>
        <div class="absolute top-3 right-3">
          <span class="bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {{ event.price }}
          </span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="font-black text-lg mb-2 text-gray-800 group-hover:text-coral-500 transition-colors line-clamp-1">
          {{ event.title }}
        </h3>
        <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span class="flex items-center gap-1">📅 {{ formatDate(event.date) }}</span>
          <span class="flex items-center gap-1">📍 {{ shortLocation(event.location) }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex -space-x-2">
            <div v-for="i in Math.min(event.signed, 3)" :key="i"
              class="w-7 h-7 rounded-full border-2 border-white"
              :class="avatarColors[i-1]"
            ></div>
          </div>
          <span class="text-xs font-bold" :class="spotsLeft(event) <= 5 ? 'text-red-500' : 'text-mint-600'">
            {{ spotsLeft(event) }} 个名额剩余
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({ event: Object })
const avatarColors = ['bg-coral-300', 'bg-mint-300', 'bg-sunny-300']

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getMonth()+1}月${d.getDate()}日`
}
function shortLocation(loc) {
  return loc.split('·')[0] || loc.substring(0, 8)
}
function spotsLeft(e) {
  return e.maxPeople - e.signed
}
</script>
