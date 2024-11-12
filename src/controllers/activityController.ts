import { Request, Response } from 'express';
import { logActivity, getActivityLogs} from '../services/activityLogger';
import { createActivityLogSchema, getActivityLogSchema } from '../validations/activityLogsValidation';
import redis from '../config/cache';



export const logUserActivity = async (req: Request, res: Response) => {
    try{
        createActivityLogSchema.parse(req.body);
        const { userId, action, service } = req.body;
        await logActivity(userId, action, service);
        res.status(201).json({ message: 'Activity logged.' });
    } catch (error) {
        res.status(500).json({ error });
    }
    
};

export const fetchActivityLogs = async (req: Request, res: Response) => {
    try{
        const filters = req.query;
        getActivityLogSchema.parse(req.query);
        const key = req.query.userId as string;
        console.log("000key000",key)
        redis.get(key).then(async (result) => {
            console.log("000000",result)
            if(result ==  null ){
                const logs = await getActivityLogs(filters);
                console.log("000000",logs)
                redis.set(key, JSON.stringify(logs));
                res.status(200).json(logs); 
            }else{
                res.status(200).json(JSON.parse(result)); 

            }
        });

    }catch(error){
        res.status(500).json({ error });

    }
};
