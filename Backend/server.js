import express from "express";
import authRoutes from "./routes/Users/auth.route.js";
import cookieParser from "cookie-parser";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/DB.js";
import { middleware } from "./middleware/protectRoutes.js";
// trending movies and tv shows
import movieRoutes from "./routes/movie/movie.route.js";
import tvShowRoutes from './routes/tvShow/tvShows.route.js';
import searchRoutes from './routes/search/search.js';

import cors from "cors"


const app = express();
const PORT = ENV_VARS.PORT

app.use(cors())

app.use(express.json());
app.use(cookieParser())

// User Database
app.use("/api/users", authRoutes)

// movies and tv shows
app.use("/api/movies", middleware, movieRoutes)
app.use("/api/tv", middleware, tvShowRoutes)

// search routes
app.use("/api/search", middleware, searchRoutes)



app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
    connectDB();
});
