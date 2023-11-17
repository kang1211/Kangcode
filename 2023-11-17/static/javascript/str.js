// 1// 문자열
// //자바스크립트에서 문자열은 string객체라는 것으로 저장이 되고
// // 사용된다. string객체에는 다양한 문자열을 처리하기위한 메서드가 있다.

// //1.문자열의 문자 갯수가 몇개냐??

// var word = "member";
// var len = word.length;
// console.log (`문자열 갯수 : ${len}`);

// //2. 문자열에서 한글자만 가져오기 - charAt()

// var at = word.charAt(3);
// console.log(at);

// //3. 문자열에서 특정문자또는 문자열이 있나? 어니에 있나? - indexOf()
// word = "i like html";
// var idx = word.indexOf("love");
// console.log(idx);
// if(word.indexOf("love")== -1){ // 문자열에 검색문자 또는 문자열이 없다면 -1
//     console.log("love는 없다");
// }

// //4.indexOf는 문자열의 첫번째부터 검색을 하기때문에
// // 뒤쪽에 있는 문자나 문자열이 결과로 나오지 않을수 있다.
// // lastIndexOf() - 문자열의 뒤쪽에서 검색

// //5. replace - 문자열에서 특정 문자열을 다른 문자열로 변경 *좌측열에 한 문자열만!
// word = "i like css like like";
// var word2 = word.replace("like", "love")
// console.log(word2);

// // 정규표현식
// // g(global) : 문자열내의 모든 패턴 검색
// // i(ignore case) : 대소문자 구별없이 검색
// word = "i like css like like";
// var word2 = word.replace(/like/gi, "love")
// console.log(word2);
// //문자열 양 옆에 " "대신 /을 넣고 우측 끝에 gi를 붙이면 안쪽에 있는 문자열을 대소문자 무시하여 모두 찾아낸다.

// // 정규표현식의 기본 구조 - /regexr/i (/패턴/플래그) ,(/값/표현식)
// // /.[A-Z]/g - 1문자와 대문자의 조합을 문자열 전체에서 검색
// // replace(/\-/g,'') - 특정문자 제거 (-)
// const regex = /good/; // good이라는 단어가 있는지 검색 하기위해 표현식 생성
// var test ="banana apple cat good nice good cat apple cat good";

// console.log(regex.test(test)); // .test() - 문자열에 패턴이 존재 하는지 알려준다.(true, false)
// console.log(test.match(regex)); // .match() - 패턴에 매칭되는 문자열들을 가지고온다.

// // i - ignore case 대소문자 구별없이 검색
// // g - global 문자열 내 모든 패턴검색
// // m - multi line 문자열의 행이 바뀌더라도 검색을 계속한다.
// // s - 모든 문자 검색(특수문자 포함) : 특수문자(\n, \r, \t, \p, \a 등등)
// // u - 유니코드 검색 ( %2b%11%ab%ac%15%a2 )유니코드를 정규표현식으로 바꿔 검색한다
// // y - sticky 문자열 내 특정 위치에서 검색을 진행
// // ^ - ^다음에 오는 단어로 시작하는지 검사

// console.log(test.match(/cat/g));
// word = "banana \napple \nmember!!";
// console.log(word.match(/^apple/m)); // ^apple : 문자이 apple로 시작하는지 검사

// //정규표현식 기호
// /*
//     영어알파벳 : a-z, A-Z (범위검색)
//     한글 : ㄱ-ㅎ, 가-힣 (범위검색)
//     숫자 : 0-9 (범위검색)
//     모든문자열 : . (숫자, 한글, 영어, 특수기호, 공백 전부 해당)단, 줄바뀌면 안됨
//     \d : 숫자 전체
//     \D : 숫자가 아닌것
//     \w : 영숫자 문자 (A-Za-z0-9)
//     \W : 영숫자가 아닌것
//     \s : space바로 만든 공백
//     \S : space 공백 아닌 것

//     패턴 검색 기준
//     /패턴/
//     | - or ( \/D | \S /)
//     [] : or처리묶음    ( /[123]/ -> 1|2|3 )
//     ^ : 특정문자열로 시작(행의 시작점)
//     문자열$ : 특정문자열로 끝남(행의 마지막)
//     [^문자열] : 괄호안의 문자를 제외한것 

//     이메일 유효 검사 정규표현식
//     ^[a-zA-z0-9 + -\_.] +@[a-zA-z0-9]+\.[a-zA-z]+$

