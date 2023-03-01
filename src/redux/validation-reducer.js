const SET_PASSWORD_DIRTY = 'SET_PASSWORD_DIRTY';
const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';
const SET_CHECK_PASSWORD_DIRTY = 'SET_CHECK_PASSWORD_DIRTY';
const SET_CHECK_PASSWORD_ERROR = 'SET_CHECK_PASSWORD_ERROR';
const SET_EMAIL_DIRTY = 'SET_EMAIL_DIRTY';
const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';



let initialState = {
    passwordDirty: false, 
    passwordError: 'Укажите пароль',
    checkPasswordDirty: false,
    checkPasswordError: 'Укажите пароль',
    emailDirty: false,
    emailError: 'Укажите E-mail',
}

const validationReducer = (state = initialState, action) => {

      switch(action.type) {
        case SET_PASSWORD_DIRTY: 
            return {...state, passwordDirty: action.passwordDirty}  
        case SET_PASSWORD_ERROR:
            return {...state, passwordError: action.passwordError}  
          case SET_CHECK_PASSWORD_DIRTY:
            return {...state, checkPasswordDirty: action.checkPasswordDirty}  
          case SET_CHECK_PASSWORD_ERROR:
            return {...state, checkPasswordError: action.checkPasswordError}  
          case SET_EMAIL_DIRTY:
            return {...state, emailDirty: action.emailDirty}  
          case SET_EMAIL_ERROR:
            return {...state, emailError: action.emailError}  
        default: 
            return state;   
    }
  };

export const setPasswordDirty = (passwordDirty) => ({type: SET_PASSWORD_DIRTY, passwordDirty});
export const setPasswordError = (passwordError) => ({type: SET_PASSWORD_ERROR, passwordError});
export const setCheckPasswordDirty = (checkPasswordDirty) => ({type: SET_CHECK_PASSWORD_DIRTY, checkPasswordDirty});
export const setCheckPasswordError = (checkPasswordError) => ({type: SET_CHECK_PASSWORD_ERROR, checkPasswordError});
export const setEmailDirty = (emailDirty) => ({type: SET_EMAIL_DIRTY, emailDirty});
export const setEmailError = (emailError) => ({type: SET_EMAIL_ERROR, emailError});

export default validationReducer;