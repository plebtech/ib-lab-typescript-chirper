import * as React from 'react';
import { IChirp } from '../utils/types';
import { useHistory, Link } from 'react-router-dom';

const ChirpCard: React.FC<ChirpCardProps> = props => {

    const history = useHistory();

    return (
        <div onClick={() => { history.push(`/details/${props.chirp.id}`)}} className="col-md-6 mx-1">
            <div className="card my-2 shadow">
                <div className="card-body text-center">
                    <h4 className="card-title">@{props.chirp.username}</h4>
                    <p className="card-text">{props.chirp.content}</p>
                    <Link to={`/details/${props.chirp.id}`}>get details.</Link>
                </div>
            </div>
        </div>
    );
}

interface ChirpCardProps {
    chirp: IChirp,
}

export default ChirpCard;