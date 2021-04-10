

// modify me based on local development or production build
const IS_DEVELOPMENT = false;





const DIRECTORY_DIST = "dist-ui5";
const DIRECTORY_NON_DIST = "webapp";
let DIRECTORY = DIRECTORY_DIST;

if (IS_DEVELOPMENT) {
    DIRECTORY = DIRECTORY_NON_DIST;
}

module.exports = {
    INDEX_HTML: `${DIRECTORY}/index.html`,
    INDEX_HTML_TRAY: `${DIRECTORY}/index.html?env=tray`,
    IS_DEVELOPMENT: IS_DEVELOPMENT,
    TRAY_ICON: `${DIRECTORY}/img/icon.png`,
    IN_APP_PURCHASE_IDS: [
        "subscription.monthly"
    ]
}
