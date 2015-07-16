var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

function checkBrowser() {
	if (BrowserDetect.browser == "Chrome") {
		document["imgBrowser"].src="/pics/pass4.jpg"; }
	else if (BrowserDetect.browser == "Firefox") {
		document["imgBrowser"].src="/pics/pass4.jpg"; }
	else if (BrowserDetect.browser == "Explorer") {
		if (parseFloat(browserVer) >= 8.0) {
 	       document["imgBrowser"].src="/pics/pass4.jpg";
		 }
	     else if (parseFloat(browserVer) < 8.0) {
		  	document["imgBrowser"].src="/pics/warn2.jpg";
	     }	}
	else { document["imgBrowser"].src="/pics/warn2.jpg";
}
	}

function checkPopups() {
	window.open("popup.html","popup","toolbar=no, width=250, height=250");
}

function checkCookies() {
   navigator.cookiesAreEnabled = checkCookiesAllow();
   if (navigator.cookiesAreEnabled) {
     document["imgCookies"].src="/pics/pass4.jpg";
   } 
}

function checkCookiesAllow() {
  setCookie( "moodlecheck", "ok" );
  if ( getCookies( "moodlecheck" ) ) {
    removeCookie( "moodlecheck" );
    return true;
  } else {
    return false;
  }
}

function setCookie( myCookie, value, expires, path, domain, secure ) {
  document.cookie = myCookie + "=" + escape (value) +
  ( ( expires ) ? "; expires=" + expires.toGMTString() : "" ) +
  ( ( path ) ? "; path=" + path : "" ) +
  ( ( domain ) ? "; domain=" + domain : "" ) +
  ( ( secure ) ? "; secure" : "" );
}

function getCookies( myCookie ) {
  var arg = myCookie + "=";
  var clen = document.cookie.length;
  var i = 0;
  var j = 0;
  while ( i < clen ) {
    j = i + arg.length;
    if ( document.cookie.substring(i, j) == arg ) 
      return getCookieVal(j);
    i = document.cookie.indexOf( " ", i ) + 1;
    if ( i == 0 ) 
      break;
  }
  return null;
}

function removeCookie( myCookie, path, domain ) {
  if ( getCookies( myCookie ) ) {
    document.cookie = myCookie + "=" +
    ( ( path ) ? "; path=" + path : "" ) +
    ( ( domain ) ? "; domain=" + domain : "" ) +
    "; expires=Mon, 01-Jan-07 00:00:01 GMT";
  }
}

function getCookieVal( offset ) {
  var endstr = document.cookie.indexOf ( ";", offset );
  if ( endstr == -1 ) endstr = document.cookie.length;
  return unescape( document.cookie.substring( offset, endstr ) );
}

function checkPorts() {
  if (document.images) {

    imgPort80URL = "/pics/pass4.jpg";
   	var imgPort80 = new Image();
	imgPort80.src = imgPort80URL;

    if (imgPort80.width = "100") {
       document["imgPort80"].src=imgPort80URL;
    }

   
    if (imgPort8011.width = "100") {
       document["imgPort8011"].src=imgPort8011URL;
    }*/
  }
}

function runChecks() {
  checkBrowser();
  document["imgJavaScript"].src="/pics/pass4.jpg";
  checkPorts();
  checkCookies();
  checkPopups();
}