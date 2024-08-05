const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/createTask', taskController.createTask);
router.post('/taskOverview', taskController.taskOverview);
router.post('/aggViewPATimes', taskController.aggViewPATimes);
router.post('/indViewPATimes', taskController.indViewPATimes);
router.post('/taskInfoDialog', taskController.taskInfoDialog);
router.post('/completeTask', taskController.completeTask);
router.post('/EmpOverviewtaskDtlsAggView', taskController.EmpOverviewtaskDtlsAggView);
router.post('/emptaskDtlsAggTimes', taskController.emptaskDtlsAggTimes);
router.get('/empAggtasktimes', taskController.empAggtasktimes);
router.get('/empOverviewTaskDtlsIndAggView', taskController.empOverviewTaskDtlsIndAggView);
router.get('/empOverviewIndAggPATimes', taskController.empOverviewIndAggPATimes);

module.exports = router;
