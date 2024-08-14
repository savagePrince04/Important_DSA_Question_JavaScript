package Test10;

public class NextFebo {
    public static long NextFib(int n){
        Double phi=(1+Math.sqrt(5))/2.0;
        return Math.round(n*phi);
    }
    public static void main(String[] args) {
        int n=34;
        System.out.println(NextFib(n));
    }
}
