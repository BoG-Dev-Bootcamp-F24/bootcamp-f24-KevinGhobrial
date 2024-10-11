const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4006;

mongoose.connect('mongodb+srv://kghobrial3:oYu7fyZ6CZTFHjqQ@traindata.2libi.mongodb.net/TRAINDATA?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const trainSchema = new mongoose.Schema({
  LINE: String,
  DESTINATION: String,
  STATUS: String,
  DELAY: String,
});

const stationSchema = new mongoose.Schema({
  NAME: String,
  LINE: String,
});

const Train = mongoose.model("train", trainSchema);
const Station = mongoose.model("station", stationSchema);   

// Enable CORS for all routes
app.use(cors());

app.get("/api/trains", async (req, res) => {
  try {
    const trains = await Train.find();
    console.log("Fetched trains:", trains);
    res.json(trains);
  } catch (error) {
    console.error("Error fetching trains:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/stations", async (req, res) => {
  try {
    const stations = await Station.find();
    console.log("Fetched stations:", stations);
    res.json(stations);
  } catch (error) {
    console.error("Error fetching stations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
