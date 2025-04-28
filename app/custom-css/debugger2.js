// /**
//  * Enhanced CSS Debugger
//  * 
//  * This script:
//  * 1. Shows element names in alternating corners to avoid overlap
//  * 2. Displays height, width, and applied CSS properties
//  * 3. Shows flex and grid properties when applicable
//  * 4. Adds toggleable debug information
//  */

// // Main debugger function
// function enhancedCSSDebugger() {
//   // Selectors for elements we want to debug
//   const elements = document.querySelectorAll('div, section, article, header, footer, main, aside, nav, form, fieldset, ul, ol, table, figure, details, summary, p, h1, h2, h3, h4, h5, h6, span, a');
  
//   // Add debug info to each element
//   elements.forEach((el, index) => {
//     // Add positioning for label placement
//     el.style.position = el.style.position || 'relative';
    
//     // Calculate element depth for label positioning strategy
//     let depth = 0;
//     let parent = el.parentElement;
//     while (parent && parent !== document.body) {
//       depth++;
//       parent = parent.parentElement;
//     }
    
//     // Create debug info
//     const debugInfo = createDebugInfo(el, depth, index);
//     el.appendChild(debugInfo);
    
//     // Create label with element tag and class info
//     createElementLabel(el, depth, index);
    
//     // Store original border to restore later if debugging is disabled
//     el.dataset.originalBorder = el.style.border;
    
//     // Add debug borders based on depth
//     const opacity = 0.3 + (depth * 0.1 > 0.7 ? 0.7 : depth * 0.1);
//     const grayValue = 220 - (depth * 20 < 100 ? depth * 20 : 100);
//     el.style.border = `1px dashed rgba(${grayValue}, ${grayValue}, ${grayValue}, ${opacity})`;
//   });
  
//   // Add toggle button
//   addDebugToggle();
// }

// // Create alternating element labels to avoid overlap
// function createElementLabel(el, depth, index) {
//   // Get tag name and class information
//   let tagName = el.tagName.toLowerCase();
//   let classList = Array.from(el.classList).join('.');
//   classList = classList ? '.' + classList : '';
  
//   // Create the label element
//   const label = document.createElement('div');
//   label.className = 'debug-element-label';
  
//   // Position strategy based on element depth and index to avoid overlaps
//   const position = getPositionStrategy(depth, index);
  
//   // Set label position and content
//   Object.assign(label.style, {
//     position: 'absolute',
//     fontSize: '10px',
//     backgroundColor: 'rgba(50, 50, 50, 0.8)',
//     color: 'white',
//     padding: '2px 5px',
//     borderRadius: '3px',
//     zIndex: '9999',
//     pointerEvents: 'none',
//     fontFamily: 'monospace',
//     lineHeight: '1',
//     whiteSpace: 'nowrap',
//     ...position.styles
//   });
  
//   label.textContent = `<${tagName}${classList}>`;
//   label.dataset.debugElement = 'label';
//   el.appendChild(label);
// }

// // Create detailed debug info panel
// function createDebugInfo(el, depth, index) {
//   const infoPanel = document.createElement('div');
//   infoPanel.className = 'debug-info-panel';
  
//   // Get computed style
//   const computedStyle = window.getComputedStyle(el);
  
//   // Get dimensions
//   const width = el.offsetWidth;
//   const height = el.offsetHeight;
  
//   // Check if element uses flex or grid
//   const display = computedStyle.display;
  
//   // Gather properties to display
//   let properties = [
//     `Size: ${width}px × ${height}px`,
//     `Padding: ${computedStyle.paddingTop} ${computedStyle.paddingRight} ${computedStyle.paddingBottom} ${computedStyle.paddingLeft}`,
//     `Margin: ${computedStyle.marginTop} ${computedStyle.marginRight} ${computedStyle.marginBottom} ${computedStyle.marginLeft}`
//   ];
  
//   // Add flex properties if applicable
//   if (display.includes('flex')) {
//     properties.push(
//       `Display: ${display}`,
//       `Flex-direction: ${computedStyle.flexDirection}`,
//       `Justify-content: ${computedStyle.justifyContent}`,
//       `Align-items: ${computedStyle.alignItems}`,
//       `Gap: ${computedStyle.gap}`
//     );
//   }
  
//   // Add grid properties if applicable
//   if (display.includes('grid')) {
//     properties.push(
//       `Display: ${display}`,
//       `Grid-template-columns: ${computedStyle.gridTemplateColumns}`,
//       `Grid-template-rows: ${computedStyle.gridTemplateRows}`,
//       `Grid-gap: ${computedStyle.gap}`
//     );
//   }
  
