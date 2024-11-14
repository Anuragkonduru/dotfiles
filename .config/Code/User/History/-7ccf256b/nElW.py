def judgeSquareSum( c):
    for i in range(c): 
        for j in range(i+1):
            print(i,j)
            if(c==(i*i)+(j*j)):
                return True
    return False

print(judgeSquareSum(2))

