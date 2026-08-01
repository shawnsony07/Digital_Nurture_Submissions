public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

class Calculator {
    public int add(int a, int b) { return a + b; }
    public double add(double a, double b) { return a + b; }
    public int add(int a, int b, int c) { return a + b + c; }
}

class Fibonacci {
    public static int fib(int n) {
        if(n <= 1) return n;
        return fib(n-1) + fib(n-2);
    }
}

class Palindrome {
    public static boolean check(String s) {
        String clean = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return clean.equals(new StringBuilder(clean).reverse().toString());
    }
}
