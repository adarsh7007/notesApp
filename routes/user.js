let router = require("express").Router();
let mongoose = require("mongoose");

let Note = mongoose.model("Note");
let User = mongoose.model("User");

router.get("/", async (req, res) => {
    try {
        let notes = await Note.find({});
        res.status(200).json({notes});
    } catch {
        res.status(500).send('err')
    }
});

router.get("/:notesId", async (req, res) => {
    try {
        let notes = await Note.findOne({_id: req.params.notesId});
        res.status(200).json({notes})
    } catch {
        res.status(500).send('err')
    }
});
router.post("/:userId/note", async (req, res) => {
    try {
        let usr = await User.findById({_id: req.params.userId})
        let notes = new Note(req.body);
        await notes.save();
        notes.user = usr
        res.status(200).json({notes});
    } catch {
        res.status(500).send('err')
    }
});
router.put("/:notesId", async (req, res) => {
    try {
        let notes = await Note.findByIdAndUpdate(
            {
                _id: req.params.notesId
            },
            req.body,
        );
        res.status(200).json({notes});
    } catch {
        res.status(500).send('err')
    }
});
router.delete("/:notesId", async (req, res) => {
    try {
        let notes = await Note.findByIdAndRemove({
            _id: req.params.notesId
        });
        res.status(200).json({notes});
    } catch {
        res.status(500).send('err')
    }
});

router.post("/user", async (req, res) => {
    try {

        let user = new User(req.body);
        await user.save();
        res.status(200).json({user});
    } catch {
        res.status(500).send('err')
    }
});
router.get("/:noteId/user", async (req, res) => {
    try {
        let notes = await Note.findOne({_id: req.params.notesId}).populate(
            "user"
        );
        res.status(200).json({notes});
    } catch {
        res.status(500).send('err')
    }
});
module.exports = router;
