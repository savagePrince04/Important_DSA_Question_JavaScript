package Test3;

public class SelectionSort {
    public static void main(String[] args) {
        int arr[]={4,3,2,1,7};
        Sort(arr);
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
    public static void Sort(int arr[]){
        for(int i=0;i<arr.length;i++){
            int idx=Min(arr,i);
            int item=arr[i];
            arr[i]=arr[idx];
            arr[idx]=item;
        }
    }
    public static int Min(int arr[],int i){
        int min=i;
        for(int j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        return min;
    }
}
