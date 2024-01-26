import express from 'express';
import router from './Routers/index.js';
import path from 'path'
import morgan from 'morgan';
import { config } from './config/index.js';
import { conectardb } from './Modules/models/index.js';

conectardb()
const App = express()
App.use(express.json())
App.use(morgan('dev'))
App.use(express.static(path.resolve('public')))
App.use('/api', router)

// Handling CORS Errors


export default App;