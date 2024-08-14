package Test;

public class kaprekar_Number {
    public static void main(String[] args) {
        int n=16;
        for(int i=1;i<=1000;i++){
            if(IsKaprekar(i)){
                System.out.println(i);
            }
        }
    }
    public static boolean IsKaprekar(int n){
        if(n==1){
            return true;
        }
        int sq=n*n;
        int temp=n;
        int count=0;
        while(temp>0){
            count++;
            temp=temp/10;
        }
        int k=(int)(Math.pow(10,count));
        int f=sq/k;
        int s=sq%k;
        int ans=f+s;
        if(ans==n){
            return true;
        }
        else{
            return false;
        }
    }
}
