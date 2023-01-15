package com.skywalker.ipldashboard.service;

import com.skywalker.ipldashboard.entity.Match;
import com.skywalker.ipldashboard.entity.Team;

import java.util.List;

public interface TeamService {

    Team findTeamDetailsByName(String teamName);

    List<Match> findAllMatchesByTeamNameAndYear(String teamName, Integer year);
}
