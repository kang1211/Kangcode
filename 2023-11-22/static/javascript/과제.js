    /*
    과제!!!
    한화이글스 투수들의 평균자책점
    name = ["주현상", "윤대경", "이민우", "이태양", "페냐", "박상원", "장시환"]
    era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38]
    era -> 평균자책점
    7명 선수들의 평균자책점의 평균치를 구하시오
    평균치 이상인 선수들이 누구인지 출력하세요
    */
    var nam = ["주현상", "윤대경", "이민우", "이태양", "페냐", "박상원", "장시환"];
    var era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38];
    var total = 0;
    var avg = 0;
    var avg_up = new Array();
    
    for(var i=0; i< era.length; i++)
    {
         total += era[i];
    };
    avg = total/era.length
    document.write("평균자책점 : " +avg+"<br>" );
    
    for(var a=0;a<era.length;a++){
        if(avg<=era[a]){
            avg_up.push(nam[a]);
        }
    };
    document.write("<br> 평균치 이상 선수명단 : " +avg_up);
    
