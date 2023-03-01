import { connect } from 'react-redux';
import { getCities, setGlobalUserStatus, setUserCity } from '../../../redux/userform-reducer';
import UserData from './UserData';
import { useEffect, useState } from 'react';

const UserDataContainer = (props) => {

    const [isModalWindow, setIsModalWindow] = useState(false);
    const [userStatus, setUserStatus] = useState('');

    useEffect(() => {
        props.getCities()
    }, [])

    return (
        <UserData 
            isModalWindow={isModalWindow} 
            setIsModalWindow={setIsModalWindow}
            userStatus={userStatus}
            setUserStatus={setUserStatus}
            {...props}
        />
    )
}

    const mapStateToProps = (state) => ({
        globalUserStatus: state.userform.globalUserStatus,
        cities: state.userform.cities,
        userCity: state.userform.userCity
    })

export default connect (mapStateToProps, {setGlobalUserStatus, getCities, setUserCity}) (UserDataContainer);