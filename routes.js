const express = require("express");
const router = express.Router();
const axios = require("axios");
const NodeCache = require('node-cache');
const body_parser= require('body-parser');



router.post("/register", body_parser.json(),async (req, res) => {
 console.log(req.body);
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
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/auth",  body_parser.json(),async (req, res) => {
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
      ownerName:ownerName,
      clientSecret: clientSecret,
      clientID: clientID,
    });
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getTrainsData",  body_parser.json(),async (req, res) => {
  const trainNumber = req.query.trainNumber;
  const authToken= req.headers.authorization;
  console.log(authToken);
  try {
    if (trainNumber != null) {
      const response = await axios.get(
        `http://20.244.56.144/train/trains/` + `${trainNumber}`,
        {headers:{Authorization:authToken}}
      );
      console.log(response);
        res.send(response.data);

    } else {
        console.log(authToken)
      const response = await axios.get(`http://20.244.56.144/train/trains/`,{headers:{Authorization:authToken}});
      
      console.log(response);

        res.send(response.data);

    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
