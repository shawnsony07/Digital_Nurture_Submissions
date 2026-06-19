package com.cognizant.search;

import java.util.Arrays;

public class SearchAlgorithms {

    public static Product linearSearch(Product[] products, String targetId) {
        for (Product p : products) {
            if (p.getProductId().equals(targetId)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].getProductId().compareTo(targetId);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
