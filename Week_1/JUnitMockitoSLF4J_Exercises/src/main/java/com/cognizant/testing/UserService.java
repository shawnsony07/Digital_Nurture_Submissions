package com.cognizant.testing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(String name) {
        logger.info("Fetching user with name: " + name);
        User user = userRepository.findByName(name);
        if (user == null) {
            logger.warn("User not found: " + name);
        }
        return user;
    }

    public void createUser(User user) {
        logger.info("Creating user: " + user.getName());
        try {
            userRepository.save(user);
        } catch (Exception e) {
            logger.error("Error creating user", e);
        }
    }
}
