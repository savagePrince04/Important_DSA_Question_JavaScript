package Lec24;

public class Device {
    public void TurnOn(){
        System.out.println("turn on your device");
    }
}
class TV extends Device{
    public void TurnOn(){
        System.out.println("turn on your Tv");
    }
}
class Fan extends Device{
    public void TurnOn(){
        System.out.println("Turn on YOUR Fan");
    }
}
class Easy1{
    public static void main(String[] args) {
        Device myDevice;
        myDevice=new TV();
        myDevice.TurnOn();
    }
}