def maxProfitAssignment( difficulty, profit, worker):
    n = len(difficulty)
    m = len(worker)
    sum=0
    for i in range(m):
        max_index=-1
        for j in range(n):
            if difficulty[j]<=worker[i] and (max_index == -1 or difficulty[j] >=difficulty[j]):
                max_index=j
                sum+=profit[j]
                worker.pop(i)
    return sum
print(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50],[4,5,6,7]))