import * as Yup from 'yup';

export const validationSchemaPersonalInfo = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'First name is too short!')
		.max(20, 'First name is too long!')
		.required('First name is required!'),
	lastName: Yup.string()
		.min(2, 'Last name is too short!')
		.max(20, 'Last name is too long!')
		.required('Last name is required!'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	gender: Yup.string()
		.required('Gender is required!'),
});

export const validationSchemaAddress = Yup.object().shape({
	city: Yup.string()
		.min(2, 'City is too short!')
		.max(20, 'City is too long!')
		.required('City is required!'),
	country: Yup.string()
		.required('Country is required!'),
	zipCode: Yup.number()
		.min(5, 'ZipCode must be at least 10 characters')
		.required('ZipCode is required')
});

export const validationSchemaPreferences = Yup.object().shape({
	interests: Yup.array()
		.of(Yup.string())
		.min(1, 'Select at least one interest')
		.required('Select at least one interest'),
	language: Yup.string()
		.required('Select preferred language'),
	notificationFrequency: Yup.number()
		.required('Select preferred notification range')
});

export const validationSchemaSubmit = Yup.object().shape({
	comment: Yup.string().notRequired(),
	profilePicture: Yup.mixed<File>()
		.test('fileType', 'Invalid file type', function (value) {
			if (value instanceof File) {
				return /^image\//.test(value.type);
			} else {
				return true;
			}
		})
		.test('fileSize', 'File size is too large', function (value) {
			if (value instanceof File) {
				return value.size <= 1024000;
			} else {
				return true;
			}
		})
		.required('Profile picture is required'),
	terms: Yup.boolean()
		.required('Terms and conditions is required')
})