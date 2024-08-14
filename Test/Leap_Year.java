package Test;

public class Leap_Year {
    public static void main(String[] args) {
        int year=2024;
        if(year%400==0 || year%100!=0 && year%4==0){
            System.out.println("leap year");
        }
        else{
            System.out.println("not leap year");
        }
    }
}
