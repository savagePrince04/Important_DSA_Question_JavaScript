package Test;

import java.util.Scanner;

public class Rat_chases_its_cheese2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int m=sc.nextInt();
        char Meze[][]=new char[n][m];
        for(int i=0;i<n;i++){
            String s=sc.next();
            for(int j=0;j<s.length();j++){
                Meze[i][j]=s.charAt(j);
            }
        }
        int ans[][]=new int[n][m];
        MazePath(Meze,0,0,ans);
        if(falg==false){
            System.out.println("no path found");
        }
    }
    static boolean falg=false;
    public static void MazePath(char Maze[][],int cr,int cc,int ans[][]){
        if(cc<0 || cr<0 || cc>=Maze[0].length || cr>=Maze.length || Maze[cr][cc]=='X'){
            return;
        }
        if(cc==Maze[0].length-1 && cr==Maze.length-1){
            ans[cr][cc]=1;
            falg=true;
            Display(ans);
        }
        Maze[cr][cc]='X';
        ans[cr][cc]=1;
        int c[]={0,-1,0,1};
        int r[]={-1,0,1,0};
        for(int i=0;i<c.length;i++){
            MazePath(Maze,cr+r[i],cc+c[i],ans);
        }
//        MazePath(Maze,cr-1,cc,ans);
//        MazePath(Maze,cr,cc-1,ans);
//        MazePath(Maze,cr+1,cc,ans);
//        MazePath(Maze,cr,cc+1,ans);
        Maze[cr][cc] ='O';
        ans[cr][cc]=0;
    }
    public static void Display(int ans[][]){
        for(int i=0;i<ans.length;i++){
            for(int j=0;j<ans[0].length;j++){
                System.out.print(ans[i][j]+" ");
            }
            System.out.println();
        }
    }
}
