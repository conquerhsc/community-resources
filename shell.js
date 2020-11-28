function writeshell(http)
{
	document.title = http.title;
	document.write(http.htmlcontent); 
	location.href = window.location.hash;  
}
function redirect(http)
{
	window.location = http.newurl;
}


function loadshell()
{
	var url = window.location.pathname.substring(1);
	var xcode = getParameterByName('code', "none");
	var xstate = getParameterByName('state', url);
		
	document.write("<head><title>conquerhsc</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script src=\"/s/viewer.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbzEH8Jp4P82eJQrMGndfwycyB3229YelQrQJwO2UIxkX0YveDc\/exec?code="+xcode+"&lookup="+xstate+"\"><\/script><\/head>");			
}

function passwordentry()
{
	var key = document.getElementById("dkey").value;
	window.location = "https://conquerhsc.github.io/"+key
}
function getParameterByName(name, defaultx, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultx;
    if (!results[2]) return defaultx;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// (C) 2020 conquerhsc. original from thsconline. used with permission.

