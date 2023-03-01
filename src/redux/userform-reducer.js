import { API } from "../api/api";

const SET_PASSWORD = 'SET_PASSWORD';
const SET_CHECK_PASSWORD = 'SET_CHECK_PASSWORD';
const SET_EMAIL = 'SET_EMAIL';
const SET_IS_EMAIL = 'SET_IS_EMAIL';
const SET_GLOBAL_USER_STATUS = 'SET_GLOBAL_USER_STATUS';
const SET_CITIES = 'SET_CITIES';
const SET_USER_CITY = 'SET_USER_CITY';


let initialState = {
    password: '', 
    checkPassword: '',
    email: '',
    isEmail: false,
    globalUserStatus: '',
    cities: [],
    userCity: ''
}

const userFormReducer = (state = initialState, action) => {

      switch(action.type) {
        case SET_PASSWORD: 
            return {...state, password: action.password}  
        case SET_CHECK_PASSWORD:
            return {...state, checkPassword: action.checkPassword
            }  
          case SET_EMAIL:
            return {...state, email: action.email}  
          case SET_IS_EMAIL:
            return {...state, isEmail: action.isEmail}  
          case SET_GLOBAL_USER_STATUS:
            return {...state, globalUserStatus: action.globalUserStatus}  
          case SET_CITIES:
            return {...state, cities: action.cities}  
          case SET_USER_CITY:
            return {...state, userCity: action.userCity}  
        default: 
            return state;   
    }
  };

export const setPassword = (password) => ({type: SET_PASSWORD, password});
export const setCheckPassword = (checkPassword) => ({type: SET_CHECK_PASSWORD, checkPassword});
export const setEmail = (email) => ({type: SET_EMAIL, email});
export const setIsEmail = (isEmail) => ({type: SET_IS_EMAIL, isEmail});
export const setGlobalUserStatus = (globalUserStatus) => ({type: SET_GLOBAL_USER_STATUS, globalUserStatus});
export const setCities = (cities) => ({type: SET_CITIES, cities});
export const setUserCity = (userCity) => ({type:SET_USER_CITY, userCity});

export const getCities = () => {
  return async (dispatch) => {

    const cities = await API.getCities()

    const citiesFilterByPopulation = cities.filter(({population}) => population > 50000)
    const cityPopulations = citiesFilterByPopulation.map(({ population }) => population).map(Number)
    const mostPopulationCityIdx = cityPopulations.findIndex((population) => population === Math.max(...cityPopulations))
    const citiesByNameComparer = ({city: cityA}, {city: cityB}) => cityA.localeCompare(cityB)
    const sortedCities = [citiesFilterByPopulation[mostPopulationCityIdx], ...citiesFilterByPopulation.filter((_, idx) => idx !== mostPopulationCityIdx).sort(citiesByNameComparer)]

    dispatch(setCities(sortedCities))
  }
}

export default userFormReducer;