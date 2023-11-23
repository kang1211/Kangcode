const movie_name = ["서울의봄", "프레디의피자가게", "사채소년", "헝거게임", "더와일드",
"더마블스", "30일", "나폴레옹", "빅슬립"];

const grade = [8.7, 7.3, 7.3, 6.7, 8.2, 3.9, 6.9, 9.6, 9.0];

const nation=["한국","미국","한국","미국","미국","미국","한국","영국","한국"];


// 영화 제목을 검색하여 평점(grade)와 국가(nation)을 출력하세요
$(function(){
    $("#title").keyup(function(key){
        if(key.keyCode == 13) //엔터키 눌렀다면
        search();
    })
});

function search(){
    for(var i=0;i<nation.length;i++)
    {
    if($("#title").val().replace(/\s/g,"") == movie_name[i])
    {$("#result").text(`평점 : ${grade[i]} 국가 : ${nation[i]}`)
    }
    }
}

// 다차워배열 - 1차원배열에 1차원배열들을 연결하여 만들어지는 배열
//  여러개의 1차원 배열들이 존재하는 비열

let num= [[1,2,3], [4,5,6], [11,22,33,44]];

alert(num[2][2]);
//2차원배열은 인덱스가 2개이기 때문에 반복문도 2번 사용된다.

for(var i=0; i<num.length;i++){
    for(var k=0;k<num[i].length;k++){
        document.write(num[i][k]+" ");
    }
}
