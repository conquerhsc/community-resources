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
	var queryx = url.split("/s/")[1].split("/")[0]
		
	switch(queryx)
	{
	case "download":
	try
	{
		var rest = url.split("/s/view/")[1]
		window.location = "https://thsconline.github.io/s/v/"+rest
	}

	catch(err)
	{
		window.location = "/s/"
	}			
	break;		
	case "app":
	case "cmdtool":
	case "cli":
	window.location = "/cli/"
	break;
	case "d":
		try
		{
			var viewno = url.split("/s/d/")[1].split("/")[0]
			var titlex = url.split("/s/d/")[1].split("/")[1]
			document.write("<html><body>&nbsp;<script src=\"\/s\/download.js\" type=\"text\/javascript\"></script><script type=\"application/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbx69GPoJtf9sSevsUbWtPr46vpa01u4oNkHjFmkkWxmj62AZ0q-\/exec?export=data&field="+titlex+"&base="+viewno+"\"></script></body></html>");
			document.title = unescape(titlex);
		}
		catch(err)
		{
			window.location = "/s/"
		}
		break;
		
	case "frenzy":
	try
	{
		var rest = url.split("/s/frenzy/")[1]
		window.location = "https://thsconline.github.io/s/fz/"+rest
	}
			
	catch(err)
	{
		window.location = "/s/fz/"
	}
	break;			
	case "fz":	
		try
		{
			var dkey = url.split("/s/fz/")[1].split("/")[0]
			var serve = url.split("/s/fz/")[1].split("/")[1]
			if(dkey == "add" || dkey == "legacycode")
			{
				if(dkey == "add")
				{
					window.location = "https://script.google.com/macros/s/AKfycbwC-lfayYHGsDeJKj-qdhiEUFbJS8GnCJg40R9SNhwXkypkIObK/exec"
				}
				if(dkey == "legacycode")
				{
					window.location = "https://script.google.com/macros/s/AKfycbx1Kjw1qniJW7HXsNSMeyJeQ45BzdCFlcEXouvlvb6he15FPHg/exec?rtype=LEGACYCODE&serve="+serve
				}
			}
			else
			{
				document.write("<head><title>thsconline (loading...)</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
				document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
				document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
				document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\" />")
				document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
				document.write("<script src=\"/s/viewer.js\" type=\"text\/javascript\"><\/script>");
				document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbx1Kjw1qniJW7HXsNSMeyJeQ45BzdCFlcEXouvlvb6he15FPHg\/exec?rtype=JSONP&serve="+ serve +"&dkey="+dkey+"\"><\/script><\/head>");
			}
		}
		catch(err)
		{
			window.location = "/s/"
		}	
		break;
	
	case "images":
		document.write("")
	break;
	case "pkey":
		var date = new Date()
  		var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;

		var checkv = url.split("/s/pkey/")[1].split("/")[0]
		if(checkv == "yesterday")
			{
				checkv = -1;
			}
			if(checkv == "today")
			{
				checkv = 0;
			}
			if(checkv == "tomorrow")
			{
				checkv = 1
			}
		var checkw = url.split("/s/pkey/")[1].split("/")[1]
		var checkx = url.split("/s/pkey/")[1].split("/")[2]
		var key = (Math.floor(date.getTime()/MILLIS_PER_DAY)+25569+-(1-checkv)+1)*117
		if(checkw == "print" && checkx == "key")
		{			
			document.write(key)	
		}
	break;
	case "upload":
		window.location = "/s/upload/"
	break;
	case "view":
	try
	{
		var rest = url.split("/s/view/")[1]
		window.location = "https://thsconline.github.io/s/v/"+rest
	}
	catch(err)
	{
		window.location = "/s/"
	}
	break;
	case "v_standalone":
	var viewno = url.split("/s/v_standalone/")[1].split("/")[0]
	var titlex = url.split("/s/v_standalone/")[1].split("/")[1]		
	if(window.self !== window.top)
			{
				//win=window.open("about:blank","_blank");
				//if (window.focus) {win.focus()}
			}
			else
			{
				win=window.open("about:blank","_self");
				if (window.focus) {win.focus()}		
			}
			win.document.write("<html><head><title>"+titlex+"</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
			win.document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_pdf2.png\">");
			win.document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\">");
			win.document.write("<style>html, body {height:100% !important;}</style>");
			win.document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
			win.document.write("<\/head><body>");
			win.document.write("<iframe style=\"width:100%; height:96%;\" height=\"96%\" sandbox=\"allow-scripts allow-popups allow-pointer-lock allow-presentation allow-same-origin allow-modals allow-top-navigation allow-downloads\" allowscripts=\"1\" allowdownloads=\"1\" allowfullscreen=\"1\" frameborder=\"0\" id=\"viewer\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbx69GPoJtf9sSevsUbWtPr46vpa01u4oNkHjFmkkWxmj62AZ0q-\/exec?&export=view&field="+titlex+"&base="+viewno+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
			win.document.write("</body></html>"); 	 
			win.document.title = unescape(titlex);			
	break;
	case "v":
		try
		{
			var viewno = url.split("/s/v/")[1].split("/")[0]
			var titlex = url.split("/s/v/")[1].split("/")[1]	
			if(window.self !== window.top)
			{
				win=window.open("about:blank","_blank");
				if (window.focus) {win.focus()}
			}
			else
			{
				win=window.open("about:blank","_self");
				if (window.focus) {win.focus()}		
			}
			win.document.write("<html><head><title>"+titlex+"</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
			win.document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_pdf2.png\">");
			win.document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\">");
			win.document.write("<style>html, body {height:100% !important;}</style>");
			win.document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
			win.document.write("<\/head><body>");			
			win.document.write("<div id=\"overlaybar\" style=\"z-index:1000\; width:100%;\">"+ unescape(titlex) +"<span id=\"overlayinsert\" style=\"float:right !Important\"><a target=\"_blank\" href=\"https://thsconline.github.io/s/d/"+viewno+"/"+titlex+"\" class=\"border\">Download File<\/a>&nbsp;&nbsp;<a class=\"border\" href=\"#v\" onclick=\"window.close()\">Close &#215;</span></div><br>")
			win.document.write("<iframe style=\"width:100%; height:96%;\" height=\"96%\" sandbox=\"allow-scripts allow-popups allow-pointer-lock allow-presentation allow-same-origin allow-modals allow-top-navigation allow-downloads\" allowscripts=\"1\" allowdownloads=\"1\" allowfullscreen=\"1\" frameborder=\"0\" id=\"viewer\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbx69GPoJtf9sSevsUbWtPr46vpa01u4oNkHjFmkkWxmj62AZ0q-\/exec?&export=view&field="+titlex+"&base="+viewno+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
			win.document.write("</body></html>"); 	 
			win.document.title = unescape(titlex);
		}
		catch(err)
		{
			window.location = "/s/"
		}
	break;
	case "yr9":
	try
	{
		var rest = url.split("/s/yr9/")[1]
		window.location = "https://thsconline.github.io/s/files/yr9/"+rest
	}
	catch(err)
	{
		window.location = "/s/"
	}
	break;
	case "yr10":
	try
	{
		var rest = url.split("/s/yr10/")[1]
		window.location = "https://thsconline.github.io/s/files/yr10/"+rest
	}
	catch(err)
	{
		window.location = "/s/"
	}
	break;
	case "yr11":
	try
	{
		var rest = url.split("/s/yr11/")[1]
		window.location = "https://thsconline.github.io/s/files/yr11/"+rest
	}
	catch(err)
	{
		window.location = "/s/"
	}
	break;
	case "yr12":
	try
	{
		var rest = url.split("/s/yr12/")[1]
		window.location = "https://thsconline.github.io/s/files/yr12/"+rest
	}
	catch(err)
	{
		window.location = "/s/"
	}
	break;
	default:
		window.location = "/s/"
	break;
	}
}

