module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assests/codes.js":
/*!**************************!*\
  !*** ./assests/codes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (name => {
  var _filter$0$code, _filter$;

  return (_filter$0$code = (_filter$ = [{
    name: 'Afghanistan',
    code: 'AF'
  }, {
    name: 'Åland Islands',
    code: 'AX'
  }, {
    name: 'Albania',
    code: 'AL'
  }, {
    name: 'Algeria',
    code: 'DZ'
  }, {
    name: 'American Samoa',
    code: 'AS'
  }, {
    name: 'Andorra',
    code: 'AD'
  }, {
    name: 'Angola',
    code: 'AO'
  }, {
    name: 'Anguilla',
    code: 'AI'
  }, {
    name: 'Antarctica',
    code: 'AQ'
  }, {
    name: 'Antigua and Barbuda',
    code: 'AG'
  }, {
    name: 'Argentina',
    code: 'AR'
  }, {
    name: 'Armenia',
    code: 'AM'
  }, {
    name: 'Aruba',
    code: 'AW'
  }, {
    name: 'Australia',
    code: 'AU'
  }, {
    name: 'Austria',
    code: 'AT'
  }, {
    name: 'Azerbaijan',
    code: 'AZ'
  }, {
    name: 'Bahamas',
    code: 'BS'
  }, {
    name: 'Bahrain',
    code: 'BH'
  }, {
    name: 'Bangladesh',
    code: 'BD'
  }, {
    name: 'Barbados',
    code: 'BB'
  }, {
    name: 'Belarus',
    code: 'BY'
  }, {
    name: 'Belgium',
    code: 'BE'
  }, {
    name: 'Belize',
    code: 'BZ'
  }, {
    name: 'Benin',
    code: 'BJ'
  }, {
    name: 'Bermuda',
    code: 'BM'
  }, {
    name: 'Bhutan',
    code: 'BT'
  }, {
    name: 'Bolivia',
    code: 'BO'
  }, {
    name: 'Bosnia and Herzegovina',
    code: 'BA'
  }, {
    name: 'Botswana',
    code: 'BW'
  }, {
    name: 'Bouvet Island',
    code: 'BV'
  }, {
    name: 'Brazil',
    code: 'BR'
  }, {
    name: 'British Indian Ocean Territory',
    code: 'IO'
  }, {
    name: 'Brunei Darussalam',
    code: 'BN'
  }, {
    name: 'Bulgaria',
    code: 'BG'
  }, {
    name: 'Burkina Faso',
    code: 'BF'
  }, {
    name: 'Burundi',
    code: 'BI'
  }, {
    name: 'Cambodia',
    code: 'KH'
  }, {
    name: 'Cameroon',
    code: 'CM'
  }, {
    name: 'Canada',
    code: 'CA'
  }, {
    name: 'Cabo Verde',
    code: 'CV'
  }, {
    name: 'Cayman Islands',
    code: 'KY'
  }, {
    name: 'Central African Republic',
    code: 'CF'
  }, {
    name: 'Chad',
    code: 'TD'
  }, {
    name: 'Chile',
    code: 'CL'
  }, {
    name: 'China (mainland)',
    code: 'CN'
  }, {
    name: 'Christmas Island',
    code: 'CX'
  }, {
    name: 'Cocos (Keeling) Islands',
    code: 'CC'
  }, {
    name: 'Colombia',
    code: 'CO'
  }, {
    name: 'Comoros',
    code: 'KM'
  }, {
    name: 'Congo',
    code: 'CG'
  }, {
    name: 'Congo (DRC)',
    code: 'CD'
  }, {
    name: 'Cook Islands',
    code: 'CK'
  }, {
    name: 'Costa Rica',
    code: 'CR'
  }, {
    name: 'Côte d’Ivoire',
    code: 'CI'
  }, {
    name: 'Croatia',
    code: 'HR'
  }, {
    name: 'Cuba',
    code: 'CU'
  }, {
    name: 'Cyprus',
    code: 'CY'
  }, {
    name: 'Czechia',
    code: 'CZ'
  }, {
    name: 'Denmark',
    code: 'DK'
  }, {
    name: 'Djibouti',
    code: 'DJ'
  }, {
    name: 'Dominica',
    code: 'DM'
  }, {
    name: 'Dominican Republic',
    code: 'DO'
  }, {
    name: 'Ecuador',
    code: 'EC'
  }, {
    name: 'Egypt',
    code: 'EG'
  }, {
    name: 'El Salvador',
    code: 'SV'
  }, {
    name: 'Equatorial Guinea',
    code: 'GQ'
  }, {
    name: 'Eritrea',
    code: 'ER'
  }, {
    name: 'Estonia',
    code: 'EE'
  }, {
    name: 'Ethiopia',
    code: 'ET'
  }, {
    name: 'Falkland Islands',
    code: 'FK'
  }, {
    name: 'Faroe Islands',
    code: 'FO'
  }, {
    name: 'Fiji',
    code: 'FJ'
  }, {
    name: 'Finland',
    code: 'FI'
  }, {
    name: 'France',
    code: 'FR'
  }, {
    name: 'French Guiana',
    code: 'GF'
  }, {
    name: 'French Polynesia',
    code: 'PF'
  }, {
    name: 'French Southern Territories',
    code: 'TF'
  }, {
    name: 'Gabon',
    code: 'GA'
  }, {
    name: 'Gambia',
    code: 'GM'
  }, {
    name: 'Georgia',
    code: 'GE'
  }, {
    name: 'Germany',
    code: 'DE'
  }, {
    name: 'Ghana',
    code: 'GH'
  }, {
    name: 'Gibraltar',
    code: 'GI'
  }, {
    name: 'Greece',
    code: 'GR'
  }, {
    name: 'Greenland',
    code: 'GL'
  }, {
    name: 'Grenada',
    code: 'GD'
  }, {
    name: 'Guadeloupe',
    code: 'GP'
  }, {
    name: 'Guam',
    code: 'GU'
  }, {
    name: 'Guatemala',
    code: 'GT'
  }, {
    name: 'Guernsey',
    code: 'GG'
  }, {
    name: 'Guinea',
    code: 'GN'
  }, {
    name: 'Guinea-Bissau',
    code: 'GW'
  }, {
    name: 'Guyana',
    code: 'GY'
  }, {
    name: 'Haiti',
    code: 'HT'
  }, {
    name: 'Heard Island and Mcdonald Islands',
    code: 'HM'
  }, {
    name: 'Vatican City',
    code: 'VA'
  }, {
    name: 'Honduras',
    code: 'HN'
  }, {
    name: 'Hong Kong SAR',
    code: 'HK'
  }, {
    name: 'Hungary',
    code: 'HU'
  }, {
    name: 'Iceland',
    code: 'IS'
  }, {
    name: 'India',
    code: 'IN'
  }, {
    name: 'Indonesia',
    code: 'ID'
  }, {
    name: 'Iran',
    code: 'IR'
  }, {
    name: 'Iraq',
    code: 'IQ'
  }, {
    name: 'Ireland',
    code: 'IE'
  }, {
    name: 'Isle of Man',
    code: 'IM'
  }, {
    name: 'Israel',
    code: 'IL'
  }, {
    name: 'Italy',
    code: 'IT'
  }, {
    name: 'Jamaica',
    code: 'JM'
  }, {
    name: 'Japan',
    code: 'JP'
  }, {
    name: 'Jersey',
    code: 'JE'
  }, {
    name: 'Jordan',
    code: 'JO'
  }, {
    name: 'Kazakhstan',
    code: 'KZ'
  }, {
    name: 'Kenya',
    code: 'KE'
  }, {
    name: 'Kiribati',
    code: 'KI'
  }, {
    name: 'South Korea',
    code: 'KP'
  }, {
    name: 'Korea',
    code: 'KR'
  }, {
    name: 'Kuwait',
    code: 'KW'
  }, {
    name: 'Kyrgyzstan',
    code: 'KG'
  }, {
    name: 'Laos',
    code: 'LA'
  }, {
    name: 'Latvia',
    code: 'LV'
  }, {
    name: 'Lebanon',
    code: 'LB'
  }, {
    name: 'Lesotho',
    code: 'LS'
  }, {
    name: 'Liberia',
    code: 'LR'
  }, {
    name: 'Libya',
    code: 'LY'
  }, {
    name: 'Liechtenstein',
    code: 'LI'
  }, {
    name: 'Lithuania',
    code: 'LT'
  }, {
    name: 'Luxembourg',
    code: 'LU'
  }, {
    name: 'Macao SAR',
    code: 'MO'
  }, {
    name: 'North Macedonia',
    code: 'MK'
  }, {
    name: 'Madagascar',
    code: 'MG'
  }, {
    name: 'Malawi',
    code: 'MW'
  }, {
    name: 'Malaysia',
    code: 'MY'
  }, {
    name: 'Maldives',
    code: 'MV'
  }, {
    name: 'Mali',
    code: 'ML'
  }, {
    name: 'Malta',
    code: 'MT'
  }, {
    name: 'Marshall Islands',
    code: 'MH'
  }, {
    name: 'Martinique',
    code: 'MQ'
  }, {
    name: 'Mauritania',
    code: 'MR'
  }, {
    name: 'Mauritius',
    code: 'MU'
  }, {
    name: 'Mayotte',
    code: 'YT'
  }, {
    name: 'Mexico',
    code: 'MX'
  }, {
    name: 'Micronesia',
    code: 'FM'
  }, {
    name: 'Moldova',
    code: 'MD'
  }, {
    name: 'Monaco',
    code: 'MC'
  }, {
    name: 'Mongolia',
    code: 'MN'
  }, {
    name: 'Montserrat',
    code: 'MS'
  }, {
    name: 'Morocco',
    code: 'MA'
  }, {
    name: 'Mozambique',
    code: 'MZ'
  }, {
    name: 'Myanmar',
    code: 'MM'
  }, {
    name: 'Namibia',
    code: 'NA'
  }, {
    name: 'Nauru',
    code: 'NR'
  }, {
    name: 'Nepal',
    code: 'NP'
  }, {
    name: 'Netherlands',
    code: 'NL'
  }, {
    name: 'Netherlands Antilles',
    code: 'AN'
  }, {
    name: 'New Caledonia',
    code: 'NC'
  }, {
    name: 'New Zealand',
    code: 'NZ'
  }, {
    name: 'Nicaragua',
    code: 'NI'
  }, {
    name: 'Niger',
    code: 'NE'
  }, {
    name: 'Nigeria',
    code: 'NG'
  }, {
    name: 'Niue',
    code: 'NU'
  }, {
    name: 'Norfolk Island',
    code: 'NF'
  }, {
    name: 'Northern Mariana Islands',
    code: 'MP'
  }, {
    name: 'Norway',
    code: 'NO'
  }, {
    name: 'Oman',
    code: 'OM'
  }, {
    name: 'Pakistan',
    code: 'PK'
  }, {
    name: 'Palau',
    code: 'PW'
  }, {
    name: 'Palestinian Authority',
    code: 'PS'
  }, {
    name: 'Panama',
    code: 'PA'
  }, {
    name: 'Papua New Guinea',
    code: 'PG'
  }, {
    name: 'Paraguay',
    code: 'PY'
  }, {
    name: 'Peru',
    code: 'PE'
  }, {
    name: 'Philippines',
    code: 'PH'
  }, {
    name: 'Pitcairn',
    code: 'PN'
  }, {
    name: 'Poland',
    code: 'PL'
  }, {
    name: 'Portugal',
    code: 'PT'
  }, {
    name: 'Puerto Rico',
    code: 'PR'
  }, {
    name: 'Qatar',
    code: 'QA'
  }, {
    name: 'Réunion',
    code: 'RE'
  }, {
    name: 'Romania',
    code: 'RO'
  }, {
    name: 'Russia',
    code: 'RU'
  }, {
    name: 'RWANDA',
    code: 'RW'
  }, {
    name: 'Saint Helena',
    code: 'SH'
  }, {
    name: 'Saint Kitts and Nevis',
    code: 'KN'
  }, {
    name: 'Saint Lucia',
    code: 'LC'
  }, {
    name: 'Saint Pierre and Miquelon',
    code: 'PM'
  }, {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC'
  }, {
    name: 'Samoa',
    code: 'WS'
  }, {
    name: 'San Marino',
    code: 'SM'
  }, {
    name: 'Sao Tome and Principe',
    code: 'ST'
  }, {
    name: 'Saudi Arabia',
    code: 'SA'
  }, {
    name: 'Senegal',
    code: 'SN'
  }, {
    name: 'Serbia',
    code: 'CS'
  }, {
    name: 'Seychelles',
    code: 'SC'
  }, {
    name: 'Sierra Leone',
    code: 'SL'
  }, {
    name: 'Singapore',
    code: 'SG'
  }, {
    name: 'Slovakia',
    code: 'SK'
  }, {
    name: 'Slovenia',
    code: 'SI'
  }, {
    name: 'Solomon Islands',
    code: 'SB'
  }, {
    name: 'Somalia',
    code: 'SO'
  }, {
    name: 'South Africa',
    code: 'ZA'
  }, {
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS'
  }, {
    name: 'Spain',
    code: 'ES'
  }, {
    name: 'Sri Lanka',
    code: 'LK'
  }, {
    name: 'Sudan',
    code: 'SD'
  }, {
    name: 'South Sudan',
    code: 'SD'
  }, {
    name: 'Suriname',
    code: 'SR'
  }, {
    name: 'Svalbard and Jan Mayen',
    code: 'SJ'
  }, {
    name: 'Swaziland',
    code: 'SZ'
  }, {
    name: 'Sweden',
    code: 'SE'
  }, {
    name: 'Switzerland',
    code: 'CH'
  }, {
    name: 'Syria',
    code: 'SY'
  }, {
    name: 'Taiwan',
    code: 'TW'
  }, {
    name: 'Tajikistan',
    code: 'TJ'
  }, {
    name: 'Tanzania',
    code: 'TZ'
  }, {
    name: 'Thailand',
    code: 'TH'
  }, {
    name: 'Timor-Leste',
    code: 'TL'
  }, {
    name: 'Togo',
    code: 'TG'
  }, {
    name: 'Tokelau',
    code: 'TK'
  }, {
    name: 'Tonga',
    code: 'TO'
  }, {
    name: 'Trinidad and Tobago',
    code: 'TT'
  }, {
    name: 'Tunisia',
    code: 'TN'
  }, {
    name: 'Turkey',
    code: 'TR'
  }, {
    name: 'Turkmenistan',
    code: 'TM'
  }, {
    name: 'Turks and Caicos Islands',
    code: 'TC'
  }, {
    name: 'Tuvalu',
    code: 'TV'
  }, {
    name: 'Uganda',
    code: 'UG'
  }, {
    name: 'Ukraine',
    code: 'UA'
  }, {
    name: 'United Arab Emirates',
    code: 'AE'
  }, {
    name: 'United Kingdom',
    code: 'GB'
  }, {
    name: 'United States',
    code: 'US'
  }, {
    name: 'United States Minor Outlying Islands',
    code: 'UM'
  }, {
    name: 'Uruguay',
    code: 'UY'
  }, {
    name: 'Uzbekistan',
    code: 'UZ'
  }, {
    name: 'Vanuatu',
    code: 'VU'
  }, {
    name: 'Venezuela',
    code: 'VE'
  }, {
    name: 'Vietnam',
    code: 'VN'
  }, {
    name: 'British Virgin Islands',
    code: 'VG'
  }, {
    name: 'U.S. Virgin Islands',
    code: 'VI'
  }, {
    name: 'Wallis and Futuna',
    code: 'WF'
  }, {
    name: 'Western Sahara',
    code: 'EH'
  }, {
    name: 'Yemen',
    code: 'YE'
  }, {
    name: 'Zambia',
    code: 'ZM'
  }, {
    name: 'Zimbabwe',
    code: 'ZW'
  }].filter(item => item.name === name)[0]) === null || _filter$ === void 0 ? void 0 : _filter$.code) !== null && _filter$0$code !== void 0 ? _filter$0$code : 'us';
});

/***/ }),

