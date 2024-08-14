package Test10;

public class Device {
    public void TurnOn(){
        System.out.println("Turn on ...");
    }
}
class Tv extends Device{
    public void TurnOn(){
        System.out.println("turn on...");
    }
}
class Fan extends Device{
    public void TurnOn(){
        System.out.println("turn on Fan");
    }
}
class Easy1{
    public static void main(String[] args) {
        Device sc=new Device();
        sc=new Tv();
        sc.TurnOn();
    }
}
