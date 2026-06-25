<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-r from-coral-400 to-coral-500 text-white py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-black mb-3">👋 关于我们</h1>
        <p class="text-white/80 text-lg">一群热爱生活的年轻人，让聚会更有趣</p>
      </div>
    </section>

    <!-- Mission -->
    <section class="max-w-4xl mx-auto px-6 py-16">
      <div class="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg text-center">
        <div class="text-6xl mb-6">🎯</div>
        <h2 class="text-2xl md:text-3xl font-black mb-4">我们的使命</h2>
        <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          在忙碌的城市生活中，很多人渴望社交却不知道从何开始。<strong>IvoryFun 象牙娱乐</strong> 致力于打造一个轻松、有趣、零门槛的聚会平台，
          让每个人都能找到志同道合的伙伴，一起探索生活的无限可能。
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="max-w-4xl mx-auto px-6 pb-16">
      <h2 class="section-title">💡 我们的理念</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl p-8 text-center border border-gray-100 card-hover">
          <div class="w-16 h-16 bg-coral-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🌟</div>
          <h3 class="font-black text-lg mb-2">有趣至上</h3>
          <p class="text-gray-500 text-sm">每一场活动都精心设计，确保好玩、有参与感</p>
        </div>
        <div class="bg-white rounded-2xl p-8 text-center border border-gray-100 card-hover">
          <div class="w-16 h-16 bg-mint-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🤝</div>
          <h3 class="font-black text-lg mb-2">真诚连接</h3>
          <p class="text-gray-500 text-sm">面对面交流，建立真实、深厚的社交关系</p>
        </div>
        <div class="bg-white rounded-2xl p-8 text-center border border-gray-100 card-hover">
          <div class="w-16 h-16 bg-sunny-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🛡️</div>
          <h3 class="font-black text-lg mb-2">安全放心</h3>
          <p class="text-gray-500 text-sm">所有活动购买保险，组织者经过筛选，让你玩得安心</p>
        </div>
      </div>
    </section>

    <!-- Events Map -->
    <section class="max-w-4xl mx-auto px-6 pb-16">
      <h2 class="section-title">🗺️ 活动地图</h2>
      <div class="bg-white rounded-2xl p-6 border border-gray-100">
        <EventMap :markers="mapMarkers" :interactive="true" :lat="36.67" :lng="117.0" title="" />
      </div>
      <p class="text-center text-sm text-gray-400 mt-3">我们在这些地方举办过活动，还在持续拓展中～</p>
    </section>

    <!-- Contact -->
    <section class="bg-white py-16">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="section-title">📬 联系我们</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-mint-50 rounded-2xl p-8 flex items-start gap-4">
            <span class="text-3xl">📧</span>
            <div>
              <h3 class="font-black mb-1">电子邮件</h3>
              <p class="text-gray-600">hello@ivoryfun.com</p>
              <p class="text-gray-400 text-sm mt-1">商务合作 / 活动建议 / 问题反馈</p>
            </div>
          </div>
          <div class="bg-coral-50 rounded-2xl p-8 flex items-start gap-4">
            <span class="text-3xl">💬</span>
            <div>
              <h3 class="font-black mb-1">微信</h3>
              <p class="text-gray-600">ivoryfun2026</p>
              <p class="text-gray-400 text-sm mt-1">活动咨询 / 加入社群</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { events } from '../data/events.js'
import EventMap from '../components/EventMap.vue'

const mapMarkers = events.map(e => ({
  lat: e.lat,
  lng: e.lng,
  title: e.title,
  date: e.date,
}))
</script>
