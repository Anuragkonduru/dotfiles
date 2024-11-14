class Solution(object):
    def sortColors(self, nums):
        j=len(nums)-1
        m=round(j/2)
        print (j,m)
        for i in range(len(nums)):
            if (nums[i]>nums[j]& j>m) | ((nums[i]<nums[j]& j<m)):
                nums[i],nums[j]=nums[j],nums[i]
            
            j-=1

        print(nums)
sol = Solution()
sol.sortColors([2,0,2,1,1,0])
