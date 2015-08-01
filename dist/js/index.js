$('document').ready(function(){
	setInterval(function(){
		$.getJSON('http://api.open-notify.org/iss-now.json?callback=?',function(data){
			$('#lat').html(data.iss_position.latitude);
			$('#lon').html(data.iss_position.longitude);
			$('#googlemap').attr('src',"https://maps.googleapis.com/maps/api/js?key=AIzaSyAF_ls43ayIqKQMbJFCDv6HtpKgEgvIEjg&q=loc:"+ data.iss_position.latitude +"+"+data.iss_position.longitude);
		})
	},2000)
});