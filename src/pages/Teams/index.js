import React from 'react';
import { useQuery } from 'react-query';

import NbaService from 'services/NbaService';

const Teams = () => {
    const { isLoading, error, data } = useQuery(
        'fetch-teams',
        async () => {
            const response = await NbaService.fetchTeams();
            console.log(response, 'RES');
            return response;
        },
        {
            staleTime: 30000, // only eligible to refetch after 10 seconds
        }
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    console.log('DATA', data);

    return <div>TEAMS</div>;
};

export default Teams;
