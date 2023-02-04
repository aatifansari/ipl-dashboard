import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './MatchPage.css';
import { YearSelector } from '../components/YearSelector';


export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    const token = JSON.parse(sessionStorage.getItem('token')).token;

    // const  teamName  = "Delhi Capitals";

    useEffect(
        () => {
            const url = `http://localhost:8080/team/${teamName}/matches?year=${year}`;
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
                setMatches(data);
            };
            fetchMatches();
        }, [teamName, year]
    );

    // if(!team || !team.teamName){
    //   return <h1>Team not Found</h1>
    // }

    return (
      <div className="MatchPage">
        <div className = "year-selector">
            <h3> Select Year </h3>
            <YearSelector teamName = {teamName} />
        </div>
        <div>
            <h1>{teamName} - {year}</h1>
            {
            matches.map(recentMatches => <MatchDetailsCard teamName={teamName} match={recentMatches}/>)
            }
        </div>

        
      </div>
    );
}



