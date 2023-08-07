const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/register", async (req, res) => {
  const companyName = req.body.companyName;
  const ownerName = req.body.ownerName;
  const rollNo = req.body.rollNo;
  const ownerEmail = req.body.ownerEmail;
  const accessCode = req.body.accessCode;
  try {
    const response = await axios.post("http://20.244.56.144/train/register", {
      ownerName: ownerName,
      rollNo: rollNo,
      companyName: companyName,
      ownerEmail: ownerEmail,
      accessCode: accessCode,
    });
    res.send(response.json());
  } catch (error) {
    res.send(error);
  }
});

router.post("/auth", async (req, res) => {
  const companyName = req.body.companyName;
  const clientID = req.body.clientID;
  const clientSecret = req.body.clientSecret;
  const ownerName = req.body.ownerName;
  const rollNo = req.body.rollNo;
  const ownerEmail = req.body.ownerEmail;
  try {
    const response = await axios.post("http://20.244.56.144/train/auth", {
      companyName: companyName,
      rollNo: rollNo,
      companyName: companyName,
      ownerEmail: ownerEmail,
      clientSecret: clientSecret,
      clientID: clientID,
    });
    res.send(response.json());
  } catch (error) {
    res.send(error);
  }
});

router.get("getTrainsData/:trainNumber", async (req, res) => {
  const trainNumber = req.params.trainNumber;
  try {
    if (trainNumber != null) {
      const response = await axios.get(
        `http://20.244.56.144/train/trains/` + `${trainNumber}`
      );
        res.send(response.json());

    } else {
      const response = await axios.get(`http://20.244.56.144/train/trains/`);
        res.send(response.json());

    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
