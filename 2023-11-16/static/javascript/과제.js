// 주차비 정산
// apple 주차장의 주차요금표
// 기본 주차비 -1000원, 기본시간 -30분
//(30분 이내 주차시 1000원, 5분 주차해도 1000원, 39분까지 1000원)
// 10분당 100원씩 추가 (40분 주차시 1100원, 54분 주차시 1200원)

// 2시간 이상 주차시 기본요금 변경 
// 기본요금 - 1500원
//4시간 이상 주차시 기본요금 변경
// 기본요금 -2500원
// 8시간 이상 주차시 요금은 무조건 10000원
//(10시간, 12시간, 9시간 43분 전부다 10000원)
//(2시간 1분 주차시 -1500원, 2시간 34분 주차시 -1800원)
// 주차시간을 분단위로 입력하여 주차요금이 얼마인지 출력하시오
window.onload=function(){
    // var user = parseInt(prompt("주차시간(분단위)"));
    // if(user <= 30){
    //     alert("주차요금 1000원");
    // }else if((user < 120) && (user>30)){
    //     alert("주차요금 " + parseInt(1000 + parseInt((user-30)/10)*100) + "원");
    // }else if(user == 120){
    //     alert("주차요금 1500원");
    // }else if((240 > user)&&(user>120)){
    //     alert("주차요금 " + parseInt(1500 + parseInt((user-120)/10)*100) + "원");
    // }else if(user == 240){
    //     alert("주차요금 2500원");
    // }else if((480>user)&&(user>240)){
    //     alert("주차요금 " + parseInt(2500 + parseInt((user-240)/10)*100) + "원");
    // }else{
    //     alert("주차요금 10000원");
    // }


    // 선생님 풀이
    var time = parseInt(prompt("주차시간"));
    var cost = 1000;
    
    if(time>=480){
        cost=10000; time=0;
    }else if(time>=240){
        cost=2500; time= time-240;
    }else if(time>=120){
        cost=1500; time = time-120;
    }else{
        time = time<30 ? 0: time - 30;
    }

    var price = Math.floor(time/10)*100 + cost;
    document.write(`주차요금 : ${price}원`);
    








}