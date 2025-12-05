// api/save_data.js
let latestData = {
  suhu: 0,
  kelembapan: 0,
  waktu: new Date().toLocaleString()
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Ambil data dari query params ESP32
    const suhu = parseFloat(req.query.suhu) || 0;
    const kelembapan = parseFloat(req.query.kelembapan) || 0;

    // Simpan data terbaru
    latestData = {
      suhu: suhu,
      kelembapan: kelembapan,
      waktu: new Date().toLocaleString()
    };

    console.log("Data diterima:", latestData);

    // Kirim response OK
    res.status(200).send("OK");
  } else if (req.method === 'POST') {
    // Bisa digunakan jika mau kirim POST (opsional)
    res.status(200).json({ latestData });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}

// Ekspor untuk frontend (opsional)
export { latestData };
