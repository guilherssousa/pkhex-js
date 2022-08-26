/**
 * Only the needed implementation to a lookalike class of the FileInfo C# class.
 *
 * Original implementation: https://github.com/wshxbqq/io-info/blob/master/lib/FileInfo.ts
 */

import fs from "fs";
import path from "path";

export default class FileInfo {
  _filePath;

  constructor(filePath) {
    filePath = path.resolve(path.normalize(filePath));
    this._filePath = filePath;
  }

  get exists() {
    return (
      fs.existsSync(this._filePath) && fs.statSync(this._filePath).isFile()
    );
  }

  get extension() {
    return path.extname(this._filePath);
  }
}
