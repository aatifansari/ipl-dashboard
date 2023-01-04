package com.skywalker.ipldashboard.repository;

import com.skywalker.ipldashboard.entity.Match;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {

    @Query("SELECT m FROM Match m WHERE m.team1 = :teamName OR m.team2 = :teamName")
    List<Match> findFirst3ByTeam1OrTeam2OrderByDateDesc(String teamName, Pageable getSortedByMatchDate);
}
