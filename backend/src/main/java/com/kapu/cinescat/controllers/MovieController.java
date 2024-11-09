package com.kapu.cinescat.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kapu.cinescat.models.Movie;
import com.kapu.cinescat.repo.IMovieRepo;


@RestController
public class MovieController {

    @Autowired
    private IMovieRepo IMovieRepo;
    
    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return IMovieRepo.findAll();
    }

    @PostMapping("/movies/create")
    public ResponseEntity<String> movieCreate(@RequestBody Movie movie) {
        IMovieRepo.save(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body("Movie created successfully!");
    }


}
