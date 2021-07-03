import java.util.Arrays;

public class Quicksort{
    public static void main(String[] args){
        int ar[] = new int[] {21,2,11,4,411,8};
        System.out.println(Arrays.toString(ar));
        sort(ar,0,ar.length-1);
        System.out.println(Arrays.toString(ar));
    }
    public static void sort(int ar[],int start,int end){
        if(start<end){
            int part_idx = partition(ar,start,end);
            sort(ar,start,part_idx-1);
            sort(ar,part_idx+1,end);
        }
    }
    public static int partition(int ar[],int start,int end){
        int pivot = ar[end];
        int part_idx = start;
        for(int i=start;i<end;i++){
            if(ar[i]<=pivot){
                swap(ar,i,part_idx);
                part_idx++;
            }
        }
        swap(ar,part_idx,end);
        return part_idx;
    }
    public static void swap(int ar[],int l, int r){
        int temp = ar[l];
        ar[l] = ar[r];
        ar[r] = temp;
    }
}
