def maxProfitAssignment(difficulty, profit, worker):
    def maxProfitAssignment(self, difficulty, profit, worker):
        sum_profit=0
        jobs=sorted(zip(difficulty,profit))
        j,max_profit = 0,0
        for i in range(len(worker)):
            while j < len(jobs) and jobs[j][0]<=worker[i]:
                max_profit = max(max_profit, jobs[j][1])
                j+=1
            sum_profit += max_profit
        return sum_profit

print(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]))
