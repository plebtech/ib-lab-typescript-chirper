import * as React from 'react';

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            <h1 className="text-center">home view.</h1>
        </div>
    );
};

interface HomeProps {}

export default Home;