package com.cognizant.search;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // 1. Create some dummy products
        Product p1 = new Product("P001", "Laptop", "Electronics");
        Product p2 = new Product("P003", "Smartphone", "Electronics");
        Product p3 = new Product("P005", "Headphones", "Audio");
        Product p4 = new Product("P002", "Desk Chair", "Furniture");
        Product p5 = new Product("P004", "Monitor", "Electronics");

        Product[] products = {p1, p2, p3, p4, p5};

        System.out.println("--- Ecommerce Search Algorithms ---");
        
        // 2. Linear Search
        System.out.println("\nTesting Linear Search for ID 'P004':");
        Product foundLinear = SearchAlgorithms.linearSearch(products, "P004");
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Not Found");

        // 3. Binary Search requires the array to be sorted first
        Arrays.sort(products);
        
        System.out.println("\nTesting Binary Search for ID 'P002' (after sorting):");
        Product foundBinary = SearchAlgorithms.binarySearch(products, "P002");
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Not Found");
        
        System.out.println("\nTesting Binary Search for Non-existent ID 'P999':");
        Product notFound = SearchAlgorithms.binarySearch(products, "P999");
        System.out.println(notFound != null ? "Found: " + notFound : "Not Found");
    }
}
