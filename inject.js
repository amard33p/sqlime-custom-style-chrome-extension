// Create a <style> tag and inject the custom CSS
fetch(chrome.runtime.getURL('override.css'))
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);
  });

