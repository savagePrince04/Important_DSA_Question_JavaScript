package Test;
 class Pattern5 {
    public static void main(String[] args) {
        int n=10;
        for(int row=1;row<=n;row++){
            for(int space=1;space<=row-1;space++){
                System.out.print("  ");
            }
            for(int star=1;star<=n+1-row;star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
