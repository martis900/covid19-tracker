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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    name: 'AndorrA',
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
    name: 'Cape Verde',
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
    name: 'Cote D\'Ivoire',
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
    name: 'Falkland Islands (Malvinas)',
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
    name: 'Holy See (Vatican City State)',
    code: 'VA'
  }, {
    name: 'Honduras',
    code: 'HN'
  }, {
    name: 'Hong Kong',
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
    name: 'Korea',
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
    name: 'Lao People\'S Democratic Republic',
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
    name: 'Libyan Arab Jamahiriya',
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
    name: 'Macao',
    code: 'MO'
  }, {
    name: 'Macedonia',
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
    name: 'Palestinian Territory, Occupied',
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
    name: 'Reunion',
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
    name: 'Serbia and Montenegro',
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
    name: 'Syrian Arab Republic',
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
    name: 'Viet Nam',
    code: 'VN'
  }, {
    name: 'Virgin Islands, British',
    code: 'VG'
  }, {
    name: 'Virgin Islands, U.S.',
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
  "China": 1409517397,
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
  "Holy See (Vatican City State)": 1000,
  "Honduras": 9265067,
  "Hong Kong": 7364883,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/DEV/Desktop/covidweb/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 50,
  border: '1px solid #DDD',
  background: 'rgb(25,27,27)',
  height: '100%'
};

const Header = () => __jsx("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    color: 'white',
    height: '32%'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 16
  }
}, "Tracker"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/news",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx("h5", {
  style: {
    color: 'white'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 16
  }
}, "News"))));

function Layout({
  children
}) {
  return __jsx("div", {
    style: layoutStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
        } = __webpack_require__(/*! react-is */ "react-is");

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: INITIAL_VIEW_STATE, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_VIEW_STATE", function() { return INITIAL_VIEW_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deck.gl */ "deck.gl");
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deck_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assests_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/countries */ "./assests/countries.js");
/* harmony import */ var _assests_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assests/codes */ "./assests/codes.js");
var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-ignore







const tileServer = 'https://c.tile.openstreetmap.org/';
const INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 20,
  bearing: 0
};

const radius = opa => {
  let op = opa / 200;

  if (op > 100) {
    op = 100;
  }

  if (op < 20) {
    op *= 3;
  }

  return op;
};

const opacity = opa => {
  let op = opa / 200;

  if (op < 0.3) {
    op = 0.3;
  }

  return op;
};

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFydGlzOTAwIiwiYSI6ImNrMTZtazN4ODBhNGUzbW1yc245dG9nZzYifQ.T2ImKPTOuImP5pW11SXoWg';

function HomePage({
  data
}) {
  const {
    0: viewport,
    1: setViewport
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 400,
    height: 400,
    latitude: 50,
    longitude: 0,
    zoom: 1,
    visibilityConstraints: 1
  });
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Infected");
  return __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      flexDirection: 'row',
      display: 'flex',
      height: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      position: 'relative',
      height: 'calc(100vh - 112px)',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "Coronavirus COVID-19"), __jsx("h5", {
    style: {
      color: 'grey',
      fontFamily: 'Poppins',
      marginTop: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "Global Cases"), __jsx(deck_gl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialViewState: {
      longitude: -74.006,
      latitude: 40.7128,
      zoom: 12
    },
    width: 400,
    height: 400,
    layers: () => {
      const {
        autoHighlight = true,
        highlightColor = [60, 60, 60, 40]
      } = this.props;
      return [new deck_gl__WEBPACK_IMPORTED_MODULE_3__["TileLayer"]({
        pickable: true,
        onHover: this._onHover,
        autoHighlight,
        highlightColor,
        opacity: 1,
        // https://wiki.openstreetmap.org/wiki/Zoom_levels
        minZoom: 0,
        maxZoom: 19,
        renderSubLayers: props => {
          const {
            x,
            y,
            z,
            bbox
          } = props.tile;
          const {
            west,
            south,
            east,
            north
          } = bbox;
          return new deck_gl__WEBPACK_IMPORTED_MODULE_3__["BitmapLayer"](props, {
            image: `${tileServer}/${z}/${x}/${y}.png`,
            bounds: [west, south, east, north]
          });
        }
      })];
    },
    controller: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, () => {
    const {
      x,
      y,
      hoveredObject
    } = this.state;
    const {
      sourceLayer,
      tile
    } = hoveredObject || {};
    return sourceLayer && tile && __jsx("div", {
      className: "tooltip",
      style: {
        left: x,
        top: y
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 41
      }
    }, "tile: x: ", tile.x, ", y: ", tile.y, ", z: ", tile.z);
  })))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return __jsx("div", {
      style: {
        height: 'calc(100vh - 41px)',
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        background: 'rgb(34,37,41)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 28
      }
    }, __jsx("h3", {
      style: {
        color: 'white',
        fontFamily: 'Poppins'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, "Cases Info"), __jsx("span", {
      style: {
        justifyContent: 'space-around',
        width: '100%',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }, __jsx("button", {
      onClick: () => setType("Infected"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 29
      }
    }, "Infected"), __jsx("button", {
      onClick: () => setType("Deaths"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, "Deaths"), __jsx("button", {
      onClick: () => setType("Recovered"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 29
      }
    }, "Recovered")), __jsx("ul", {
      style: {
        margin: 0,
        paddingLeft: 30,
        paddingRight: 30,
        height: '100%',
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        display: 'flex',
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    }, __jsx(List, {
      data: data,
      type: type,
      handleAnimate: (long, lat) => setViewport(_objectSpread({}, viewport, {
        latitude: lat,
        longitude: long,
        zoom: 4,
        transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_4__["FlyToInterpolator"]()
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    })));
  }, [data, type]));
}

function Map({
  data,
  viewport,
  setViewport
}) {
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    visible: false
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showPopup.visible === true && __jsx(LocationDetails, {
    showPopup: showPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 44
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, viewport, {
    width: "80vw",
    reuseMaps: false,
    height: "calc(100vh - 205px)",
    onViewportChange: setViewport,
    mapStyle: {
      "version": 8,
      "sources": {
        "raster-tiles": {
          "type": "raster",
          'tiles': [`https://c.tile.openstreetmap.org/${1}/${2}/${3}.png`],
          "tileSize": 256
        }
      },
      "layers": [{
        "id": "test",
        "type": "raster",
        "source": "raster-tiles",
        "minzoom": 0,
        "maxzoom": 22
      }]
    },
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
      lineNumber: 187,
      columnNumber: 13
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Source"], {
    id: "Countries",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
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
      lineNumber: 227,
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
      lineNumber: 252,
      columnNumber: 21
    }
  }))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Source"], {
    id: "Cities",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
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
      lineNumber: 283,
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
      lineNumber: 310,
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
      lineNumber: 333,
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
      lineNumber: 343,
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
      lineNumber: 344,
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
      lineNumber: 345,
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
      lineNumber: 346,
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
      lineNumber: 348,
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
      lineNumber: 350,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 29
    }
  }, showPopup.region.totalConfirmed.toLocaleString('en-US')), __jsx("h2", {
    style: {
      color: 'black',
      paddingLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, "INFECTED"))))));
}

