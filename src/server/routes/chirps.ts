import { Router } from 'express';
import ChirpStore from '../services/chripstore';

const router = Router();

// GET api/chirps
router.get('/', (req, res) => {
    const data = ChirpStore.GetChirps();
    const chirps = Object.keys(data).map(key => {
        return {
            id: key,
            username: data[key].username,
            content: data[key].content,
        }
    });
    chirps.pop();
    res.json(chirps);
});

// GET /api/chirps/:chirpid
router.get('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    const chirp = ChirpStore.GetChirp(chirpid);
    res.json({ id: chirpid, ...chirp });
});

// POST /api/chirps
router.post('/', (req, res) => {
    const chirp = req.body;
    ChirpStore.CreateChirp(chirp);
    res.status(201).json('chirp created.');
});

// PUT /api/chirps/:chirpid
router.put('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    const chirp = req.body;
    ChirpStore.UpdateChirp(chirpid, chirp);
    res.status(200).json(`chirp ${chirpid} updated.`);
});

// DELETE /api/chirps/:chirpd
router.delete('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    ChirpStore.DeleteChirp(chirpid);
    res.status(200).json(`chirp ${chirpid} deleted.`);
})

export default router;