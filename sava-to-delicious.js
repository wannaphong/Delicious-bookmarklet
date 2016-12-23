var title = document.getElementsByTagName("title")[0].innerHTML;
var url = "https://del.icio.us/save/get_iframe_savelink?url="+document.location+";title="+title;
var win = window.open(url, '_blank');
win.focus();
