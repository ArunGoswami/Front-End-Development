#include <iostream>
#include <vector>
using namespace std;
vector<int> reverse_vector(vector<int> v)
{
    int j=0;
    int s = 0;
    int e = v.size() - j;
    while (s < e)
    {
        swap(v[s], v[e]);
        s++;
        e--;
    }
    return v;
}
void print(vector<int> v)
{
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }
    cout << endl;
}
int main()
{
    vector<int> v;
    v.push_back(1);
    v.push_back(1);
    v.push_back(3);
    v.push_back(4);
    v.push_back(5);
    vector<int> ans = reverse_vector(v);
    cout << "printing array" << endl;
    print(ans);
}