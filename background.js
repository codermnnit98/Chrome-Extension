
chrome.browserAction.onClicked.addListener(function(tab){
chrome.windows.getAll({populate:true},function(windows){
	windows.forEach(function(window){
		window.tabs.forEach(function(tab){
			var str=tab.url;
			if(str.includes("facebook")||str.includes("twitter")||str.includes("instagram")||str.includes("youtube")||str.includes("whatsapp")||str.include("netflix"))
			{
				chrome.tabs.remove(tab.id);
			}	
		});
	});
});

var newURL = "https://stackoverflow.com/";
chrome.tabs.create({ url: newURL });
newURL="https://codechef.com/";
chrome.tabs.create({url:newURL});
newURL="https://www.geeksforgeeks.org/"
chrome.tabs.create({url:newURL});
newURL="https://www.codeforces.com/"
chrome.tabs.create({url:newURL});
newURL="https://www.atcoder.jp/"
chrome.tabs.create({url:newURL});
	

});
