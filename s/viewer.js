function writeshell(http)
{
	document.title = http.title;
	document.write(http.htmlcontent); 
	location.href = window.location.hash;  
}

function loadshell()
{
	var url = window.location.pathname;
	var url = url.replace("&", "_");
	var accesskey = url.split(".io/")[1].split("/")[0]
	var lookupvalue = url.split(".io/")[1]
	document.write("<head><title></title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script src=\"/s/viewer.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbzEH8Jp4P82eJQrMGndfwycyB3229YelQrQJwO2UIxkX0YveDc\/exec?lookup="+ lookupvalue +"&accesskey="+accesskey+"\"><\/script><\/head>");			
}

function passwordentry()
{
	var key = document.getElementById("dkey").value;
	window.location = "https://conquerhsc.github.io/"+key
}
// (C) 2020 conquerhsc. original from thsconline. used with permission.
