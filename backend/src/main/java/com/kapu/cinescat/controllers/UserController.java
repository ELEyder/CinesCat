package com.kapu.cinescat.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kapu.cinescat.models.User;
import com.kapu.cinescat.repo.IUserRepo;


@RestController
public class UserController {

    @Autowired
    private IUserRepo IUser;
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/users")
    public List<User> getUsers() {
        return IUser.findAll();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/users/create")
    public ResponseEntity<String> userCreate(@RequestBody User user) {
        IUser.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully!");
    }


}
