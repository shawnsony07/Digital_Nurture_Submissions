package com.cognizant.singleton;

public class Logger {
    // Private static instance of itself
    private static Logger instance;

    // Private constructor to prevent instantiation
    private Logger() {
    }

    // Public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log message: " + message);
    }
}
