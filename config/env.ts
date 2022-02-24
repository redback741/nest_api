import * as fs from 'fs';
import * as path from 'path';
const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  const localEnv = path.resolve('.env');
  if (!fs.existsSync(localEnv)) {
    throw new Error('缺少环境配置文件');
  }
}
