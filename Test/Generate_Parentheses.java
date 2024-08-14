package Test;

import java.util.ArrayList;
import java.util.List;

public class Generate_Parentheses {
    public static void main(String[] args) {
        int n=3;
        List<String>ll=new ArrayList<>();
        Parethesis(n,0,0,"",ll);
    }
    public static void Parethesis(int n,int open,int close,String ans, List<String>ll){
        if(open==n && close==n){
            System.out.print(ans+" ");
            ll.add(ans);
            return;
        }
//        if(open<n) {
//            Parethesis(n, open + 1, close, ans + "(");
//        }
//        if(close<open) {
//            Parethesis(n, open, close + 1, ans + ")");
//        }
        if(open>n || close>open){
            return;
        }
        Parethesis(n,open+1,close,ans+"(",ll);
        Parethesis(n,open,close+1,ans+")",ll);
    }
}
