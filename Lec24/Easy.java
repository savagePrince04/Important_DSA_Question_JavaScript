package Lec24;

public class Easy implements Geometry,Calculator{

    @Override
    public void Add() {
        int a=10;
        int b=20;
        int c=a+b;
        System.out.println(c);
    }

    @Override
    public void Sub() {
        int a=10;
        int b=20;
        int c=a-b;
        System.out.println(c);
    }

    @Override
    public void AreaOfRectangle(int height, int width) {
        System.out.println(height*width);
    }

    @Override
    public void AreaOfSquare(int side) {
        System.out.println(side*side);
    }
    @Override
    public void fun(){
        System.out.println("hello");
    }

    public static void main(String[] args) {
        Easy sc=new Easy();
        sc.Add();
        sc.Sub();
        sc.AreaOfRectangle(10,20);
        sc.AreaOfSquare(20);
        sc.fun();
    }
}
