const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'equipment-data.json');

/* -------------------- Middleware -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- Helpers -------------------- */
const readData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
};

/* -------------------- Initialize File -------------------- */
if (!fs.existsSync(DATA_FILE)) {
  writeData([
    {
      id: 1,
      name: 'Industrial Mixer A1',
      type: 'Mixer',
      status: 'Active',
      lastCleaned: '2024-12-15'
    },
    {
      id: 2,
      name: 'Storage Tank B3',
      type: 'Tank',
      status: 'Under Maintenance',
      lastCleaned: '2024-12-10'
    }
  ]);
}

/* -------------------- Routes -------------------- */

// GET all equipment
app.get('/api/equipment', (req, res) => {
  const data = readData();
  res.json({ success: true, data });
});

// GET equipment by id
app.get('/api/equipment/:id', (req, res) => {
  const data = readData();
  const item = data.find(e => e.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }

  res.json({ success: true, data: item });
});

// ADD equipment (POST)
app.post('/api/equipment', (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  if (!name || !type || !status || !lastCleaned) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  const data = readData();
  const newItem = {
    id: data.length ? Math.max(...data.map(e => e.id)) + 1 : 1,
    name,
    type,
    status,
    lastCleaned
  };

  data.push(newItem);
  writeData(data);

  res.status(201).json({ success: true, data: newItem });
});

// UPDATE equipment (PUT)
app.put('/api/equipment/:id', (req, res) => {
  const data = readData();
  const id = Number(req.params.id);
  const index = data.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }

  data[index] = { id, ...req.body };
  writeData(data);

  res.json({ success: true, data: data[index] });
});

// DELETE equipment
app.delete('/api/equipment/:id', (req, res) => {
  const data = readData();
  const id = Number(req.params.id);
  const filtered = data.filter(e => e.id !== id);

  if (filtered.length === data.length) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }

  writeData(filtered);
  res.json({ success: true });
});

/* -------------------- Start Server -------------------- */
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
  console.log(`📄 Using JSON file: equipment-data.json`);
});
