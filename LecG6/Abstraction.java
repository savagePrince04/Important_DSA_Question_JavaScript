package LecG6;

public abstract class Abstraction {
    public abstract void Payment();
    public abstract void ShowItem();
    public void ViewBallence(){
        System.out.println("we can view your Ballence");
    }
    Abstraction(){
        System.out.println("I am inside Abstract class");
    }
}
