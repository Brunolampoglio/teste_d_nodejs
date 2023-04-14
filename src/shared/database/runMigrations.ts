import path from 'path';
import fs from 'fs'; 

import { createConnection } from './connection';



(async () => {
    const client = await createConnection();

    const fileDatabaseDir = path.join(__dirname, "migrations");
    
    console.log("Running migrations...");
    fs.readdir(fileDatabaseDir, async (err, files) => {
        if(err) {
            console.error(err);
          }

        files.forEach(file => {
           fs.readFile(path.join(fileDatabaseDir, file), async (err, content) => {
              if(err) {
                console.error(err);
              }
              

              const runMigrationsQuery = content.toString();

              await client.query(runMigrationsQuery);

              console.log(content.toString());
           });
        });

        console.log("Migrations finished!");
    });
})();