<template>
  <div class="rounded-2xl overflow-hidden border-2 border-coral-100 shadow-lg map-wrapper">
    <div ref="mapContainer" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import L from 'leaflet'

const props = defineProps({
  lat: Number,
  lng: Number,
  title: String,
  markers: { type: Array, default: () => [] },
  interactive: { type: Boolean, default: true },
})

const mapContainer = ref(null)
let map = null

onMounted(() => {
  if (!mapContainer.value) return
  map = L.map(mapContainer.value, {
    center: [props.lat || 36.67, props.lng || 117.0],
    zoom: props.markers.length > 0 ? 10 : 14,
    zoomControl: true,
    scrollWheelZoom: props.interactive,
    dragging: props.interactive,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map)

  if (props.lat && props.lng) {
    L.marker([props.lat, props.lng])
      .addTo(map)
      .bindPopup(`<b>${props.title}</b>`)
      .openPopup()
  }

  if (props.markers.length > 0) {
    const group = []
    props.markers.forEach(m => {
      const marker = L.marker([m.lat, m.lng])
        .bindPopup(`<b>${m.title}</b><br/>${m.date}`)
        .addTo(map)
      group.push([m.lat, m.lng])
    })
    if (group.length > 1) {
      map.fitBounds(group, { padding: [40, 40] })
    }
  }

  // 修复手机端地图空白：延迟触发 invalidateSize
  setTimeout(() => {
    if (map) map.invalidateSize()
  }, 200)

  // 监听窗口尺寸变化（横竖屏切换等）
  window.addEventListener('resize', handleResize)
})

watch(() => [props.lat, props.lng], () => {
  if (map && props.lat && props.lng) {
    map.setView([props.lat, props.lng], 14)
    L.marker([props.lat, props.lng]).addTo(map).bindPopup(`<b>${props.title}</b>`)
  }
})

function handleResize() {
  if (map) map.invalidateSize()
}

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
.map-wrapper {
  height: 250px;
}
@media (min-width: 768px) {
  .map-wrapper {
    height: 350px;
  }
}
</style>