/***/ "./assests/countries.js":
/*!******************************!*\
  !*** ./assests/countries.js ***!
  \******************************/
/*! exports provided: getPopulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopulation", function() { return getPopulation; });
const data = {
  "Afghanistan": 35530081,
  "Albania": 2930187,
  "Algeria": 41318142,
  "American Samoa": 55641,
  "Andorra": 76965,
  "Angola": 29784193,
  "Anguilla": 14909,
  "Antarctica": 0,
  "Antigua and Barbuda": 102012,
  "Argentina": 44271041,
  "Armenia": 2930450,
  "Aruba": 105264,
  "Australia": 24450561,
  "Austria": 8735453,
  "Azerbaijan": 9827589,
  "Bahamas": 395361,
  "Bahrain": 1492584,
  "Bangladesh": 164669751,
  "Barbados": 285719,
  "Belarus": 9468338,
  "Belgium": 11429336,
  "Belize": 374681,
  "Benin": 11175692,
  "Bermuda": 61349,
  "Bhutan": 807610,
  "Bolivia": 11051600,
  "Bosnia and Herzegovina": 3507017,
  "Botswana": 2291661,
  "Bouvet Island": 0,
  "Brazil": 209288278,
  "British Indian Ocean Territory": 0,
  "Brunei": 428697,
  "Bulgaria": 7084571,
  "Burkina Faso": 19193382,
  "Burundi": 10864245,
  "Cambodia": 16005373,
  "Cameroon": 24053727,
  "Canada": 36624199,
  "Cape Verde": 546388,
  "Cayman Islands": 61559,
  "Central African Republic": 4659080,
  "Chad": 14899994,
  "Chile": 18054726,
  "China (mainland)": 1409517397,
  "Christmas Island": 2500,
  "Cocos (Keeling) Islands": 600,
  "Colombia": 49065615,
  "Comoros": 813912,
  "Congo": 5260750,
  "Cook Islands": 17380,
  "Costa Rica": 4905769,
  "Croatia": 4189353,
  "Cuba": 11484636,
  "Cyprus": 1179551,
  "Czechia": 10618303,
  "Denmark": 5733551,
  "Djibouti": 956985,
  "Dominica": 73925,
  "Dominican Republic": 10766998,
  "East Timor": 1296311,
  "Ecuador": 16624858,
  "Egypt": 97553151,
  "El Salvador": 6377853,
  "England": 0,
  "Equatorial Guinea": 1267689,
  "Eritrea": 5068831,
  "Estonia": 1309632,
  "Ethiopia": 104957438,
  "Falkland Islands": 2910,
  "Faroe Islands": 49290,
  "Fiji Islands": 905502,
  "Finland": 5523231,
  "France": 64979548,
  "French Guiana": 282731,
  "French Polynesia": 283007,
  "French Southern territories": 0,
  "Gabon": 2025137,
  "Gambia": 2100568,
  "Georgia": 3912061,
  "Germany": 82114224,
  "Ghana": 28833629,
  "Gibraltar": 34571,
  "Greece": 11159773,
  "Greenland": 56480,
  "Grenada": 107825,
  "Guadeloupe": 449568,
  "Guam": 164229,
  "Guatemala": 16913503,
  "Guinea": 12717176,
  "Guinea-Bissau": 1861283,
  "Guyana": 777859,
  "Haiti": 10981229,
  "Heard Island and McDonald Islands": 0,
  "Holy See": 1000,
  "Honduras": 9265067,
  "Hong Kong SAR": 7364883,
  "Hungary": 9721559,
  "Iceland": 335025,
  "India": 1339180127,
  "Indonesia": 263991379,
  "Iran": 81162788,
  "Iraq": 38274618,
  "Ireland": 4761657,
  "Israel": 8321570,
  "Italy": 59359900,
  "Ivory Coast": 24294750,
  "Jamaica": 2890299,
  "Japan": 127484450,
  "Jordan": 9702353,
  "Kazakhstan": 18204499,
  "Kenya": 49699862,
  "Kiribati": 116398,
  "Kuwait": 4136528,
  "Kyrgyzstan": 6045117,
  "Laos": 6858160,
  "Latvia": 1949670,
  "Lebanon": 6082357,
  "Lesotho": 2233339,
  "Liberia": 4731906,
  "Libyan Arab Jamahiriya": 5605000,
  "Liechtenstein": 37922,
  "Lithuania": 2890297,
  "Luxembourg": 583455,
  "Macao": 473000,
  "North Macedonia": 2024000,
  "Madagascar": 25570895,
  "Malawi": 18622104,
  "Malaysia": 31624264,
  "Maldives": 436330,
  "Mali": 18541980,
  "Malta": 430835,
  "Marshall Islands": 53127,
  "Martinique": 384896,
  "Mauritania": 4420184,
  "Mauritius": 1265138,
  "Mayotte": 253045,
  "Mexico": 129163276,
  "Micronesia, Federated States of": 0,
  "Moldova": 4051212,
  "Monaco": 38695,
  "Mongolia": 3075647,
  "Montserrat": 5177,
  "Morocco": 35739580,
  "Mozambique": 29668834,
  "Myanmar": 53370609,
  "Namibia": 2533794,
  "Nauru": 11359,
  "Nepal": 29304998,
  "Netherlands": 17035938,
  "Netherlands Antilles": 217000,
  "New Caledonia": 276255,
  "New Zealand": 4705818,
  "Nicaragua": 6217581,
  "Niger": 21477348,
  "Nigeria": 190886311,
  "Niue": 1618,
  "Norfolk Island": 2000,
  "North Korea": 25490965,
  "Northern Ireland": 0,
  "Northern Mariana Islands": 55144,
  "Norway": 5305383,
  "Oman": 4636262,
  "Pakistan": 197015955,
  "Palau": 21729,
  "Palestine": 4920724,
  "Panama": 4098587,
  "Papua New Guinea": 8251162,
  "Paraguay": 6811297,
  "Peru": 32165485,
  "Philippines": 104918090,
  "Pitcairn": 50,
  "Poland": 38170712,
  "Portugal": 10329506,
  "Puerto Rico": 3663131,
  "Qatar": 2639211,
  "Reunion": 699000,
  "Romania": 19679306,
  "Russia": 143989754,
  "Rwanda": 12208407,
  "Saint Helena": 4049,
  "Saint Kitts and Nevis": 55345,
  "Saint Lucia": 178844,
  "Saint Pierre and Miquelon": 6320,
  "Saint Vincent and the Grenadines": 109897,
  "Samoa": 196440,
  "San Marino": 33400,
  "Sao Tome and Principe": 204327,
  "Saudi Arabia": 32938213,
  "Scotland": 0,
  "Senegal": 15850567,
  "Seychelles": 94737,
  "Sierra Leone": 7557212,
  "Singapore": 5708844,
  "Slovakia": 5447662,
  "Slovenia": 2079976,
  "Solomon Islands": 611343,
  "Somalia": 14742523,
  "South Africa": 56717156,
  "South Georgia and the South Sandwich Islands": 0,
  "South Korea": 50982212,
  "South Sudan": 12575714,
  "Spain": 46354321,
  "SriLanka": 20876917,
  "Sudan": 40533330,
  "Suriname": 563402,
  "Svalbard and Jan Mayen": 3200,
  "Swaziland": 1008000,
  "Sweden": 9910701,
  "Switzerland": 8476005,
  "Syria": 18269868,
  "Tajikistan": 8921343,
  "Tanzania": 57310019,
  "Thailand": 69037513,
  "Congo (DRC)": 0,
  "Togo": 7797694,
  "Tokelau": 1300,
  "Tonga": 108020,
  "Trinidad and Tobago": 1369125,
  "Tunisia": 11532127,
  "Turkey": 80745020,
  "Turkmenistan": 5758075,
  "Turks and Caicos Islands": 35446,
  "Tuvalu": 11192,
  "Uganda": 42862958,
  "Ukraine": 44222947,
  "United Arab Emirates": 9400145,
  "United Kingdom": 66181585,
  "United States": 324459463,
  "United States Minor Outlying Islands": 0,
  "Uruguay": 3456750,
  "Uzbekistan": 31910641,
  "Vanuatu": 276244,
  "Venezuela": 31977065,
  "Vietnam": 95540800,
  "Virgin Islands, British": 0,
  "Virgin Islands, U.S.": 0,
  "Wales": 0,
  "Wallis and Futuna": 11773,
  "Western Sahara": 552628,
  "Yemen": 28250420,
  "Yugoslavia": 10640000,
  "Zambia": 17094130,
  "Zimbabwe": 16529904
};
const getPopulation = name => Number(data[name]);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/DEV/Desktop/covidweb/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const layoutStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  background: 'rgb(25,26,26)',
  height: '100%',
  width: '100%'
};

const Header = () => __jsx("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    color: 'white',
    height: '32%'
  },
  className: "jsx-1526113003" + " " + "menu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 16
  }
}, "Tracker"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/news",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 16
  }
}, "News"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/Gaming",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 16
  }
}, "Gaming"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/Stock Market",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 16
  }
}, "Stock Market"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/Free Courses",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  className: "jsx-1526113003",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 16
  }
}, "Free Courses"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1526113003",
  __self: undefined
}, "a.jsx-1526113003{padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qm9CLEFBR2lDLGtCQUNyQiIsImZpbGUiOiIvVXNlcnMvREVWL0Rlc2t0b3AvY292aWR3ZWIvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gICAgcGFkZGluZ0xlZnQ6IDIwLFxuICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgYmFja2dyb3VuZDogJ3JnYigyNSwyNiwyNiknLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG59O1xuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCB3aWR0aDogJzEwMCUnLCBjb2xvcjogJ3doaXRlJywgaGVpZ2h0OiAnMzIlJyB9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPjxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5UcmFja2VyPC9oNT48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+XG4gICAgICAgICAgICA8YT48aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+TmV3czwvaDU+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvR2FtaW5nXCI+XG4gICAgICAgICAgICA8YT48aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+R2FtaW5nPC9oNT48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9TdG9jayBNYXJrZXRcIj5cbiAgICAgICAgICAgIDxhPjxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5TdG9jayBNYXJrZXQ8L2g1PjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL0ZyZWUgQ291cnNlc1wiPlxuICAgICAgICAgICAgPGE+PGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkZyZWUgQ291cnNlczwvaDU+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/components/Layout.js */"));

