package Lec24;

public class Prime {

    public static void main(String[] args) {
        int n=10;
        int i=2;
        int count=0;
        while(count<n){
            if(IsPrime(i)){
                System.out.println(i);
                count++;
            }
            i++;
        }
    }
    public static boolean IsPrime(int n){
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}