//     영어숫자 _ abc_11@naver.com

//     /^010-?([0-9]{4})-?([0-9]{4})$/
// */

// word="나는 20살입니다. /n전화번호는 010-1234-1234 입니다.";
// console.log("원본 : " +word);
// console.log(word.replace(/\-/g, '')); // 모든 - 제거
// console.log( word.replace(/\./g, '')); // 모든 . 제거
// console.log( word.replace(/\s/g, '')); //모든 공백 제거
// console.log(word.replace(/..살/g, '45살')); //살 앞에 두글자 문자열
// // 전화번호에서 1234-1234 부분을 1xx4-1xx4로변경
// console.log(word.replace(/..4/g, 'xx4'));
// // 전화번호에서 1234-1234 부분을 xxxx-1234로변경
// console.log(word.replace(/[0-9]{4}/, 'xxxx'));
// var tmoney = "3,410,200원";
// // var money = tmoney.replace(/\,/g,"").replace(/\D/,"");
// var money = tmoney.replace(/[^0-9]/g,"");
// console.log(money);

// //6. 문자열 나누기 - split()
// word="이순신,강감찬,김유신,장보고,최무선,장영실";
// const name = word.split(",");
// console.log(name[3]);
// word = "nice123@naver.com";
// var id=word.split("@")[0];
// console.log(id);

// //7. 문자열추출 - substring()

// console.log(word.substring(0,7)); //0부터 시작해서 7번 전까지
// console.log(word.substring(4)); // 4번부터 끝까지
// console.log(word.substring(0,word.indexOf("@"))); // indexOf를 통해 @ 위치를 찾고 그 이전 문자열을 불러온다


// // 생년월일중에서 몇월생인지 출력
// var birth = "19971209";
// console.log(birth.substring(4,6));
// // console.log(birth.replace(/....12../, "12"));

// //8.문자열 추출(2) - slice() : 음수값도 사용할 수 있다.
// word="자바스크립트 너무 좋아!";
// console.log(word.slice(2,6));
// console.log(word.slice(-3));
// console.log(word.slice(-3,-2));

// var text ="강동욱 105,000원-남기현 345,200원-서종우 10,000원-송재영 4,343,290원";
// //문제!
// // 남기현이 보유한 현금은 얼마인가? (정수로 출력)
// // 강동욱이 보유한 현금에 서종우의 돈을 빼면 얼마인가?
// // 송재영의 돈을 434,329원으로 변경하시오

// console.log(Math.floor(text.slice(17,24).replace(/\,/g,'')));
// console.log(Math.floor(text.slice(4,11).replace(/\,/g,''))-Math.floor(text.slice(-22,-16).replace(/\,/g,'')));
// console.log(text.replace(/4,343,290원/,text.slice(-10,-2).replace(/4,343,29/,'434,329')+"원"));

// const member = text.split("-");
// var money = parseInt(member[1].split(" ")[1].replace(/[^0-9]/,''));
// // var money = member[1].split(" ")[1];
// var 강동욱 = parseInt(member[0].split(" ")[1].replace(/[^0-9]/,''));
// var 서종우 = parseInt(member[2].split(" ")[1].replace(/[^0-9]/,''));
// var 송재영 = Math.floor(member[3].slice(4,12).replace(/\,/g,'')).toLocaleString()+"원";
// console.log(text);
// console.log(money);
// console.log((강동욱-서종우).toLocaleString()+"원");
// console.log(송재영);

// //9. 소문자, 대문자 변경 - toLowerCase(), toUpperCase()
// word ="i LOVE School";
// console.log(word.toLowerCase());
// console.log(word.toUpperCase());

// //10. 공백제거 - trim() - 문자열의 양쪽끝 공백 제거
// console.log("공백제거전 : "+word);
// console.log("공백제거후 : "+           word.trim()   );

// //11. 문자열 반복 - repeat()
// word="apple ";
// console.log(word.repeat(3));

// //12. 문자열 위치 정렬 또는 채우기 - padStart(), padEnd()
// console.log( word.padStart(10, "0"));
// console.log(word.padEnd(10, "r"));

// //13. 문자열에 특정 문자열 포함 여부(참, 거짓) - includes()
// word="이순신, 장보고, 강감찬, 최영, 정도전, 정약용, 양만춘";
// if(word.includes("정도전")){
//     console.log("회원입니다.");
// }else{
//     console.log("회원이아닙니다.");
// }

