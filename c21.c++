#include<iostream>
#include<math.h>
using namespace std;
 
 int main()
 {
    int ans=0;
    int i=0;
    int n=0;
    cin>>n;

    while(n!=0)
    {  
        if((ans > 'INT_MAX'/10)||(ans < 'INT_MIN'/10)){
            return 0;
        }
       int digit = n % 10;
        ans = (ans *10)+digit;
        n=n/10;

    }
    cout<<"answer is "<<ans<<endl;
 }