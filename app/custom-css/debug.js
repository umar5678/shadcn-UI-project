 document.querySelectorAll("div, section, article, header, footer, main, aside, nav").forEach(el => {
    el.setAttribute("data-debug-tag", el.tagName.toLowerCase());
  });