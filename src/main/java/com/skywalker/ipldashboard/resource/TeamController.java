package com.skywalker.ipldashboard.resource;

import com.skywalker.ipldashboard.entity.Match;
import com.skywalker.ipldashboard.entity.Team;
import com.skywalker.ipldashboard.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    TeamService matchService;

    @GetMapping("/team/{teamName}")
    public ResponseEntity<Team> getTeam(@PathVariable(name = "teamName") String teamName){
        return ResponseEntity.status(HttpStatus.OK).body(matchService.findTeamDetailsByName(teamName));
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getTeam(@PathVariable("teamName") String teamName,
                               @RequestParam("year") Integer year){
        return matchService.findAllMatchesByTeamNameAndYear(teamName, year);
    }
}
