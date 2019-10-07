export const mustBePositiveCurrency = value => {
	if (!mustBeCurrency(value)) {
		return false;
	}
	if (!value || value === '$') {
		return true;
	}
	let v = value;
	if (v.slice(0, 1) === '$') {
		v = v.slice(1);
	}
	v = parseFloat(v);
	return v > 0;
};
export const mustBeCurrency = value => {
	if (!value || value === '$') {
		return true;
	}
	let v = value;
	if (v.slice(0, 1) === '$') {
		v = v.slice(1);
	}
	return parseFloat(v).toString() === v.toString();
};
export const mustBeRangeOfCurrencyNumbers = value => {
	if (!value) {
		return true;
	}
	const parts = value.split('-');
	if (parts.length !== 2) {
		return false;
	}
	const first = parts[0].trim();
	const second = parts[1].trim();
	return mustBeCurrency(first) && mustBeCurrency(second);
};
export const secondAmountMustBeLargerThanFirst = value => {
	if (!value) {
		return true;
	}
	if (!mustBeRangeOfCurrencyNumbers(value)) {
		// in this case we don't want this validator to fire
		return true;
	}
	const parts = value.split('-');
	let first = parts[0].trim();
	let second = parts[1].trim();
	if (first.slice(0, 1) === '$') {
		first = first.slice(1);
	}
	if (second.slice(0, 1) === '$') {
		second = second.slice(1);
	}
	return second > first;
};
