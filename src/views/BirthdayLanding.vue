<template>
  <div class="birthday-landing" @click="handleBgClick">
    <!-- Floating particles -->
    <div class="particles">
      <span v-for="i in 30" :key="i" class="particle" :style="particleStyle(i)"></span>
    </div>

    <!-- Main content -->
    <div class="content">
      <!-- Logo -->
      <div class="logo-wrapper animate-float">
        <img src="/IvoryFun_Logo.png" alt="IvoryFun 象牙娱乐" class="logo-img" />
      </div>

      <!-- 18 -->
      <div class="age-number animate-pop">
        <span class="age-1">1</span>
        <span class="age-8">8</span>
      </div>

      <!-- Birthday message -->
      <div class="message animate-fade-up">
        <p class="main-msg">庆祝我家大宝贝</p>
        <p class="sub-msg">18岁生日快乐 🎂</p>
      </div>

      <div class="english-msg animate-fade-up-delay">
        Happy 18<sup>th</sup> Birthday
      </div>

      <!-- Enter button -->
      <div class="enter-section animate-fade-up-delay2">
        <button @click.stop="enterSite" class="enter-btn">
          <span class="btn-text">🎉 进入网站 🎉</span>
          <span class="btn-sparkle"></span>
        </button>
        <p class="hint">愿你前程似锦，未来可期 ✨</p>
      </div>
    </div>

    <!-- Balloons -->
    <div class="balloons">
      <div v-for="b in 6" :key="b" class="balloon" :style="balloonStyle(b)">
        <div class="balloon-body" :style="{ background: balloonColors[(b-1) % balloonColors.length] }"></div>
        <div class="balloon-knot"></div>
        <div class="balloon-string"></div>
      </div>
    </div>

    <!-- Confetti trigger area -->
    <div class="confetti-container" ref="confettiRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const confettiRef = ref(null)

const balloonColors = [
  '#FF6B3D', '#1EC97E', '#F5D600', '#FF4D8D', '#7C5CFC', '#00C9DB'
]

function particleStyle(i) {
  const left = Math.random() * 100
  const delay = Math.random() * 5
  const size = 4 + Math.random() * 8
  const duration = 3 + Math.random() * 4
  const opacity = 0.3 + Math.random() * 0.5
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}px`,
    height: `${size}px`,
    opacity,
  }
}

function balloonStyle(i) {
  const left = 10 + ((i - 1) * 15) + (Math.random() * 8 - 4)
  const delay = (i - 1) * 0.4
  const sway = 2 + Math.random() * 3
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    '--sway': `${sway}s`,
  }
}

function handleBgClick(e) {
  if (e.target === e.currentTarget) {
    spawnMiniConfetti(e.clientX, e.clientY)
  }
}

function spawnMiniConfetti(x, y) {
  if (!confettiRef.value) return
  const colors = ['#FF6B3D', '#F5D600', '#FF4D8D', '#1EC97E', '#7C5CFC', '#00C9DB', '#FF8552', '#FFF366']
  for (let i = 0; i < 12; i++) {
    const piece = document.createElement('span')
    piece.className = 'mini-confetti'
    piece.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --dx: ${(Math.random() - 0.5) * 200}px;
      --dy: ${-50 - Math.random() * 100}px;
      --rot: ${Math.random() * 720}deg;
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
    `
    confettiRef.value.appendChild(piece)
    setTimeout(() => piece.remove(), 1000)
  }
}

function enterSite() {
  // Fire big confetti burst
  if (confettiRef.value) {
    const colors = ['#FF6B3D', '#F5D600', '#FF4D8D', '#1EC97E', '#7C5CFC', '#00C9DB']
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('span')
      piece.className = 'burst-confetti'
      piece.style.cssText = `
        left: 50%;
        top: 50%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        --dx: ${(Math.random() - 0.5) * 600}px;
        --dy: ${-100 - Math.random() * 400}px;
        --rot: ${Math.random() * 1080}deg;
        width: ${8 + Math.random() * 10}px;
        height: ${8 + Math.random() * 14}px;
        animation-delay: ${Math.random() * 0.3}s;
      `
      confettiRef.value.appendChild(piece)
      setTimeout(() => piece.remove(), 1500)
    }
  }
  // Navigate after a short delay for the effect
  setTimeout(() => {
    router.push('/home')
  }, 400)
}

onMounted(() => {
  // Auto confetti on load
  setTimeout(() => {
    if (confettiRef.value) {
      const colors = ['#FF6B3D', '#F5D600', '#FF4D8D', '#1EC97E', '#7C5CFC']
      for (let i = 0; i < 30; i++) {
        const piece = document.createElement('span')
        piece.className = 'burst-confetti'
        piece.style.cssText = `
          left: 50%;
          top: 60%;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          --dx: ${(Math.random() - 0.5) * 500}px;
          --dy: ${-200 - Math.random() * 300}px;
          --rot: ${Math.random() * 720}deg;
          width: ${8 + Math.random() * 10}px;
          height: ${8 + Math.random() * 14}px;
          animation-delay: ${Math.random() * 0.5}s;
        `
        confettiRef.value.appendChild(piece)
        setTimeout(() => piece.remove(), 1500)
      }
    }
  }, 600)
})
</script>

