package Test;

public class Pattern15 {
    public static void main(String[] args) {
        int n=5;
        for(int row=1;row<=2*n-1;row++){
            // space
            int total_no_of_space=(row<=n?2*row-2:2*(2*n-row)-2);
            for(int space=1;space<=total_no_of_space;space++){
                System.out.print("  ");
            }
            // star
            int total_no_star=(row<=n?(n+1)-row:row-(n-1));
            for(int star=1;star<=total_no_star;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}