//브라우저에 html태그가 모두 로드(화면표시) 되면 실행되는 스크립트 코드

// 주사위 게임 만들기
// 컴퓨터와 주사위 게임을 한다.
// 각자 주사위 하나씩 던진다. 주사위 값이 큰쪽이 이긴다.
// window.onload=function(){
//     var com = parseInt(Math.random()*6)+1;
//     var me = parseInt(Math.random()*6)+1;
//     if(com > me){
//         alert("컴퓨터 : " +com+"/나 : "+me+ "   컴퓨터 승");
//     }else if(com < me){
//         alert("컴퓨터 : " +com+"/나 : "+me+ "   나의 승");
//     }else{
//         alert("비김");
//     }
// };
// window.onload=function(){
//     var com = Math.floor(Math.random()*6)+1;
//     var me = Math.floor(Math.random()*6)+1;
//     if(com > me){
//         alert("컴퓨터 : " +com+"/나 : "+me+ "   컴퓨터 승");
//     }else if(com < me){
//         alert("컴퓨터 : " +com+"/나 : "+me+ "   나의 승");
//     }else{
//         alert("비김");
//     }
// };
// 주사위 게임 만들기2
// 컴퓨터와 주사위 게임을 한다.
// 각자 주사위 두개씩 던진다. 주사위 합이 큰쪽이 이긴다.
// 단, 두주사위값이 같은 숫자가 나온쪽이 이긴다.
// 둘다 같은숫자가 나온다면 합이 큰쪽이 이긴다.

// window.onload=function(){
//     var com = Math.floor(Math.random()*6)+1;
//     var com2 = Math.floor(Math.random()*6)+1;
//     var comRes = com+com2
//     var user = Math.floor(Math.random()*6)+1;
//     var user2 = Math.floor(Math.random()*6)+1;
//     var userRes = user+user2

// if(comRes == userRes){
//     alert("컴퓨터 값 : " + comRes + "   나의 값 : " + userRes + " 비김");
// }
// else if(user == user2){
//     alert("값1 : " + user +"   값2 : "+ user2 + "  나의 승");
// }
// else if(com == com2){
//     alert("값1 : " + com +"   값2 : "+ com2 + "  컴퓨터 승");
// }
// else if(comRes >= userRes){
//     alert("컴퓨터 값 : " + comRes + "   나의 값 : " + userRes + " 컴퓨터 승");
// }
// else{
//     alert("컴퓨터 값 : " + comRes + "   나의 값 : " + userRes + " 나의 승");
// }
// }


// whrjsans - if문, switch문
// if(a==10){
//     alert("같다");
//      a=a+10;
//      a=a++;
// }else{
//     alert("같지않다");
// }
//     while(true)
//     if(a>10){
//         break;
//     }

// var a =234;
// switch(a){
//     case 1:
//         alert("1");
//         break;
//     case 1000:
//         alert("1000");
//         break;
//     case 234:
//         alert("234");
//         break;
//     case 10:
//         alert("10 선택");
//         break;
// }

// var airjordan=2;
// var airmax=97;
// var alp = "나이키 에어맥스 90 재고";

// switch(alp.split(" ")[1]){
//     case"에어조던":
//         document.write("table");
//         break;
    
//     case"d":
//     document.write("dog");
//     break;

//     case"a":
//     document.write("apple");
//     break;
// }

var score=75;
switch(parseInt(score/10)){
    case 10: case 9:
        document.write("A학점"); break;
        case 8:
            document.write("B학점"); break;
            case 7:
                document.write("C학점"); break;
                default:
                    document.write("F학점");
}