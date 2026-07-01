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

// DOM加载完成后统一执行
document.addEventListener("DOMContentLoaded", function() {
  // 1. 加载导航头部
  loadHeader();

  // 2. 自动把GTM noscript插入<body>标签最开头，等效手动粘贴
  const gtmNoscriptBlock = `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDCCW4TJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  `;
  // afterbegin = body起始标签之后第一行
  document.body.insertAdjacentHTML('afterbegin', gtmNoscriptBlock);
});