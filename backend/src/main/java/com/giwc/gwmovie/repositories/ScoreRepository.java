package com.giwc.gwmovie.repositories;

import com.giwc.gwmovie.entities.Score;
import com.giwc.gwmovie.entities.ScorePK;
import com.giwc.gwmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
