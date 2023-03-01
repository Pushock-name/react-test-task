import s from './Input.module.scss';


const Input = ({type, id, value, onChange, checked, onBlur}) => {

    return (
        <div className={s.Input }>
            <input onBlur={onBlur} type={type} id={id} value={value} checked={checked} onChange={onChange} form='UserForm' />
        </div> 
    )
}

export default Input;