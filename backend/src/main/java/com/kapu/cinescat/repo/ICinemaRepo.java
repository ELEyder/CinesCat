package com.kapu.cinescat.repo;

import com.kapu.cinescat.models.Cinema;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICinemaRepo extends JpaRepository<Cinema, Integer>{
    
}
