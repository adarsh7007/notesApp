slet router = require("express").Router();
let mongoose = require("mongoose");

let Note = mongoose.model("Note");
let User = mongoose.model("User");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({ notes });
  } catch{
    res.status(500).send('err')
  }
});

router.get("/:notesId", async (req, res) => {
  try {
    const notes = await Note.findOne({ _id: req.params.notesId });
    res.status(200).json({ notes })
  } catch{
    res.status(500).send('err')
  }
});
router.post("/", async (req, res) => {
  try {
    const notes = new Note();
    notes.tittle = req.body.tittle;
    notes.description = req.body.description;
    await notes.save();
    res.status(200).json({ notes });
  }
  catch{
    res.status(500).send('err')
  }
});
router.put("/:notesId", async (req, res) => {
  try {
    const notes = await Note.findByIdAndUpdate(
      {
        _id: req.params.notesId
      },
      req.body,
    );
    res.status(200).json({ notes });
  } catch{
    res.status(500).send('err')
  }
});
router.delete("/:notesId", async (req, res) => {
  try {
    const notes = await Note.findByIdAndRemove({
      _id: req.params.notesId
    });
    res.status(200).json({ notes });
  } catch{
    res.status(500).send('err')
  }
});
router.get("/:notesId/user", async (req, res) => {
  try {
    const notes = await Note.findOne({ _id: req.params.notesId }).populate(
      "user"
    );
    res.status(200).json({ notes });
  } catch{
    res.status(500).send('err')
  }
});
module.exports = router;