//   // Style the info panel
//   Object.assign(infoPanel.style, {
//     position: 'absolute',
//     bottom: '0',
//     right: '0',
//     backgroundColor: 'rgba(40, 40, 40, 0.85)',
//     color: '#fff',
//     padding: '5px',
//     fontSize: '10px',
//     fontFamily: 'monospace',
//     zIndex: '9998',
//     borderRadius: '3px 0 0 0',
//     pointerEvents: 'none',
//     opacity: '0',
//     transition: 'opacity 0.2s ease',
//     maxWidth: '300px',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     lineHeight: '1.4',
//     display: 'none'
//   });
  
//   // Create content
//   infoPanel.innerHTML = properties.join('<br>');
//   infoPanel.dataset.debugElement = 'info';
  
//   // Show panel on hover
//   el.addEventListener('mouseenter', () => {
//     if (document.body.classList.contains('debug-active')) {
//       infoPanel.style.display = 'block';
//       setTimeout(() => { infoPanel.style.opacity = '1'; }, 10);
//     }
//   });
  
//   el.addEventListener('mouseleave', () => {
//     infoPanel.style.opacity = '0';
//     setTimeout(() => { infoPanel.style.display = 'none'; }, 200);
//   });
  
//   return infoPanel;
// }

// // Get position strategy to avoid overlap
// function getPositionStrategy(depth, index) {
//   // Cycle through different positions to avoid overlap
//   const positions = [
//     { styles: { top: '0', left: '0', borderRadius: '0 0 3px 0' } },
//     { styles: { top: '0', right: '0', borderRadius: '0 0 0 3px' } },
//     { styles: { bottom: '0', left: '0', borderRadius: '0 3px 0 0' } },
//     { styles: { bottom: '0', right: '0', borderRadius: '3px 0 0 0' } }
//   ];
  
//   // Use depth and index to determine position pattern
//   // This creates a pattern that helps avoid direct overlaps
//   const positionIndex = (depth + index) % positions.length;
//   return positions[positionIndex];
// }

// // Add toggle button for debug mode
// function addDebugToggle() {
//   const toggle = document.createElement('div');
//   toggle.id = 'debug-toggle';
  
//   Object.assign(toggle.style, {
//     position: 'fixed',
//     bottom: '10px',
//     right: '10px',
//     backgroundColor: '#555',
//     color: 'white',
//     padding: '8px 12px',
//     borderRadius: '4px',
//     fontFamily: 'monospace',
//     fontSize: '12px',
//     zIndex: '10000',
//     cursor: 'pointer',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
//   });
  
//   toggle.textContent = 'Debug CSS: ON';
//   document.body.classList.add('debug-active');
  
//   toggle.addEventListener('click', () => {
//     const isActive = document.body.classList.toggle('debug-active');
//     toggle.textContent = `Debug CSS: ${isActive ? 'ON' : 'OFF'}`;
    
//     // Show/hide all debug elements
//     const debugElements = document.querySelectorAll('[data-debug-element]');
//     debugElements.forEach(el => {
//       el.style.display = isActive ? (el.dataset.debugElement === 'info' ? 'none' : 'block') : 'none';
//     });
    
//     // Reset borders if debug is off
//     if (!isActive) {
//       document.querySelectorAll('[data-original-border]').forEach(el => {
//         el.style.border = el.dataset.originalBorder || '';
//       });
//     } else {
//       // Reapply debug styles
//       document.querySelectorAll('[data-original-border]').forEach((el, index) => {
//         const depth = getElementDepth(el);
//         const opacity = 0.3 + (depth * 0.1 > 0.7 ? 0.7 : depth * 0.1);
//         const grayValue = 220 - (depth * 20 < 100 ? depth * 20 : 100);
//         el.style.border = `1px dashed rgba(${grayValue}, ${grayValue}, ${grayValue}, ${opacity})`;
//       });
//     }
//   });
  
//   document.body.appendChild(toggle);
// }

// // Helper to get element depth
// function getElementDepth(el) {
//   let depth = 0;
//   let parent = el.parentElement;
//   while (parent && parent !== document.body) {
//     depth++;
//     parent = parent.parentElement;
//   }
//   return depth;
// }

// // Add stylesheet for debug mode
// function addDebugStyles() {
//   const style = document.createElement('style');
//   style.textContent = `
//     .debug-active * {
//       box-sizing: border-box;
//     }
    