function Layout({
  children
}) {
  return __jsx("div", {
    style: layoutStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), children);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: INITIAL_VIEW_STATE, getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_VIEW_STATE", function() { return INITIAL_VIEW_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assests_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/countries */ "./assests/countries.js");
/* harmony import */ var _assests_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assests/codes */ "./assests/codes.js");
var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-nocheck






const tileServer = 'https://c.tile.openstreetmap.org/';
const INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 20,
  bearing: 0
};

const opacity = opa => {
  let op = opa / 200;

  if (op < 0.3) {
    op = 0.3;
  }

  return op;
};

const TOKEN = 'pk.eyJ1IjoiYWxla25hbWFydHluYXMiLCJhIjoiY2s5MXJpd3RzMDBsaDNtbnF6M29rMXlvYyJ9.fsq7LE6sCm9Sx5Zu2R5KZQ';

function HomePage({
  data,
  data2
}) {
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    visible: false
  });
  const {
    0: viewport,
    1: setViewport
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    latitude: 50,
    longitude: 0,
    zoom: 2,
    visibilityConstraints: 1
  });
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Infected");
  return __jsx("div", {
    className: "tracker-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      flexDirection: 'row',
      display: 'flex',
      height: '100%',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "LOL",
    style: {
      display: 'flex',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "aff",
    style: {
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-around'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      marginRight: 'auto',
      background: 'rgb(34,37,41)',
      borderRadius: 9,
      padding: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Coronavirus COVID-19"), __jsx("h5", {
    style: {
      color: 'grey',
      fontFamily: 'Poppins',
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, "Global Cases")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '50%',
      margin: 'auto',
      justifyContent: 'space-around'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      background: 'rgb(34,37,41)',
      padding: 15,
      borderRadius: 9
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, __jsx("h6", {
    style: {
      color: 'rgb(194,49,54)',
      textAlign: 'start',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, "Infected"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, data.totalConfirmed.toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(194,49,54)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      background: 'rgb(34,37,41)',
      padding: 15,
      borderRadius: 9
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, __jsx("h6", {
    style: {
      color: 'rgb(251,200,128)',
      textAlign: 'start',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, "Active"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, (data.totalConfirmed - data.totalDeaths - data.totalRecovered).toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(251,200,128)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      background: 'rgb(34,37,41)',
      padding: 15,
      borderRadius: 9
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, __jsx("h5", {
    style: {
      color: 'rgb(79,77,83)',
      textAlign: 'start',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, "Deaths"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  }, data.totalDeaths.toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(79,77,83)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      background: 'rgb(34,37,41)',
      padding: 15,
      borderRadius: 9
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx("h5", {
    style: {
      color: 'rgb(73,193,172)',
      textAlign: 'start',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, "Recovered"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }, data.totalRecovered.toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(73,193,172)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  })))), __jsx(Map, {
    data: data,
    viewport: viewport,
    setViewport: setViewport,
    showPopup: showPopup,
    setShowPopup: setShowPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  })))), Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return __jsx("div", {
      className: "list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 28
      }
    }, __jsx("h3", {
      style: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'left',
        padding: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, "Cases Info"), __jsx(TabBar, {
      setType: setType,
      type: type,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }), __jsx(List, {
      data: data,
      data2: data2,
      type: type,
      setShowPopup: setShowPopup,
      handleAnimate: (long, lat) => setViewport(_objectSpread({}, viewport, {
        latitude: lat,
        longitude: long,
        zoom: 4,
        transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_4__["FlyToInterpolator"]()
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }));
  }, [data, type]));
}

function TabBar({
  setType,
  type
}) {
  return __jsx("div", {
    className: "jsx-60989152" + " " + 'tabbar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-60989152" + " " + (`tabbar-item ` + (type === 'Infected' && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => setType('Infected'),
    className: "jsx-60989152" + " " + 'tabbar-item-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, "Infected")), __jsx("div", {
    className: "jsx-60989152" + " " + (`tabbar-item ` + (type === "Deaths" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => setType("Deaths"),
    className: "jsx-60989152" + " " + 'tabbar-item-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "Deaths")), __jsx("div", {
    className: "jsx-60989152" + " " + (`tabbar-item ` + (type === "Recovered" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => setType("Recovered"),
    className: "jsx-60989152" + " " + 'tabbar-item-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, "Recovered")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "60989152",
    __self: this
  }, ".tabbar-item.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.tabbar.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background:rgb(20,21,23);border-radius:8px;padding:10px;margin-left:10px;margin-right:10px;}.tabbar-item-button.jsx-60989152{border:none;outline:none;background:rgb(20,21,23);padding:10px;border-radius:8px;color:white;font-family:Poppins;cursor:pointer;font-weight:bold;font-size:15px;}.tabbar.jsx-60989152 .selected.jsx-60989152::after{width:80%;background:red;}.tabbar-item.jsx-60989152::after{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:55px;width:80%;content:'';-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out;height:5px;}.tabbar-item.jsx-60989152:hover.jsx-60989152::after{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0x3QixBQUdrQyxBQUtBLEFBU0QsQUFZRixBQUlRLEFBU0gsVUFaQSxFQVpGLEdBeUJqQixVQXhCK0IsQUFZL0IseUJBWGlCLGFBQ0ssUUFhTCxHQTlCUyxBQUtPLE9BYWpCLFlBQ1Esb0JBQ0wsZUFDRSxpQkFDRixBQVNJLE9BOUJQLFFBc0JoQixJQXJCQSxBQThCYyxVQUNDLFdBQ21CLFlBNUJILHlCQUNULGtCQUNMLGFBQ0ksQUEwQk4sV0FDZixNQTFCc0Isa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IERlY2tHTCwgeyBUaWxlTGF5ZXIsIEJpdG1hcExheWVyIH0gZnJvbSBcImRlY2suZ2xcIjtcbmltcG9ydCBSZWFjdE1hcEdMLCB7IE1hcmtlciwgUG9wdXAsIFN0YXRpY01hcCwgU291cmNlLCBMYXllciwgRmx5VG9JbnRlcnBvbGF0b3IgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHsgZ2V0UG9wdWxhdGlvbiB9IGZyb20gJy4uL2Fzc2VzdHMvY291bnRyaWVzJ1xuaW1wb3J0IE1hcDIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAyJ1xuaW1wb3J0IGNvZGVzIGZyb20gJy4uL2Fzc2VzdHMvY29kZXMnXG5cbmNvbnN0IHRpbGVTZXJ2ZXIgPSAnaHR0cHM6Ly9jLnRpbGUub3BlbnN0cmVldG1hcC5vcmcvJztcblxuXG5leHBvcnQgY29uc3QgSU5JVElBTF9WSUVXX1NUQVRFID0ge1xuICAgIGxhdGl0dWRlOiA0Ny42NSxcbiAgICBsb25naXR1ZGU6IDcsXG4gICAgem9vbTogNC41LFxuICAgIG1heFpvb206IDIwLFxuICAgIGJlYXJpbmc6IDBcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgYXJlYXM6IEFQSVtdO1xuICAgIHRvdGFsQ29uZmlybWVkOiBudW1iZXI7XG4gICAgdG90YWxEZWF0aHM6IG51bWJlcjtcbiAgICB0b3RhbFJlY292ZXJlZDogbnVtYmVyO1xuICAgIHRvdGFsUmVjb3ZlcmVkRGVsdGE6IG51bWJlcjtcbiAgICB0b3RhbERlYXRoc0RlbHRhOiBudW1iZXI7XG4gICAgdG90YWxDb25maXJtZWREZWx0YTogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGVkOiBEYXRlO1xuICAgIGxhdD86IG51bWJlcjtcbiAgICBsb25nPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUhpc3RvcnlEYXRhIHtcbiAgICBob3NwaXRhbGl6ZWRXaXRoU3ltcHRvbXM6IG51bWJlcjtcbiAgICBpbnRlbnNpdmVUaGVyYXB5OiBudW1iZXI7XG4gICAgdG90YWxIb3NwaXRhbGl6ZWQ6IG51bWJlcjtcbiAgICBob21lSW5zdWxhdGlvbjogbnVtYmVyO1xuICAgIHRvdGFsQ3VycmVudGx5UG9zaXRpdmU6IG51bWJlcjtcbiAgICBuZXdDdXJyZW50bHlQb3NpdGl2ZTogbnVtYmVyO1xuICAgIGRpc2NoYXJnZWRIZWFsZWQ6IG51bWJlcjtcbiAgICBkZWNlYXNlZDogbnVtYmVyO1xuICAgIHRvdGFsQ2FzZXM6IG51bWJlcjtcbiAgICB0YW1wb25pOiBudW1iZXI7XG4gICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZWRBdFNvdXJjZTogRGF0ZTtcbiAgICBsYXN0VXBkYXRlZEF0QXBpZnk6IERhdGU7XG4gICAgcmVhZE1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9kYXkge1xuICAgIGRlYXRoczogbnVtYmVyO1xuICAgIGNvbmZpcm1lZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGN1bGF0ZWQge1xuICAgIGRlYXRoX3JhdGU6IG51bWJlcjtcbiAgICByZWNvdmVyeV9yYXRlOiBudW1iZXI7XG4gICAgcmVjb3ZlcmVkX3ZzX2RlYXRoX3JhdGlvPzogYW55O1xuICAgIGNhc2VzX3Blcl9taWxsaW9uX3BvcHVsYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRlc3REYXRhIHtcbiAgICBkZWF0aHM6IG51bWJlcjtcbiAgICBjb25maXJtZWQ6IG51bWJlcjtcbiAgICByZWNvdmVyZWQ6IG51bWJlcjtcbiAgICBjcml0aWNhbDogbnVtYmVyO1xuICAgIGNhbGN1bGF0ZWQ6IENhbGN1bGF0ZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJMiB7XG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgcG9wdWxhdGlvbjogbnVtYmVyO1xuICAgIHVwZGF0ZWRfYXQ6IERhdGU7XG4gICAgdG9kYXk6IFRvZGF5O1xuICAgIGxhdGVzdF9kYXRhOiBMYXRlc3REYXRhO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBkYXRhOiBBUElcbiAgICBkYXRhMjogQXJyYXk8QVBJMj4sXG59XG5cbmNvbnN0IG9wYWNpdHkgPSAob3BhKSA9PiB7XG4gICAgbGV0IG9wID0gKG9wYSkgLyAyMDBcbiAgICBpZiAob3AgPCAwLjMpIHtcbiAgICAgICAgb3AgPSAwLjNcbiAgICB9XG4gICAgcmV0dXJuIG9wXG59XG5cbmNvbnN0IFRPS0VOID0gJ3BrLmV5SjFJam9pWVd4bGEyNWhiV0Z5ZEhsdVlYTWlMQ0poSWpvaVkyczVNWEpwZDNSek1EQnNhRE50Ym5GNk0yOXJNWGx2WXlKOS5mc3E3TEU2c0NtOVN4NVp1MlI1S1pRJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRhLCBkYXRhMiB9OiBJUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdOiBhbnkgPSB1c2VTdGF0ZTx7IHZpc2libGU6IGJvb2xlYW4sIHJlZ2lvbj86IEFQSSwgY291bnRyeT86IGJvb2xlYW4gfCBzdHJpbmcgfT4oeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdOiBhbnkgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxhdGl0dWRlOiA1MCxcbiAgICAgICAgbG9uZ2l0dWRlOiAwLFxuICAgICAgICB6b29tOiAyLFxuICAgICAgICB2aXNpYmlsaXR5Q29uc3RyYWludHM6IDFcbiAgICB9KTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTwnSW5mZWN0ZWQnIHwgJ0RlYXRocycgfCAnUmVjb3ZlcmVkJz4oXCJJbmZlY3RlZFwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlci1mbGV4XCIgPlxuXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxPTFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJ2NhbGMoMTAwdmggLSA2MHB4KScsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmZlwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHBhZGRpbmc6IDIwLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogJ2F1dG8nLCBiYWNrZ3JvdW5kOiAncmdiKDM0LDM3LDQxKScsIGJvcmRlclJhZGl1czogOSwgcGFkZGluZzogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCBtYXJnaW46IDAgfX0+Q29yb25hdmlydXMgQ09WSUQtMTk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCBtYXJnaW46IDAsIHBhZGRpbmc6IDAgfX0+R2xvYmFsIENhc2VzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHdpZHRoOiAnNTAlJywgbWFyZ2luOiAnYXV0bycsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDM0LDM3LDQxKScsIHBhZGRpbmc6IDE1LCBib3JkZXJSYWRpdXM6IDkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMTk0LDQ5LDU0KScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkluZmVjdGVkPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDAgfX0+e2RhdGEudG90YWxDb25maXJtZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigxOTQsNDksNTQpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgcGFkZGluZzogMTUsIGJvcmRlclJhZGl1czogOSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJ3JnYigyNTEsMjAwLDEyOCknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5BY3RpdmU8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogMCB9fT57KGRhdGEudG90YWxDb25maXJtZWQgLSBkYXRhLnRvdGFsRGVhdGhzIC0gZGF0YS50b3RhbFJlY292ZXJlZCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigyNTEsMjAwLDEyOCknLCBoZWlnaHQ6IDQsIHdpZHRoOiAnODAlJywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBwYWRkaW5nOiAxNSwgYm9yZGVyUmFkaXVzOiA5IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAncmdiKDc5LDc3LDgzKScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkRlYXRoczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsRGVhdGhzLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoNzksNzcsODMpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgcGFkZGluZzogMTUsIGJvcmRlclJhZGl1czogOSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3JnYig3MywxOTMsMTcyKScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PlJlY292ZXJlZDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsUmVjb3ZlcmVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoNzMsMTkzLDE3MiknLCBoZWlnaHQ6IDQsIHdpZHRoOiAnODAlJywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBkYXRhPXtkYXRhfSB2aWV3cG9ydD17dmlld3BvcnR9IHNldFZpZXdwb3J0PXtzZXRWaWV3cG9ydH0gc2hvd1BvcHVwPXtzaG93UG9wdXB9IHNldFNob3dQb3B1cD17c2V0U2hvd1BvcHVwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNYXAyIGRhdGE9e2RhdGF9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Ub3RhbCBDb25maXJtZWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAwIH19PntkYXRhLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDE+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgdGV4dEFsaWduOiAnbGVmdCcsIHBhZGRpbmc6IDIwIH19PkNhc2VzIEluZm88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkJhciBzZXRUeXBlPXtzZXRUeXBlfSB0eXBlPXt0eXBlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBkYXRhPXtkYXRhfSBkYXRhMj17ZGF0YTJ9IHR5cGU9e3R5cGV9IHNldFNob3dQb3B1cD17c2V0U2hvd1BvcHVwfSBoYW5kbGVBbmltYXRlPXsobG9uZywgbGF0KSA9PiBzZXRWaWV3cG9ydCh7IC4uLnZpZXdwb3J0LCBsYXRpdHVkZTogbGF0LCBsb25naXR1ZGU6IGxvbmcsIHpvb206IDQsIHRyYW5zaXRpb25JbnRlcnBvbGF0b3I6IG5ldyBGbHlUb0ludGVycG9sYXRvcigpLCB9KX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9LCBbZGF0YSwgdHlwZV0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXYgPlxuICAgIClcbn1cblxuXG5mdW5jdGlvbiBUYWJCYXIoeyBzZXRUeXBlLCB0eXBlIH06IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJiYXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0YWJiYXItaXRlbSBgICsgKHR5cGUgPT09ICdJbmZlY3RlZCcgJiYgJ3NlbGVjdGVkJyl9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0YWJiYXItaXRlbS1idXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ0luZmVjdGVkJyl9PkluZmVjdGVkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFiYmFyLWl0ZW0gYCArICh0eXBlID09PSBcIkRlYXRoc1wiICYmICdzZWxlY3RlZCcpfSA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RhYmJhci1pdGVtLWJ1dHRvbicgb25DbGljaz17KCkgPT4gc2V0VHlwZShcIkRlYXRoc1wiKX0+RGVhdGhzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFiYmFyLWl0ZW0gYCArICh0eXBlID09PSBcIlJlY292ZXJlZFwiICYmICdzZWxlY3RlZCcpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGFiYmFyLWl0ZW0tYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKFwiUmVjb3ZlcmVkXCIpfT5SZWNvdmVyZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMCwgMjEsIDIzKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW0tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsIDIxLCAyMyk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyIC5zZWxlY3RlZDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YWJiYXItaXRlbTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW06aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZnVuY3Rpb24gTWFwKHsgZGF0YSwgdmlld3BvcnQsIHNldFZpZXdwb3J0LCBzaG93UG9wdXAsIHNldFNob3dQb3B1cCB9OiB7IGRhdGE6IEFQSSwgdmlld3BvcnQ6IGFueSwgc2V0Vmlld3BvcnQ6IGFueSB9KSB7XG5cbiAgICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbWFwUmVmLmN1cnJlbnQuZ2V0TWFwKCk7XG5cbiAgICAgICAgaWYgKGlzTG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSU5JVCcpXG4gICAgICAgICAgICBtYXAub24oJ21vdXNlZW50ZXInLCAncG9pbnRzMiAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKVxuICAgICAgICAgICAgICAgIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW21hcFJlZiwgaXNMb2FkZWRdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25Mb2FkKGV2dCkge1xuICAgICAgICBjb25zdCBtYXAgPSBtYXBSZWYuY3VycmVudC5nZXRNYXAoKTtcbiAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiB7c2hvd1BvcHVwLnZpc2libGUgPT09IHRydWUgJiYgPExvY2F0aW9uRGV0YWlscyBzaG93UG9wdXA9e3Nob3dQb3B1cH0gLz59ICovfVxuICAgICAgICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgICAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgICAgICAgICAgb25Mb2FkPXtoYW5kbGVPbkxvYWR9XG4gICAgICAgICAgICAgICAgLy8gb25Ib3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbWFwID0gbWFwUmVmLmN1cnJlbnQuZ2V0TWFwKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChlPy5mZWF0dXJlcz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYXllci5pZCA9PT0gJ3BvaW50cycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNldEhvdmVyKHRydWUpXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzZXRIb3ZlcihmYWxzZSlcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICByZXVzZU1hcHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGhlaWdodD0nY2FsYygxMDB2aCAtIDIxMHB4KSdcbiAgICAgICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXt2aWV3ID0+IHNldFZpZXdwb3J0KHZpZXcpfVxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtUT0tFTn1cbiAgICAgICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvZGFyay12OVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbjogZGF0YS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSlbMF0sIGNvdW50cnk6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBkYXRhLmFyZWFzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uYXJlYXMuZmlsdGVyKGl0ZW0yID0+IGl0ZW0yLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb246IGRhdGEuYXJlYXNbaW5kZXhdLmFyZWFzLmZpbHRlcihpdGVtID0+IGl0ZW0uZGlzcGxheU5hbWUgPT09IGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKVswXSwgY291bnRyeTogZGF0YS5hcmVhc1tpbmRleF0uZGlzcGxheU5hbWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzaG93UG9wdXAudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogZmFsc2UsIGxvY2F0aW9uOiBudWxsIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTb3VyY2UgaWQ9J0NvdW50cmllcycgdHlwZT0nZ2VvanNvbicgZGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMucmVkdWNlKChzdW0sIHZhbDogQVBJKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZW9tZXRyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ1BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwubG9uZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwubGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogdmFsLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24nOiAnbW9udW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvdGFsJzogdmFsLnRvdGFsQ29uZmlybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtID0gISFzdW0gPyBbLi4uc3VtLCBvYmpdIDogW29ial1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgfSwgW2RhdGFdKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ3BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydnZXQnLCAndG90YWwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwLCAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwLCAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAwLCAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwMCwgMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwMDAsIDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAwMDAsIDM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZ2V0JywgJ3RvdGFsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLCAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwLCAuNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwMCwgMC44LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMDAwLCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgICAgICAgICAgPFNvdXJjZSBpZD0nQ2l0aWVzJyB0eXBlPSdnZW9qc29uJyBkYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogdXNlTWVtbygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5yZWR1Y2UoKHN1bSwgdmFsOiBBUEkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwuYXJlYXMubWFwKChpdGVtOiBBUEkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dlb21ldHJ5Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ1BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9uZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogaXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWNvbic6ICdtb251bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IGl0ZW0udG90YWxDb25maXJtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gPSAhIXN1bSA/IFsuLi5zdW0sIG9ial0gOiBbb2JqXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICAgICAgICAgIH0sIFtkYXRhXSlcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdwb2ludHMyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb3VyY2UnOiAncG9pbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLXJhZGl1cyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2dldCcsICd0b3RhbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAsIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLCA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCwgOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwLCA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JzogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NvdXJjZT5cblxuXG4gICAgICAgICAgICAgICAge3Nob3dQb3B1cC52aXNpYmxlICYmIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT17c2hvd1BvcHVwLnJlZ2lvbi5sYXR9XG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17c2hvd1BvcHVwLnJlZ2lvbi5sb25nfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiBmYWxzZSwgbG9jYXRpb246IG51bGwgfSl9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmc6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtjb2RlcyhzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSA/IHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUgOiBzaG93UG9wdXAuY291bnRyeSkgfHwgJ3VzJ30vc2hpbnkvNjQucG5nYH0gYWx0PVwiMTIzXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjAlJywgaGVpZ2h0OiAnMTYwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwIH19PntzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgbWFyZ2luVG9wOiAtMzAsIG1hcmdpbkJvdHRvbTogLTIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJ3JnYigxOTQsIDQ5LCA1NCknIH19PntzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAsIG1hcmdpbjogJ2F1dG8gMCBhdXRvIGF1dG8nIH19PklORkVDVEVEPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6IC0xNSwgbWFyZ2luQm90dG9tOiAtMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAncmdiKDI1MSwgMjAwLCAxMjgpJyB9fT57KHNob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQgLSBzaG93UG9wdXAucmVnaW9uLnRvdGFsRGVhdGhzIC0gc2hvd1BvcHVwLnJlZ2lvbi50b3RhbFJlY292ZXJlZCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luOiAnYXV0byAwIGF1dG8gYXV0bycgfX0+QUNUSVZFPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6IC0xNSwgbWFyZ2luQm90dG9tOiAtMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAncmdiKDc5LCA3NywgODMpJyB9fT57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbERlYXRocz8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwLCBtYXJnaW46ICdhdXRvIDAgYXV0byBhdXRvJyB9fT5ERUFUSFM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogLTE1LCBtYXJnaW5Cb3R0b206IC0yMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNzMsIDE5MywgMTcyKScgfX0+e3Nob3dQb3B1cC5yZWdpb24udG90YWxSZWNvdmVyZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luOiAnYXV0byAwIGF1dG8gYXV0bycgfX0+UkVDT1ZFUkVEPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlICYmIDxoMyBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ2JsYWNrJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVsYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj4ge051bWJlcigoc2hvd1BvcHVwLnJlZ2lvbi50b3RhbENvbmZpcm1lZCAqIDEwMCkgLyBnZXRQb3B1bGF0aW9uKHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUpKS50b0ZpeGVkKDIpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUG9wdXA+fVxuXG4gICAgICAgICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gTGlzdCh7IGRhdGEsIGRhdGEyLCB0eXBlLCBoYW5kbGVBbmltYXRlLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBhbnksIGRhdGEyOiBBcnJheTxBUEkyPiwgdHlwZTogYW55LCBoYW5kbGVBbmlhbXRlOiBhbnksIHNldFNob3dQb3B1cDogYW55IH0pIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRlZCgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiSW5mZWN0ZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMuc29ydCgoYTogQVBJLCBiOiBBUEkpID0+IGIudG90YWxDb25maXJtZWQgLSBhLnRvdGFsQ29uZmlybWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkRlYXRoc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5zb3J0KChhOiBBUEksIGI6IEFQSSkgPT4gYi50b3RhbERlYXRocyAtIGEudG90YWxEZWF0aHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiUmVjb3ZlcmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnNvcnQoKGE6IEFQSSwgYjogQVBJKSA9PiBiLnRvdGFsUmVjb3ZlcmVkIC0gYS50b3RhbFJlY292ZXJlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc29ydGVkLmxlbmd0aCA+IDApIHJldHVybiBudWxsXG4gICAgcmV0dXJuIDx1bCBzdHlsZT17eyBtYXJnaW46IDAsIHBhZGRpbmdMZWZ0OiAxMCwgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHNjcm9sbEJlaGF2aW9yOiAnc21vb3RoJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAge3NvcnRlZCgpLm1hcCgoYXJlYTogQVBJKSA9PiAoXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJy13ZWJraXQtZmxleCcsIGZsZXg6ICcxIDAgYXV0bycsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYmFja2dyb3VuZDogJ3JnYigyOCwgMzAsIDM0KScsIGN1cnNvcjogJ3BvaW50ZXInLCBib3JkZXJSYWRpdXM6IDgsIG1hcmdpblRvcDogMTAsIHBhZGRpbmdMZWZ0OiAyMCwgcGFkZGluZ1JpZ2h0OiAyMCB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uOiBkYXRhLmFyZWFzLmZpbHRlcihpdGVtID0+IGl0ZW0uZGlzcGxheU5hbWUgPT09IGFyZWEuZGlzcGxheU5hbWUpWzBdLCBjb3VudHJ5OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgaGFuZGxlQW5pbWF0ZShhcmVhLmxvbmcsIGFyZWEubGF0KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogMjAsIGhlaWdodDogMjAsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtjb2RlcyhhcmVhLmRpc3BsYXlOYW1lKSB8fCAndXMnfS9zaGlueS82NC5wbmdgfSBhbHQ9XCIxMjNcIiBzdHlsZT17eyB3aWR0aDogJzE2MCUnLCBoZWlnaHQ6ICcxNjAlJywgb2JqZWN0Rml0OiAnY292ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDE1LCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsIG1hcmdpbjogJzAgYXV0byAwIDAnIH19PnthcmVhLmRpc3BsYXlOYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19Pnt0eXBlID09PSBcIkluZmVjdGVkXCIgPyBhcmVhLnRvdGFsQ29uZmlybWVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA6IHR5cGUgPT09IFwiUmVjb3ZlcmVkXCIgPyBhcmVhLnRvdGFsUmVjb3ZlcmVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA6IHR5cGUgPT09IFwiRGVhdGhzXCIgJiYgYXJlYS50b3RhbERlYXRocz8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oNT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgIDwvdWw+XG59XG5cbmNvbnN0IExvY2F0aW9uRGV0YWlscyA9ICh7IHNob3dQb3B1cCB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJvdHRvbTogMjUsXG4gICAgICAgICAgICBsZWZ0OiAyNSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OTk5OTksXG4gICAgICAgICAgICBwYWRkaW5nOiAxNSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogOFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNvdW50cnlmbGFncy5pby8ke2NvZGVzKHNob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlID8gc2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZSA6IHNob3dQb3B1cC5jb3VudHJ5KSB8fCAndXMnfS9zaGlueS82NC5wbmdgfSBhbHQ9XCIxMjNcIiBzdHlsZT17eyB3aWR0aDogJzE2MCUnLCBoZWlnaHQ6ICcxNjAlJywgb2JqZWN0Rml0OiAnY292ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCB9fT57c2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+PGgzPntzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lfSA8L2gzPiA8bGFiZWwgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDggfX0+e3Nob3dQb3B1cC5jb3VudHJ5fTwvbGFiZWw+PC9zcGFuPn1cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAncmdiKDI1MiwxODQsNDQpJywgZm9udFNpemU6IDEyIH19PjxiPkNvbmZpcm1lZDo8L2I+ICB7c2hvd1BvcHVwLnJlZ2lvbi50b3RhbENvbmZpcm1lZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ3JnYig1MCwyMDMsMTExKScsIGZvbnRTaXplOiAxMiB9fT48Yj5SZWNvdmVyZWQ6PC9iPntzaG93UG9wdXAucmVnaW9uLnRvdGFsUmVjb3ZlcmVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAncmVkJywgZm9udFNpemU6IDEyIH19PjxiPkRlYXRoczo8L2I+IHtzaG93UG9wdXAucmVnaW9uLnRvdGFsRGVhdGhzPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvcD5cbiAgICAgICAgICAgIHtzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSAmJiA8aDMgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAxMiB9fT48Yj5Qb3B1bGF0aW9uOjwvYj4gIHtOdW1iZXIoKHNob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQgKiAxMDApIC8gZ2V0UG9wdWxhdGlvbihzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lKSkudG9GaXhlZCgyKX0lPC9oMz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgUmVuZGVyQ291bnRyaWVzID0gKHsgZGF0YSwgc2hvd1BvcHVwLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBhbnksIHNob3dQb3B1cD86IGFueSwgc2V0U2hvd1BvcHVwPzogYW55IH0pID0+IHtcbiAgICByZXR1cm4gZGF0YS5hcmVhcy5tYXAocmVnaW9uID0+IHtcbiAgICAgICAgcmV0dXJuIDxSZWRCdWJibGVNYXJrZXIga2V5PXtyZWdpb24uZGlzcGxheU5hbWV9IHdpZHRoPXsxMH0gcmVnaW9uPXtyZWdpb259IG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbiwgY291bnRyeTogdHJ1ZSB9KX0gc2VsZWN0ZWQ9e3JlZ2lvbi5kaXNwbGF5TmFtZSA9PT0gc2hvd1BvcHVwLnJlZ2lvbj8uZGlzcGxheU5hbWV9IC8+XG4gICAgfSlcbn1cblxuY29uc3QgUmVuZGVyQ2l0aWVzID0gKHsgZGF0YSwgc2hvd1BvcHVwLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBhbnksIHNob3dQb3B1cD86IGFueSwgc2V0U2hvd1BvcHVwPzogYW55IH0pID0+IHtcbiAgICByZXR1cm4gZGF0YS5hcmVhcy5tYXAoYyA9PiB7XG4gICAgICAgIHJldHVybiBjLmFyZWFzLm1hcChyZWdpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRCdWJibGVNYXJrZXIga2V5PXtyZWdpb24uZGlzcGxheU5hbWV9IHdpZHRoPXs1fSByZWdpb249e3JlZ2lvbn0gb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uLCBjb3VudHJ5OiBjLmRpc3BsYXlOYW1lIH0pfSBzZWxlY3RlZD17cmVnaW9uLmRpc3BsYXlOYW1lID09PSBzaG93UG9wdXAucmVnaW9uPy5kaXNwbGF5TmFtZX0gLz5cblxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG5jb25zdCBSZWRCdWJibGVNYXJrZXIgPSAoeyB3aWR0aCwgcmVnaW9uLCBvbkNsaWNrLCBzZWxlY3RlZCB9OiB7IHdpZHRoOiBudW1iZXIsIHJlZ2lvbjogQVBJLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBzZWxlY3RlZDogYm9vbGVhbiB9KSA9PiAoXG4gICAgPE1hcmtlciBrZXk9e3JlZ2lvbi5kaXNwbGF5TmFtZX0gbG9uZ2l0dWRlPXtyZWdpb24ubG9uZ30gbGF0aXR1ZGU9e3JlZ2lvbi5sYXR9IGNhcHR1cmVEcmFnPXtmYWxzZX0+XG4gICAgICAgIDxzdmcgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgZmlsbDogJyNkMDAnLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAod2lkdGggKiAyKSArIDEwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKHdpZHRoICogMikgKyAxMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHstd2lkdGggLyAyfXB4LCR7LXdpZHRofXB4KWBcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGNpcmNsZSBjeD17d2lkdGggKyA1fSBjeT17d2lkdGggKyA1fSByPXt3aWR0aH0gZmlsbD17XCJyZWRcIn0gc3Ryb2tlV2lkdGg9e3NlbGVjdGVkID8gMyA6IDB9IHN0cm9rZT17c2VsZWN0ZWQgPyBcIm9yYW5nZVwiIDogXCJyZWRcIn0gc3R5bGU9e3sgZmlsbE9wYWNpdHk6IG9wYWNpdHkocmVnaW9uLnRvdGFsRGVhdGhzKSB9fSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L01hcmtlcj5cbilcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmluZy5jb20vY292aWQvZGF0YScpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY29yb25hLWFwaS5jb20vY291bnRyaWVzJyk7XG4gICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEsIGRhdGEyOiBkYXRhMi5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhvbWVQYWdlKSJdfQ== */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/index.tsx */"));
}

function Map({
  data,
  viewport,
  setViewport,
  showPopup,
  setShowPopup
}) {
  var _showPopup$region$tot, _showPopup$region$tot2, _showPopup$region$tot3, _showPopup$region$tot4;

  const mapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hover,
    1: setHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const map = mapRef.current.getMap();

    if (isLoaded) {
      console.log('INIT');
      map.on('mouseenter', 'points2 ', e => {
        console.log('123');
        map.getCanvas().style.cursor = 'pointer';
      });
    }
  }, [mapRef, isLoaded]);

  function handleOnLoad(evt) {
    const map = mapRef.current.getMap();
    setIsLoaded(true);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, viewport, {
    ref: mapRef,
    onLoad: handleOnLoad // onHover={(e) => {
    //     const map = mapRef.current.getMap();
    //     if (e?.features?.filter(item => item.layer.id === 'points').length > 0) {
    //         setHover(true)
    //     }
    //     else {
    //         setHover(false)
    //     }
    // }}
    ,
    reuseMaps: false,
    height: "calc(100vh - 210px)",
    onViewportChange: view => setViewport(view),
    mapboxApiAccessToken: TOKEN,
    mapStyle: "mapbox://styles/mapbox/dark-v9",
    onClick: e => {
      var _e$features, _e$features$, _e$features$$properti;

      if (e === null || e === void 0 ? void 0 : (_e$features = e.features) === null || _e$features === void 0 ? void 0 : (_e$features$ = _e$features[0]) === null || _e$features$ === void 0 ? void 0 : (_e$features$$properti = _e$features$.properties) === null || _e$features$$properti === void 0 ? void 0 : _e$features$$properti.title) {
        if (data.areas.filter(item => {
          var _e$features2, _e$features2$, _e$features2$$propert;

          return item.displayName === (e === null || e === void 0 ? void 0 : (_e$features2 = e.features) === null || _e$features2 === void 0 ? void 0 : (_e$features2$ = _e$features2[0]) === null || _e$features2$ === void 0 ? void 0 : (_e$features2$$propert = _e$features2$.properties) === null || _e$features2$$propert === void 0 ? void 0 : _e$features2$$propert.title);
        }).length > 0) {
          setShowPopup({
            visible: true,
            region: data.areas.filter(item => {
              var _e$features3, _e$features3$, _e$features3$$propert;

              return item.displayName === (e === null || e === void 0 ? void 0 : (_e$features3 = e.features) === null || _e$features3 === void 0 ? void 0 : (_e$features3$ = _e$features3[0]) === null || _e$features3$ === void 0 ? void 0 : (_e$features3$$propert = _e$features3$.properties) === null || _e$features3$$propert === void 0 ? void 0 : _e$features3$$propert.title);
            })[0],
            country: true
          });
        } else {
          const index = data.areas.findIndex(item => item.areas.filter(item2 => {
            var _e$features4, _e$features4$, _e$features4$$propert;

            return item2.displayName === (e === null || e === void 0 ? void 0 : (_e$features4 = e.features) === null || _e$features4 === void 0 ? void 0 : (_e$features4$ = _e$features4[0]) === null || _e$features4$ === void 0 ? void 0 : (_e$features4$$propert = _e$features4$.properties) === null || _e$features4$$propert === void 0 ? void 0 : _e$features4$$propert.title);
          }).length > 0);
          setShowPopup({
            visible: true,
            region: data.areas[index].areas.filter(item => {
              var _e$features5, _e$features5$, _e$features5$$propert;

              return item.displayName === (e === null || e === void 0 ? void 0 : (_e$features5 = e.features) === null || _e$features5 === void 0 ? void 0 : (_e$features5$ = _e$features5[0]) === null || _e$features5$ === void 0 ? void 0 : (_e$features5$$propert = _e$features5$.properties) === null || _e$features5$$propert === void 0 ? void 0 : _e$features5$$propert.title);
            })[0],
            country: data.areas[index].displayName
          });
        }
      } else if (showPopup.visible === true) {
        setShowPopup({
          visible: false,
          location: null
        });
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Source"], {
    id: "Countries",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
        return data.areas.reduce((sum, val) => {
          const obj = {
            type: 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [val.long, val.lat]
            },
            'properties': {
              'title': val.displayName,
              'icon': 'monument',
              'total': val.totalConfirmed
            }
          };
          sum = !!sum ? [...sum, obj] : [obj];
          return sum;
        }, []);
      }, [data])
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Layer"], _extends({
    'id': 'points',
    'type': 'circle',
    'source': 'points',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['get', 'total'], 1000, 5, 5000, 10, 10000, 15, 50000, 20, 100000, 25, 500000, 30, 10000000, 35],
      'circle-color': 'red',
      'circle-opacity': ['interpolate', ['linear'], ['get', 'total'], 1000, .5, 10000, .6, 100000, 0.8, 500000, 1]
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  }))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Source"], {
    id: "Cities",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
        return data.areas.reduce((sum, val) => {
          val.areas.map(item => {
            const obj = {
              type: 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [item.long, item.lat]
              },
              'properties': {
                'title': item.displayName,
                'icon': 'monument',
                total: item.totalConfirmed
              }
            };
            sum = !!sum ? [...sum, obj] : [obj];
          });
          return sum;
        }, []);
      }, [data])
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 17
    }
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Layer"], _extends({
    'id': 'points2',
    'type': 'circle',
    'source': 'points',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['get', 'total'], 50, 4, 100, 5, 500, 6, 1000, 7, 5000, 8, 10000, 9],
      'circle-color': 'red',
      'circle-opacity': 0.5
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 21
    }
  }))), showPopup.visible && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Popup"], {
    latitude: showPopup.region.lat,
    longitude: showPopup.region.long,
    closeButton: true,
    offsetTop: -10,
    offsetLeft: 10,
    closeOnClick: false,
    onClose: () => setShowPopup({
      visible: false,
      location: null
    }),
    anchor: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 39
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      borderRadius: '50%',
      width: 20,
      height: 20,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: `https://www.countryflags.io/${Object(_assests_codes__WEBPACK_IMPORTED_MODULE_6__["default"])(showPopup.country === true ? showPopup.region.displayName : showPopup.country) || 'us'}/shiny/64.png`,
    alt: "123",
    style: {
      width: '160%',
      height: '160%',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 33
    }
  })), __jsx("h3", {
    style: {
      color: 'black',
      paddingLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 29
    }
  }, showPopup.region.displayName)), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -30,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  }, __jsx("h4", {
    style: {
      color: 'rgb(194, 49, 54)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 29
    }
  }, showPopup.region.totalConfirmed.toLocaleString('en-US')), __jsx("h4", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 29
    }
  }, "INFECTED")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -15,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 25
    }
  }, __jsx("h4", {
    style: {
      color: 'rgb(251, 200, 128)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 29
    }
  }, (showPopup.region.totalConfirmed - showPopup.region.totalDeaths - showPopup.region.totalRecovered).toLocaleString('en-US')), __jsx("h4", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 29
    }
  }, "ACTIVE")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -15,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 25
    }
  }, __jsx("h4", {
    style: {
      color: 'rgb(79, 77, 83)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 29
    }
  }, (_showPopup$region$tot = (_showPopup$region$tot2 = showPopup.region.totalDeaths) === null || _showPopup$region$tot2 === void 0 ? void 0 : _showPopup$region$tot2.toLocaleString('en-US')) !== null && _showPopup$region$tot !== void 0 ? _showPopup$region$tot : 0), __jsx("h4", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 29
    }
  }, "DEATHS")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -15,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 25
    }
  }, __jsx("h4", {
    style: {
      color: 'rgb(73, 193, 172)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 29
    }
  }, (_showPopup$region$tot3 = (_showPopup$region$tot4 = showPopup.region.totalRecovered) === null || _showPopup$region$tot4 === void 0 ? void 0 : _showPopup$region$tot4.toLocaleString('en-US')) !== null && _showPopup$region$tot3 !== void 0 ? _showPopup$region$tot3 : 0), __jsx("h4", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 29
    }
  }, "RECOVERED")), showPopup.country === true && __jsx("h3", {
    style: {
      flex: 1,
      color: 'black',
      fontSize: 12,
      marginTop: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 56
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 29
    }
  }, "Population:"), " ", Number(showPopup.region.totalConfirmed * 100 / Object(_assests_countries__WEBPACK_IMPORTED_MODULE_5__["getPopulation"])(showPopup.region.displayName)).toFixed(2), "%")))));
}

