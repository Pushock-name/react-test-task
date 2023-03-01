import { connect } from 'react-redux';
import { setCheckPassword, setPassword } from '../../../redux/userform-reducer';
import { setCheckPasswordDirty, setCheckPasswordError, setPasswordDirty, setPasswordError } from '../../../redux/validation-reducer';
import PasswordData from './PasswordData';


const PasswordDataContainer = (props) => {

    return (
        <PasswordData 
            {...props}
        />
    )
}

const mapStateToProps = (state) => ({
    password: state.userform.password,
    checkPassword: state.userform.checkPassword,
    passwordDirty: state.validation.passwordDirty,
    passwordError: state.validation.passwordError,
    checkPasswordDirty: state.validation.checkPasswordDirty,
    checkPasswordError: state.validation.checkPasswordError
})

export default connect (mapStateToProps, {setPassword, setCheckPassword, setPasswordDirty, 
    setPasswordError, setCheckPasswordDirty, setCheckPasswordError}) (PasswordDataContainer);