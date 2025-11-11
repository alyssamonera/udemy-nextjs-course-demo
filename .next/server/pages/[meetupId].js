(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 9395:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetails_detail__sRdI8"
};


/***/ }),

/***/ 6487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MeetupDetailsPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "dotenv/config"
var config_ = __webpack_require__(1081);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__(9395);
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js


function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetails_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId].js





const DUMMY_MEETUP = {
    id: "m1",
    title: "A First Meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first meetup!"
};
// Need this function to use getStaticProps dynamically
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://alyssamonera_db_user:rUDzzREeGK2VMBEC@cluster0.los55ec.mongodb.net/?appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    // First param is the filter object
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        // false indicates that all possible paths are defined here; other values go to 404 page
        fallback: false,
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps({ params  }) {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://alyssamonera_db_user:rUDzzREeGK2VMBEC@cluster0.los55ec.mongodb.net/?appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    // First param is the filter object
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new external_mongodb_.ObjectId(params.meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                ...selectedMeetup,
                _id: selectedMeetup && selectedMeetup._id ? selectedMeetup._id.toString() : null
            }
        }
    };
}
function MeetupDetailsPage({ meetupData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MeetupDetails, {
                ...meetupData
            })
        ]
    });
}


/***/ }),

/***/ 1081:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6487));
module.exports = __webpack_exports__;

})();