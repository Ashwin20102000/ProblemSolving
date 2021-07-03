public class HelloWorld{
     public static boolean palin(String s){
        int n=s.length();
        int l=0,r=n-1;
        for(int i=0;i<n/2;i++){
            if(s.charAt(l)!=s.charAt(r)){
                return false;    
            }
            l++;
            r--;
        }
        return true;
    }
     public static void main(String []args){
        String s1="AshozhsA";
       System.out.print(palin(s1));
    }
}
