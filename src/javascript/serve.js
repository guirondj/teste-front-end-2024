 // chave de autorização = AIzaSyDRCvpg52qAjiiUrf8Td6NczMw0pZCFazQ 

 const express = require('express');
 const fetch = require('node-fetch');
 const app = express();
 const port = 3000;
 
 const apiKey = 'AIzaSyDRCvpg52qAjiiUrf8Td6NczMw0pZCFazQ';
 
 app.get('/youtube-search', async (req, res) => {
     const query = req.query.q || 'cat videos';
     const maxResults = req.query.maxResults || 10;
     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${query}&key=${apiKey}`;
     
     const requestOptions = {
         method: "GET",
         redirect: "follow"
     };
 
     try {
         const response = await fetch(url, requestOptions);
         if (!response.ok) {
             throw new Error(`Erro na resposta da API: ${response.statusText}`);
         }
         const data = await response.json();
         res.json(data);
     } catch (error) {
         console.error('Erro ao buscar vídeos do YouTube:', error);
         res.status(500).json({ error: 'Erro ao buscar vídeos do YouTube' });
     }
 });
 
 app.listen(port, () => {
     console.log(`Servidor rodando em http://localhost:${port}`);
 });
 