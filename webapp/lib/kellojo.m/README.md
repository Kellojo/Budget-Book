# kellojo.m
The kellojo.m SAP UI5 library.
It includes various smaller controls, which might be of use to you.


## How to install
you can add this repository as a submodule to your repo.
then make sure you require it as a dependency like this in your UI5 bootstrap:
```javascript
data-sap-ui-libs="sap.m, com.kellojo.m"
```

also make sure, to add it to the resource roots:
```javascript
data-sap-ui-resourceroots='{
    "com.yourApp": "./",
    "com.kellojo.m": "./lib/kellojo.m/src/"
}'
```
