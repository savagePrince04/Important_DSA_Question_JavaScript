package Test;

public class Pattern6 {
    public static void main(String[] args) {
        int n=5;
        for(int row=1;row<=n;row++){
            for(int space=1;space<=2*row-2;space++){
                System.out.print("  ");
            }
            for(int star=1;star<=n+1-row;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
