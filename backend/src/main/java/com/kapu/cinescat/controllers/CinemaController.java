package com.kapu.cinescat.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kapu.cinescat.models.Cinema;
import com.kapu.cinescat.repo.ICinemaRepo;

@CrossOrigin(origins = { "http://localhost:5173", "https://1ktzpbmr-5173.brs.devtunnels.ms" })
@RestController
public class CinemaController {
    @Autowired
    private ICinemaRepo ICinemaRepo;

    @GetMapping("/cinemas")
    public List<Cinema> getCinemas() {
        return ICinemaRepo.findAll();
    }

    @PostMapping("/cinemas/create")
    public ResponseEntity<String> addMovie(@RequestParam("name") String name,
            @RequestParam("address") String address,
            @RequestParam("city") String city,
            @RequestParam("phone") String phone) {

        Cinema cinema = new Cinema();
        cinema.setName(name);
        cinema.setAddress(address);
        cinema.setCity(city);
        cinema.setPhone(phone);

        ICinemaRepo.save(cinema);

        return ResponseEntity.status(HttpStatus.CREATED).body("Movie created successfully!");
    }
}
