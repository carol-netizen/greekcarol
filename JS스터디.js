function setTheme(mode) {
  const themes = {
    day: {
      bg: "#ffffff",
      text: "#111111",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/51/mykonos.jpg?w=1400&h=1400&s=1"
    },
    night: {
      bg: "#000000",
      text: "#ffffff",
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506973-mykonos-town.jpg"
    }
  };

  const t = themes[mode];
  document.body.setAttribute("data-theme", mode);
  document.body.style.setProperty("--bg", t.bg);
  document.body.style.setProperty("--text", t.text);

  document.getElementById("greeceImage").src = t.img;
}

// 페이지 처음 로드 시 낮 테마로 시작
setTheme('day');