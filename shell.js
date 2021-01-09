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

function downloadfile(myobject)
{	
	try
	{
	var fileData = myobject.data;
	var filename = myobject.name;
	var mimetype = myobject.mimetype;
	var idx = myobject.alturl
	var bn="https://drive.google.com/uc?export=download&id="+idx;
	document.write("<body><b>Downloading file: </b>"+filename+"<br><br><a target=\"_blank\" href=\""+bn+"\">Try Alternate Download Link</a></body>");
	const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
		const byteCharacters = atob(b64Data);
		const byteArrays = [];

		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize)
		{
			const slice = byteCharacters.slice(offset, offset + sliceSize);
			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++)
			{
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}
		const blob = new Blob(byteArrays, {type: contentType});
		return blob;
	}
	const blob = b64toBlob(fileData, mimetype);
	//const blobUrl = URL.createObjectURL(blob);

	 if (window.navigator.msSaveOrOpenBlob) {
	    window.navigator.msSaveOrOpenBlob(blob, filename);
	  } else {
	    const a = document.createElement('a');
	    document.body.appendChild(a);
	    const url = window.URL.createObjectURL(blob);
	    a.href = url;
	    a.download = filename;
	    a.click();
	    setTimeout(() => {
	      window.URL.revokeObjectURL(url);
	      document.body.removeChild(a);
	    }, 0)
	  }	

     	
	}
	catch(err)
	{
	var filename = url.substring(url.lastIndexOf('/')+1);
	document.write("<body style=\"font-color:red; !important\"><b>Downloading failed for file: </b>"+filename+"<br><br><a target=\"_blank\" href=\""+bn+"\">Try Alternate Download Link</a></body>");	 
	}
	setTimeout(function(){redirect(myobject)}, 2000);
	
}

function loadshell()
{
	
	
	var url = window.location.pathname.substring(1);
	var xstate = getParameterByName('state', url);
	try
	{
	var filename = url.substring(url.lastIndexOf('/')+1);
	}
	catch(err){filename = "index.html"}


	var checkforthsc = decodeURI(url.replace("community-resources/", "").split("/")[2])
	document.write("<head><title>conquerhsc</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	document.write("<link href=\"\/community-resources/style.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	if(url.indexOf("/download/") != -1)
	{
		document.write("<i id=\"loadingbar\">Preparing file for download...</i>");	
	}
	else
	{
		document.write("<i id=\"loadingbar\">Loading folder information...</i>");
	}
	
	document.write("<script src=\"/community-resources/shell.js\" type=\"text\/javascript\"><\/script>");
	
	if(checkforthsc == "thsconline collection" || checkforthsc == "thsconline" || checkforthsc == "thsc" || checkforthsc == "d!6hzY29ub!6lu!2S!8jb2xs!2WN0aW9u")
	{
	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbzJVgMEP1pkZSErbMpS7mVHVvuAiOSvEb8xzfRLEveVZsROMJ-Z\/exec?lookup="+xstate+"&filename="+filename+"\"><\/script><\/head>");			
	
	}
	else
	{
	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbzEH8Jp4P82eJQrMGndfwycyB3229YelQrQJwO2UIxkX0YveDc\/exec?lookup="+xstate+"&filename="+filename+"\"><\/script><\/head>");			
	
	}

	document.querySelector("#loadingbar").style.display = "none";
	
}


function authshell()
{
	var xcode = window.location.hash.substring(1);
	document.write("<head><title>conquerhsc</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	document.write("<link href=\"\/community-resources/style.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script src=\"/community-resources/shell.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbysGuB2ZXkN7ygxnY-WoMusX-FMOwWkW4mwlQ3LhR8mBRIBvyc\/exec?"+xcode+"\"><\/script><\/head>");			
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