function List({
  data,
  data2,
  type,
  handleAnimate,
  setShowPopup
}) {
  function sorted() {
    if (type === "Infected") {
      return data.areas.sort((a, b) => b.totalConfirmed - a.totalConfirmed);
    } else if (type === "Deaths") {
      return data.areas.sort((a, b) => b.totalDeaths - a.totalDeaths);
    } else if (type === "Recovered") {
      return data.areas.sort((a, b) => b.totalRecovered - a.totalRecovered);
    }
  }

  if (sorted.length > 0) return null;
  return __jsx("ul", {
    style: {
      margin: 0,
      paddingLeft: 10,
      height: '100%',
      overflowY: 'scroll',
      scrollBehavior: 'smooth',
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 12
    }
  }, sorted().map(area => {
    var _area$totalConfirmed, _area$totalRecovered, _area$totalDeaths;

    return __jsx("li", {
      style: {
        display: '-webkit-flex',
        flex: '1 0 auto',
        flexDirection: 'row',
        alignItems: 'center',
        background: 'rgb(28, 30, 34)',
        cursor: 'pointer',
        borderRadius: 8,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
      },
      onClick: () => {
        setShowPopup({
          visible: true,
          region: data.areas.filter(item => item.displayName === area.displayName)[0],
          country: true
        });
        handleAnimate(area.long, area.lat);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        borderRadius: '50%',
        width: 20,
        height: 20,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: `https://www.countryflags.io/${Object(_assests_codes__WEBPACK_IMPORTED_MODULE_6__["default"])(area.displayName) || 'us'}/shiny/64.png`,
      alt: "123",
      style: {
        width: '160%',
        height: '160%',
        objectFit: 'cover',
        borderRadius: '50%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 21
      }
    })), __jsx("h5", {
      style: {
        paddingLeft: 15,
        color: 'rgba(255,255,255,0.7)',
        margin: '0 auto 0 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
        columnNumber: 17
      }
    }, area.displayName), __jsx("h5", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 17
      }
    }, type === "Infected" ? (_area$totalConfirmed = area.totalConfirmed) === null || _area$totalConfirmed === void 0 ? void 0 : _area$totalConfirmed.toLocaleString('en-US') : type === "Recovered" ? (_area$totalRecovered = area.totalRecovered) === null || _area$totalRecovered === void 0 ? void 0 : _area$totalRecovered.toLocaleString('en-US') : type === "Deaths" && ((_area$totalDeaths = area.totalDeaths) === null || _area$totalDeaths === void 0 ? void 0 : _area$totalDeaths.toLocaleString('en-US'))));
  }));
}

