import * as React from 'react';
import { IChirp } from '../utils/types';

const ChirpCard: React.FC<ChirpCardProps> = props => {
    return(
        <h1>test.</h1>
    );
}

interface ChirpCardProps {
    chirp: IChirp,
}

export default ChirpCard;