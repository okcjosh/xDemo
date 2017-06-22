<template>
  <div>
    <body class="demo-magneto">
    <svg class="hidden">
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <title>arrow</title>
        <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
      </symbol>
      <symbol id="icon-drop" viewBox="0 0 24 24">
        <title>drop</title>
        <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
      </symbol>
      <symbol id="icon-github" viewBox="0 0 32.6 31.8">
        <title>github</title>
        <path d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z"/>
      </symbol>
    </svg>
    <main>
      <div class="content content--fixed">
        <header class="codrops-header">
          <div class="codrops-links">
            <a class="codrops-icon codrops-icon--prev" href="https://tympanus.net/Development/TooltipAnimations/" title="Previous Demo"><svg class="icon icon--arrow"><use xlink:href="#icon-arrow"></use></svg></a>
            <a class="codrops-icon codrops-icon--drop" href="https://tympanus.net/codrops/?p=31349" title="Back to the article"><svg class="icon icon--drop"><use xlink:href="#icon-drop"></use></svg></a>
          </div>
          <h1 class="codrops-header__title">Letter Effects &amp; Interaction Ideas</h1>
        </header>
        <p class="codrops-header__tagline">
          <a class="github" href="https://github.com/codrops/LetterInteractions/" title="Find this project on GitHub"><svg class="icon icon--github"><use xlink:href="#icon-github"></use></svg></a>
          Some playful typographic (hover) animations</p>
        <p class="deco">Leve fit, quod bene fertur, onus.</p>
      </div>
      <section class="content content--layout">
        <h2 class="word word--magneto">Kabinka &amp; hi</h2>
      </section>
    </main>
    </body>
  </div>
