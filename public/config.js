// 基准大小
const baseSize = 153.6
function inMobile() {
  const scale = document.documentElement.clientWidth / 3072
  document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth < 1000
    ? 50 + 'px'
    : (baseSize * Math.min(scale, 2)) + 'px'
}
document.addEventListener('DOMContentLoaded', inMobile);
window.onresize = inMobile;
