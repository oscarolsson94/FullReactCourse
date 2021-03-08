import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //prevents image files from being too big
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 

app.use(cors());

// connect to DB
const CONNECTION_URL = "mongodb+srv://test:test123@cluster0.gfsfw.mongodb.net/oscarDB?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // object not required but depricated
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);