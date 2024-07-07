import express from "express";

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/manifest.json', async function(req, res){
    //for brevity, we're not including the isDesktop function here
    let iconUrl = /*isDesktop()*/ true ? '/desktop.png' : '/mobile.png';
    let manifest = {
        name: "App name",
        icons: [{
            src: iconUrl,
            sizes:  "512x512",
            type:"image/png"
        }]
    }
    res.header('content-type', 'application/json');
    return res.status(200).send(JSON.stringify(manifest));
});