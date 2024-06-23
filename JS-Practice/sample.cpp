#include <iostream>
using namespace std;

int main()
{
    // void *ptr;
    // int a=5;

    // ptr=&a;
    // cout<<a<<"\n";
    // cout<<*(int *)ptr<<"\n";
    // cout<<ptr;

    int a=5 ,b=6;
    int *ptr1=&a ,*ptr2=&b;
    cout<<*ptr1<<"\n";
    cout<<*ptr2<<"\n";
    cout<<(*ptr1)+(*ptr2);

    
}