// // 14. 문자열에 특정 문자나 문자열로 시작하나? - startsWith(), endsWith()
// var info = "이름 : 이순신, 직업 : 군인";
// if(info.startsWith){
//     console.log("올바른 형식의 데이터입니다.")
// }else{
//     console.log("잘못된 데이터입니다.");
// }

// //15. 문자열로 변환 - toString()
// var num = 100;
// console.log(typeof num.toString());

// var birth=19990101;
// //birth/10000
// // birth.substring(0,4);
// var year = parseInt(birth.toString().substring(0,4));
// console.log(year)

// /*
//     1.length - 문자열의 길이(문자열 갯수)
//     2.charAt(숫자) - 지정한 번호 위치의 문자 추출
//     3.indexOf(문자열) - 문자열에서 특정문자 또는 문자열이 몇번째 있는지 알려준다. 없으면 -1
//     4.lastIndexOf(문자열) - 문자열의 끝에서 문자 또는 문자열 몇번째 있는지 검색
//     5.includes (문자열) - 문자열에 특정 문자 또는 문자열의 존재여부(true, false)
//     6.replace(원본문자열, 변환문자열) - 문자열에서 특정 문자 또는 문자열을 지정한 문자 또는 문자열로 변환
//     7.split(문자열) - 문자열을 특정 문자열을 기준으로 분리한다.(배열이라는 구조로 저장)
//     8.substring(시작번호, 끝번호), .subsring(시작번호)
//         - 문자열에서 지정된 위치의 문자열을 추출
//     9.slice(시작번호, 끝번호), .slice(시작번호, 끝번호)
//         - 문자열에서 지정된 위치의 문자열을 추출, 음수사용시 뒤에서부터 추출
//     10.toLowerCase(),toUpperCase() - 소문자, 대문자로 변환
//     11.padStart(), .padEnd() - 자릿수정과 정렬 및 채우기
//     12.trim() - 문자열의 양쪽끝 공백제거
//     13.startsWith(문자열), endsWith(문자열) - 문자열의 시작과 끝이 특정 문자열로 시작하는지 여부
//     14.toString() - 문자열로 전환
//     15.repeat(숫자) - 지정한 숫자만큼 반복 출력된다.
// */


// // 학이 침을 뱉으면 - 퇴학
// // 닭이 작은사이즈 옷을 입으면 - 꼬끼오
// // 우리나라에 석유가 도착하는데 걸리는 시간은? 오일
// //잘생긴 가위는? 핸썸가이
// //우유가 아프면? - 앙팡
// // 엄마가 길을 잃었다면? 
// //티파니와 태연이 싸우면? 티격태격
// //어벤저스가 쓰는펜? - 블랙펜서
// //인어공주의 성씨 - 안다다씨
// //고양이한테 야옹하면 대답은? 왜옹?

let info = "이순신:군인,34세,아산 - 장보고:군인,41세,완도 - 김춘추:정치인,28세,경주";
let data = info.split(" - ");
// 출력 - 이순신, 장보고 [이름 직업]
var 이순신_name = data[0].substring(0,data[0].indexOf(":"));// data[0].split(":")[0];
var 이순신_직업 = data[0].substring(data[0].indexOf(":")+1, data[0].indexOf(","));
var 장보고_name = data[1].substring(0,data[1].indexOf(":"));
var 장보고_직업 = data[1].substring(data[1].indexOf(":")+1, data[1].indexOf(","));
// 출력 - 장보고[나이]
var age = data[1].substring(data[1].indexOf(",")+1, data[1].lastIndexOf(","));

console.log(data);
console.log(이순신_name +"  "+ 이순신_직업);
console.log(장보고_name +"  "+ 장보고_직업);
console.log(parseInt(age)); // parseInt() - 앞쪽에 있는 숫자만 정수로 변환, 문자는 삭제함

// 장보고의 나이는 몇인가? 출력 - 나이만 출력하기!!!!
// var 장보고_나이 = data[1].substring(data[1].indexOf(",")+1, data[1].indexOf("세"));
// var 장보고_나이 = data[1].slice(data[1].indexOf(",")+1,-4);
// var 장보고_나이 = data[1].charAt(7)+data[1].charAt(8);
// console.log(장보고_나이);


