def sortColors(self, nums):
        j=len(nums)-1
        m=j/2
        for i in range(len(nums)):
            if nums[i]>nums[j]:
                nums[i],nums[j]=nums[j],nums[i]
            j-=1
            if j<m-1:
                break
sortColors()