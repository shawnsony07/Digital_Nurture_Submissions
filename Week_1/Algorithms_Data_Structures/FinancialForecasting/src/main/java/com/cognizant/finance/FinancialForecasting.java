package com.cognizant.finance;

public class FinancialForecasting {

    /**
     * Recursive method to calculate future value
     * @param presentValue Current value
     * @param growthRate Growth rate per period (e.g., 0.05 for 5%)
     * @param periods Number of periods to forecast
     * @return Future value
     */
    public static double calculateFutureValue(double presentValue, double growthRate, int periods) {
        // Base case: 0 periods means the future value is the present value
        if (periods <= 0) {
            return presentValue;
        }
        // Recursive step: FV = PV * (1 + rate) repeated
        return (1 + growthRate) * calculateFutureValue(presentValue, growthRate, periods - 1);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;
        double growthRate = 0.05; // 5% growth
        int periods = 10; // 10 years
        
        double futureValue = calculateFutureValue(presentValue, growthRate, periods);
        System.out.printf("Future value after %d periods: %.2f%n", periods, futureValue);
    }
}
