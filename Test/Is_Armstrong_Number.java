package Test;
import java.util.Scanner;
public class Is_Armstrong_Number {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        boolean ans=IsArmstrong(n);
        System.out.println(ans);
    }
    public static boolean IsArmstrong(int n){
        int c=Count_No_Of_Digit(n);
        int sum=0;
        int p=n;
        while(n>0){
            int rem=n%10;
            sum=(int) (sum+Math.pow(rem,c));
            n=n/10;
        }
        if(p==sum){
            return true;
        }
        return false;
    }
    public static int Count_No_Of_Digit(int n){
        int count=0;
        while(n>0){
            count++;
            n=n/10;
        }
        return count;
    }
}