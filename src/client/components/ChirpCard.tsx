import * as React from 'react';

const ChirpCard: React.FC<ChirpCardProps> = props => {
    return(
        <h1>test.</h1>
    );
}

interface ChirpCardProps {
    chirp: {
        id: string;
        username: string;
        content: string;
    }
}

export default ChirpCard;