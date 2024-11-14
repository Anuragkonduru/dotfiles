from typing import Self


def judgeSquareSum(self, c):
    for i in range(c): 
        for j in range(i):
         if(c==(i*i)+(j*j)):
            return True
    return False

judgeSquareSum(Self,2)