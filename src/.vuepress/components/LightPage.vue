<template>
  <div class="light-page" :class="{ 'gold': isLight }">
    <div class="header">
      <div class="mid-spot" @click="isLight = !isLight"></div>
      <div class="spotlight">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="hero">
      <div class="heroT">
        <h2>Lfangq</h2>
      </div>
    </div>
    <canvas id="particleCanvas"></canvas>
    <div class="mountains">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
class Particle {
  constructor(ctx) {
    this.ctx = ctx;
    this.reset();
    this.y = Math.random() * canvas.height;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  reset () {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = 1;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  update () {
    this.y -= this.speed;
    if (this.y < 0) {
      this.reset();
    }

    if (!this.fadingOut && Date.now() > this.fadeStart) {
      this.fadingOut = true;
    }

    if (this.fadingOut) {
      this.opacity -= 0.008;
      if (this.opacity <= 0) {
        this.reset();
      }
    }
  }

  draw () {
    this.ctx.fillStyle = `rgba(${255 - (Math.random() * 255 / 2)}, 255, 255, ${this.opacity})`;
    this.ctx.fillRect(this.x, this.y, 0.8, Math.random() * 2 + 1);
  }
}
let particles = [];
let particleCount = 0;
let canvas = null;
let ctx = null;
export default {
  name: "LightPage",
  data () {
    return {
      isLight: false,
      particles: []
    };
  },
  mounted () {
    canvas = document.getElementById('particleCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    particleCount = this.calculateParticleCount();
    window.addEventListener('resize', this.onResize);
    this.initParticles();
    this.animate();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    calculateParticleCount () {
      return Math.floor((canvas.width * canvas.height) / 6000);
    },
    initParticles () {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(ctx));
      }
    },
    animate () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(this.animate);
    },
    onResize () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = this.calculateParticleCount();
      this.initParticles();
    },
  }
};
</script>
<style lang="scss" scoped>
.light-page {
  position: absolute;
  inset: 0;
  background: #05060f linear-gradient(0deg, rgba(216, 236, 248, .06), rgba(152, 192, 239, .06));
  z-index: 10000;
  overflow: hidden;

  .header {
    display: flex;
    width: 100%;
    justify-content: center;
    color: #bad6f7;
    padding: 2em 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    opacity: 0;
    translate: 0 -1em;
    animation: load 2s ease-in 2s forwards, up 1.4s ease-out 2s forwards;
  }

  .header>div.mid-spot {
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    background: black;
    box-shadow: 0 0 1em 0 #98c0ef;
    cursor: pointer;
    transition: box-shadow 1s ease-in-out;
  }

  .header>div.mid-spot:hover {
    box-shadow: -0.3em 0.1em 0.2em 0 #d8bd10;
  }

  .hero {
    width: 100%;
    height: 100%;
    max-height: 140px;
    position: absolute;
    top: 16em;
  }

  .heroT {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20em;
    padding-top: 2em;
    translate: 0 -1.6em;
    opacity: 0;
    animation: load 2s ease-in-out 0.6s forwards;
  }

  .heroT>h2 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;

    font-size: 7em;
    font-weight: 600;
    color: #9dc3f7;
    background:
      radial-gradient(2em 2em at 50% 50%,
        transparent calc(var(--p) - 2em),
        #fff calc(var(--p) - 1em),
        #fff calc(var(--p) - 0.4em),
        transparent var(--p)),
      linear-gradient(0deg, #bad1f1 30%, #9dc3f7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 16px rgba(174, 207, 242, .24);
    border: none;

    --p: 0%;
    transition: --p 3s linear;

    animation: pulse 10s linear 1.2s infinite;
  }

  .header> :nth-child(2):hover~.spotlight {
    animation: colorize 10s linear infinite;
  }

  .header .spotlight {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    transition: filter 1s ease-in-out;

    height: 42em;
    width: 100%;
    overflow: hidden;
  }

  .header .spotlight>div {
    border-radius: 0 0 50% 50%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 3em;
    width: 30em;
    height: max(42em, 86vh);
    background-image: conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, .3) 49%, rgba(124, 145, 182, .5) 50%, rgba(124, 145, 182, .3) 51%, transparent 55%);
    transform-origin: 50% 0;
    filter: blur(15px) opacity(0.5);
    z-index: -1;
    animation: load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 21s ease-in-out infinite reverse;
  }

  .header .spotlight>div:nth-child(1) {
    rotate: 20deg;
    animation: load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 17s ease-in-out infinite;
  }

  .header .spotlight>div:nth-child(2) {
    rotate: -20deg;
    animation: load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 14s ease-in-out infinite;
  }

  canvas#particleCanvas {
    position: absolute;
    pointer-events: none;
    animation: load 0.4s ease-in-out forwards;
    z-index: 1;
    width: 100%;
  }

  .mountains {
    position: absolute;
    left: 0;
    right: 0;
    top: 31em;
    margin: auto;
    width: 100%;
    height: 10em;
    pointer-events: none;
  }

  .mountains::before {
    content: '';
    display: block;
    width: 100%;
    height: 500%;
    position: absolute;
    top: 0%;
    background: linear-gradient(90deg, #121521 0%, transparent 50%);
    background: linear-gradient(0deg, #121521 80%, transparent 90%);
    z-index: 2;
  }

  .mountains>div {
    box-shadow:
      -1em -0.2em 0.4em -1.1em #c2ccff,
      inset 0em 0em 0em 2px #c2ccff,
      inset 0.2em 0.3em 0.2em -0.2em #c2ccff,
      inset 10.2em 10.3em 2em -10em #d4e6ff2f;
    background: #121521;
    z-index: 1;
    filter: brightness(0.8);
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 20em;
    height: 20em;
    rotate: 45deg;
  }

  .mountains>div:nth-child(1) {
    bottom: -240%;
    translate: -6em 2em;
    animation: mountainload1 2s ease-out 2.4s forwards;
  }

  .mountains>div:nth-child(2) {
    bottom: -240%;
    translate: -2em 0em;
    width: 14em;
    height: 20em;
    animation: mountainload2 2s ease-out 2.2s forwards;
  }

  .mountains>div:nth-child(3) {
    bottom: -240%;
    translate: 6em 3em;
    animation: mountainload1 2s ease-out 2s forwards;
  }

  @keyframes mountainload1 {
    0% {
      bottom: -240%;
    }

    100% {
      bottom: -140%;
    }
  }

  @keyframes mountainload2 {
    0% {
      bottom: -240%;
    }

    100% {
      bottom: -108%;
    }
  }

  .mountains>div::before {
    content: '';
    display: block;
    background: repeating-radial-gradient(at 100% 100%, transparent 0%, #c2ccff22 2px, transparent 4px);
    width: 12em;
    height: 12em;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom-right-radius: 100%;
  }
}

.light-page.gold .header>div.mid-spot:hover {
  box-shadow: -0.3em 0.1em 0.2em 0 #98c0ef;
}

.light-page.gold .header>div.mid-spot {
  box-shadow: 0 0 1em 0 #d8bd10;
}

.light-page.gold .header h2,
.light-page.gold p,
.light-page.gold>*>* :not(.contact-btn) {
  filter: invert(1) brightness(4.7);
}

.light-page.gold .header h2 a {
  filter: hue-rotate(0deg);
}

.light-page.gold canvas {
  filter: drop-shadow(2em 4em 0px #d8bd10) drop-shadow(-8em -14em 0px #d8bd10);
}

.light-page.gold .header .spotlight {
  filter: invert(1) brightness(4.7) opacity(0.5);
}

.light-page.gold .mountains>div {
  box-shadow:
    -1em -0.2em 0.4em -1.1em #c2ccff,
    inset 0em 0em 0em 2px #d8a910,
    inset 0.2em 0.3em 0.2em -0.2em #c2ccff,
    inset 10.2em 10.3em 2em -10em #d4e6ff2f;
}


@keyframes loadrot {
  0% {
    rotate: 0deg;
    scale: 0;
  }

  100% {
    scale: 1;
  }
}

@keyframes spotlight {
  0% {
    transform: rotateZ(0deg) scale(1);
    filter: blur(15px) opacity(0.5);
  }

  20% {
    transform: rotateZ(-1deg) scale(1.2);
    filter: blur(16px) opacity(0.6);
  }

  40% {
    transform: rotateZ(2deg) scale(1.3);
    filter: blur(14px) opacity(0.4);
  }

  60% {
    transform: rotateZ(-2deg) scale(1.2);
    filter: blur(15px) opacity(0.6);
  }

  80% {
    transform: rotateZ(1deg) scale(1.1);
    filter: blur(13px) opacity(0.4);
  }

  100% {
    transform: rotateZ(0deg) scale(1);
    filter: blur(15px) opacity(0.5);
  }
}

@keyframes colorize {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(-380deg);
  }
}

@keyframes load {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


@keyframes pulse {
  0% {
    --p: 0%;
  }

  50% {
    --p: 300%;
  }

  100% {
    --p: 300%;
  }
}
</style>