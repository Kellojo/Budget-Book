require('dotenv').config();
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  console.log("starting notarization");

  return await notarize({
    appBundleId: 'com.BudgetP',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_NOTARIZE_ID,
    appleIdPassword: process.env.APPLE_NOTARIZE_PASSWORD,
  });
};