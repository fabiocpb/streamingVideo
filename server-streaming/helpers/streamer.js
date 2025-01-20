const fs = require('fs');

function streamer(req, res, next) {
    const range = req.headers.range
        if(!range){
            res.status(400).send("Requer Range Header");
        }
        const videoPath = req.params.video;
        const videoSize = fs.statSync(req.params.video).size;
    
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
}

module.exports = streamer;