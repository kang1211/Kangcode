package test1;

public class test {
    
    public static void main(String[] args){
        //return을 사용하고 싶다면 return으로 이동되는 값의 형식을 public static () main의 괄호에 넣어야 한다

        System.out.println("나도 main이네?");
        //변수 - 데이터타입 지정;
        // 데이터 종류 - 정수, 실수, 문자, 논리
        // 정수 - byte, short(2byte), int(4byte), long(8byte)
        int a=10;
        short b=20;
        long d=40;
        System.out.println(a+" "+b+" "+d);
        // 실수 - float(4byte), double(8byte)
        float ff= 3.14f; //float 작성할때 실수값이면 뒤에 f를 붙여야 한다
        double dd = 12.34f;
        System.out.println(ff + " " + dd);
        // 문자 - char(2byte), ' '작은따옴표가 문자를 의미, 큰따옴표는 문자열, 유니코드 기반
        char ch=97;
        System.out.println(ch);
        // 논리 - boolean(1byte)
        boolean fg = true;//참과 거짓을 표기하는 타입으로 true, false만 작성 가능
        System.out.println(fg);
        // void - 데이터가 없다, 라는뜻, 또는 타입이 없다라는뜻

        // 참조 타입 - new 연산자로 생성해야 하는 타입
        // 클래스
        String str = new String("아하 문자열"); //정식 스타일, 문자열은 클래스로 작성하자
        String name = "이순신"; //생략 스타일
        System.out.println(str);
        System.out.println(name);
    }
}
