import { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { setEmail, setIsEmail } from '../../../redux/userform-reducer';
import { setEmailDirty, setEmailError} from '../../../redux/validation-reducer';
import EmailData from './EmailData';

const EmailDataContainer = ({...props}) => {

const [formValid, setFormValid] = useState(false)

useEffect(() => {
    if (props.passwordError || props.emailError || props.checkPasswordError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }  
}, [props.passwordError, props.emailError, props.checkPasswordError])

    return (
        <EmailData 
            {...props}
            formValid={formValid}
        />
    )
}

const mapStateToProps = (state) => ({
    email: state.userform.email,
    isEmail: state.userform.isEmail,
    emailDirty: state.validation.emailDirty,
    emailError: state.validation.emailError,
    passwordError: state.validation.passwordError,
    checkPasswordError: state.validation.checkPasswordError,
})

export default connect (mapStateToProps, {setEmail, setIsEmail, setEmailDirty, setEmailError}) (EmailDataContainer);