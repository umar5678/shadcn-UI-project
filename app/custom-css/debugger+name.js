 document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('div, section, article, header, footer, main, aside, nav, form, fieldset, ul, ol, table, figure, details, summary, p, h1, h2, h3, h4, h5, h6, span, a');
    elements.forEach(el => {
      // Add tag name and optional class for debugging
      let debugText = el.tagName.toLowerCase();
      if (el.id) debugText += '#' + el.id;
      if (el.className && typeof el.className === 'string') {
        const mainClass = el.className.split(' ')[0];
        if (mainClass) debugText += '.' + mainClass;
      }
      el.setAttribute('data-debug-tag', debugText);
      
      // Add depth information
      let depth = 0;
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        depth++;
        parent = parent.parentElement;
      }
      el.setAttribute('data-depth', depth);
    });
  });