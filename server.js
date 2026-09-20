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
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;
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
    res.json({ success: false, error: e.message });
  }
});

app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email];
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Wrong OTP" });
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/demo1.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on " + PORT));
module.exports = app;