package Test;

public class Pattern12 {
    public static void main(String[] args) {
        int n=5;
        for(int row=1;row<=n;row++){
            for(int space=1;space<=5-row;space++){
                System.out.print("  ");
            }
            for(int star=1;star<=2*row-1;star++){
                if(star%2==0){
                    System.out.print("! ");
                }
                else {
                    System.out.print("* ");
                }
            }
            System.out.println();
        }
    }
}
