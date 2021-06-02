import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
// cbaebabacd
// abc
public class Main{
    public static ArrayList<Integer> findAllAnagrams(String s,String p){
        /*logic here*/
        ArrayList<Integer> list = new ArrayList<Integer>();
        int P[]= new int[26];
        int S[]= new int[26];
        for(char c : p.toCharArray()){
            P[c-'a']++;
        }
        int left= 0, right= 0;
        while(right < s.length()) {
            int len= right - left + 1;
            char c= s.charAt(right);
            S[c-'a']++;
            if(len < p.length()) {
                right++;
                continue;
            }
            if(len == p.length()) {
                char start= s.charAt(left);
                if(Arrays.equals(S, P)) {
                    S[start-'a']--;
                    list.add(left);
                }
                else{
                    S[start-'a']--;
                }
                left++;
                right++;
            }
            
        }
        return list;
    }
    public static void main(String[] args){
        /*code*/
        Scanner scan = new Scanner(System.in);
        String S = scan.next();
        String P = scan.next();
        ArrayList<Integer> list =  new ArrayList<Integer>();
        list = findAllAnagrams(S,P);
        String X = list.toString();
        System.out.print(X.replaceAll(" ",""));
    }
    
}
