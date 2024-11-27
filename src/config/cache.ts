
import { Redis } from "iovalkey";
// const redis = new Redis();       //enable this to run on local
const redis = new Redis({
  host: 'redis-service',
  port: 6379, 
});
redis.on('connect', () => {
  console.log("Redis connected successfully.");
});

redis.on('error', (err) => {
  console.error("Redis connection error:", err);
});

  export default redis;
