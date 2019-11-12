// SERVER =====

const express = require('express');
const router = express.Router();

// MODELS =====
const Member = require('../../models/Member');

// ROUTES =====

// @route	GET api/members
// @desc	Get members
// @access	Public

router.get('/', async (req, res) => {
	try {
		const memebers = await Member.find()
			.sort({ date: -1 })
			.then(members => res.json(members));
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/members/:id
// @desc     Get member by ID
// @access   Private
router.get('/:id', async (req, res) => {
	try {
		const member = await Member.findById(req.params.id);

		if (!member) {
			return res.status(404).json({ msg: 'member not found' });
		}

		res.json(member);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'member not found' });
		}
		res.status(500).send('Server Error');
	}
});

// @route	POST api/members
// @desc	Create member
// @access	Public

router.post('/', (req, res) => {
	const newMember = new Member({
		name: req.body.name,
		role: req.body.role
	});

	newMember.save().then(member => res.json(member));
});

// @route	DELETE api/members
// @desc	Delete a member
// @access	Public

router.delete('/:id', (req, res) => {
	Member.findOneAndDelete({ _id: req.params.id })
		.then(member => res.send(member))
		.catch(err => res.status(404).json({ success: false }));
});

// @route	UPDATE api/members
// @desc	Update member
// @access	Public

router.put('/:id', (req, res) => {
	Member.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(() => {
			Member.findOne({ _id: req.params.id }).then(member => {
				res.json(member);
			});
		})
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
