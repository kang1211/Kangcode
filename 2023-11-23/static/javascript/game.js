let board=new Array();

// 중복없이 25개 숫자 저장하기

for(var i=1; i<=25; i++){
    var tmp = Math.floor(Math.random()*100)+1;
    if(board.indexOf(tmp) == -1)
    board.push(tmp)
    else
        i--;
}

// for(var i=0; i<board.length;i++)
// var v=board[i];


$(function(){
    $.each(board, function(i,v){ // i-인덱스, v-배열값
        $(".numBox").eq(i).text(v);
    });


    $(".numBox").on("click",function(){
    $(this).css("background", "black");
    $(this).css("color","white");
    $(".numBox").index(this);
    board[idx]=0;
    endgame();
    });

});


function endgame(){
var binggo = 0;
//가로줄
var total = 0;
var a = 0;
for(idx=0+a;idx<board.length;idx++){
    total += board[idx];
    if(idx == 4+a)
    {
        if(total == 0)
        {
            binggo +=1;
        }
        a += 5;
        total = 0;
    };  
}
//세로줄
var b = 0;
for(idx=0;idx<board.length;idx++){
    if(idx/5 == 0+b){
        total += board[idx];
        if(total == 0){
            binggo +=1;
        }
    }else{b +=1}
}






//대각선줄



//결과 출력
if(binggo => 1){
    document.write(`${binggo} 빙고`)
}



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
}