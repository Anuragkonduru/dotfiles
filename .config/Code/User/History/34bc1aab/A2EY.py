class Solution(object):
    def sortColors(self, nums):
        for i in range(len(nums)):
            for j in range(len(nums), -1, -1):
                if nums[i]>nums[j]:
                    nums[i],nums[j]=nums[j],nums[i]
        print(nums)
sol = Solution()
sol.sortColors([2,0,2,1,1,0])
