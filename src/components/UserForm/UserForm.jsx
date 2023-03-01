import s from './UserForm.module.scss';
import UserDataContainer from './UserData/UserDataContainer';
import PasswordDataContainer from './PasswordData/PasswordDataContainer';
import EmailDataContainer from './EmailData/EmailDataContainer';
import { useState } from 'react';
import { connect } from 'react-redux';

const UserForm = ({...formData}) => {

    const [date, setDate] = useState(new Date())

    const onSubmit = (event) => {
        event.preventDefault()
        let formDataJson = JSON.stringify(formData)
        console.log(formDataJson)
        setDate(new Date())
    }

    return (
        <form className={s.UserForm} onSubmit={onSubmit} name='UserForm' id='UserForm'>
                <UserDataContainer />    
                <PasswordDataContainer />
                <EmailDataContainer date={date}/>
        </form>
    )
}

const mapStateToFormData = (state) => ({
    userCity: state.userform.userCity,
    globalUserStatus: state.userform.globalUserStatus,
    password: state.userform.password,
    email: state.userform.email,
    isEmail: state.userform.isEmail
})

export default connect (mapStateToFormData, {}) (UserForm);