const LocationDetails = ({
  showPopup
}) => {
  var _showPopup$region$tot5, _showPopup$region$tot6, _showPopup$region$tot7, _showPopup$region$tot8, _showPopup$region$tot9, _showPopup$region$tot10;

  return __jsx("div", {
    style: {
      width: 400,
      height: 200,
      position: 'absolute',
      bottom: 25,
      left: 25,
      backgroundColor: 'white',
      zIndex: 99999999,
      padding: 15,
      borderRadius: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 9
    }
  }, showPopup.country === true ? __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      borderRadius: '50%',
      width: 20,
      height: 20,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: `https://www.countryflags.io/${Object(_assests_codes__WEBPACK_IMPORTED_MODULE_6__["default"])(showPopup.country === true ? showPopup.region.displayName : showPopup.country) || 'us'}/shiny/64.png`,
    alt: "123",
    style: {
      width: '160%',
      height: '160%',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  })), __jsx("h3", {
    style: {
      color: 'black',
      paddingLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 21
    }
  }, showPopup.region.displayName)) : __jsx("span", {
    style: {
      color: 'black',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 111
    }
  }, showPopup.region.displayName, " "), " ", __jsx("label", {
    style: {
      paddingLeft: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 152
    }
  }, showPopup.country)), __jsx("p", {
    style: {
      flex: 1,
      color: 'rgb(252,184,44)',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 76
    }
  }, "Confirmed:"), "  ", (_showPopup$region$tot5 = (_showPopup$region$tot6 = showPopup.region.totalConfirmed) === null || _showPopup$region$tot6 === void 0 ? void 0 : _showPopup$region$tot6.toLocaleString('en-US')) !== null && _showPopup$region$tot5 !== void 0 ? _showPopup$region$tot5 : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'rgb(50,203,111)',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 76
    }
  }, "Recovered:"), (_showPopup$region$tot7 = (_showPopup$region$tot8 = showPopup.region.totalRecovered) === null || _showPopup$region$tot8 === void 0 ? void 0 : _showPopup$region$tot8.toLocaleString('en-US')) !== null && _showPopup$region$tot7 !== void 0 ? _showPopup$region$tot7 : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'red',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 64
    }
  }, "Deaths:"), " ", (_showPopup$region$tot9 = (_showPopup$region$tot10 = showPopup.region.totalDeaths) === null || _showPopup$region$tot10 === void 0 ? void 0 : _showPopup$region$tot10.toLocaleString('en-US')) !== null && _showPopup$region$tot9 !== void 0 ? _showPopup$region$tot9 : 0), showPopup.country === true && __jsx("h3", {
    style: {
      flex: 1,
      color: 'black',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 44
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 98
    }
  }, "Population:"), "  ", Number(showPopup.region.totalConfirmed * 100 / Object(_assests_countries__WEBPACK_IMPORTED_MODULE_5__["getPopulation"])(showPopup.region.displayName)).toFixed(2), "%"));
};

