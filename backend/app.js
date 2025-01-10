import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import nodemon from 'nodemon';

const app = express();
dotenv.config({path: './config/config.env'});
export default app;