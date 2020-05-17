var snow = {
  info: {
    top: 0,
    left: 0,
    zIndex: 500,
    number: 70
  },
  down: function () {
    var f = window.innerWidth;
    var g = window.innerHeight;
    var d = document.createElement("canvas");
    d.style.position = "fixed";
    d.style.pointerEvents = "none";
    d.style.top = snow.info.top + "px";
    d.style.left = snow.info.left + "px";
    d.style.zIndex = snow.info.zIndex;
    d.width = f;
    d.height = g;
    document.body.appendChild(d);
    var c = [];
    for (var a = 0; a < snow.info.number; a++) {
      c.push({
        x: Math.random() * f,
        y: Math.random() * g,
        r: Math.random() * 4 + 1,
        n: Math.random() * 70
      })
    }
    var b = d.getContext("2d");
    var e = 0;
    setInterval(function () {
        b.clearRect(0, 0, f, g);
        b.fillStyle = "rgba(255, 255, 255, 0.6)";
        b.shadowBlur = 5;
        b.shadowColor = "rgba(255, 255, 255, 0.9)";
        b.beginPath();
        for (var j = 0; j < 70; j++) {
          var h = c[j];
          b.moveTo(h.x, h.y);
          b.arc(h.x, h.y, h.r, 0, Math.PI * 2, 0)
        }
        b.fill();
        e += 0.01;
        for (var j = 0; j < 70; j++) {
          var h = c[j];
          h.y += Math.cos(e + h.n) + h.r / 2;
          h.x += Math.sin(e) * 2;
          if (h.x > f + 5 || h.x < -5 || h.y > g) {
            c[j] = j % 3 > 0 ? {
              x: Math.random() * f,
              y: -10,
              r: h.r,
              n: h.n
            } : Math.sin(e) > 0 ? {
              x: -5,
              y: Math.random() * g,
              r: h.r,
              n: h.n
            } : {
              x: f + 5,
              y: Math.random() * g,
              r: h.r,
              n: h.n
            }
          }
        }
      },
      15)
  }
};
// yilia-plus主题已经集成了，可以直接用
————————————————
版权声明：本文为CSDN博主「Alfred_|_derflA」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_41599858/java/article/details/104786874