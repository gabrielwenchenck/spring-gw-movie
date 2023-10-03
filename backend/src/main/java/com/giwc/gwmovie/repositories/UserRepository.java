package com.giwc.gwmovie.repositories;

import com.giwc.gwmovie.entities.Movie;
import com.giwc.gwmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
