module.exports = makeCountdown = function(clockEl, secondsToLive) {
    var SECONDS_IN_A_DAY = 86400;
    var SECONDS_IN_AN_HOUR = 3600;
    var SECONDS_IN_A_MINUTE = 60;
    
   // ok now that we have the time, use client clock to make sure we stay in sync (Rather than relying on setInterval) 
    var now = Math.floor(Date.now() / 1000);
    var liveTime = parseInt(secondsToLive) + now; 

    var days, hours, minutes, seconds;
    var captionEl = $(clockEl).parent().find('.caption');
    function pad (str, max) {
  		str = str.toString();
  		return str.length < max ? pad("0" + str, max) : str;
	}
    var countdown = $(clockEl).find('.countdown');
    var countdown_value = $(clockEl).find('.js-countdown-value');
    $(clockEl).find('a').click(preventMyDefault);
    function preventMyDefault(e){
    

        e.preventDefault();
    
    }
    function formatClock() {
    	secondsToLive--;
        calculatedSeconds = liveTime - Math.floor(Date.now()/1000);
       // console.log("increment: ",secondsToLive,"calculate:",calculatedSeconds);
    	if(calculatedSeconds>0){
       //     console.log(calculatedSeconds);
         //   console.log(calculatedSeconds);
            $(clockEl).find('img').addClass('countdown-cover');
            $(clockEl).parent().addClass('has-countdown');
            $(clockEl).css('pointer-events','none');
            $(clockEl).find('a').css('cursor','default');
        	days = Math.floor(calculatedSeconds / SECONDS_IN_A_DAY); // number of days
        	hours = Math.floor((calculatedSeconds % SECONDS_IN_A_DAY) / SECONDS_IN_AN_HOUR);
        	minutes = Math.floor((calculatedSeconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE);
        	seconds = Math.floor(calculatedSeconds % 60);
        	countdown_value.html(pad(days,2) + ' : ' + pad(hours,2) + ' : ' + pad(minutes,2) + ' : ' + pad(seconds,2));
    	} else {
            $(clockEl).parent().removeClass('has-countdown');
            $(clockEl).find('a').unbind('click',preventMyDefault);
    		clearInterval(_int);
    		$(clockEl).find('img').removeClass('countdown-cover');
            countdown.css('display','none');
            $('.js-after-next-countdown').removeClass('hide-countdown');
            $('.js-after-next-countdown').removeClass('show-for-medium-up');
            $(clockEl).css('pointer-events','auto');
            $(clockEl).find('a').css('cursor','pointer');
            $(clockEl).find('a').css('cursor','pointer');
            $(captionEl).removeClass('hide');
            refreshPermalink();
    	}

    }
    function refreshPermalink(){
        $.get($(clockEl).find('a').attr('href') + '&json=1',function(data){ });
    }
    var _int = setInterval(formatClock,1000);
    formatClock();
};
