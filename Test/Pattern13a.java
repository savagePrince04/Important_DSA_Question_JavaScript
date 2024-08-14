package Test;

public class Pattern13a {
    public static void main(String[] args) {
        int n=5;
        for(int row=1;row<=2*n-1;row++){
            int total_No_of_Star=(row<n?row:2*n-row);
            for(int star=1;star<=total_No_of_Star;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
