$(function(){
            
    var headerTitle='먹방티켓';
    var cnt=0;
    var headerH1=$('.ticket_tit');
    var tmp=setInterval(function(){
        var redColor=Math.round(Math.random()*255);
        var greenColor=Math.round(Math.random()*255);
        var blueColor=Math.round(Math.random()*255);
        if(cnt<headerTitle.length){headerH1.append('<span style="color:rgb('+redColor+','+greenColor+','+blueColor+');">'+headerTitle[cnt]+'</ span>');cnt++;}
        else{headerH1.text('');cnt=0;}
    },300);


    // 찜(하트) 클릭이벤트
    $('div').on('click',function(){
        $(this).toggleClass('active');
    })

})

