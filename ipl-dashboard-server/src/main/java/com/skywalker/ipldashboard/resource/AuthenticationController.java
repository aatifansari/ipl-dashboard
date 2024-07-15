package com.skywalker.ipldashboard.resource;

import com.skywalker.ipldashboard.security.auth.AuthenticationRequest;
import com.skywalker.ipldashboard.security.auth.AuthenticationResponse;
import com.skywalker.ipldashboard.security.auth.AuthenticationService;
import com.skywalker.ipldashboard.security.auth.RegistrationRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    private static Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody @Valid RegistrationRequest registrationRequest){

        AuthenticationResponse response = new AuthenticationResponse();
        try{
            response = authService.register(registrationRequest);
            return ResponseEntity.ok(response);
        }catch(DataIntegrityViolationException e){
            String msg = "Email already exists";
            LOGGER.error(msg, e);
            response.setErrorMsg(msg);
            return ResponseEntity.badRequest().body(response);
        }catch(Exception e){
            String msg = "Internal Server Error";
            LOGGER.info(msg, e);
            response.setErrorMsg(msg);
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> register(@RequestBody AuthenticationRequest authRequest){
        return ResponseEntity.ok(authService.authenticate(authRequest));

    }
}