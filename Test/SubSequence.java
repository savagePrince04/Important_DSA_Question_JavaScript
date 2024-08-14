package Test;

public class SubSequence {
    public static void main(String[] args) {
        String s="abc";
        PrintSub(s,"");
    }
    public static void PrintSub(String s,String ans){
        if(s.length()==0){
            System.out.println(ans);
            return;
        }
        char ch=s.charAt(0);
        PrintSub(s.substring(1),ans);
        PrintSub(s.substring(1),ans+ch);
    }
}
