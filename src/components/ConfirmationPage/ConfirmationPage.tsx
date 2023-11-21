import { removeItemFromForm } from '@/store/actions/actions';
import ConfirmIcon from '@assets/icons/confirm-icon.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { allValues } from '../CustomForm/initialValues';
import ConfirmationPageProps from './ConfirmationPage.props';

import style from './confirmationPage.module.scss';


function ConfirmationPage({ formik, setData }: ConfirmationPageProps) {
	const navigator = useNavigate();
	const formDisatcher = useDispatch();


	function handleGoToHomePage() {
		navigator('/');
		localStorage.setItem('step', '1');
		formik.values = allValues;
		setData(formik.values)
		formDisatcher(removeItemFromForm());
	}
	return (
		<div className={style.confirmation}>
			<div className={style.confirmation__img}>
				<img src={ConfirmIcon} alt="tick" />
			</div>
			<h3 className={style.confirmation__text}>All forms completed successfuly!</h3>
			<Button appearance='filled' className={style.confirmation__button} onClick={handleGoToHomePage}>Go to home page</Button>
		</div>
	)
}

export default ConfirmationPage;