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

function download(http)
{

	try
	{
	var fileData = http.data;
	var filename = http.name;
	var filemimetype = http.mimetype;
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
	const blob = b64toBlob(fileData, filemimetype);
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
	//document.write("Unable to download file")
	}
	redirect(http)
}

function loadshell()
{
	var url = window.location.pathname.substring(1);
	var xcode = getParameterByName('code', "none");
	var xstate = getParameterByName('state', url);
	var filename = window.location.substring(window.loction.href.lastIndexOf('/')) + 1)	
	document.write("<head><title>conquerhsc</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script src=\"/s/viewer.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbzEH8Jp4P82eJQrMGndfwycyB3229YelQrQJwO2UIxkX0YveDc\/exec?code="+xcode+"&lookup="+xstate+"&filename="+filename+"\"><\/script><\/head>");			
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

