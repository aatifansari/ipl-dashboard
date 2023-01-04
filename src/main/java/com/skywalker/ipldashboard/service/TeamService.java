package com.skywalker.ipldashboard.service;

import com.skywalker.ipldashboard.entity.Team;

public interface TeamService {

    Team findTeamDetailsByName(String teamName);
}
