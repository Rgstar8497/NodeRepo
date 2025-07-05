import express from 'express';
import { join } from 'path';
import connectDB from './db/connectdb.js';
import webRoutes from './routes/web.js';
// Connect to MongoDB
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = 'mongodb://0.0.0.0:27017/school';
connectDB(DB_URL);
app.use('/student',express.static(join(process.cwd(),'public')));
app.use('/student/edit',express.static(join(process.cwd(),'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/student',webRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
