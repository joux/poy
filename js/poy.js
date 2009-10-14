$(document).ready(
	function(){
		var params = { allowScriptAccess: "always", bgcolor: "#cccccc" };
		$('#player1').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer1',
				params: params,
				attrs: {
					id: 'ytplayer1'
				}
			}
		);
		$('#player2').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer2',
				params: params,
				attrs: {
					id: 'ytplayer2'
				}
			}
		);
		$('#player3').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer3',
				params: params,
				attrs: {
					id: 'ytplayer3'
				}
			}
		);
		$('#player4').flash(
			{
				swf: 'http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer4',
				params: params,
				attrs: {
					id: 'ytplayer4'
				}
			}
		);
		
	}
);

function onYouTubePlayerReady(playerId){
	$('#ytplayer1')[0].loadVideoById("ifAfhXtzQfc", 1);
	$('#ytplayer1')[0].playVideo();
}

function stopAll(){
	$('#ytplayer1')[0].stopVideo();
	$('#ytplayer2')[0].stopVideo();
	$('#ytplayer3')[0].stopVideo();
	$('#ytplayer4')[0].stopVideo();
}