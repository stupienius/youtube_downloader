const videoUrl = document.querySelector('video').src;
chrome.runtime.sendMessage({ action: 'download', url: videoUrl });
