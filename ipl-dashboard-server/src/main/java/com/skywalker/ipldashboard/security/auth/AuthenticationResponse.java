package com.skywalker.ipldashboard.security.auth;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AuthenticationResponse {
    @JsonProperty("status")
    private boolean status;
    @JsonProperty("token")
    private String token;
    @JsonProperty("msg")
    private String msg;
    @JsonProperty("error_msg")
    private String errorMsg;
}
