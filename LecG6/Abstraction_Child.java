package LecG6;

public class Abstraction_Child extends Abstraction{
    @Override
    public void Payment() {
        System.out.println("we can payment now");
    }

    @Override
    public void ShowItem() {
        System.out.println("we can show you item");
    }
    Abstraction_Child(){
        super.ViewBallence();
        System.out.println(" i m inside child");
    }
}
