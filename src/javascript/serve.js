import express from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 3000;

const YOUTUBE_API_KEY = 'AIzaSyDRCvpg52qAjiiUrf8Td6NczMw0pZCFazQ'; 

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${YOUTUBE_API_KEY}`);
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`BFF listening at http://localhost:${port}`);
});
