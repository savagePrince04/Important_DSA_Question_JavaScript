package Test3;

public class InsertionSort {
    public static void main(String[] args) {
        int arr[]={1,3,4,5,2};
        for(int i=1;i<arr.length;i++){
            InsertLast(arr,i);
        }
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
    public static void InsertLast(int arr[],int i){
        int item=arr[i];
        int j=i-1;
        while(j>=0 && arr[j]>item){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=item;
    }
}
