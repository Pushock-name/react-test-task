import Data from '../../common/Data/Data';
import Description from '../../common/Description/Description';
import Divider from '../../common/Divider/Divider';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import s from './EmailData.module.scss'

const EmailData = ({email, setEmail, isEmail, setIsEmail, date, emailDirty, emailError, setEmailDirty, setEmailError, formValid}) => {

    let onEmailChange = (event) => {
        let email = event.currentTarget.value
        setEmail(email)
        const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Неверный E-mail')
            if(!email) {
                setEmailError('Укажите E-Mail')
            }
        } else {
            setEmailError('')
        }
    }

    let onEmailBlur = (event) => {
        setEmailDirty(true)
    }

    let toggleisEmail = (event) => {
        let isEmail = event.currentTarget.checked
        setIsEmail(isEmail)
    }

    return (
    <>
        <div className={s.EmailData}>
        <Divider />
            <div className={s.EmailBlock}>
                <Label for='email' text='Электронная почта'/>
                <div className={s.EmailErrorBlock + ' ' + ((emailDirty && emailError) ? s.ErrorInput : '')} >
                    <Input onBlur={onEmailBlur} type='text' id='email' value={email} onChange={onEmailChange}/>
                    {
                    (emailDirty && emailError) 
                    ? 
                    <div className={s.ErrorMessage}>{emailError}</div>
                    :
                    null
                    }
                </div>
                <Description text='Можно изменить адрес, указанный при регистрации.' />
            </div>
            
            <div className={s.CheckEmailBlock}>
                <Label for='checkemail' text='Я согласен'/>
                <Input type='checkbox' id='checkemail' checked={isEmail} onChange={toggleisEmail} />
                <span>принимать актуальную информацию на емейл</span>  
            </div>
            <div className={s.DataSaveBtnBlock}>
                <div className={s.DataSaveBtn}>
                    <button disabled={!formValid} type='submit' value='Изменить'>Изменить</button>
                </div>
                <Data date={date}/>
            </div>
        </div>
    </>    
    )
}

export default EmailData;