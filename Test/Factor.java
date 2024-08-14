package Test;

public class Factor {
    public static void main(String[] args) {
        int n=120;
        int count=0;
        for(int i=2;i*i<n;i++){
            if(n%i==0){
                count++;
                break;
            }
        }
        System.out.println(count);
        if(count>=1){
            System.out.println("not prime");
        }
        else{
            System.out.println("prime");
        }
    }
}