//     .debug-active div,
//     .debug-active section,
//     .debug-active article,
//     .debug-active header,
//     .debug-active footer,
//     .debug-active main,
//     .debug-active aside,
//     .debug-active nav,
//     .debug-active form,
//     .debug-active fieldset,
//     .debug-active ul,
//     .debug-active ol,
//     .debug-active table,
//     .debug-active figure,
//     .debug-active details,
//     .debug-active summary {
//       position: relative;
//       margin: 2px;
//     }
    
//     /* Special container highlighting */
//     .debug-active [style*="display: flex"],
//     .debug-active [style*="display:flex"],
//     .debug-active .flex,
//     .debug-active [class*="flex-"] {
//       background: repeating-linear-gradient(
//         90deg,
//         transparent,
//         transparent 20px,
//         rgba(100, 100, 100, 0.05) 20px,
//         rgba(100, 100, 100, 0.05) 21px
//       ) !important;
//     }
    
//     .debug-active [style*="display: grid"],
//     .debug-active [style*="display:grid"],
//     .debug-active .grid,
//     .debug-active [class*="grid-"] {
//       background: repeating-linear-gradient(
//         0deg,
//         transparent,
//         transparent 20px,
//         rgba(120, 120, 120, 0.05) 20px,
//         rgba(120, 120, 120, 0.05) 21px
//       ) !important;
//     }
    
//     /* Target empty elements with special highlight */
//     .debug-active :empty {
//       background: repeating-linear-gradient(
//         45deg,
//         rgba(150, 150, 150, 0.2),
//         rgba(150, 150, 150, 0.2) 10px,
//         rgba(180, 180, 180, 0.2) 10px,
//         rgba(180, 180, 180, 0.2) 20px
//       ) !important;
//       min-height: 10px;
//       min-width: 10px;
//     }
//   `;
  
//   document.head.appendChild(style);
// }

// // Initialize on DOM content loaded
// document.addEventListener('DOMContentLoaded', function() {
//   addDebugStyles();
//   enhancedCSSDebugger();
// });

// // Self-executing option to initialize immediately if DOM is already loaded
// (function() {
//   if (document.readyState === 'complete' || document.readyState === 'interactive') {
//     setTimeout(function() {
//       addDebugStyles();
//       enhancedCSSDebugger();
//     }, 1);
//   }
// })();


/**
 * Non-Intrusive CSS Debugger
 * 
 * Features:
 * 1. Shows element names in alternating corners without overwriting styles
 * 2. Displays dimensions and CSS properties on hover
 * 3. Uses CSS classes instead of inline styles for debugging visuals
 * 4. Preserves all original styling
 */

