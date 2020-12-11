'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
	appDist: resolveApp('dist'),
	appHtml: resolveApp('src/index.html'),
	appIndexJs: resolveApp('src/index.tsx'),
	appSrc: resolveApp('src'),
	appNodeModules: resolveApp('node_modules'),
};
