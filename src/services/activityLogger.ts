import { timeStamp } from 'console';
import { db } from '../config/db';
import { eq } from 'drizzle-orm';
import { activityLogs } from "../schema";





export const logActivity = async (userId : string , action  : string , service : string , projectId : string) =>{
   await db.insert(activityLogs).values({
        // timestamp: new Date(),
        user_id: userId,
        action,
        service,
        project_id: projectId,
    });
}

export const getActivityLogs = async (filters: Record<string, any>) => {
    try{
        // return   db.query.activityLogs.findMany({
        //     where: eq(activityLogs.user_id, filters.userId  ),
        // });
        const entries = await db.query.activityLogs.findMany({
            where: eq(activityLogs.user_id, filters.userId),
        });
        
        console.log(entries);
        return entries

    } catch (error) {
        console.error("Error fetching activity log: ", error);
        throw error;
    }

};