import * as React from 'react';
import { useState, useEffect } from 'react';
import e from 'express';
import { useHistory } from 'react-router';

const Compose: React.FC<ComposeProps> = () => {

    const history = useHistory();

    const [username, setUsername] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value);

    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, content });
        });
        if (res.ok) {
            history.push('/');
        } else {
            console.log('something went terribly wrong.');
        }
    };

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
                <div className="col-md-8">
                    <form className="form-group p-3 shadow border rounded">
                        <label htmlFor="username">username.</label>
                        <input value={username} onChange={handleUsernameChange} placeholder="account" id="username" type="text" className="form-control" />
                        <label htmlFor="content">chirp content.</label>
                        <textarea value={content} onChange={handleContentChange} rows={5} placeholder="chirp content." className="form-control" name="content" id="message" />
                        <button onClick={submitChirp} className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow-sm">chirp it.</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

interface ComposeProps { }

export default Compose;