package com.giwc.gwmovie.controllers;

import com.giwc.gwmovie.dto.MovieDTO;
import com.giwc.gwmovie.dto.ScoreDTO;
import com.giwc.gwmovie.services.MovieService;
import com.giwc.gwmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
        MovieDTO movieDTO = service.saveScore(dto);
        return movieDTO;
    }
}
