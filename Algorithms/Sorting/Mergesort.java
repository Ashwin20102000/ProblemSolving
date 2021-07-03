import java.util.Arrays;

public class Mergesort{
    public static void main(String[] args){
        int ar[] = new int[] {21,2,11,4,411,8};
        System.out.println(Arrays.toString(ar));
        mergeSort(ar);
        System.out.println(Arrays.toString(ar));
    }
    static void mergeSort(int arr[]){
        int n=arr.length;
        if(n<2){
            return;
        }
        int mid  = n/2;
        int[] left =  new int[mid];
        int[] right =  new int[n-mid];
        for(int i=0;i<mid;i++){
            left[i]=arr[i];
        }
        for(int i=mid;i<n;i++){
            right[i-mid]=arr[i];
        }
        mergeSort(left);
        mergeSort(right);
        merge(arr,left,right);
    }
    static void merge(int arr[],int left[],int right[]){
        int leftLen = left.length;
        int rightLen = right.length;
        int i=0,j=0,k=0;
        while(i<leftLen && j<rightLen){
            if(left[i]<right[j])arr[k]=left[i++];
            else arr[k]=right[j++];
            k++;
        }
        while(i<leftLen){
            arr[k++]=left[i++];
        }
        while(j<rightLen){
            arr[k++]=right[j++];
        }
    }
}