<style scoped>
.birthday-landing {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #16213e 60%, #0f3460 100%);
  overflow: hidden;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Particles */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.particle {
  position: absolute;
  bottom: -10px;
  background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,107,61,0.3));
  border-radius: 50%;
  animation: floatUp linear infinite;
}
@keyframes floatUp {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-110vh) scale(0.3); opacity: 0; }
}

/* Content */
.content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 20px;
}

/* Logo */
.logo-wrapper {
  margin-bottom: 20px;
  display: inline-block;
}
.logo-img {
  width: 180px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(255,107,61,0.4));
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Age number */
.age-number {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 900;
  font-size: 140px;
  line-height: 1;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
.age-1 {
  background: linear-gradient(135deg, #FF6B3D, #FF4D8D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(255,77,141,0.5));
}
.age-8 {
  background: linear-gradient(135deg, #F5D600, #FF6B3D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(255,107,61,0.5));
}
@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.15); }
  80% { transform: scale(0.95); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-pop {
  animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Messages */
.message {
  margin-bottom: 8px;
}
.main-msg {
  font-size: 26px;
  font-weight: 700;
  color: #FFE0D0;
  margin: 0;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255,107,61,0.3);
}
.sub-msg {
  font-size: 32px;
  font-weight: 900;
  color: #FFF;
  margin: 6px 0 0;
  letter-spacing: 2px;
  text-shadow: 0 0 30px rgba(255,213,0,0.5);
}
.english-msg {
  font-size: 18px;
  color: rgba(255,255,255,0.6);
  letter-spacing: 4px;
  margin-bottom: 40px;
  font-style: italic;
}
.english-msg sup {
  font-size: 12px;
}

@keyframes fadeUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.animate-fade-up {
  animation: fadeUp 0.8s ease forwards 0.4s;
  opacity: 0;
}
.animate-fade-up-delay {
  animation: fadeUp 0.8s ease forwards 0.7s;
  opacity: 0;
}
.animate-fade-up-delay2 {
  animation: fadeUp 0.8s ease forwards 1.0s;
  opacity: 0;
}

/* Enter button */
.enter-section {
  margin-top: 8px;
}
.enter-btn {
  position: relative;
  background: linear-gradient(135deg, #FF6B3D, #FF4D8D);
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 20px;
  font-weight: 800;
  border-radius: 50px;
  cursor: pointer;
  letter-spacing: 2px;
  box-shadow: 0 8px 30px rgba(255,77,141,0.4), 0 0 60px rgba(255,107,61,0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}
.enter-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 40px rgba(255,77,141,0.5), 0 0 80px rgba(255,107,61,0.3);
}
.enter-btn:active {
  transform: scale(0.97);
}
.btn-text {
  position: relative;
  z-index: 2;
}
.btn-sparkle {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);
  animation: sparkle 2s infinite;
}
@keyframes sparkle {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.hint {
  color: rgba(255,255,255,0.4);
  font-size: 14px;
  margin-top: 16px;
  letter-spacing: 2px;
}

/* Balloons */
.balloons {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}
.balloon {
  position: absolute;
  bottom: -120px;
  animation: balloonRise 8s ease-in-out infinite;
}
.balloon-body {
  width: 36px;
  height: 48px;
  border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  position: relative;
  box-shadow: inset -4px -4px 8px rgba(0,0,0,0.15);
}
.balloon-body::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 10px;
  width: 16px;
  height: 20px;
  background: rgba(255,255,255,0.25);
  border-radius: 50%;
}
.balloon-knot {
  width: 8px;
  height: 8px;
  background: inherit;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: -2px;
}
.balloon-string {
  width: 1px;
  height: 60px;
  background: rgba(255,255,255,0.3);
  margin: 0 auto;
}
@keyframes balloonRise {
  0% { transform: translateY(0) translateX(0) rotate(0deg); }
  25% { transform: translateY(-300px) translateX(20px) rotate(3deg); }
  50% { transform: translateY(-600px) translateX(-10px) rotate(-2deg); }
  75% { transform: translateY(-900px) translateX(15px) rotate(1deg); }
  100% { transform: translateY(-1200px) translateX(0) rotate(0deg); }
}

/* Confetti */
.confetti-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 20;
}
.mini-confetti {
  position: fixed;
  border-radius: 2px;
  animation: miniBurst 0.8s ease-out forwards;
  pointer-events: none;
}
.burst-confetti {
  position: fixed;
  border-radius: 3px;
  animation: confettiBurst 1.2s ease-out forwards;
  pointer-events: none;
}
@keyframes miniBurst {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); opacity: 0; }
}
@keyframes confettiBurst {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  70% { opacity: 0.8; }
  100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(0.3); opacity: 0; }
}

@media (max-width: 640px) {
  .age-number { font-size: 100px; }
  .main-msg { font-size: 20px; }
  .sub-msg { font-size: 24px; }
  .english-msg { font-size: 14px; }
  .logo-img { width: 130px; }
  .enter-btn { padding: 14px 36px; font-size: 17px; }
}
</style>
