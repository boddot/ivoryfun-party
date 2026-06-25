<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-r from-mint-400 to-mint-500 text-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-4xl font-black mb-3">✍️ 活动报名</h1>
        <p v-if="event" class="text-white/80 text-lg">
          报名参加：{{ event.title }}
        </p>
      </div>
    </section>

    <section class="max-w-3xl mx-auto px-6 py-12">
      <div v-if="event" class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
        <!-- Event Summary -->
        <div class="flex items-start gap-4 p-4 bg-mint-50 rounded-2xl mb-8">
          <span class="text-3xl">{{ event.emoji }}</span>
          <div>
            <h3 class="font-black text-lg text-gray-800">{{ event.title }}</h3>
            <div class="flex flex-wrap gap-3 text-sm text-gray-500 mt-1">
              <span>📅 {{ formatDate(event.date) }}</span>
              <span>📍 {{ event.location }}</span>
              <span>💵 {{ event.price }}</span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block font-bold text-sm mb-2 text-gray-700">
                姓名 <span class="text-red-400">*</span>
              </label>
              <input v-model="form.name" type="text" required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all"
                placeholder="请输入你的姓名" />
            </div>
            <div>
              <label class="block font-bold text-sm mb-2 text-gray-700">
                手机号 <span class="text-red-400">*</span>
              </label>
              <input v-model="form.phone" type="tel" required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all"
                placeholder="请输入手机号码" />
            </div>
          </div>

          <div>
            <label class="block font-bold text-sm mb-2 text-gray-700">
              微信号
            </label>
            <input v-model="form.wechat" type="text"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all"
              placeholder="方便活动前拉群通知" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block font-bold text-sm mb-2 text-gray-700">
                参与人数 <span class="text-red-400">*</span>
              </label>
              <select v-model="form.people" required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all cursor-pointer">
                <option value="">请选择</option>
                <option v-for="n in maxSelectable" :key="n" :value="n">{{ n }}人</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-sm mb-2 text-gray-700">
                性别
              </label>
              <div class="flex gap-3">
                <label v-for="g in ['男', '女']" :key="g"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all"
                  :class="form.gender === g ? 'border-coral-400 bg-coral-50 text-coral-600' : 'border-gray-200 hover:bg-gray-50'">
                  <input type="radio" v-model="form.gender" :value="g" class="sr-only" />
                  {{ g === '男' ? '👦' : '👧' }} {{ g }}
                </label>
              </div>
            </div>
          </div>

          <div>
            <label class="block font-bold text-sm mb-2 text-gray-700">
              备注留言
            </label>
            <textarea v-model="form.note" rows="3"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all resize-none"
              placeholder="有什么特殊需求可以告诉我们～（如饮食禁忌、拼车需求等）"></textarea>
          </div>

          <!-- Submitted -->
          <div v-if="submitted" class="bg-mint-50 border border-mint-200 rounded-2xl p-6 text-center">
            <div class="text-5xl mb-3">🎉</div>
            <h3 class="text-xl font-black text-mint-600 mb-2">报名成功！</h3>
            <p class="text-gray-600 text-sm">
              我们会在活动前通过微信/短信通知你具体安排。<br/>
              如有疑问，请联系微信：ivoryfun2026
            </p>
            <router-link to="/events" class="btn-mint inline-flex mt-4 no-underline text-sm">
              查看其他活动 →
            </router-link>
          </div>

          <button v-else type="submit"
            class="btn-coral w-full text-lg !rounded-2xl !py-4">
            确认报名 🎉
          </button>
        </form>
      </div>

      <div v-else class="text-center py-20">
        <div class="text-6xl mb-4">🤷</div>
        <p class="text-gray-400 text-lg">未找到该活动</p>
        <router-link to="/events" class="btn-coral inline-flex mt-6 no-underline">返回活动列表</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '../data/events.js'

const route = useRoute()
const event = computed(() => events.find(e => e.id === Number(route.params.id)))

const form = ref({ name: '', phone: '', wechat: '', people: '', gender: '男', note: '' })
const submitted = ref(false)

const maxSelectable = computed(() => {
  if (!event.value) return 3
  return Math.min(3, event.value.maxPeople - event.value.signed)
})

function submitForm() {
  submitted.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`
}
</script>
