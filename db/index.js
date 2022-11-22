import pg from "pg";

const databaseUrl = process.env.DATABASE_URL;


const pool = new pg.Pool({
  connectionString: databaseUrl,
});

  
  export default function query (text, params, callback){
      return pool.query(text, params, callback);
    }
  

