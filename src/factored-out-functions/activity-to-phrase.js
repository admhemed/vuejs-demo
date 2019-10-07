export const activityToHTML = activity => {
	let subjectCompany;
	if (activity.subjectCompanyUrl) {
		subjectCompany = `<a class="subject-company" href="${activity.subjectCompanyUrl}">${activity.subjectCompany}</a>`;
	} else {
		subjectCompany = activity.subjectCompany
	}
	let objectCompany;
	if (activity.objectCompanyStyle) {
		objectCompany = `<span class="${activity.objectCompanyStyle}">${activity.objectCompany}</span>`;
	} else {
		objectCompany = activity.objectCompany
	}
	let numberOfPropertyStatements = '';
	if (activity.numberOfProperties) {
		numberOfPropertyStatements = `on <a class="number-of-properties" href='#'>${activity.numberOfProperties} ${activity.numberOfProperties > 1 ? 'properties' : 'property'}</a>`;
	}
	return `${subjectCompany} ${activity.verb} ${objectCompany} ${numberOfPropertyStatements}`;
};

export const activityToNumberOfDaysPhrase = activity => {
	return `${activity.numberOfDays} days ago`;
};
