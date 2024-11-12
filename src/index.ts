console.log("hey i am here in index.ts")

import express from 'express';
import activityRoutes from './routes/activityRoutes';

const app = express();
app.use(express.json());
app.use('/activity', activityRoutes);
app.listen(3000, () => console.log('Server running on port 3000'));
