import s from './UserStatus.module.scss';


const UserStatus = ({userStatus, setUserStatus, setGlobalUserStatus, setIsModalWindow}) => {


    const onSetUserStatus = (event) => {
        let userStatus = event.currentTarget.value
        setUserStatus(userStatus)
    }

    const onSetGlobalUserStatus = (event) => {
        setGlobalUserStatus(userStatus)
        setIsModalWindow(false)
    }

    return (
        <div className={s.UserStatus}>
            <textarea form='Login' maxLength='110' autoFocus value={userStatus} onChange={onSetUserStatus} onBlur={onSetGlobalUserStatus}></textarea>
        </div>
    )
}

export default UserStatus;