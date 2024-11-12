import { Request, Response } from 'express';
import { logActivity, getActivityLogs} from '../services/activityLogger';
import { createActivityLogSchema, getActivityLogSchema } from '../validations/activityLogsValidation';
import redis from '../config/cache';
import { z , ZodError} from 'zod';
let formattedErrors: string[] = []; 




export const logUserActivity = async (req: Request, res: Response) => {
    try{
        console.log("++++++++")
        const a = createActivityLogSchema.parse(req.body);
        console.log("0000_))))))",a)
        const { userId, action, service, projectId} = req.body;
        await logActivity(userId, action, service,projectId);
        res.status(201).json({ message: 'Activity logged.' });
    } catch (error) {
        if (error instanceof ZodError) {
            formattedErrors = error.errors.map(
              (err) => `field ${err.path.join(".")}: ${err.message}`
            );
            res.status(500).json({ error : formattedErrors });
        }else{
            console.log("000000",error)
            res.status(500).json({ error });
        }
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
