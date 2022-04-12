const express = require('express');
const app = express();


app.listen(8080, (error) => {
    if (error) {
        console.log('server failed to start');
    } else {
        console.log('Server is running on port 4010');
    }
});


app.get('/home', (req, res) => {
    res.send('Response is from home page end point!!')
})
