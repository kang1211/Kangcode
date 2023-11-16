//if문 - 조건식의 참, 거짓에의해 내용을 실행 시킨다.
//if( 조건식 ){
//    참일 경우 실행할 내용
//}
// if 뒤에 작은괄호 열어서 안에 조건식을 작성한다. 조건식 뒤에는 중괄호를 열어서
//안에 참일 경우 실행할 내용을 작성한다.

//if( 조건식 ){
//    참일 경우 실행할 내용   
//}
//else{
//    거짓일 경우 실행할 내용
//}

//조건식이 거짓이라면 첫번째 중괄호는 건너뛰고(jmp) else 뒤의 중괄호를 실행 시킨다.
//if문에서 조건식을 작성할수 있는 곳은  오직 if 뒤에만 가능하다.
//else 뒤에는 조건식을 넣을 수 없다.

//조건에 따라 실행될 내용이 여러개라면 (3개이상)
//if(조건식){
//  내용
//}
//else{
//    if(조건식){
//      내용    
//    }
//    else{
//      내용
//     }
//}
//if(조건식){
//    내용    
//}else if(조건식){
//     내용  
//}else{
//      내용    
//}

// var num = 20; // num이라는 변수공간에 20을 저장해라.
// if( num > 0 ){
//     console.log("양수다");
// }else{
//     console.log("음수다");
// }

// var birth = parseInt(prompt("생년월일(8자리) 입력"));

// if( birth <= 20041231){
//     console.log("성인이다");
// }else{
//     console.log("미성년자입니다.")
// }

// 국어, 영어, 수학 3과목 점수 입력받기
// 3과목의 평균점수가 65점 이상이라면 통과 라고 출력
// 65점 미만이면 낙제라고 출력하시오.[==]


// 문제 1번 -----내가 푼것
// var a = parseInt(prompt("국어"));
// var b = parseInt(prompt("영어"));
// var c = parseInt(prompt("수학"));
// // var avg = (a+b+c / 3);
// if( (a+b+c)/3>= 65 ){
//     console.log("통과");
// }else{
//     console.log("낙제");
// }
// 문제 1번 -----선생님
// var kor = parseInt(prompt("국어점수"));
// var eng = parseInt(prompt("영어점수"));
// var mat = parseInt(prompt("수학점수"));
// var avg = (kor+eng+mat)/3;
// if( avg>=65 ){
//     console.log("합격, 통과");
// }else{
//     console.log("낙제");
// }

// 문제 2번 -------
// 동전 앞면 뒷면 맞추기

// 브라우저에 html 태그 모두 로딩(화면표시)되면 자바스크립트 코드를 실행시키는 방법

window.onload=function(){
    
    var com = Math.floor(Math.random()*3)+1;

    var scis = document.getElementById("scissors");
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");

    scis.addEventListener("click", function(){ //가위클릭
        if( com==1 ){alert("비김");}
        else if( com==3 ){alert("승");}
        else{alert("패");}
        com = Math.floor(Math.random()*3)+1;
        scis.style.background="black"
        rock.style.backgorund="white"
        paper.style.backgorund="white"
    });
    rock.addEventListener("click", function(){ //바위클릭
        if( com==2 ){alert("비김");}
        else if( com==1 ){alert("승");}
        else{alert("패");}
        com = Math.floor(Math.random()*3)+1;
    });
    paper.addEventListener("click", function(){ //보 클릭
        if( com==3 ){alert("비김");}
        else if( com==2 ){alert("승");}
        else{alert("패");}
        com = Math.floor(Math.random()*3)+1;
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //문제 4번 가위 바위 보 게임 만들기
    // var com = parseInt(Math.random()*3)+1;
    // var user = parseInt(prompt("1.가위 2.바위 3.보"));

    // if( com == user){
    //     alert("비김");
    // }else if((com==1&&user==2) || (com==2&&user==3) || (com==3 && user==1)){
    //     alert("승");
    // }else{
    //     alert("패")
    // }
    
    
    // 문제 3번
    //세개의 정수를 입력받아 가장 작은수 출력, 모두 같다면 같다 출력
    // var num1= parseInt(prompt("첫번째 정수"));
    // var num2 = parseInt(prompt("두번째 정수 "));
    // var num3 = parseInt(prompt("세번째 정수 "));

    // if( num1 == num2 && num1 == num3){
    //     alert("모두 같은숫자");
    // }else if(num1<num2 && num1<num3){
    //     alert("작은수 : "+num1);
    // }else if(num2<num1 && num2<num3){
    //     alert("작은수 :"+num2);
    // }else{
    //     alert("작은수 :"+num3);
    // }

    // if(num1 < num2){
    //     if (num1 < num3){
    //         alert("작은수 : "+num1);
    //     }else{
    //         alert("작은수 : "+num3);
    //     }
    // }else if( num2 < num3){
    //     alert("작은수 : "+num2);
    // }else{
    //     alert("작은수 : "+num3);
    // }
    }

    // var coin = Math.floor(Math.random()*2)+1;

    // // javascript html 태그 선택방법
    // var front = document.getElementById("front");
    // var back = document.getElementById("back");

    // front.addEventListener("click", function(){
    //     if( coin == 1 ){
    //         alert(" 정답 !");
    //     }else{
    //         alert("땡!!");
    //     };
    //     //alert("앞면 선택");  //alert는 알림창을 나타내는 함수이다.
    // });

    // back.addEventListener("click", function(){
    //     if( coin == 2 ){
    //         alert(" 정답 !");
    //     }else{
    //         alert("땡!!");
    //     };
    //     // alert("뒷면 선택");
    // });