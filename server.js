const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const resend = new Resend(process.env.RESEND_API_KEY);
let otpStore = {};

app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({ success: false, message: "Email likho bhai" });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = { otp: otp, time: Date.now() };
  console.log(`OTP for ${email} is ${otp}`);

  try {
    await resend.emails.send({
      from: 'REKAVO <no-reply@rekavo.in>',
      to: email,
      subject: `Your REKAVO OTP is ${otp}`,
      html: `<div style="font-family:sans-serif;padding:20px"><h2>REKAVO OTP: ${otp}</h2><p>Ye 5 minute ke liye valid hai.</p><p>Raipur ka apna store.</p></div>`
    });
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: "Email nahi bheja ja saka, email sahi likho" });
  }
});

app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  const stored = otpStore[email];

  if (!stored) {
    return res.json({ success: false, message: "Pehle OTP bhejo" });
  }

  // 5 minute expiry
  if (Date.now() - stored.time > 5 * 60 * 1000) {
    delete otpStore[email];
    return res.json({ success: false, message: "OTP expire ho gaya" });
  }

  if (stored.otp == otp) {
    delete otpStore[email];
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Galat OTP hai" });
  }
});

// YAHI MAIN FIX HAI - ab index.html khulega
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Vercel ke liye ye line sabse important hai
module.exports = app;
