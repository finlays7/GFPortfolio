$(document).ready(function(){

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "media/Grant1.mp3",
            }).jPlayer("stop");
        },
        ended: function (event) {
            $(this).jPlayer("play");
        },
        swfPath: "swf",
        supplied: "mp3"
    })

});