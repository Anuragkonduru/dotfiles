def maxProfitAssignment(self, difficulty, profit, worker):
    sum=0
    for i in m:
        max_index=-1
        for j in n:
            if difficulty[j]<=worker[i] and (max_index == -1 or difficulty[j] >=difficulty[j])
                max-index=j
                sum+=profit[j]
                worker.pop(i)
    return sum
print(maxProfitAssignment())