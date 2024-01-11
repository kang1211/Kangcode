document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let count = 0;

    function nextSlide() {
        count++;
        if (count >= slider.children.length) {
            count = 0;
        }
        updateSlide();
    }

    function prevSlide() {
        count--;
        if (count < 0) {
            count = slider.children.length - 1;
        }
        updateSlide();
    }

    function updateSlide() {
        slider.style.transform = `translateX(${-count * 100}%)`;
    }

    // setInterval(nextSlide, 30000); // 3초마다 자동으로 다음 슬라이드로 이동

    // 다음/이전 버튼을 클릭할 때 이벤트 처리
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
});
