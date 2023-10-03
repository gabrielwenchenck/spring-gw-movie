package com.giwc.gwmovie.repositories;

import com.giwc.gwmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
