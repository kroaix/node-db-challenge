const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.find();
    res.status(200).json({ success: true, resources });
  } catch {
    res.status(500).json({ success: false, error: "Problem with request." })
  }
})

router.post('/', async (req,res) => {
  const resourceData = req.body;
  try {
    if(!resourceData.resource_name) {
      res.status(400).json({ success: false, error: "Name is required." })
    } else {
      const resource = await Resources.add(resourceData);
      res.status(201).json({ success: true, resource });
    }
  } catch {
    res.status(500).json({ success: false, error: "Problem with request." })
  }
})

module.exports = router;