function List({
  data,
  type,
  handleAnimate
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
  return sorted().map(area => {
    var _area$totalConfirmed, _area$totalRecovered, _area$totalDeaths;

    return __jsx("li", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 9
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
      onClick: () => handleAnimate(area.long, area.lat),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 13
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
        lineNumber: 381,
        columnNumber: 17
      }
    })), __jsx("h5", {
      style: {
        paddingLeft: 15,
        color: 'grey',
        margin: '0 auto 0 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 13
      }
    }, area.displayName), __jsx("h5", {
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 13
      }
    }, type === "Infected" ? (_area$totalConfirmed = area.totalConfirmed) === null || _area$totalConfirmed === void 0 ? void 0 : _area$totalConfirmed.toLocaleString('en-US') : type === "Recovered" ? (_area$totalRecovered = area.totalRecovered) === null || _area$totalRecovered === void 0 ? void 0 : _area$totalRecovered.toLocaleString('en-US') : type === "Deaths" && ((_area$totalDeaths = area.totalDeaths) === null || _area$totalDeaths === void 0 ? void 0 : _area$totalDeaths.toLocaleString('en-US'))));
  });
}

const LocationDetails = ({
  showPopup
}) => {
  var _showPopup$region$tot, _showPopup$region$tot2, _showPopup$region$tot3, _showPopup$region$tot4, _showPopup$region$tot5, _showPopup$region$tot6;

  return __jsx("div", {
    style: {
      width: 400,
      height: 200,
      position: 'absolute',
      top: 25,
      left: 25,
      backgroundColor: 'white',
      zIndex: 99999999,
      padding: 15,
      borderRadius: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
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
      lineNumber: 404,
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
      lineNumber: 405,
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
      lineNumber: 406,
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
      lineNumber: 408,
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
      lineNumber: 411,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 111
    }
  }, showPopup.region.displayName, " "), " ", __jsx("label", {
    style: {
      paddingLeft: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
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
      lineNumber: 412,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 76
    }
  }, "Confirmed:"), "  ", (_showPopup$region$tot = (_showPopup$region$tot2 = showPopup.region.totalConfirmed) === null || _showPopup$region$tot2 === void 0 ? void 0 : _showPopup$region$tot2.toLocaleString('en-US')) !== null && _showPopup$region$tot !== void 0 ? _showPopup$region$tot : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'rgb(50,203,111)',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 76
    }
  }, "Recovered:"), (_showPopup$region$tot3 = (_showPopup$region$tot4 = showPopup.region.totalRecovered) === null || _showPopup$region$tot4 === void 0 ? void 0 : _showPopup$region$tot4.toLocaleString('en-US')) !== null && _showPopup$region$tot3 !== void 0 ? _showPopup$region$tot3 : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'red',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 64
    }
  }, "Deaths:"), " ", (_showPopup$region$tot5 = (_showPopup$region$tot6 = showPopup.region.totalDeaths) === null || _showPopup$region$tot6 === void 0 ? void 0 : _showPopup$region$tot6.toLocaleString('en-US')) !== null && _showPopup$region$tot5 !== void 0 ? _showPopup$region$tot5 : 0), showPopup.country === true && __jsx("h3", {
    style: {
      flex: 1,
      color: 'black',
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 44
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
        lineNumber: 422,
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
          lineNumber: 429,
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
    lineNumber: 438,
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
    lineNumber: 439,
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
    lineNumber: 448,
    columnNumber: 13
  }
})));

async function getStaticProps() {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://bing.com/covid/data');
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HomePage));

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/DEV/Desktop/covidweb/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "deck.gl":
/*!**************************!*\
  !*** external "deck.gl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deck.gl");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

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