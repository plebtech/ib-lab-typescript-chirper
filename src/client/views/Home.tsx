import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpCard from '../components/ChirpCard';

const Home: React.FC<HomeProps> = () => {

    const [chirps, setChirps] = useState<IChirp[]>([]);

    useEffect(() => {
        (async () => {
            let res = await fetch('/api/chirps');
            let chirps = await res.json();
            setChirps(chirps);
        })();
    }, []);

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
                {chirps.map(chirp => (
                    <ChirpCard chirp={chirp} />
                ))}
            </section>
        </main>
    );
};

interface IChirp {
    id: string;
    username: string;
    content: string;
}

interface HomeProps { }

export default Home;