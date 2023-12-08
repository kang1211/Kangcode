//<i class="bi bi-file-earmark-x"></i>

const memoBox = new Array();
const importBx = new Array();
let num = 1;

$(function(){
    $("#save").on("click",save);
});

function save(){
    var text = $("#memo").val();
    var 중요도 = $("#import").val();
    memoBox.push(new memo(num, text, importBx[중요도] ));
    var last = memoBox.length-1;
    $(".memoList").prepend(memoBox.create(num));
    num++;
    $(".del").on("click",del_memo);
};