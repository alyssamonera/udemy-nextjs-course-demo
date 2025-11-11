"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 3166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: external "dotenv/config"
const config_namespaceObject = require("dotenv/config");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js
// Server-side code located at /api/new-meetup


async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const data = req.body;
            const client = await external_mongodb_namespaceObject.MongoClient.connect(process.env.DATABASE_URL);
            const db = client.db();
            const meetupsCollection = db.collection("meetups");
            const result = await meetupsCollection.insertOne(data);
            console.log(result);
            client.close();
            res.status(201).json({
                message: "Meetup inserted!"
            });
        }
    } catch (error) {}
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3166));
module.exports = __webpack_exports__;

})();