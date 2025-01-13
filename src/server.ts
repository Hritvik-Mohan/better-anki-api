import app from "./app";
import dotenv from "dotenv";

const environment = process.env.NODE_ENV || "local";

dotenv.config({ path: `.env.${environment}`});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})