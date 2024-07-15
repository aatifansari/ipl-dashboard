package com.skywalker.ipldashboard.security.auth;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegistrationRequest {

    @NotBlank
    @Size(min = 2, max = 32, message = " First Name:'${validatedValue}' must be between {min} and {max} characters long")
    private String firstName;

    @NotBlank
    @Size(min = 2, max = 32, message = " Last Name:'${validatedValue}' must be between {min} and {max} characters long")
    private String lastName;

    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE)
    private String email;

    @NotBlank
    @Size(min = 8, max = 32, message = "Password:'${validatedValue}' must be between {min} and {max} characters long")
    private String password;

    @NotBlank
    @Size(min = 10, max = 10, message = "Phone Number:'${validatedValue}' must be of size {max}")
    private String phoneNumber;
}

