
import { Redis } from "iovalkey";
const redis = new Redis();
redis.on('connect', () => {
  console.log("Redis connected successfully.");
});

redis.on('error', (err) => {
  console.error("Redis connection error:", err);
});

  export default redis;
