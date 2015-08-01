$('document').ready(function(){
	setInterval(function(){
		$.getJSON('http://api.open-notify.org/iss-now.json?callback=?',function(data){
			$('#lat').html(data.iss_position.latitude);
			$('#lon').html(data.iss_position.longitude);
		})
	},2000)
});