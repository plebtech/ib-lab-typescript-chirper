import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IChirp } from '../utils/types';

const Admin: React.FC<AdminProps> = () => {

    const history = useHistory();
    const { id } = useParams();

    const [username, setUsername] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value);

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setUsername(chirp.username);
            setContent(chirp.content);
        })();
    }, [id]);

    const saveEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
            let res = await fetch(`/api/chirps/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, content });
            });
            if (res.ok) {
                history.push(`/details/${id}`);
            } else {
                console.log('something went terribly wrong.');
            }
    };

    const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
            let res = await fetch(`/api/chirps/${id}`, {
                method: 'DELETE',
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
                        <button onClick={saveEdit} className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow-sm">save it.</button>
                        <button onClick={deleteChirp} className="btn btn-outline-danger btn-block mt-3 w-75 mx-auto shadow-sm">destroy it.</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

interface AdminProps { }

export default Admin;