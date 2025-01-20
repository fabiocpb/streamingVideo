const express = require('express')
const app = express();
const router = express.Router();
const fs = require('fs');
const Streamer = require('../helpers/streamer')

router.get('/test', (req, res) => {
    res.send("Router test");
} )


router.get('/video', (req, res) => {
    const range = req.headers.range
    if(!range){
        res.status(400).send("Requer Range Header");
    }
    const videoPath = "video_safe.mp4";
    const videoSize = fs.statSync("video_safe.mp4").size;

    const CHUNK_SIZE = 10**6;
    const start = Number(range.replace(/\D/g, ""));

    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start +1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStrem = fs.createReadStream(videoPath, {start, end});
    videoStrem.pipe(res); 
} )

router.get('/video/:video', Streamer)


module.exports = router;