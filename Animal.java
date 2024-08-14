public class Animal {
    public void Sound(){
        System.out.println("Make Sound");
    }
}
class Dog extends Animal{
    public void Sound(){
        System.out.println(" bark...");
    }
}

class Cat extends Animal{
    public void Sound(){
        System.out.println("meou meou..");
    }
}
class Easy{
    public static void main(String[] args) {
        Animal sc;
        sc=new Cat();
        sc.Sound();
        sc=new Dog();
        sc.Sound();
    }
}