const RenderCountries = ({
  data,
  showPopup,
  setShowPopup
}) => {
  return data.areas.map(region => {
    var _showPopup$region;

    return __jsx(RedBubbleMarker, {
      key: region.displayName,
      width: 10,
      region: region,
      onClick: () => setShowPopup({
        visible: true,
        region,
        country: true
      }),
      selected: region.displayName === ((_showPopup$region = showPopup.region) === null || _showPopup$region === void 0 ? void 0 : _showPopup$region.displayName),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 16
      }
    });
  });
};

const RenderCities = ({
  data,
  showPopup,
  setShowPopup
}) => {
  return data.areas.map(c => {
    return c.areas.map(region => {
      var _showPopup$region2;

      return __jsx(RedBubbleMarker, {
        key: region.displayName,
        width: 5,
        region: region,
        onClick: () => setShowPopup({
          visible: true,
          region,
          country: c.displayName
        }),
        selected: region.displayName === ((_showPopup$region2 = showPopup.region) === null || _showPopup$region2 === void 0 ? void 0 : _showPopup$region2.displayName),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 20
        }
      });
    });
  });
};

const RedBubbleMarker = ({
  width,
  region,
  onClick,
  selected
}) => __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
  key: region.displayName,
  longitude: region.long,
  latitude: region.lat,
  captureDrag: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 534,
    columnNumber: 5
  }
}, __jsx("svg", {
  onClick: onClick,
  style: {
    cursor: 'pointer',
    fill: '#d00',
    stroke: 'none',
    width: width * 2 + 10,
    height: width * 2 + 10,
    transform: `translate(${-width / 2}px,${-width}px)`
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 535,
    columnNumber: 9
  }
}, __jsx("circle", {
  cx: width + 5,
  cy: width + 5,
  r: width,
  fill: "red",
  strokeWidth: selected ? 3 : 0,
  stroke: selected ? "orange" : "red",
  style: {
    fillOpacity: opacity(region.totalDeaths)
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 544,
    columnNumber: 13
  }
})));

async function getServerSideProps(context) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://bing.com/covid/data');
  const data = await res.json();
  const res2 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://corona-api.com/countries');
  const data2 = await res2.json();
  return {
    props: {
      data,
      data2: data2.data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(HomePage));

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/DEV/Desktop/covidweb/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map