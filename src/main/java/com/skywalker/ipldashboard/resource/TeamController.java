package com.skywalker.ipldashboard.resource;

import com.skywalker.ipldashboard.entity.Team;
import com.skywalker.ipldashboard.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    @Autowired
    TeamService matchService;

    @GetMapping("/team/{teamName}")
    public ResponseEntity<Team> getTeam(@PathVariable(name = "teamName") String teamName){
        return ResponseEntity.status(HttpStatus.OK).body(matchService.findTeamDetailsByName(teamName));
    }
}
