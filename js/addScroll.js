

$(document).ready(function () {
    const height = $(".content_pane").height();

    if(height>447){
        $(".content_pane").css({'max-height':'447px','overflow-y': 'scroll'});
        console.log(height);
    }
    else{
        $(".content_pane").css({'overflow': 'none'});
    }   
});