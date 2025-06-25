import {GoogleGenAI} from '@google/genai';
import { GEMINI_API_KEY } from './constant';

const AI = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export default AI;