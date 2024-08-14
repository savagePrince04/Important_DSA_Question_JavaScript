package Test;

public class Pattern17 {
    public static void main(String[] args) {
        int n=5;
       for(int row=0;row<n;row++){
           int val=1;
           for(int star=0;star<=row;star++){
               System.out.print(val+" ");
               val=((row-star)*val)/(star+1);
           }
           System.out.println();
       }
    }
}
