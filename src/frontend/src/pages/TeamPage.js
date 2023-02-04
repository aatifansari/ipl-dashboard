import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import { TeamTile } from '../components/TeamTile';
import './TeamPage.css';

export const TeamPage = () => {

    const [team, setTeam] = useState({recentMatches:[]});
    const { teamName } = useParams();
    const token = JSON.parse(sessionStorage.getItem('token')).token;

    useEffect(
        () => {
            const url = `http://localhost:8080/team/${teamName}`;
            const params = {
              method : 'GET',
              headers: { 
                "Authorization" : `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*",
                "Accept": 'application/json',
                "Origin" : "http://localhost:3000"
              }
            }
            const fetchMatches = async() => {
                const response = await fetch(url,params);
                const data = await response.json();
                // console.log(data);
                setTeam(data);
            };
            fetchMatches();
        }, [teamName]
    );

    if(!team || !team.teamName){
      return <h1>Team not Found</h1>
    }

    return (
      <div className="TeamPage">
        <div className="team-name-section">
          <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div className="win-loss-section">
          Wins / Losses
              <PieChart
                data={[
                  { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#F41073' },
                  { title: 'Wins', value: team.totalWins, color: '#2DD475' },
                ]}
              />
        </div>
        <div className="match-detail-section">
          <h3>Latest Matches</h3>
          <MatchDetailsCard teamName={team.teamName} match={team.recentMatches[0]}/>
        </div>
        {team.recentMatches.slice(1).map(recentMatches => <MatchSmallCard teamName={team.teamName} match={recentMatches}/>)}
        <div className="more-link">
          <Link to ={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link> 
        </div>
      </div>
    );
}



