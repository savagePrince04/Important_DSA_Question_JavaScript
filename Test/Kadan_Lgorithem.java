package Test;

public class Kadan_Lgorithem {
    public static void main(String[] args) {
        int nums[]={-2,1,-3,4,-1,2,1,-5,4};
        Max(nums);
    }
    public static void Max(int arr[]){
        int ans=Integer.MIN_VALUE;
        int sum=0;
        for(int i=0;i<arr.length;i++){
           sum=sum+arr[i];
           ans=Math.max(sum,ans);
           if(sum<0){
               sum=0;
           }
        }
        System.out.println(ans);
    }
}
