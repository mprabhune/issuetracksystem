const express = require('express');
const router = express.Router();

const Issue = require('../models/issues');

//retrieving issues
router.get('/issues',(req,res,next)=>{
	Issue.find(function(err,issues){
		res.json(issues);
	})
});

//add issue
router.post('/issue',(req, res, next)=>{
	let newIssue = new Issue({
		issuename: req.body.issuename,
		summary: req.body.summary,
		description: req.body.description,
		assignedby:req.body.assignedby,
		regionname:req.body.regionname,
		resolution:req.body.resolution
	});
	newIssue.save((err, issue)=>{
		if(err)
		{
			res.json({msg: 'Failed to add new issue'});
		}
		else
		{
			res.json({msg: 'Added new issue successfully'});
		}
	});
});

//delete issue
router.delete('/issue/:id',(req,res,next)=>{
	Issue.remove({_id:req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});


module.exports = router;
