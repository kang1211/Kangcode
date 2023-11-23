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
    //가로줄
    /*
    0 < idx < 4
    5 < idx < 9
    10 < idx < 14
    15 < idx < 19
    20 < idx < 24
    */
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