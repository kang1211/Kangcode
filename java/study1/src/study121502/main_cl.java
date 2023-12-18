package study121502;

import java.util.Random;
import java.util.Scanner;

public class main_cl {
    
    static Scanner scan = new Scanner(System.in);
    static Scanner sc = new Scanner(System.in);
    static Random rd = new Random();

    public static void main(String[] args){
        // for(int i=0;i<=5;i++){
        //     System.out.println(i);
        // }
        // // 구구단 2단부터 9단까지 출력
        // for(int i=2;i<=9;i++){
        //     for(int k=1;k<=9;k++){
        //         System.out.printf("%d * %d = %d\n",i,k,i*k);
        //     }
        // }
        // for(int i=1;true;i++){
        //     System.out.println(i);
        //     if(i==13245)
        //         break;
        // }

        //1부터 100까지 중에서 10의 배수를 빼고 출력
        // for(int i=1; i<=100;i++){
        //     if(0==i%10)
        //         continue; // 앞의 내용을 무시하고 다음 내용으로 넘어가는 진행방식
        //     System.out.println(i);
        // }

        //반복문 문제
        // 정수를 하나 입력받아서 입력한 정수만큼 반복 되게 만드세요
        
        // System.out.println("정수값 하나를 입력하세요");
        // int a = sc.nextInt();
        // for(int b=0;b<=a;b++){
        //     System.out.println(b);
        // }

        // int x=1;
        // while(x<=10){
        //     System.out.println(x);
        //     x++;
        // }
        
        // while(true){
        //     System.out.print("정수 입력");
        //     int num = scan.nextInt();

        //     if(num==0)
        //     break;
        // }

        // 0을 입력하기전까지 계속 정수를 입력한다.
        // 0을 입력하면 지금까지 입력했던 모든 정수의 합을 출력하세요
        // int sum = 0;
        // while(true){
        //     System.out.print("정수 입력 : ");
        //     int a = sc.nextInt();
        //     sum += a;
        //     if(a==0){
        //         System.out.print("\n 총 합은 "+sum);
        //         break;
        //     }
        // }

        // Math.floor(Math.rnadom()*10)+1;
            // int rand = (int)(Math.random()*10)+1;
            // System.out.print(rand);

            

            // rand = rd.nextInt(10)+1; // 1부터 ~ 10까지 난수
            // for(int i=1;i<=6;i++){
            //     System.out.println(rd.nextInt(45)+1);
            // }

            // 동전앞면 뒷면 맞추기 (1.앞면, 2.뒷면)
            
            int coin = rd.nextInt(2)+1;
            System.out.println("1과 2중에 골라 입력하시오");
            int me = sc.nextInt();
            
            if(me==coin)
                System.out.println("정답입니다 컴퓨터가 고른 값 : "+ coin + " 내가 고른 값 :"+ me);
            else
                System.out.println("오답입니다 컴퓨터가 고른 값 : "+ coin + " 내가 고른 값 :"+ me);
    }
    
}
