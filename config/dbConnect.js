const mongoose = require('mongoose');

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.CONNECTION_STRING, connectionParams)
    .then(() => {
        console.log('Database connection was successful.');
    }).
    catch(error => console.log(error.message));
