import express from 'express';
const router = express.Router();
import getallPolls from '../controllers/getallPolls.js';
import getonePoll from '../controllers/getonePoll.js';
import createPolls from '../controllers/createPolls.js';
import updatePoll from '../controllers/updatePoll.js';
import createQuestion from '../controllers/Questions/createQuestion.js';
import updateQuestion from '../controllers/Questions/updateQuestion.js';
import getallQuestions from '../controllers/Questions/getallQuestions.js';

router.get('/getPolls',getallPolls);
router.get('/getpollbyId/:id',getonePoll);
router.post('/createPoll',createPolls);
router.put('/updatePoll',updatePoll);

//Questions
router.get('/getallQuestions',getallQuestions);
router.post('/createQuestion',createQuestion);
router.put('/updateQuestion/:id',updateQuestion);

export default router;