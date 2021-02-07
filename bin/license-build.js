const checker = require('license-checker');
const fs = require("fs");

checker.init({
    start: './',
    production: true,
    excludePackages: "@firebase/auth-types@0.10.1;@firebase/installations-types@0.3.4;@firebase/functions@0.4.44;@firebase/installations@0.4.10;@firebase/functions-types@0.3.17;@firebase/auth-interop-types@0.1.5;@firebase/storage@0.3.34;builder-util-runtime@8.6.1;@firebase/storage-types@0.3.12;@firebase/remote-config-types@0.1.9;@firebase/polyfill@0.3.36;@firebase/messaging-types@0.4.5;@firebase/performance-types@0.0.13;@firebase/app@0.6.4;@firebase/app-types@0.6.1;@firebase/analytics-types@0.3.1;@firebase/analytics@0.3.5;budget-book@1.2.0",
}, function (err, packages) {
    if (err) {
        //Handle error
    } else {
        var aDependencies = Object.keys(packages),
            oResult = {};
        
        console.log(`Reading Licenses (${aDependencies.length} total)`);
        aDependencies.forEach(sDependency => {
            let oDependency = packages[sDependency],
                sPath = oDependency.licenseFile;


            // try reading license file
            try {
                const sLicenseText = fs.readFileSync(sPath).toString();
                oDependency.fullLicenseText = sLicenseText;
            } catch (error) {
                console.error(`Could not read license file for ${sDependency} at ${sPath}`);
            }


            oResult[sDependency] = oDependency;
        });

        // append custom licenses
        const oCustomLicenses = JSON.parse(fs.readFileSync("./webapp/config/additional-licenses.json").toString());
        oResult = {... oResult, ...oCustomLicenses};

        fs.writeFileSync("./webapp/config/package-licenses.json", JSON.stringify(oResult));

        console.log("Done!");
    }
});