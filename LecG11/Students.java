package LecG11;

public class Students {
    String name="rahul";
    int age=23;
    public void Intro_your_self(){
        System.out.println("my name is "+name+" and age "+age);
    }
//    public Students(){
//        System.out.println(this);
//    }
    public Students(String name,int age){
        this("Shyam",35,1);
        this.name=name;
        this.age=age;
        System.out.println(name);
    }
    public Students(String name,int age,int id){
        this.name=name;
        this.age=age;
        System.out.println("my name is "+name+" and age "+age+" std id "+id);
    }
}
