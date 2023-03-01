import s from './PasswordData.module.scss';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import Description from '../../common/Description/Description';
import Divider from '../../common/Divider/Divider';


const PasswordData = ({password, setPassword, checkPassword, setCheckPassword, passwordDirty, passwordError,
    checkPasswordDirty, checkPasswordError, setPasswordDirty, setPasswordError, setCheckPasswordDirty, setCheckPasswordError}) => {
    
        let onPasswordChange = (event) => {
            let password = event.currentTarget.value
            setPassword(password)    
            if(password.length < 5) {
                setPasswordError('Используйте не менее 5 символов')
                if(!password) {
                    setPasswordError('Укажите пароль')
                }
            } else {
                setPasswordError('')
            }           
        }
        
        const onPasswordBlur = (event) => {
            if (password !== checkPassword) {
                setCheckPasswordError('Пароли не совпадают')
            } else {
                setPasswordDirty(true)
                setCheckPasswordError('')
            }

        }

        let onCheckPasswordChange = (event) => {
            let checkPassword = event.currentTarget.value
            setCheckPassword(checkPassword)
            if(password !== checkPassword) {
                setCheckPasswordError('Пароли не совпадают')
                if(!checkPassword) {
                    setCheckPasswordError('Укажите пароль')
                }
            } else {
                setCheckPasswordError('')
            }  
        }

        const onCheckPasswordBlur = (event) => {
            if (password !== checkPassword) {
                setCheckPasswordError('Пароли не совпадают')
            } else {
            setCheckPasswordDirty(true)
            setCheckPasswordError('')
            }
        }

    return (
    <>
        <div className={s.PasswordData}>
            <Divider />
            <div className={s.PasswordBlock}>
                <Label for='pass' text='Пароль'/>
                <div className={s.PasswordErrorBlock + ' ' + ((passwordDirty && passwordError) ? s.ErrorInput : '')}>
                    <Input type='password' id='pass' value={password} onChange={onPasswordChange} onBlur={onPasswordBlur}/>
                    {
                    (passwordDirty && passwordError) 
                    ? 
                    <div className={s.ErrorMessage}>{passwordError}</div>
                    :
                    null
                    }
                </div>
                <Description text='Ваш новый пароль должен содержать не менее 5 символов.' />
            </div>
            <div className={s.CheckPasswordBlock}>
                <Label for='checkpass' text='Пароль еще раз'/>
                <div className={s.CheckPasswordErrorBlock + ' ' + ((checkPasswordDirty && checkPasswordError) ? s.ErrorInput : '')}>
                    <Input type='password' id='checkpass'value={checkPassword} onChange={onCheckPasswordChange} onBlur={onCheckPasswordBlur}/>
                    {
                    (checkPasswordDirty && checkPasswordError) 
                    ? 
                    <div className={s.ErrorMessage}>{checkPasswordError}</div>
                    :
                    null
                    }
                </div>
                <Description text='Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.' />
            </div>
        </div>
    </>
    )
}

export default PasswordData;