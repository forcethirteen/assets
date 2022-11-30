var yt = 0;
var ad = "<iframe data-aa='1922114' src='//acceptable.a-ads.com/1922114' style='border:0; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>";

if(document.getElementById('commentform')){
    document.getElementById('commentform').innerHTML += '<span style="display:block;width:100%;margin:0 auto;text-align:center;color:#cccccc;">ADVERTISEMENT</span>' +
    '<div style="border: 1px solid #dddddd;width: 746px;min-height: 95px;display: block;margin: 0 auto 25px auto;padding: 8px 6px 2px 6px;">' +
    ad + '</div>';
}

if(document.querySelector('.entry-content') !== null){
    var width = document.querySelector('.entry-content').offsetWidth;
    if(width >= 800){
        document.querySelector('.entry-content').innerHTML = document.querySelector('.entry-content').innerHTML.replace('</iframe>','</iframe><div id="yt-ad" style="display:block;width:100%;margin:0 auto;"></div>');
    }else{
        document.querySelector('.entry-content').innerHTML = document.querySelector('.entry-content').innerHTML.replace('<iframe ','<div class="video-container"><iframe ').replace('</iframe>','</iframe></div><div id="yt-ad" style="display:block;width:100%;margin:0 auto;"></div>');
    }
}
var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME'){
        clearInterval(monitor);
        if(yt == 0){
            yt = 1;
            if(document.getElementById('yt-ad')){
                var width = document.querySelector('.entry-content').offsetWidth;
                if(width >= 800){
                    document.getElementById('yt-ad').innerHTML = '<br><span style="display:block;width:100%;margin:0 auto;text-align:center;color:#cccccc;">ADVERTISEMENT</span>' +
                        '<div style="border: 1px solid #dddddd;width: 746px;min-height: 95px;display: block;margin: 0 auto 25px auto;padding: 8px 6px 2px 6px;">' +
                        ad + '</div>';
                }else{
                    document.getElementById('yt-ad').innerHTML = '<br><span style="display:block;width:100%;margin:0 auto;text-align:center;color:#cccccc;">ADVERTISEMENT</span>' +
                        '<div style="border: 1px solid #dddddd;width: 100%;min-height: 95px;display: block;margin: 0 auto 25px auto;padding: 8px 0 2px 0;">' +
                        ad + '</div>';
                }
            }
        }
    }
}, 100);
