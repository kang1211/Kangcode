<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $rememberMe = isset($_POST["rememberMe"]) ? true : false;

    // 여기에 실제로 데이터베이스를 사용하여 사용자 검증 로직을 구현해야 합니다.

    // 예시: 사용자가 존재하고 비밀번호가 일치하는 경우
    if ($username == "user" && $password == "pass") {
        // 세션 시작 및 로그인 성공 시의 동작 수행
        $_SESSION["username"] = $username;

        // 로그인 성공 메시지를 반환
        echo "로그인 성공!";
    } else {
        // 로그인 실패 메시지를 반환
        echo "아이디 또는 비밀번호가 잘못되었습니다.";
    }
}
?>
