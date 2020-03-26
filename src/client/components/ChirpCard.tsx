import * as React from 'react';
import { IChirp } from '../utils/types';

const ChirpCard: React.FC<ChirpCardProps> = props => {
    return(
        <div className="col-md-6 mx-1">
            <div className="card my-2 shadow">
                <div className="card-body text-center">
                    <h4 className="card-title">@{props.chirp.username}</h4>
                    <p className="card-text">{props.chirp.content}</p>
                </div>
            </div>
        </div>
    );
}

interface ChirpCardProps {
    chirp: IChirp,
}

export default ChirpCard;