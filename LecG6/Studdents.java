package LecG6;

public class Studdents extends Object{
    String name ="Rahul";
    int age=25;
    Studdents(String name,int gae){
        this("Shyam",26,2);
        this.name=name;
        this.age=age;

    }
    Studdents(String name,int gae,int Stu_id){
        this.name=name;
        this.age=age;
        System.out.println("my name is "+name+" and age "+age+" stu_id "+Stu_id);
    }
    public void Intro_yourSelf(){
        System.out.println("my name is "+name +" and age "+age);
    }
}
