import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.listen(4000, () => {
    console.log('app listening on port 4000');
})

export default app;