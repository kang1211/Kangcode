let mid =["abc","bcd","cde","def","efg","fgh","ghi","hij"];
let mpw =["123","234","345","456","567","678","789","8910"]



$(function(){
    $("#signBt").on("click",function(){
        if($("#id").val() == ''){
            alert("아이디를 입력하세요");
            $("#id").focus();
        }else if($("#pw").val() == ''){
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }
//로그인 시도가 된다면 - 아이디 비밀번호가 올바르지 않은경우
        else{
            // 아이디 존재유무
            var idx = mid.indexOf($("#id").val());
            if(idx == -1){
                var ok = confirm("아이디가 존재하지 않습니다.\n회원가입 하시겠습니까?");
                if(ok) location.href="signup.html"
            }else if(mpw[idx] == $("#pw").val()){
                alert("로그인 성공!")
            }else{
                alert("비밀번호가 일치하지 않습니다.");
                $("#pw").val("").focus(); // 비밀번호 재입력을 위해 비우고 커서두기
            }


            // for(var tmp in mid){
            //     if(mid[tmp] == $("#id").val()){
            //         if(mpw[tmp] == $("#pw").val()){
            //             alert("로그인 성공");
            //             break;
            //         }else{
            //             alert("비밀번호가 일치하지 않습니다.")
            //             $("#pw").val("").focus();
            //         }
            //     }else{
            //         alert("아이디가 일치하지 않습니다.")
            //             $("#id").val("").focus();
            //             $("#pw").val("");
            //             break;
            //     }
            // }
        }
    });



// if($("#id").val != "abc"){}
// else if($("#id").val != 'abcd' && $("#pw").val != '1234'){
//     alert("아이디 또는 비밀번호가 올바르지 않습니다.");
//     $("#id").val("").focus();
//     $("#pw").val("").focus();
// }








});

