package com.skywalker.ipldashboard.resource;

import com.skywalker.ipldashboard.security.auth.AuthenticationRequest;
import com.skywalker.ipldashboard.security.auth.AuthenticationService;
import com.skywalker.ipldashboard.security.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest){
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> register(@RequestBody AuthenticationRequest authRequest){
        return ResponseEntity.ok(authService.authenticate(authRequest));

    }
}