</template>
<script>
  require('../assets/fancy/js/demo.js');
  require('../assets/fancy/js/demo1');
  require('../assets/fancy/js/demo2.js');
  require('../assets/fancy/js/demo3.js');
  require('../assets/fancy/js/demo4.js');
  require('../assets/fancy/js/imagesloaded.pkgd.min.js');
  const charming = require('charming')
  const anime = require('animejs');
  let cssScript = function () {
    {
      setTimeout(() => document.body.classList.add('render'), 60)
      const navdemos = document.querySelectorAll('nav.demos > .demo')
      Array.from(navdemos).forEach(link => link.addEventListener('click', (ev) => {
        ev.preventDefault()
        document.body.classList.remove('render')
        document.body.addEventListener('transitionend', () => window.location = ev.target.href)
      }))
    }
    {
      // from http://www.quirksmode.org/js/events_properties.html#position
      const getMousePos = (ev) => {
        let posx = 0
        let posy = 0
        if (!ev) ev = window.event
        if (ev.pageX || ev.pageY) 	{
          posx = ev.pageX
          posy = ev.pageY
        } else if (ev.clientX || ev.clientY) 	{
          posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
          posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        return { x: posx, y: posy }
      }

      class Letter {
        constructor (letter) {
          this.DOM = {}
          this.CONFIG = {
            color: '#fff',
            trailDelay: 0,
            maxScaleX: 1,
            minScaleX: 0.8,
            maxScaleY: 1.6,
            minScaleY: 1,
            stretchTransition: 'transform 0.4s cubic-bezier(0.1,1,0.3,1)',
            reverseAnim: {
              duration: 1000,
              easing: 'easeOutElastic',
              elasticity: 600,
              scaleY: 1,
              scaleX: 1
            }
          }
          this.DOM.letter = letter
          this.layout()
          this.initEvents()
        }
        layout () {
          this.DOM.letterInner = document.createElement('span')
          this.DOM.letterInner.innerHTML = this.DOM.letter.innerHTML
          this.DOM.letter.innerHTML = ''
          this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
          this.DOM.svg.setAttribute('width', '100px')
          this.DOM.svg.setAttribute('height', '150px')
          this.DOM.svg.setAttribute('viewBox', '0 0 100 150')
          this.DOM.svg.setAttribute('preserveAspectRatio', 'xMaxYMax meet')

          const r = 11
          for (let i = 0; i < 3; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            circle.setAttribute('cx', 39 * i + r)
            circle.setAttribute('cy', 139)
            circle.setAttribute('r', r)
            this.DOM.svg.appendChild(circle)
          };
          this.DOM.circles = Array.from(this.DOM.svg.querySelectorAll('circle'))
          this.DOM.letter.appendChild(this.DOM.svg)
          this.DOM.letter.appendChild(this.DOM.letterInner)
        }
        stretch (ev) {
          const mousepos = getMousePos(ev)
          const docScrolls = {left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop}
          const bounds = this.DOM.letter.getBoundingClientRect()
          const relmousepos = {
            x: mousepos.x - bounds.left - docScrolls.left,
            y: mousepos.y - bounds.top - docScrolls.top
          }
          anime.remove(this.DOM.letterInner)
          this.DOM.letterInner.style.transformOrigin = '50% 100%'
          const sX = (this.CONFIG.maxScaleX - this.CONFIG.minScaleX) / bounds.height * relmousepos.y + this.CONFIG.minScaleX
          const sY = (this.CONFIG.minScaleY - this.CONFIG.maxScaleY) / bounds.height * relmousepos.y + this.CONFIG.maxScaleY
          this.DOM.letterInner.style.transform = `scaleX(${sX}) scaleY(${sY})`
        }
        initEvents () {
          this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
            this.isActive = true
            requestAnimationFrame(() => this.DOM.letterInner.style.transition = this.CONFIG.stretchTransition)
          }, 50)

          this.mousemoveFn = (ev) => {
            if (!this.isActive) return
            requestAnimationFrame(() => this.stretch(ev))
          }
          this.mouseleaveFn = () => {
            clearTimeout(this.mouseTimeout)
            if (!this.isActive) return
            this.isActive = false
            this.DOM.letterInner.style.transition = 'none'
            requestAnimationFrame(() => {
              const scaleYCurrent = anime.getValue(this.DOM.letterInner, 'scaleY')

              anime.remove(this.DOM.letterInner)
              let animOpts = {targets: this.DOM.letterInner}
              anime(Object.assign(animOpts, this.CONFIG.reverseAnim))

              if (scaleYCurrent > 1.4) {
                anime.remove(this.DOM.circles)
                anime({
                  targets: this.DOM.circles,
                  duration: (t, i) => { return anime.random(300, 400) },
                  easing: [0.1, 1, 0.3, 1],
                  delay: (t, i) => { return i * 40 + parseInt(this.CONFIG.trailDelay) },
                  opacity: [
                    {value: 1, duration: 10, easing: 'linear'},
                    {value: 0, duration: 200, easing: 'linear'}
                  ],
                  translateY: (t, i) => { return [100, anime.random(-250, -120)] },
                  scaleX: [2, 0.3],
                  scaleY: [2, 2]
                })
              }
            })
          }
          this.DOM.letter.addEventListener('mouseenter', this.mouseenterFn)
          this.DOM.letter.addEventListener('mousemove', this.mousemoveFn)
          this.DOM.letter.addEventListener('mouseleave', this.mouseleaveFn)
          this.DOM.letter.addEventListener('touchstart', this.mouseenterFn)
          this.DOM.letter.addEventListener('touchend', this.mouseleaveFn)
        }
      }

      class Word {
        constructor (word) {
          this.DOM = {}
          this.DOM.word = word
          this.layout()
        }
        layout () {
          charming(this.DOM.word, {classPrefix: 'letter'})
          Array.from(this.DOM.word.querySelectorAll('span')).forEach(letter => new Letter(letter))
        }
      }

      Array.from(document.querySelectorAll('.word')).forEach((word) => new Word(word))
    };
  }
  export default {
    name: 'svg',
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    mounted () {
      cssScript()
    }
  }
</script>
<style scoped>
  @import '../assets/fancy/css/normalize.css';
  @import '../assets/fancy/css/kidnap.css';
  @import '../assets/fancy/css/magneto.css';
  @import '../assets/fancy/css/demo.css';
  @import '../assets/fancy/css/redraw.css';
  @import '../assets/fancy/css/swing.css';
</style>

