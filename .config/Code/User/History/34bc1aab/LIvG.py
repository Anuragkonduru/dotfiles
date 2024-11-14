class Solution(object):
    def sortColors(self, nums):
        j=len(nums)-1
        m=j/2
        print (j,m)
        for i in range(len(nums)):
            if nums[i]>nums[j]:
                nums[i],nums[j]=nums[j],nums[i]
            j-=1
            if j<m-1:
                break
sortColors([2,0,2,1,1,0])