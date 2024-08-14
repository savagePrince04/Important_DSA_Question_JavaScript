package Lec24;
import java.util.Scanner;
public class Genric {
    public static void main(String[] args) {
        String s[]={"Prince","Shivam","Rahul","Tushar"};
        Display(s);
        System.out.println();
        Integer arr[]={10,20,30,40,50};
        Display(arr);
    }
    public static <T> void Display(T s[]){
        for(int i=0;i<s.length;i++){
            System.out.print(s[i]+" ");
        }
    }
}
