package com.cognizant.testing;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void testGetUser() {
        // Stubbing
        when(userRepository.findByName("Alice")).thenReturn(new User("Alice"));

        User user = userService.getUser("Alice");
        assertNotNull(user);
        assertEquals("Alice", user.getName());
    }

    @Test
    public void testCreateUser() {
        User bob = new User("Bob");
        userService.createUser(bob);

        // Verifying Interactions
        verify(userRepository, times(1)).save(bob);
    }
}
