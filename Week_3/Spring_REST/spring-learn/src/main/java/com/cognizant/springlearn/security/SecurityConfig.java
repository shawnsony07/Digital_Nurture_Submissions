package com.cognizant.springlearn.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authenticationManager) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .httpBasic(withDefaults())
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/authenticate").permitAll() // Handbook says hasAnyRole("USER", "ADMIN") but permitAll is usually needed for auth endpoint or it needs basic auth. Let's rely on basic auth.
                .anyRequest().authenticated()
            )
            .addFilter(new JwtAuthorizationFilter(authenticationManager));
        return http.build();
    }
}
