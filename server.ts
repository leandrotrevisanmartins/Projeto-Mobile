import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });
