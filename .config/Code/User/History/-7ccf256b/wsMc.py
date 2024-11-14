def judgeSquareSum( c):
        j=0
        count=0
        for i in range(c+1): 
            if(count>j+1):
                j=j+1
            count+=1
            if(c==(i*i)+(j*j)):
                    return True
        return False

print(judgeSquareSum(100000000))

