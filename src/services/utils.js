/* eslint-disable no-useless-escape */

import { toast } from "react-toastify";
import moment from "moment";
import {
	ALERT_POSITIONS,
	ALERT_THEMES,
	ALERT_TIMEOUT,
	ALERT_TYPES,
} from "../constants";
import ApiHandler from "./ApiHandler";
import { BASE_URL } from "../config/webservice";
import {
	cloneDeep,
	filter,
	find,
	includes,
	isEmpty,
	isEqual,
	has,
	findIndex,
	every,
} from "lodash";

// GET CURRENT ACCESS TOKEN FROM USER REDUCER

// GET CURRENT REFRESH TOKEN FROM USER REDUCER

export const getUserRoles = (role) => {
	if (role === 1) {
		return COMPANY_USER;
	} else if (role == 2) {
		return TEMPLATE_USER;
	} else {
		return INVENTORY_USER;
	}
};

// CHECK IF URL IS VALID
export const isValidURL = (url) => {
	const re =
		/^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
	return re.test(url);
};

// CHECK IF URL IS VALID AND WITH HTTPS SCHEME
export const isValidHttpsURL = (url) => {
	const re =
		/^(https|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
	return re.test(url);
};

export const isValidZipCode = (value) => {
	return /^(?=.*\d.*)[A-Za-z0-9]{5,5}$/.test(value);
};

// CHECK IF PROVIDED TIME FORMAT IS CORRECT
export const isTimeFormat = (time) => {
	const re =
		/^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/[0-9]{4} [012]{0,1}[0-9]:[0-6][0-9]$/;
	let bol = re.test(time);
	return bol;
};

// CHECK IF EMAIL IS VALID
export const isEmailValid = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.trim());
};

// CHECK IF PASSWORD LENGTH IS VALID
export const isPasswordValid = (password) => {
	let length = 5; // u can change pass length according to your requirement
	return password.length > length;
};

// CHECK IF NAME IS VALID
export const isValidName = (name) => {
	return /^[a-zA-Z ]*$/.test(name);
};

// CAPITALIZE FIRST LETTER OF STRING
export const capitalizeFirstLetter = (string) => {
	if (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	return "";
};

// FORMAT DATE ACCORDING TO PROVIDED FORMAT
export const getFormattedDateTime = (date, format) => {
	if (date) return moment(date).format(format);
	return "";
};

// FORMAT DATE ACCORDING TO PROVIDED FORMAT AND RETURN TO DATE OBJECT
export const getDateObjectFromString = (date, format) => {
	if (date) return moment(date, format).toDate();
	return "";
};

// CHECK IF MOBILE NUMBER IS VALID
export const isValidMobileNumber = (str) => {
	if (!str) return false;
	const isnum = /^\d+$/.test(str);

	if (str.length < 15 && str.length > 9 && isnum) {
		return true;
	}
	return false;
};

// CHECK IF MOBILE NUMBER IS OF UK NUMBER FORMAT
export const isValidUKMobileNumber = (str) => {
	if (!str) return false;
	str = str.replace(/ /g, "");
	let mobileNumber = str.replace("+", "");
	if (mobileNumber.charAt(0) == "4" && mobileNumber.charAt(1) == "4") {
		mobileNumber = "0" + mobileNumber.slice(2);
	}
	return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
		mobileNumber
	);
};

// CLONE ARRAY
export const cloneDeepItem = (array) => cloneDeep(array);

// FIND OBJECT FROM ARRAY
export const findDataFromArray = (array, mObj) => find(array, mObj);

// CHECK IF ARRAY HAS VALUE
export const isArrayIncludesValue = (array, value) => includes(array, value);

// CHECK IF VALUES ARE EQUAL
export const areValuesEqual = (objA, objB) => isEqual?.(objA, objB);

// CHECK IF VALUE IS EMPTY
export const isEmptyValue = (value) => isEmpty(value);

// EXCLUDE OBJECT FROM ARRAY BY ID
export const excludeIdFromArray = (mArr, id) =>
	filter(mArr, (item) => item.id != id);

// EXCLUDE VALUE FROM ARRAY
export const excludeValueFromArray = (mArr, value) =>
	filter(mArr, (item) => item != value);

// FILTER ARRAY BY FUNCTION
export const filterArray = (array, func) => filter(array, func);

// CHECK IF ARRAY DATA CONTACT ID
export const doesArrayContainsParticularId = (array, mId) => {
	if (find(array, { id: mId })) return true;
	else return false;
};

// CHECK IF STRING HAS ONLY WHITE SPACE
export const isOnlyWhiteSpace = (str) => {
	return !str.trim();
};

// CHECK IF OBJECT HAS PROVIDED KEY
export const hasObjectWithKey = (mObj, key) => has(mObj, key);

// CHECK IF VALUES IS ACCORDING TO FUNCTION CONDITION
export const hasEvery = (mArr, _func) => every(mArr, _func);

// GET OBJECT INDEX IN ARRAY BY ID
export const getIndexOfObjFromArrayByID = (mArr, id) =>
	findIndex(mArr, (item) => item.id == id);

// DELETE OBJECT FROM ARRAY BY ID
export const deleteObjectFromArray = (arr, id) => {
	let arrToReturn = arr.filter((a) => a.id !== id);
	return arrToReturn;
};

// GENERATE RANDOM STRING
export const generateGuid = () => {
	const S4 = () =>
		(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	return (
		S4() +
		S4() +
		"-" +
		S4() +
		"-" +
		S4() +
		"-" +
		S4() +
		"-" +
		S4() +
		S4() +
		S4()
	);
};

export const checkPasswordValidation = (pass) => {
	const regex =
		/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/;

	return pass.match(regex);
};

// CUSTOM ALERT
// https://fkhadra.github.io/react-toastify/introduction/
export const toastAlert = (
	message,
	type = ALERT_TYPES.success,
	position = ALERT_POSITIONS.topRight,
	duration = ALERT_TIMEOUT,
	closeOnClick = true,
	pauseOnHover = false,
	theme = ALERT_THEMES.light,
	draggable = false,
	isProgressBar = false
) => {
	toast[type](message, {
		position: position,
		autoClose: duration,
		hideProgressBar: isProgressBar,
		closeOnClick: closeOnClick,
		pauseOnHover: pauseOnHover,
		draggable: draggable,
		theme: theme,
	});
};

// GENERATE REFRESH TOKEN
export const refreshAccessToken = async () => {
	console.log("here in refreshAccessToken");
	let data = {};
	data.token = getCurrentRefreshToken();
	const method = "POST";
	const _url = "auth/refreshToken";
	try {
		const response = await ApiHandler(method, _url, data, {}, BASE_URL);
		console.log({ newAccessToken: response });
		const responseJson = await response.json();
		console.log({ newAccessToken: responseJson.data });
		return responseJson.data.access_token;
	} catch (error) {
		toastAlert(error.response);
		console.log({ refreshTokenError: error.response });
		handleUserSignout();
		return false;
	}
};

export const blobToBase64 = (blob, responseCallback) => {
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	reader.onloadend = function () {
		let base64data = reader.result;

		responseCallback && responseCallback(base64data);
	};
};

export function uuid() {
	var S4 = function () {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return (
		S4() +
		S4() +
		"-" +
		S4() +
		"-" +
		S4() +
		"-" +
		S4() +
		"-" +
		S4() +
		S4() +
		S4()
	);
}

export const isMobile = () => {
	if (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		return true;
	} else {
		return false;
	}
};

export const handleUserSignout = () => {};

export const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
