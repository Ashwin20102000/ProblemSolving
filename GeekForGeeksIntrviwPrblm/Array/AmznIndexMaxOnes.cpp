Questions :
    Find The Index Position of the maximum 1's ( Boolean ) in the Matrix.
    
 ANSWER:

#include <bits/stdc++.h>
using namespace std;
int main()
{
	vector<vector<int>> matrix{
		{0,0,1,1},
		{0,1,1,1},
		{0,0},
		{0,1,1}
	};
	vector <int> ans;
	for(auto row:matrix){
		int sum = 0;  
		for(auto col:row){
			sum+=col;
		}
		ans.push_back(sum);
	}
	cout<< max_element(ans.begin(),ans.end())-ans.begin();
	return 0;
}
