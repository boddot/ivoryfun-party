<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-black mb-3 flex items-center gap-2">
            <span>🐘</span> IvoryFun 象牙娱乐
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            让每一次相聚都变得有趣。我们专注于组织各种类型的聚会活动，从户外探险到室内桌游，总有一款适合你。
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-3 text-sm uppercase tracking-wider text-gray-300">快速导航</h4>
          <div class="flex flex-col gap-2">
            <router-link to="/" class="text-gray-400 hover:text-coral-400 text-sm transition-colors">首页</router-link>
            <router-link to="/events" class="text-gray-400 hover:text-coral-400 text-sm transition-colors">活动列表</router-link>
            <router-link to="/about" class="text-gray-400 hover:text-coral-400 text-sm transition-colors">关于我们</router-link>
          </div>
        </div>
        <div>
          <h4 class="font-bold mb-3 text-sm uppercase tracking-wider text-gray-300">联系方式</h4>
          <div class="text-gray-400 text-sm space-y-2">
            <p>📧 hello@ivoryfun.com</p>
            <p>📱 微信: ivoryfun2026</p>
            <p>📍 山东 · 济南</p>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
        &copy; 2026 IvoryFun 象牙娱乐 | 让相聚更美好
      </div>
    </div>
  </footer>
</template>
