$(document).ready(
	function(){
		var params = { allowScriptAccess: "always", bgcolor: "#cccccc" };
		$('#player1').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer1',
				width: 480,
				height: 270,
				params: params,
				attrs: {
					id: 'ytplayer1'
				}
			}
		);
		$('#player2').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer2',
				width: 480,
				height: 270,
				params: params,
				attrs: {
					id: 'ytplayer2'
				}
			}
		);
		$('#player3').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer3',
				width: 480,
				height: 270,
				params: params,
				attrs: {
					id: 'ytplayer3'
				}
			}
		);
		$('#player4').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer4',
				width: 480,
				height: 270,
				params: params,
				attrs: {
					id: 'ytplayer4'
				}
			}
		);
		
	}
);

function onYouTubePlayerReady(playerId){
	//$('#ytplayer1')[0].loadVideoById("ifAfhXtzQfc", 1);
	//$('#ytplayer1')[0].playVideo();
}

function start(){
	loadVideos();
	// Give clips some time to load before starting them:
	$(this).oneTime(2000, function(){startTimeline();} )
}

function loadVideos(){
	$('#ytplayer1')[0].loadVideoById($('#videoUrl1').val(), 0);
	$('#ytplayer1')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer1')[0].pauseVideo();
	
	$('#ytplayer2')[0].loadVideoById($('#videoUrl2').val(), 0);
	$('#ytplayer2')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer2')[0].pauseVideo();
	
	$('#ytplayer3')[0].loadVideoById($('#videoUrl3').val(), 0);
	$('#ytplayer3')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer3')[0].pauseVideo();
	
	$('#ytplayer4')[0].loadVideoById($('#videoUrl4').val(), 0);
	$('#ytplayer4')[0].addEventListener("onStateChange", "onPlayerStateChange");
	$('#ytplayer4')[0].pauseVideo();
}
function startTimeline(){
	$(this).oneTime($('#videoDelay1').val(), function() {
	    $('#ytplayer1')[0].playVideo();
	});
	$(this).oneTime($('#videoDelay2').val(), function() {
	    $('#ytplayer2')[0].playVideo();
	});
	$(this).oneTime($('#videoDelay3').val(), function() {
	    $('#ytplayer3')[0].playVideo();
	});
	$(this).oneTime($('#videoDelay4').val(), function() {
	    $('#ytplayer4')[0].playVideo();
	});
}
function stopAll(){
	$('#ytplayer1')[0].stopVideo();
	$('#ytplayer2')[0].stopVideo();
	$('#ytplayer3')[0].stopVideo();
	$('#ytplayer4')[0].stopVideo();
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