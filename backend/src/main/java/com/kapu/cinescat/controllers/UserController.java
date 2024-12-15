package com.kapu.cinescat.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kapu.cinescat.models.User;
import com.kapu.cinescat.repo.IUserRepo;

@CrossOrigin(origins = { "http://localhost:5173", "https://1ktzpbmr-5173.brs.devtunnels.ms" })
@RestController
public class UserController {

    @Autowired
    private IUserRepo IUser;

    @GetMapping("/users")
    public List<User> getUsers() {
        return IUser.findAll();
    }

    @PostMapping("/users/create")
    public ResponseEntity<String> userCreate(@RequestBody User user) {
        IUser.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestParam("username") String username,
            @RequestParam("password") String password) {
        Optional<User> userOptional = IUser.findByUsername(username);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            if (user.getPassword().equals(password)) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado");
        }
    }
}
