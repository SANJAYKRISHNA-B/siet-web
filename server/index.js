import 'dotenv/config';
import app from './app.js';
import {connectDatabase} from './config/db.js';
const port=Number(process.env.PORT)||5050;
await connectDatabase();
app.listen(port,()=>console.log(`SIET API running at http://127.0.0.1:${port}`));
