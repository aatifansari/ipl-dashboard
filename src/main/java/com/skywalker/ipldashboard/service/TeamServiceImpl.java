package com.skywalker.ipldashboard.service;

import com.skywalker.ipldashboard.entity.Match;
import com.skywalker.ipldashboard.entity.Team;
import com.skywalker.ipldashboard.repository.MatchRepository;
import com.skywalker.ipldashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    MatchRepository matchRepository;

    public Team findTeamDetailsByName(String teamName){
        Pageable getSortedByMatchDate = PageRequest.of(0, 4, Sort.by("date").descending());
        try{
            Team team =  teamRepository.findByTeamName(teamName).orElseThrow(EntityNotFoundException::new);
            List<Match> matches = matchRepository.findFirst3ByTeam1OrTeam2OrderByDateDesc(teamName, getSortedByMatchDate);
            team.setRecentMatches(matches);
            return team;
        }catch(Exception ex){
            throw new EntityNotFoundException();
        }
    }

    @Override
    public List<Match> findAllMatchesByTeamNameAndYear(String teamName, Integer year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year, 12, 31);
        return matchRepository.getAllMatchesByTeamNameAndYear(teamName, startDate, endDate);
    }
}
