import { Pool} from "pg";

const createConnection = async  () => {
    const client = new Pool({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "1234",
        database: "crud",
    })
    await client.connect();

    return  client ;
};
export { createConnection }; 