(function() {
  // Create and add debugging stylesheet
  function addDebugStyles() {
    const styleEl = document.createElement('style');
    styleEl.id = 'css-debug-styles';
    styleEl.textContent = `
      /* Debug overlay elements */
      .debug-element-label {
        position: absolute;
        font-size: 10px;
        background-color: rgba(101, 101, 101, 0.32);
        color: black;
        padding: 2px 5px;
        border-radius: 3px;
        z-index: 9999;
        pointer-events: none;
        font-family: monospace;
        line-height: 1;
        white-space: nowrap;
      }
      
      .debug-info-panel {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(40, 40, 40, 0.2);
        color: black;
        padding: 5px;
        font-size: 14px;
        font-family: monospace;
        z-index: 9998;
        border-radius: 3px 0 0 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.4;
        display: none;
      }
      
      /* Position classes for labels */
      .debug-label-top-left {
        top: 0;
        left: 0;
        border-radius: 0 0 3px 0;
      }
      
      .debug-label-top-right {
        top: 0;
        right: 0;
        border-radius: 0 0 0 3px;
      }
      
      .debug-label-bottom-left {
        bottom: 0;
        left: 0;
        border-radius: 0 3px 0 0;
      }
      
      .debug-label-bottom-right {
        bottom: 0;
        right: 0;
        border-radius: 3px 0 0 0;
      }
      
      /* Visual overlays without changing element styling */
      body.debug-active [data-debug-element="container"] {
        outline: 1px dashed rgba(150, 150, 150, 0.5) !important;
        outline-offset: -1px !important;
      }
      
      /* Depth indicators - very subtle outlines */
      body.debug-active [data-debug-depth="1"] {
        outline: 1px dashed rgba(220, 220, 220, 0.5) !important;
        outline-offset: -1px !important;
      }
      
      body.debug-active [data-debug-depth="2"] {
        outline: 1px dashed rgba(200, 200, 200, 0.5) !important;
        outline-offset: -1px !important;
      }
      
      body.debug-active [data-debug-depth="3"] {
        outline: 1px dashed rgba(180, 180, 180, 0.5) !important;
        outline-offset: -1px !important;
      }
      
      body.debug-active [data-debug-depth="4"] {
        outline: 1px dashed rgba(160, 160, 160, 0.5) !important;
        outline-offset: -1px !important;
      }
      
      body.debug-active [data-debug-depth="5"] {
        outline: 1px dashed rgba(140, 140, 140, 0.5) !important;
        outline-offset: -1px !important;
      }
      
      /* Visual indicators without changing background */
      body.debug-active [data-debug-display="flex"]::after,
      body.debug-active [data-debug-display="inline-flex"]::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 20px,
          rgba(100, 100, 100, 0.05) 20px,
          rgba(100, 100, 100, 0.05) 21px
        );
        pointer-events: none;
        z-index: -1;
      }
      
      body.debug-active [data-debug-display="grid"]::after,
      body.debug-active [data-debug-display="inline-grid"]::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          0deg,
          transparent,
          transparent 20px,
          rgba(120, 120, 120, 0.05) 20px,
          rgba(120, 120, 120, 0.05) 21px
        );
        pointer-events: none;
        z-index: -1;
      }
      
      /* Debug toggle button */
      #debug-toggle {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: #555;
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 12px;
        z-index: 10000;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      }
    `;
    
    document.head.appendChild(styleEl);
  }
  
  // Initialize debugging
  function initDebugger() {
    // Selectors for elements we want to debug
    const elements = document.querySelectorAll('div, section, article, header, footer, main, aside, nav, form, fieldset, ul, ol, table, figure, details, summary, p, h1, h2, h3, h4, h5, h6');
    
    // Process each element
    elements.forEach((el, index) => {
      // Skip elements that are part of the debugger itself
      if (el.id === 'debug-toggle' || el.classList.contains('debug-element-label') || 
          el.classList.contains('debug-info-panel')) {
        return;
      }
      
      // Ensure element can position children
      const computedPosition = window.getComputedStyle(el).position;
      if (computedPosition === 'static') {
        // Only set position if it's not already set
        el.dataset.originalPosition = 'static';
      }
      
      // Calculate element depth for data attribute
      let depth = 0;
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        depth++;
        parent = parent.parentElement;
      }
      el.dataset.debugDepth = depth;
      
      // Mark element as debuggable
      el.dataset.debugElement = 'container';
      
      // Add display type detection
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.display.includes('flex')) {
        el.dataset.debugDisplay = computedStyle.display;
      } else if (computedStyle.display.includes('grid')) {
        el.dataset.debugDisplay = computedStyle.display;
      }
      
      // Add element label with position based on index and depth
      createElementLabel(el, depth, index);
      
      // Add info panel for properties
      createInfoPanel(el);
      
      // Mouse events to show info
      el.addEventListener('mouseenter', function() {
        if (document.body.classList.contains('debug-active')) {
          const infoPanel = el.querySelector('.debug-info-panel');
          if (infoPanel) {
            updateInfoPanel(infoPanel, el);
            infoPanel.style.display = 'block';
            setTimeout(() => { infoPanel.style.opacity = '1'; }, 10);
          }
        }
      });
      
      el.addEventListener('mouseleave', function() {
        const infoPanel = el.querySelector('.debug-info-panel');
        if (infoPanel) {
          infoPanel.style.opacity = '0';
          setTimeout(() => { infoPanel.style.display = 'none'; }, 200);
        }
      });
    });
    
    // Add toggle button
    addDebugToggle();
  }
  
  // Create element label
  function createElementLabel(el, depth, index) {
    // Get element info
    let tagName = el.tagName.toLowerCase();
    let id = el.id ? `#${el.id}` : '';
    let classList = '';
    
    if (el.classList.length > 0) {
      const mainClass = el.classList[0];
      classList = `.${mainClass}`;
    }
    
    // Create label element
    const label = document.createElement('div');
    label.className = 'debug-element-label';
    label.textContent = `<${tagName}${id}${classList}>`;
    label.dataset.debugElement = 'label';
    
    // Add position class based on pattern
    const positions = ['debug-label-top-left', 'debug-label-top-right', 
                       'debug-label-bottom-left', 'debug-label-bottom-right'];
    const positionIndex = (depth + index) % positions.length;
    label.classList.add(positions[positionIndex]);
    
    // Initially hidden
    label.style.display = 'none';
    
    el.appendChild(label);
  }
  
  // Create info panel
  function createInfoPanel(el) {
    const infoPanel = document.createElement('div');
    infoPanel.className = 'debug-info-panel';
    infoPanel.dataset.debugElement = 'info';
    
    // Initially empty, will be populated on hover
    infoPanel.textContent = 'Loading properties...';
    
    el.appendChild(infoPanel);
  }
  
  // Update info panel with current properties
  function updateInfoPanel(panel, el) {
    const computedStyle = window.getComputedStyle(el);
    
    // Get dimensions and other properties
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    const display = computedStyle.display;
    
    // Build properties list
    let properties = [
      `<strong>${el.tagName.toLowerCase()}</strong>`,
      `Size: ${width}px × ${height}px`,
      `Position: ${computedStyle.position}`,
      `Display: ${display}`,
      `Padding: ${computedStyle.paddingTop} ${computedStyle.paddingRight} ${computedStyle.paddingBottom} ${computedStyle.paddingLeft}`,
      `Margin: ${computedStyle.marginTop} ${computedStyle.marginRight} ${computedStyle.marginBottom} ${computedStyle.marginLeft}`
    ];
    
    // Add flex properties if applicable
    if (display.includes('flex')) {
      properties = properties.concat([
        '<strong>Flex Properties:</strong>',
        `Direction: ${computedStyle.flexDirection}`,
        `Wrap: ${computedStyle.flexWrap}`,
        `Justify-content: ${computedStyle.justifyContent}`,
        `Align-items: ${computedStyle.alignItems}`,
        `Gap: ${computedStyle.gap}`
      ]);
    }
    
    // Add grid properties if applicable
    if (display.includes('grid')) {
      properties = properties.concat([
        '<strong>Grid Properties:</strong>',
        `Template-columns: ${computedStyle.gridTemplateColumns}`,
        `Template-rows: ${computedStyle.gridTemplateRows}`,
        `Auto-columns: ${computedStyle.gridAutoColumns}`,
        `Auto-rows: ${computedStyle.gridAutoRows}`,
        `Gap: ${computedStyle.gap}`
      ]);
    }
    
    // Update panel content
    panel.innerHTML = properties.join('<br>');
  }
  
  // Add debug toggle button
  function addDebugToggle() {
    // Remove existing toggle if present
    const existingToggle = document.getElementById('debug-toggle');
    if (existingToggle) {
      existingToggle.parentNode.removeChild(existingToggle);
    }
    
    // Create new toggle
    const toggle = document.createElement('div');
    toggle.id = 'debug-toggle';
    toggle.textContent = 'Debug CSS: OFF';
    
    // Add to document
    document.body.appendChild(toggle);
    
    // Toggle functionality
    toggle.addEventListener('click', function() {
      const isActive = document.body.classList.toggle('debug-active');
      toggle.textContent = `Debug CSS: ${isActive ? 'ON' : 'OFF'}`;
      
      // Show/hide debug elements
      const labels = document.querySelectorAll('.debug-element-label');
      labels.forEach(label => {
        label.style.display = isActive ? 'block' : 'none';
      });
      
      // Restore original positions when turning off
      if (!isActive) {
        document.querySelectorAll('[data-original-position]').forEach(el => {
          el.style.position = el.dataset.originalPosition;
        });
      } else {
        // Set position to relative when turning on
        document.querySelectorAll('[data-original-position]').forEach(el => {
          el.style.position = 'relative';
        });
      }
    });
  }
  
  // Clean up any existing debugger
  function cleanupDebugger() {
    // Remove existing style element
    const existingStyle = document.getElementById('css-debug-styles');
    if (existingStyle) {
      existingStyle.parentNode.removeChild(existingStyle);
    }
    
    // Remove existing debug elements
    const debugElements = document.querySelectorAll('[data-debug-element]');
    debugElements.forEach(el => {
      el.parentNode.removeChild(el);
    });
    
    // Remove debug classes from body
    document.body.classList.remove('debug-active');
    
    // Remove data attributes
    document.querySelectorAll('[data-debug-depth], [data-debug-element], [data-debug-display]').forEach(el => {
      el.removeAttribute('data-debug-depth');
      el.removeAttribute('data-debug-element');
      el.removeAttribute('data-debug-display');
    });
    
    // Restore original positions
    document.querySelectorAll('[data-original-position]').forEach(el => {
      el.style.position = el.dataset.originalPosition;
      el.removeAttribute('data-original-position');
    });
  }
  
  // Initialize or reset
  function initialize() {
    // Clean up existing debugger if present
    cleanupDebugger();
    
    // Add styles
    addDebugStyles();
    
    // Initialize debugger
    setTimeout(initDebugger, 100);
  }
  
  // Run on load
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initialize();
  } else {
    document.addEventListener('DOMContentLoaded', initialize);
  }
})();