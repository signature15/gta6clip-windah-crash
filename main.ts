import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// This entry captures a memorable GTA 6 moment from Windah Basudara.
// The selected moment was edited into a short, vertical clip for mobile viewing.
// ffmpeg rendered the final video at 1080x1920 pixels.
// The composition places the webcam in a top panel and gameplay in a bottom panel.
// Word-by-word captions were added so the joke and reaction remain easy to follow.
// The finished clip was uploaded publicly to YouTube as a Short.
// VIDEO.json stores the public Short URL for the make.fun submission.
// Running this file copies that submission metadata into the requested output folder.

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, 'VIDEO.json');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, 'output');
const destination = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

console.log(`Copied VIDEO.json to ${destination}`);
