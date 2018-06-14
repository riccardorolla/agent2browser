var fs  = require("fs");
var array = fs.readFileSync("browsercap.txt").toString().split('\n');
var Browscap = require('browscap-js');
var browscap = new Browscap();

array.forEach(function(element) {
	var browser = browscap.getBrowser(element.trim().replace('\n','').toString())
 
    console.log(element.trim().split(' ').join('+') + "," + browser.Parent+","+
				browser.Browser_Bits +","+
				browser.Platform  + ","+
				browser.Platform_Description + ","+
				browser.Platform_Bits + ","+
				browser.Platform_Version + ","+
				browser.Browser + ","+
				browser.Version + ","+
				browser.Comment+","+
				browser.Browser_Modus 
			

				);
});