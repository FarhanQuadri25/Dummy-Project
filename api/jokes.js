import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Read the db.json file
    const filePath = path.resolve('.', 'db.json'); // Ensure the path is correct
    const fileContents = readFileSync(filePath, 'utf8');

    // Parse JSON
    const data = JSON.parse(fileContents);

    // Send the jokes as the response
    res.status(200).json(data.jokes);
  } catch (error) {
    console.error("Error reading db.json:", error);
    res.status(500).json({ error: "Failed to read jokes" });
  }
}
