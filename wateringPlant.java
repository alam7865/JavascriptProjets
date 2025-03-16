import java.util.*;
public class wateringPlant {
    public static void main(String[] args) {
       int arr[]={2,2,3,3};
       int n=arr.length;
       int cap=5;
       int step=0;
       for(int i=0;i<n;i++)
       {
            if(arr[i]<=cap)
            {
                step++;
                cap-=arr[i];
            }
            else{
                step+=(i+1)+(i);
                cap=5;
                cap-=arr[i];

            }
       }

       System.out.println(step);
    }
}
