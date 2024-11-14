class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        j=0;
        for i in range((m),(m+n)):
            nums1[i] =  nums2[j]
            j=j+1
        print (nums1)

sol = Solution()
sol.merge([1,2,3,0,0,0],3,[2,5,6],3)