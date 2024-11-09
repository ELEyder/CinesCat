package com.kapu.cinescat.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kapu.cinescat.models.Movie;

public interface IMovieRepo extends JpaRepository<Movie, Integer>{
    
}
