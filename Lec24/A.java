package Lec24;

public class A {
   protected int data=40;
    protected void msg(){
        System.out.println("hello");
    }
  protected A(){
         System.out.println("i side A");
         System.out.println(data);
    }
}
class simple{
    public static void main(String[] args) {
        A sc=new A();
        System.out.println(sc.data);
        sc.msg();
    }
}
