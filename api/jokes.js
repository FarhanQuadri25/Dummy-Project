import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Read the db.json file
  const filePath = path.resolve('.', 'db.json');
  const fileContents = readFileSync(filePath, 'utf8');

  // Parse JSON
  const data = JSON.parse(fileContents);

  // Send the jokes as the response
  res.status(200).json(data.jokes);
}
