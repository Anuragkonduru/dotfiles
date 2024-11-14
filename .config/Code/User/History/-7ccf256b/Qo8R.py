def judgeSquareSum( c):
    for i in range(c): 
        for j in range(i):
         if(c==(i*i)+(j*j)):
            print(i,j)
            return True
    return False

print(judgeSquareSum(2))

