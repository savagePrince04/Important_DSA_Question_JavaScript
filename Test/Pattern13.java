package Test;

public class Pattern13 {
    public static void main(String[] args) {
        int n=5;
        for(int row=1;row<n;row++){
            for(int star=1;star<=row;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int row=1;row<=n;row++){
            for(int star=1;star<=n+1-row;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
