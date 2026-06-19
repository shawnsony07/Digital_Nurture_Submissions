package com.cognizant.testing;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator(); // Arrange / Setup
    }

    @AfterEach
    public void tearDown() {
        calculator = null; // Teardown
    }

    @Test
    public void testAdd() {
        int result = calculator.add(2, 3); // Act
        assertEquals(5, result, "2 + 3 should equal 5"); // Assert
    }

    @Test
    public void testDivide() {
        int result = calculator.divide(10, 2);
        assertTrue(result == 5);
    }

    @Test
    public void testDivideByZeroThrowsException() {
        assertThrows(IllegalArgumentException.class, () -> calculator.divide(10, 0));
    }
}
