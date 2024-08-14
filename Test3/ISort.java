package Test3;

public class ISort {
    public static void main(String[] args) {
        int arr[]={4,3,2,7,5,5};
        for(int i=1;i<arr.length;i++){
            InsertationSort(arr,i);
        }
        for(int i=0;i< arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
    public static void InsertationSort(int arr[],int i){
        int item=arr[i];
        int j=i-1;
        while(j>=0 && arr[j]>item){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=item;
    }
}
