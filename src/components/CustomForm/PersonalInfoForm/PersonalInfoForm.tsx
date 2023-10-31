import { FormikProps } from 'formik';
import { IDataForPersonalnfoForm } from '@/interfaces/IDataForForms';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomInput from '@/components/CustomInput/CustomInput';

import style from '../customForm.module.scss';
import CustomRadioInput from '@/components/CustomRadioInput/CustomRadioInput';

function PersonalInfoForm ({formik}: {formik: FormikProps<IDataForPersonalnfoForm>}) {

	return (
		<>
			<h2>Personal Information</h2>
			<form className={style.form} onSubmit={formik.handleSubmit}>
				<div className={style['form-item']}>
					<CustomLabel label="firstName">First name</CustomLabel>
					<CustomInput formik={formik} label="firstName" type="text" />
					{formik.touched.firstName && formik.errors.firstName && (
						<div className={style[`form-item__error`]}>{formik.errors.firstName}</div>
					)}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label="lastName">Last name</CustomLabel>
					<CustomInput formik={formik} label="lastName" type="text" />
					{formik.touched.lastName && formik.errors.lastName && (
						<div className={style[`form-item__error`]}>{formik.errors.lastName}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label="email">Email</CustomLabel>
					<CustomInput formik={formik} label="email" type="email" />
					{formik.touched.email && formik.errors.email && (
							<div className={style[`form-item__error`]}>{formik.errors.email}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label='gender'>Gender</CustomLabel>
					<CustomLabel>
						<CustomRadioInput
							name="gender"
							value="male"
							formik={formik}
						/>
						Male
					</CustomLabel>
					<CustomLabel>
						<CustomRadioInput
							name="gender"
							value="female"
							formik={formik}
						/>
						Female
					</CustomLabel>
					{formik.touched.gender && formik.errors.gender && (
						<div className={style[`form-item__error`]}>{formik.errors.gender}</div>
					)}
				</div>
			</form>
		</>
	)
}

export default PersonalInfoForm;