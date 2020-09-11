<template>
   <div>
       <canvas id="clock" height="300px" width="300px border:1px solid #ccc"></canvas>
   </div>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {

    }
  },
  methods: {
    // 绘制背景
    drawBackground () {
      var canvas = document.getElementById('clock')
      var ctx = canvas.getContext('2d')
      var width = ctx.canvas.width
      var height = ctx.canvas.height
      var r = width / 2
      ctx.translate(r, r)
      ctx.beginPath()
      ctx.arc(0, 0, r, 0, 2 * Math.PI, false)
      ctx.stroke()

      var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
      ctx.font = '18px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      hourNumbers.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i
        var x = Math.cos(rad) * (r - 30)
        var y = Math.sin(rad) * (r - 30)
        ctx.fillText(number, x, y)
      })

      for (let i = 0; i < 60; i++) {
        var rad = 2 * Math.PI * i
        var x = Math.cos(rad) * (r - 18)
        var y = Math.sin(rad) * (r - 18)
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, 2 * Math.PI, false)
        ctx.fill()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
