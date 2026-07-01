// 加载公共头部
async function loadHeader() {
  try {
    const res = await fetch("/header-partial.html");
    const html = await res.text();
    document.getElementById("global-header").innerHTML = html;
  } catch (err) {
    console.log("Header load fail", err);
  }
}

// DOM加载完成后执行
document.addEventListener("DOMContentLoaded", loadHeader);