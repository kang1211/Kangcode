let board=new Array();

// 중복없이 25개 숫자 저장하기
for(var i=1; i<=25; i++){
    var tmp = Math.floor(Math.random()*100)+1;
    if(board.indexOf(tmp) == -1)
    board.push(tmp)
    else
        i--;
}

for(var i=0; i<board.length;i++)
var v=board[i];


$(function(){

    $(".modal_bg").on("click",function(){
        $("#result_modal").hide();
    });

    $.each(board, function(i,v){ // i-인덱스, v-배열값
        $(".numBox").eq(i).text(v);
    });


    $(".numBox").on("click",function(){
        $(this).css("background", "black");
        $(this).css("color","white");
        var idx =  $(".numBox").index(this);
        board[idx]=0;
        endgame();
    });
});


function endgame(){
// 선생님이 작성하신 코드
var row=0, col=0, end=0, cross=[0,0];
for(var i=0;i<5 ;i++){ //빙고 확인하기
    for(var k=0;k<5;k++){
        if(board[i*5+k]==0)row++; //가로방향 5줄 전부확인
        if(board[k*5+i]==0)col++; //세로방향 5열 전부확인
    }
    if(board[i*6]==0) cross[0]++; //왼->오 대각선
    if(board[(i+1)*4 == 0]) cross[1]++; //오->왼 대각선

    if(cross[1]==5)end++;
    if(cross[0]==5)end++;
    if(row==5)end++;
    if(col==5)end++;

    row=0; //한줄씩 확인할 때마다 0개부터 확인해야 하므로 초기화
    col=0; //1열씩 확인할 때마다 0개부터 확인해야 하므로 초기화
}

if(end==5){ // 5줄 빙고 완성
    $("#result_modal").show(); // $("#result_modal").css("display","block")
    $(".result").text("5줄 빙고 완성");
}else if(end>=6){//빙고 실패
    $("#result_modal").show(); 
    $(".result").text("5줄 빙고 실패");
}

// 보고 참고해서 직접 작성한 코드    
// var bingo = 0;
// //가로줄
// // var totala = 0;
// // var a = 0;
// // var k = 0;
// // for(i=0+a;i<board.length;i++){
// //     totala += board[i];
// //     if(i == 4+a)
// //     {
// //         if(totala == 0)
// //         {
// //             bingo +=1;
// //         }
// //         a += 5;
// //         totala = 0;
// //     };  
// // }

// 세로줄
// var col = 0;
// for(var i=0;i<5;i++){
//     for(var k=0;k<5;k++){
//         if(board[k*5+i]==0)col++;
//         }
//     if(col==5)bingo++;
        
//     col=0;
// }

    

// //대각선줄
// // var totalc = 0;
// // var totald = 0;
// // for(i=0;i<board.length;i++){
// //     if(i%6 == 0)
// //     {
// //         totalc += board[i];
// //         if(totalc == 0){
// //             if(i == 24){
// //                 bingo+=1;
// //             }
// //         }
// //     }
// //     if(i%4 == 0){
// //         totald += board[i];
// //         if(totald == 0){
// //             if(i == 20){
// //                 bingo+=1;
// //             }
// //         }    
// //         }
// //     }

// //결과 출력
// const modal = document.getElementById("result_modal");
// if(bingo == 5){
//     modal.style.display = "block";
//     $(".result").html("성공");
// }else if(bingo >= 6){
//     modal.style.display = "block";
//     $(".result").html("실패");
// }

}
// const modal = document.getElementById("modal");
// const openModalBtn = document.getElementById("open-modal");
// const closeModalBtn = document.getElementById("close-modal");

//모달창 열기
// openModalBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//     document.body.style.overflow = "hidden";
// });

//모달창 닫기
// closeModalBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
// });


//가로줄   
    /*
    0 < idx < 5
    5 < idx < 10
    10 < idx < 15
    15 < idx < 20
    20 < idx < 25
    */
   // for문으로 idx가 0부터 4일때까지 board값을 모두 더함 = 0일 경우 빙고 1임
   // 빙고1일 경우 결과값에 저장 아닐경우는 넘기고 다음 5부터 9까지를 진행해야함
   // 이걸 총 5번 하면 가로 빙고를 모두 찾았음.
   // 가로줄 전체 빙고 값은 0, 5, 10, 15, 20 일것
    
    //세로줄
    /*
    idx/5 = 0
    idx/5 = 1
    idx/5 = 2
    idx/5 = 3
    idx/5 = 4
    */
    
    //대각선
    /*
    idx/6 = 0
    idx/4 = 0 && idx < 24
    */