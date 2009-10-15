$(document).ready(
	function(){
		var params = { allowScriptAccess: "always", bgcolor: "#cccccc" };
		$('#player1').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer1',
				width: 460,
				height: 259,
				params: params,
				attrs: {
					id: 'ytplayer1'
				}
			}
		);
		$('#player2').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer2',
				width: 460,
				height: 259,
				params: params,
				attrs: {
					id: 'ytplayer2'
				}
			}
		);
		$('#player3').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer3',
				width: 460,
				height: 259,
				params: params,
				attrs: {
					id: 'ytplayer3'
				}
			}
		);
		$('#player4').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer4',
				width: 460,
				height: 259,
				params: params,
				attrs: {
					id: 'ytplayer4'
				}
			}
		);
		
		// Check for parameters in Url:
		parseParamsFromUrl();
		// Write back, in case we have loaded with example default settings:
		refreshParamsUrl();
		$('.refreshParamsUrlTrigger').change(function(){
			refreshParamsUrl();
		});
		$('.reloadVideosTrigger').change(function(){
			loadVideos();
		});
		$('.refreshTimelineTrigger').change(function(){
			refreshTimeline();
		});
	}
);

var currentPosition=0;

function onYouTubePlayerReady(playerId){
	//$('#ytplayer1')[0].loadVideoById("ifAfhXtzQfc", 1);
	//$('#ytplayer1')[0].playVideo();
	loadVideos();
}

function start(){
	startTimeline();
}

function loadVideos(){
	$('#ytplayer1')[0].loadVideoById($('#videoUrl1').val(), 0,'small');
	$('#ytplayer1')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer1')[0].pauseVideo();
	
	$('#ytplayer2')[0].loadVideoById($('#videoUrl2').val(), 0,'small');
	$('#ytplayer2')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer2')[0].pauseVideo();
	
	$('#ytplayer3')[0].loadVideoById($('#videoUrl3').val(), 0,'small');
	$('#ytplayer3')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer3')[0].pauseVideo();
	
	$('#ytplayer4')[0].loadVideoById($('#videoUrl4').val(), 0,'small');
	$('#ytplayer4')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer4')[0].pauseVideo();
	$(this).oneTime(2000, function(){
		refreshTimeline();
		} );
}
function startTimeline(){
	$(this).oneTime(parseInt($('#videoDelay1').val())+1, function() {
		$('#ytplayer1')[0].playVideo();
	});
	$(this).oneTime(parseInt($('#videoDelay2').val())+1, function() {
		$('#ytplayer2')[0].playVideo();
	});
	$(this).oneTime(parseInt($('#videoDelay3').val())+1, function() {
		$('#ytplayer3')[0].playVideo();
	});
	$(this).oneTime(parseInt($('#videoDelay4').val())+1, function() {
		$('#ytplayer4')[0].playVideo();
	});
	$(this).everyTime(500,"timelineProgress",function(){
		refreshTimelineProgress();
	});
	currentPosition=0;
}
function stopAll(){
	// Stop progress marker:
	$(this).stopTime("timelineProgress");
	currentPosition=0;
	refreshTimelineProgress();
	// Reset videos:
	loadVideos();
	/*
	$('#ytplayer1')[0].seekTo(0,true);
	$('#ytplayer1')[0].stopVideo();
	$('#ytplayer2')[0].seekTo(0,true);
	$('#ytplayer2')[0].stopVideo();
	$('#ytplayer3')[0].seekTo(0,true);
	$('#ytplayer3')[0].stopVideo();
	$('#ytplayer4')[0].seekTo(0,true);
	$('#ytplayer4')[0].stopVideo();*/
}

function onPlayerStateChange(newState){
	if(
		$('#ytplayer1')[0].getPlayerState()==2 &&
		$('#ytplayer2')[0].getPlayerState()==2 &&
		$('#ytplayer3')[0].getPlayerState()==2 &&
		$('#ytplayer4')[0].getPlayerState()==2
		){
		}
}

function parseParamsFromUrl(){
	if(getQueryVariable('delay1')){
		$('#videoDelay1').val(
			getQueryVariable('delay1')
			);
	}
	if(getQueryVariable('delay2')){
		$('#videoDelay2').val(
			getQueryVariable('delay2')
			);
	}
	if(getQueryVariable('delay3')){
		$('#videoDelay3').val(
			getQueryVariable('delay3')
			);
	}
	if(getQueryVariable('delay4')){
		$('#videoDelay4').val(
			getQueryVariable('delay4')
			);
	}
	
	if(getQueryVariable('video1')){
		$('#videoUrl1').val(
			getQueryVariable('video1')
			);
	}
	if(getQueryVariable('video2')){
		$('#videoUrl2').val(
			getQueryVariable('video2')
			);
	}
	if(getQueryVariable('video3')){
		$('#videoUrl3').val(
			getQueryVariable('video3')
			);
	}
	if(getQueryVariable('delay4')){
		$('#videoUrl4').val(
			getQueryVariable('video4')
			);
	}
}
function refreshParamsUrl(){
	$('#paramsUrl').val(
		'http://joux.github.com/poy/'+
		'?'+
		'video1='+$('#videoUrl1').val()+'&'+
		'delay1='+$('#videoDelay1').val()+'&'+
		'video2='+$('#videoUrl2').val()+'&'+
		'delay2='+$('#videoDelay2').val()+'&'+
		'video3='+$('#videoUrl3').val()+'&'+
		'delay3='+$('#videoDelay3').val()+'&'+
		'video4='+$('#videoUrl4').val()+'&'+
		'delay4='+$('#videoDelay4').val()
		);
}

function refreshTimeline(){
	duration1=$('#ytplayer1')[0].getDuration();
	duration2=$('#ytplayer2')[0].getDuration();
	duration3=$('#ytplayer3')[0].getDuration();
	duration4=$('#ytplayer4')[0].getDuration();
	
	delay1=parseInt($('#videoDelay1').val())/1000;
	delay2=parseInt($('#videoDelay2').val())/1000;
	delay3=parseInt($('#videoDelay3').val())/1000;
	delay4=parseInt($('#videoDelay4').val())/1000;
	// Determine longest timeline element:
	timelineLength=0;
	if(duration1+delay1>timelineLength){
		timelineLength=duration1+delay1;
	}
	if(duration2+delay2>timelineLength){
		timelineLength=duration2+delay2;
	}
	if(duration3+delay3>timelineLength){
		timelineLength=duration3+delay3;
	}
	if(duration4+delay4>timelineLength){
		timelineLength=duration4+delay4;
	}
	
	pixelsPerSecond=940/timelineLength;
	$('#clip1').css('margin-left',delay1*pixelsPerSecond);
	$('#clip1').css('width',duration1*pixelsPerSecond);
	$('#clip2').css('margin-left',delay2*pixelsPerSecond);
	$('#clip2').css('width',duration2*pixelsPerSecond);
	$('#clip3').css('margin-left',delay3*pixelsPerSecond);
	$('#clip3').css('width',duration3*pixelsPerSecond);
	$('#clip4').css('margin-left',delay4*pixelsPerSecond);
	$('#clip4').css('width',duration4*pixelsPerSecond);
}
function refreshTimelineProgress(){
	$('#progressMarker').css('width',currentPosition*pixelsPerSecond);
	currentPosition+=pixelsPerSecond/2;
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  return false;
}