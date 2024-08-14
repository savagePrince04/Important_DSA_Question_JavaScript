package Test10;

public class Animal {
    public void Sound() {
        System.out.println("Animal make a sound");
    }
}
    class Dog extends Animal{
        public void Sound(){
            System.out.println("Dog Bark...");
        }
    }
    class Cat extends Animal{
        public void Sound(){
            System.out.println("meou meou...");
        }
    }

class Easy{
    public static void main(String[] args) {
       Animal sc=new Cat();
        sc.Sound();
    }
}
