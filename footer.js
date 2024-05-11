function generateBalls() {
  for (var i = 0; i < Math.floor(window.innerWidth / 20); i++) {
    $(".gooey-animations").append(`
      <div class="ball"></div>
    `);
    var colors = ["#161616", "#7B4BB6"];
    $(".ball")
      .eq(i)
      .css({
        bottom: "0px",
        left: Math.random() * (window.innerWidth - 100),
        "animation-delay": Math.random() * 5 + "s",
        "background-color": colors[i % 2]
      });
  }
}

generateBalls();

window.addEventListener("resize", function (e) {
  $(".gooey-animations .ball").remove();
  generateBalls();
});