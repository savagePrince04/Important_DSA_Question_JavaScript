package Test;

public class BinarySearch {
    class node{
        int data;
        node left;
        node right;
    }
    private node root;
    public BinarySearch(int arr[]){
        root=CreateTree(arr,0,arr.length-1);
    }
    private node CreateTree(int arr[],int si,int ei){
        if(si>ei){
            return null;
        }
        int mid=(si+ei)/2;
        node newnode=new node();
        newnode.data=arr[mid];
        newnode.left=CreateTree(arr,si,mid-1);
        newnode.right=CreateTree(arr,mid+1,ei);
        return newnode;
    }

    public static void main(String[] args) {
        int arr[]={10,20,30,40,50,60,70,80};
        BinarySearch sc=new BinarySearch(arr);
    }
}