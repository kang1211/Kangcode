$(function(){
$(".a").on("click",function(){
    if($("#search").val()==0){
        alert("내용을 입력하세요")
    }
});
$("#search").on("keyup",function(){

    var word = $(this).val();
    $(".detail>tr").filter(
        function(){
            $(this).toggle($(this).text().includes(word));

            // console.log($(this).text().includes(word));
        }
    );

    // $(".detail>tr").eq(1).toggle(true);
})
});