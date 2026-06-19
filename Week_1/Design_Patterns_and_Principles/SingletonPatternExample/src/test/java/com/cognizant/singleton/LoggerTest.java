package com.cognizant.singleton;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class LoggerTest {

    @Test
    public void testSingletonInstance() {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        assertNotNull(logger1, "Logger instance should not be null");
        
        // Check if both instances are the same
        assertSame(logger1, logger2, "Both Logger instances should be the exact same object in memory");
        
        logger1.log("Testing singleton pattern");
    }
}
