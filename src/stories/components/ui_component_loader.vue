<template>
  <div id="ui-loader">
    <div class="loader-wrap">
      <p class="loader-ttl">
        <span>e</span>
        <span>d</span>
        <span>e</span>
        <span>l</span>
        <span>R</span>
      </p>
    </div>
    <div id="ui-loader-effect">
      <!-- エフェクトの影響を受けたいコンテンツはこの中へ -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'uiLoader',
  mounted () {
    const rLoader = document.getElementById('ui-loader')
    const rLoaderType = document.getElementById('ui-loader-effect')
    let ldr = {
      animationwait: 'false',
      animationtrigger: 'always',
      animationspeed: 2600,
      animationtype: 'rld-left-out'
    }
    /* loading animation - type */
    setTimeout(function () {
      rLoaderType.classList.add(ldr.animationtype)
    }, ldr.animationspeed - 600)

    /* loading animation - trigger */
    if (ldr.animationtrigger === 'always' || ldr.animationtrigger === 'once') {
      rLoader.classList.add('loader-on')
      setTimeout(function () {
        rLoader.classList.add('animation-finished')
        window.sessionStorage.setItem('ldr-triggered', true)
      }, ldr.animationspeed)
    }
    if ((ldr.animationtrigger === 'once' && window.sessionStorage.getItem('ldr-triggered')) || (ldr.animationtrigger === 'off')) {
      rLoader.parentNode.removeChild(rLoader)
    } else {
    }
  }
}
</script>