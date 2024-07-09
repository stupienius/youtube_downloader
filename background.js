chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['content.js']
	});
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'download') {
		chrome.downloads.download({
			url: request.url,
			filename: 'video.mp4'
		});
	}
});
