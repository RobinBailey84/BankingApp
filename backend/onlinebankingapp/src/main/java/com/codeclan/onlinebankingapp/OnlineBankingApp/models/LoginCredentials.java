package com.codeclan.onlinebankingapp.OnlineBankingApp.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

public class LoginCredentials {

    private String username;
    private String password;

    //To create a JSON object you have to have @JsonCreator and you have to include @JsonProperty in the constructor
    // along with the actual arguments where there is no empty constructor and setters.

    @JsonCreator
    public LoginCredentials(@JsonProperty("username") String username, @JsonProperty("password") String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

}
