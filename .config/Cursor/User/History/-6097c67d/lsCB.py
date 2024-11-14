def maxProfitAssignment(difficulty, profit, worker):
        n = len(difficulty)
        m = len(worker)
        jobs = sorted(zip(difficulty, profit))
        print(jobs)
        sum_profit = 0
        for i in range(m):
            max_profit = 0
            for j in range(n):
                if difficulty[j] <= worker[i]:
                    max_profit = max(max_profit, profit[j])
            sum_profit += max_profit
        return sum_profit

print(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]))
