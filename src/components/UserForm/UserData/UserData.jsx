import s from './UserData.module.scss';
import Label from '../../common/Label/Label';
import UserStatus from './UserStatus/UserStatus';

const UserData = ({isModalWindow, setIsModalWindow, userStatus, 
                  setUserStatus, globalUserStatus, setGlobalUserStatus, 
                  userCity, setUserCity, cities}) => {

    const toggleModalWindow = (event) => {
        setIsModalWindow(!isModalWindow)
        setGlobalUserStatus(userStatus)
        event.preventDefault()
    } 

    const onSetUserCity = (event) => {
        let userCity = event.currentTarget.value
        setUserCity(userCity)
    }

    const options = cities.map(obj => {
        return  <option>{obj.city}</option>
      })

    return (
    <>
        {isModalWindow
            ? <UserStatus 
            userStatus={userStatus} 
            setUserStatus={setUserStatus} 
            setGlobalUserStatus={setGlobalUserStatus} 
            setIsModalWindow={setIsModalWindow} />
            : null
        }
        <div className={s.UserData}>
            <div className={s.UserStatusBlock}>
                <div className={s.UserNumber}>
                    <p>Здравствуйте, <b>Человек №3596941</b></p>
                </div>
                <div className={s.StatusChange}>
                    <span onMouseDown={toggleModalWindow}>Сменить статус</span>
                </div>
            </div>    
            <div className={s.StatusFieldBlock}>    
                    <div className={s.StatusField}>
                       <p>{globalUserStatus}</p>
                    </div>
            </div>
            <div className={s.CityListBlock}>
                <Label for='select' text='Ваш город' />
                <div className={s.CityList}> 
                    <select id='select' form='Login' onChange={onSetUserCity} value={userCity}>
                        {options}
                    </select>
                </div>
            </div>
        </div>
    </>    
    )
}

export default UserData;