function pdf(input, viewno)
{
    var titlex = input.innerHTML;
	
	
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	 window.open("https://thsconline.github.io/s/v/"+viewno+"/"+titlex);	    
  }
    else
    {

    try
    {
	document.getElementById("overlaybar").parentNode.removeChild(document.getElementById("overlaybar"))
    }
    catch(err)
    {
    }
	    
   var i = document.createElement('div');	    
   document.body.appendChild(i);
   i.innerHTML = "<div id=\"overlaybar\" style=\"position: fixed; z-index:100; bottom: 20px !important; left: 0px; height:20px; width:100%;\">"+ titlex +"<span id=\"overlayinsert\" style=\"float:right !Important\"><a target=\"_blank\" href=\"https://thsconline.github.io/s/v/"+viewno+"/"+titlex+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">View File<\/a>&nbsp;&nbsp;<a target=\"_blank\" href=\"https://thsconline.github.io/s/d/"+viewno+"/"+titlex+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\" >Download File<\/a>&nbsp;&nbsp;<a class=\"border\" href=\"#v\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">Close &#215;</span></div><br>"
   
   /* var i = document.createElement('iframe');
    i.style.display = 'none';
    i.src = "https://thsconline.github.io/s/v/"+viewno+"/"+titlex;
    document.body.appendChild(i);*/
//	setTimeout(function(){document.getElementById("overlaybar").parentNode.removeChild(document.getElementById("overlaybar"));}, 10000);
	    }
   
    
    return false;
}

String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
      }

function jumpToCollection() {
    	var searchidx = document.getElementById("serve").value;
    	var qx = document.getElementById("selector").value;
 	var key = document.getElementById("dkey").value;
     	window.location = "https://thsconline.github.io/s/fz/"+key+"/"+searchidx+"/"
}

function passwordentry()
{
	var key = document.getElementById("dkey").value;
	window.location = "https://thsconline.github.io/s/fz/"+key+"/home/"
}

function toggleView(id1, id2)
{
    var x = document.getElementById(id1).style.display;
    var y = document.getElementById(id2).style.display;   
    
    document.getElementById(id2).style.display=x;
    document.getElementById(id1).style.display=y;
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
