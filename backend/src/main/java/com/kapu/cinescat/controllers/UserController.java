package com.kapu.cinescat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kapu.cinescat.models.User;
import com.kapu.cinescat.repo.IUserRepo;


@Controller
public class UserController {

    @Autowired
    private IUserRepo IUser;
    
    @PostMapping("/user/create")
    public String userCreate(@RequestParam(name = "name") String name, 
    @RequestParam(name = "password") String password) {
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        IUser.save(user);

        return new String();
    }

    @GetMapping("/")
    public String index(@RequestParam(name="name" , required = false, defaultValue = "world") String param) {
        User user = new User();
        user.setName("Eyder");
        user.setPassword("1234");
        IUser.save(user);

        return new String();
    }
}
