import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export async function GET() {
  try {
    const data = fs.readFileSync(dbPath);
    const json = JSON.parse(data);
    return NextResponse.json(json);
  } catch (error) {
    console.error('Error reading db.json:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const data = fs.readFileSync(dbPath);
    const json = JSON.parse(data);
    json.value += 1;

    fs.writeFileSync(dbPath, JSON.stringify(json));
    return NextResponse.json(json);
  } catch (error) {
    console.error('Error writing to db.json:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
