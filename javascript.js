var yt = 0;
/*var ad = "<iframe class='a-ads' data-aa='1922114' src='//ad.a-ads.com/1922114?size=728x90' style='width:728px;height:90px;border:0;padding:0;overflow:hidden;background-color:transparent;'></iframe>";*/
var ad = "<iframe data-aa='1922114' src='//acceptable.a-ads.com/1922114' style='border:0; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>";
if(window.location.href.indexOf('force-13.com/cyclone-tracker') != -1){
    if(document.getElementById('commentform')){
        document.getElementById('commentform').innerHTML += '<span style="display:block;width:100%;margin:0 auto;text-align:center;color:#cccccc;">ADVERTISEMENT</span>' +
            '<div style="border: 1px solid #dddddd;width: 746px;min-height: 95px;display: block;margin: 0 auto 25px auto;padding: 8px 6px 2px 6px;">' +
            ad + '</div>';
    }
    if(document.getElementById('layer01')){
        document.getElementById('layer01').style.display = 'block';
        document.getElementById('layer01').style.background = 'url(\'https://vortex.plymouth.edu/mapwall/goes/irg/gbsat.24.png\')';
        document.getElementById('layer01').style.backgroundPosition = '488px 49%';
        document.getElementById('layer01').style.backgroundSize = '100%';
    }
    if(document.getElementById('satinfo')){
        document.getElementById('satinfo').style.display = 'block';
        var d = new Date();
        var satInfoYear = d.getUTCFullYear();
        var satInfoMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        satInfoMonth = satInfoMonth[d.getUTCMonth()];
        var satInfoDay = d.getUTCDate();
        var satInfoHour = d.getUTCHours();
        if(satInfoHour == 0){
            satInfoHour = '21';
            var myPastDate = new Date();
            myPastDate.setDate(myPastDate.getDate() - 1);
            satInfoDay = myPastDate.toUTCString().split(' ')[1];
            satInfoMonth = myPastDate.toUTCString().split(' ')[2];
            satInfoYear = myPastDate.toUTCString().split(' ')[3];
            if(satInfoMonth == "Jan"){
                satInfoMonth = "January";
            }else if(satInfoMonth == "Feb"){
                satInfoMonth = "February";
            }else if(satInfoMonth == "Mar"){
                satInfoMonth = "March";
            }else if(satInfoMonth == "Apr"){
                satInfoMonth = "April";
            }else if(satInfoMonth == "Jun"){
                satInfoMonth = "June";
            }else if(satInfoMonth == "Jul"){
                satInfoMonth = "July";
            }else if(satInfoMonth == "Aug"){
                satInfoMonth = "August";
            }else if(satInfoMonth == "Sep"){
                satInfoMonth = "September";
            }else if(satInfoMonth == "Oct"){
                satInfoMonth = "October";
            }else if(satInfoMonth == "Nov"){
                satInfoMonth = "November";
            }else if(satInfoMonth == "Dec"){
                satInfoMonth = "December";
            }
        }else if(satInfoHour >= 1 && satInfoHour <= 3){
            satInfoHour = '00';
        }else if(satInfoHour >= 4 && satInfoHour <= 6){
            satInfoHour = '03';
        }else if(satInfoHour >= 7 && satInfoHour <= 9){
            satInfoHour = '06';
        }else if(satInfoHour >= 10 && satInfoHour <= 12){
            satInfoHour = '09';
        }else if(satInfoHour >= 13 && satInfoHour <= 15){
            satInfoHour = '12';
        }else if(satInfoHour >= 16 && satInfoHour <= 18){
            satInfoHour = '15';
        }else if(satInfoHour >= 19 && satInfoHour <= 21){
            satInfoHour = '18';
        }else if(satInfoHour >= 22){
            satInfoHour = '21';
        }
        if(satInfoDay == "01"){
            satInfoDay = "1st";
        }else if(satInfoDay == "02"){
            satInfoDay = "2nd";
        }else if(satInfoDay == "03"){
            satInfoDay = "3rd";
        }else if(satInfoDay == "04"){
            satInfoDay = "4th";
        }else if(satInfoDay == "05"){
            satInfoDay = "5th";
        }else if(satInfoDay == "06"){
            satInfoDay = "6th";
        }else if(satInfoDay == "07"){
            satInfoDay = "7th";
        }else if(satInfoDay == "08"){
            satInfoDay = "8th";
        }else if(satInfoDay == "09"){
            satInfoDay = "9th";
        }else if(satInfoDay == "21" || satInfoDay == "31"){
            satInfoDay += "st";
        }else if(satInfoDay == "22"){
            satInfoDay = "22nd";
        }else if(satInfoDay == "23"){
            satInfoDay = "23rd";
        }else{
            satInfoDay += "th";
        }

        document.getElementById('satinfo').innerHTML = "Satellite composite created on " + satInfoMonth + " " + satInfoDay + ", " + satInfoYear + " at " + satInfoHour + ":00 UTC";
    }
    if(document.getElementById('validUTC')){
        document.getElementById('validUTC').style.height = 'auto';
    }
    if(document.getElementById('validDATE')){
        document.getElementById('validDATE').style.height = 'auto';
    }
    if(document.querySelector('.entry-content') !== null){
        document.querySelector('.entry-content').innerHTML = document.querySelector('.entry-content').innerHTML.replace(/="stormNo">/g,'="stormNo" style="line-height:2px;">');
        document.querySelector('.entry-content').innerHTML = document.querySelector('.entry-content').innerHTML.replace(/gif"/g,'gif?' + satInfoMonth + "_" + satInfoDay + "_" + satInfoYear + "-" + satInfoHour + '00Z"');
    }
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
