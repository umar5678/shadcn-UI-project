document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('div, section, article, header, footer, main, aside, nav, form, fieldset, ul, ol, table, figure, details, summary, p, h1, h2, h3, h4, h5, h6, span, a');
  
  elements.forEach((el, index) => {
    // Create element name display
    const elementName = document.createElement('span');
    elementName.textContent = el.tagName.toLowerCase();
    elementName.style.position = 'absolute';
    elementName.style.fontSize = '10px';
    elementName.style.backgroundColor = 'rgba(0, 0, 255, 0.7)';
    elementName.style.color = 'white';
    elementName.style.padding = '2px 4px';
    elementName.style.borderRadius = '2px';
    elementName.style.zIndex = '9999';
    
    // Create class list display
    const classList = document.createElement('span');
    classList.textContent = el.classList.length ? Array.from(el.classList).join(' ') : 'no-class';
    classList.style.position = 'absolute';
    classList.style.fontSize = '10px';
    classList.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    classList.style.color = 'white';
    classList.style.padding = '2px 4px';
    classList.style.borderRadius = '2px';
    classList.style.zIndex = '9999';
    
    // Position elements in alternating corners
    switch (index % 4) {
      case 0: // Top-left & bottom-right
        elementName.style.top = '0';
        elementName.style.left = '0';
        classList.style.bottom = '0';
        classList.style.right = '0';
        break;
      case 1: // Top-right & bottom-left
        elementName.style.top = '0';
        elementName.style.right = '0';
        classList.style.bottom = '0';
        classList.style.left = '0';
        break;
      case 2: // Bottom-left & top-right
        elementName.style.bottom = '0';
        elementName.style.left = '0';
        classList.style.top = '0';
        classList.style.right = '0';
        break;
      case 3: // Bottom-right & top-left
        elementName.style.bottom = '0';
        elementName.style.right = '0';
        classList.style.top = '0';
        classList.style.left = '0';
        break;
    }
    
    // Make parent position relative if it's not already positioned
    const computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === 'static') {
      el.style.position = 'relative';
    }
    
    // Add the debug elements
    el.appendChild(elementName);
    el.appendChild(classList);
  });
});