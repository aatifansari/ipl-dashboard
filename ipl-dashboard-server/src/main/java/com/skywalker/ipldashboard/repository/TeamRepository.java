package com.skywalker.ipldashboard.repository;

import com.skywalker.ipldashboard.entity.Match;
import com.skywalker.ipldashboard.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    Optional<Team> findByTeamName(String teamName);

}
