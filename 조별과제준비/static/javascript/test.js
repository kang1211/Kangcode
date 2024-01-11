let slide_idx=0;

$(function(){


$(".slide_bt_left").on("click", function(){
    if(slide_idx!=$(".slideImg").length-1){
        slide_idx++;
        $(".slideList").css("right",(slide_idx*1200)+"px");
    }
})

$(".slide_bt_right").on("click",function(){
    if(slide_idx!=0){ // 첫번째 이미지일 경우 이동불가
    slide_idx--;
    $(".slideList").css("right",(slide_idx*1200)+"px");
    }
});

setInterval(
    function(){
        if(slide_idx!=$(".slideImg").length-1)
        {slide_idx++;$(".slideList").css("right",(slide_idx*1200)+"px");}
        else{slide_idx=0;$(".slideList").css("right",(slide_idx*1200)+"px");}
            } , 5000
            );
})