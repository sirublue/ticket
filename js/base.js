    // 헤더 , 푸터 마진, 토글버튼
$(function(){
    windowS();
    var headerHeight=$('header').height();
    $('.header_h').css('margin-top',headerHeight);
    var footerHeight=$('footer').height();
    $('.footer_h').css('margin-bottom',footerHeight);

    // side menu tgl_btn event
    function tglBtn360(){
        $('#tgl_btn').on('click',function(){
            $('#side_nav').css({'right':0});
            $('#wrap').css('right','60%');
        })
        $('#close_btn').on('click',function(){
            $('#side_nav').css('right','-60%');
            $('#wrap').css('right',0);
        })
    }
    function tglBtn640(){
        $('#tgl_btn').on('click',function(){
            $('#side_nav').css({'right':0});
            $('#wrap').css('right','30%');
        })
        $('#close_btn').on('click',function(){
            $('#side_nav').css('right','-30%');
            $('#wrap').css('right',0);
        })
    }
    

    function windowS(){
        var winSize=$(window).width();
        if(winSize>=640){
            tglBtn640();
        }else{
            tglBtn360();
        }
    }
    
    // 리사이즈
    $(window).on('resize',function(){
        windowS();
        location.reload();
    });
})
