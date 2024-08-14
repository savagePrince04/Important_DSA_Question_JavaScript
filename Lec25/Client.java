package Lec25;

public class Client {
    public static void main(String[] args) {
      A sc=new B();
      sc.fun();
        System.out.println(((B)(sc)).d);
    }
}
