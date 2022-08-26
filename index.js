import path from "path";
import fs from "fs";

import FileInfo from "./modules/FileInfo.js";
import FileUtil from "./modules/FileUtil.js";

function openFile(input, type, ext) {
  var obj = FileUtil.getSupportedFile(input, ext);

  console.log(obj);
}

function openFromPath(path) {
  // get details about the file path
  const fi = new FileInfo(path);

  if (!fi.exists) {
    console.error(`File does not exist: ${path}`);
    return;
  }

  const input = new Uint8Array(fs.readFileSync(path));

  const ext = fi.extension;

  openFile(input, path, ext);
}

function main(path) {
  openFromPath(path);
}

if (typeof process.argv[2] != "string") {
  console.log("Please enter a valid filename.");
  process.exit(1);
}

const filePath = path.join(process.cwd(), process.argv[2]);

main(filePath);
