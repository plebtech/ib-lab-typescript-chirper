import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IChirp } from '../utils/types';

const Details: React.FC<DetailsProps> = () => {

    const { id } = useParams();
    const history = useHistory();

    const [chirp, setChirp] = useState<IChirp>({
        id: '',
        username: '',
        content: '',
    });

    useEffect(() => {
        (async ()  => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        })();
    }, [id]);

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h4 className="card-title">@{chirp.username}</h4>
                            <p className="card-text">{chirp.content}</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button onClick={() => history.goBack()} className="btn btn-outline-primary mx-1">go back.</button>
                                <Link className="btn btn-outline-secondary mx-1" to={`/admin/${chirp.id}`}>edit.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

interface DetailsProps { }

export default Details;