$(function(){
    mapPad();
    var headerHeight=$('header').height();
    $('.header_h').css('margin-top',headerHeight);

    var footerHeight=$('footer').height();
    $('.footer_h').css('margin-bottom',footerHeight);
    
    $(window).resize(function(){
        mapPad();
        location.reload();
    })
    
    function mapPad(){
        var zoneHeight=$('.zone_search').height();
        var winSize=$(window).width();
        if(winSize>=640){
            $('.map_iframe').css('padding-bottom',zoneHeight);
        }else{
            $('.map_iframe').css('padding-bottom',0)
        }
    }

    // search icon click even
    $('.search_txt').hide();
    $('.search_icon').on('click',function(){
        $('.search_txt').show();
        $('.zone').hide();
    })
     
    $('.search_txt').on('keydown',function(e){
        var zoneVal=$('.search_txt').val();
        var enter=e.keyCode;
        if(enter==13){
            $('.search_txt').hide();
            $('.zone').show();
            $('.zone_txt').text(zoneVal);
        }
    })

    // content title click event
    var contentPos=$('#contents>.content_bottom>div');
    contentPos.hide().eq(0).show();

    var target=$('#food_kinds>li');
    target.on('click',function(){
        var i=$(this).index();
        contentPos.hide().eq(i).show();
        target.removeClass();
        $(this).addClass('active');
    })
})