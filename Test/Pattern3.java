package Test;

public class Pattern3 {
    public static void main(String[] args) {
        int n=5;
        for(int row=0;row<n;row++){
            for(int star=0;star<n-row;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
