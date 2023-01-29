import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

    const [team, setTeam] = useState({recentMatches:[]});
    const { teamName } = useParams();

    useEffect(
        () => {
            const fetchMatches = async() => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
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
        <h1>{team.teamName}</h1>

        <MatchDetailsCard teamName={team.teamName} match={team.recentMatches[0]}/>
        {team.recentMatches.slice(1).map(recentMatches => <MatchSmallCard teamName={team.teamName} match={recentMatches}/>)}

      </div>
    );
}



