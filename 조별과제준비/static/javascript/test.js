$(function(){

// main > main1 > 슬라이드 이동------------------------------------------------------------------------------------
    let count=0;
    let pgnum=1;
    const slider = document.querySelector(".slideList");
    var nextNum = pgnum+"/"+slider.children.length; // 페이지 번호
    var paragraph = document.getElementById("slide_page_num") // p태그
    paragraph.innerHTML = nextNum; // p태그에 페이지번호 넣기

    function nextSlide(){ // 페이지 다음으로 넘기기
        count++;
        pgnum++;
        if(count>=slider.children.length){
            count=0;
            pgnum=1;
        }
        updateSlide();

        var nextNum = pgnum+"/"+slider.children.length; // 페이지 번호

        var paragraph = document.getElementById("slide_page_num") // 페이지번호 넣는 p태그
        paragraph.innerHTML = nextNum; // 다음 페이지 번호 넣기
    }
    
    function prevSlide(){ // 페이지 이전으로 넘기기
        count--;
        pgnum--;
        if(count<0){
            count=slider.children.length - 1;
            pgnum=slider.children.length;
        }
        updateSlide();

        var nextNum = pgnum+"/"+slider.children.length; // 페이지 번호

        var paragraph = document.getElementById("slide_page_num") // 페이지번호 넣는 p태그
        paragraph.innerHTML = nextNum; // 다음 페이지 번호 넣기
    }
    
    function updateSlide(){
        slider.style.transform = `translateX(${-count * 100}%)`; // 페이지 전환 위치
    }

    setInterval(nextSlide, 10000);

    $(".slide_bt_right").on("click", nextSlide); // 페이지 오른쪽 버튼
    $(".slide_bt_left").on("click", prevSlide); // 페이지 왼쪽 버튼
});

