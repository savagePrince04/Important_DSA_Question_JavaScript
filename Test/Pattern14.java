package Test;

public class Pattern14 {
    public static void main(String[] args) {
        int n=5;
        for(int row=1;row<=2*n-1;row++){
            // space
            int total_no_of_space=(row<n?n-row:row-n);
            for(int space=1;space<=total_no_of_space;space++){
                System.out.print("  ");
            }
            // star
            int total_no_star=(row<n?row:2*n-row);
            for(int star=1;star<=total_no_star;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
