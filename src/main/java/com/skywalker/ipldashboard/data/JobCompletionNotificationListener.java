package com.skywalker.ipldashboard.data;

import com.skywalker.ipldashboard.entity.Team;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Transactional
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

//    private final JdbcTemplate jdbcTemplate;

    private final EntityManager em;

    @Autowired
    public JobCompletionNotificationListener(EntityManager em) {
//        this.jdbcTemplate = jdbcTemplate;
        this.em = em;
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Time to verify the results");

            Map<String, Team> teamData = new HashMap<>();
            em.createQuery("select m.team1, count(*) from Match m group by m.team1", Object[].class)
                    .getResultList()
                    .stream()
                    .map(ob -> new Team((String) ob[0], (long) ob[1]))
                    .forEach(team -> teamData.put(team.getTeamName(), team));

            em.createQuery("select m.team2, count(*) from Match m group by m.team2", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(ob ->{
                        Team team = teamData.get((String)ob[0]);
                        team.setTotalMatches(team.getTotalMatches()+(long)ob[1]);
                        teamData.put((String)ob[0], team);
                    });

            em.createQuery("select m.winner, count(*) from Match m group by m.winner", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(ob ->{
                        Team team = teamData.get((String)ob[0]);
                        if(team != null){
                            team.setTotalWins((long) ob[1]);
                            teamData.put((String)ob[0], team);
                        }

                    });

            teamData.values().forEach(team -> em.persist(team));
        }
    }
}
