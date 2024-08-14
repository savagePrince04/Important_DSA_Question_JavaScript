package Test;

public class Inverse_Of_Number {
    public static void main(String[] args) {
        int n=126;
        int pos=1;
        int sum=0;
        while(n>0){
            int rem=n%10; // 5
            sum=(int)(sum+pos*Math.pow(10,rem-1));
            pos++;
            n=n/10;
        }
        System.out.println(sum);
    }
}
