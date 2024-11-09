package com.kapu.cinescat.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kapu.cinescat.models.User;

public interface IUserRepo extends JpaRepository<User, Integer>{
    
}
