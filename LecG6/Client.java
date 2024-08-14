package LecG6;
public class Client {
    public static void main(){
        System.out.println("i am inside main");
    }
    public static void main(String[] args) {
        Studdents sc= new Studdents("Ram",25);
        Studdents s2= new Studdents("Mohan",27);
        System.out.println(sc);
        main();
//        sc.name="Ram";
//        sc.age=26;
//        Studdents s2=new Studdents();
//        s2.name="Mohan";
//        s2.age=30;
//        s2.Intro_yourSelf();
//        sc.Intro_yourSelf();
//        System.out.println(sc.name);
    }

}

