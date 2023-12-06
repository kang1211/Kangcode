$(function(){
   $("#size").attr("disabled",true);
   $("#color").attr("disabled",true);
   
    $("#make").on("click",function(){
    openPage("make");
   });

   $("#size").on("click",function(){
    // if($("#draw>table").length)
    openPage("size");
   });

   $("#color").on("click",function(){
    openPage("color");
   });
});

function openPage(page){

    var sheight = screen.availHeight;
    var swidth = screen.availWidth;

    // 새페이지 - window.open(주소, 대상, 옵션)
    // 대상(target) - blank, _self, _parent
    child = window.open(page+".html","",
    "width=500,height=300,top="+(sheight/2-150)+",left="+(swidth/2-250));

    // 브라우저 에는 Dom리나는 구조를 활용하여 페이지를 표시한다.
    //document.object.model - html문서를 객체화
    // html문서의 내용이 브라우저 화면에 표시되는 과정
    //파싱 -렌더링 - 표시
};