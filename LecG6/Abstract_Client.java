package LecG6;

public class Abstract_Client {
    public static void main(String[] args) {
//        Abstraction sc=new Abstraction();
//        Abstraction_Child sc=new Abstraction_Child();
//        sc.Payment();
//        sc.ShowItem();
        Abstraction sc=new Abstraction() {
            @Override
            public void Payment() {
                System.out.println("we can payment now");
            }

            @Override
            public void ShowItem() {
                System.out.println("we can show item");
            }
        };
        sc.Payment();
        sc.ShowItem();
    }
}
