$(document).ready(function(){
    // 요소 외부 클릭 시 테두리 색상 초기화
    $(document).on('click', function(e){
        if (!$(e.target).closest('.box').length) {
            // 클릭된 요소가 .box의 자식이 아닌 경우
            $(".box").css("border-color", "");
        }
    });

    $(".box").click(function(){
        // 클릭 시 테두리 색상 변경
        $(this).css("border-color", getRandomColor());
    });

    // 랜덤 색상을 반환하는 함수
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
