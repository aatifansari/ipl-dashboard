import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import { TeamTile } from '../components/TeamTile';
import './HomePage.css';

export const HomePage = () => {

    const [team, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchTeams = async() => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();
                // console.log(data);
                setTeams(data);
            };
            fetchTeams();
        }, []
    );


    return (
      <div className="HomePage">
        <div className="header-section">
          <h1 className="app-name">IPL Dashboard</h1>
        </div>
        <div className="team-grid">
            { team.map(team => <TeamTile teamName={team.teamName}/> )}
        </div>
      </div>
    );
}



