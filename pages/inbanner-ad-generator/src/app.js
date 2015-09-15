$(function(){
	// template読み込み
	$.get("src/template.html", function(data){
		window.obj = data;
	});
	
	$('#btn_generate').click(function(){
		var video_url = $('#video_url').val(),
			click_url = $('#click_url').val(),
			imp_url = $('#imp_url').val(),
			comp_url = $('#comp_url').val(),
			firstQ_url = $('#25_url').val(),
			half_url = $('#50_url').val(),
			thirdQ_url = $('#75_url').val(),
			size_id = $('#size').val(),
			template = window.obj,
			imp_track = '',
			comp_track = '',
			event_track = '';
		
		if(!video_url || !click_url) {
			window.alert('*のついている項目は必須項目です。');
			return;
		}
		
		var video_baseurl = video_url.slice(0, -4);
		var width = (size_id == 1) ? 300 : 448;
		var height = (size_id == 1) ? 250 : 252;
		var left = (size_id == 1) ? 3 : 5;
		if(imp_url) {
			imp_track += 'var obj = document.createElement("img");';
			imp_track += 'obj.src = "'+imp_url+'";';
			imp_track += 'obj.style.display = "none";';
			imp_track += 'video.parentNode.insertBefore(obj, video);';
		};
		if(comp_url) {
			comp_track += 'video.addEventListener("ended", function() {';
			comp_track += 'var obj = document.createElement("img");';
			comp_track += 'obj.src = "'+comp_url+'";';
			comp_track += 'obj.style.display = "none";';
			comp_track += 'video.parentNode.insertBefore(obj, video);';
			comp_track += '}, false);';
		};
		if(firstQ_url || half_url || thirdQ_url) {
			event_track += 'video.addEventListener("timeupdate", function() {';
			if(!firstQ_url) event_track += 'firstQ = false;';
			if(!half_url) event_track += 'half = false;';
			if(!thirdQ_url) event_track += 'thirdQ = false;';
			event_track += 'if(firstQ && video.currentTime > video.duration * 0.25) {var obj = document.createElement("img");obj.src = "';
			event_track += firstQ_url;
			event_track += '";obj.style.display = "none";video.parentNode.insertBefore(obj, video);firstQ = false;}else if(half && video.currentTime > video.duration * 0.5) {var obj = document.createElement("img");obj.src = "';
			event_track += half_url;
			event_track += '";obj.style.display = "none";video.parentNode.insertBefore(obj, video);half = false;}else if(thirdQ && video.currentTime > video.duration * 0.75) {var obj = document.createElement("img");obj.src = "';
			event_track += thirdQ_url;
			event_track += '";obj.style.display = "none";video.parentNode.insertBefore(obj, video);half = false;}';
			event_track += '}, false);';
		}
		var auto_play = $('#autoplay').prop('checked') ? 'video.addEventListener("loadeddata", function() { video.play() },false);' : '';
		
		template = template.replace(/{PLACE_MP4}/g, video_baseurl+".mp4");
		template = template.replace(/{PLACE_WEBM}/g, video_baseurl+".webm");
		template = template.replace(/{PLACE_FLV}/g, video_baseurl+".flv");
		template = template.replace(/{PLACE_CLICKURL}/g, click_url);
		template = template.replace(/{WIDTH}/g, width);
		template = template.replace(/{HEIGHT}/g, height);
		template = template.replace(/{LEFT}/g, left);
		template = template.replace(/{IMP_TRACK}/g, imp_track);
		template = template.replace(/{COMP_TRACK}/g, comp_track);
		template = template.replace(/{EVENT_TRACK}/g, event_track);
		template = template.replace(/{AUTO_PLAY}/g, auto_play);

		console.log(template);
		$('textarea').val(template);
	});
});