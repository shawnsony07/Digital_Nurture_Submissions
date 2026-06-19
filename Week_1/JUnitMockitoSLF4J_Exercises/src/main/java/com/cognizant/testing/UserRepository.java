package com.cognizant.testing;
public interface UserRepository {
    User findByName(String name);
    void save(User user);
}
