import s from './App.module.scss';
import UserForm from './components/UserForm/UserForm';



function App() {
  return (
    <div className={s.AppWrapper}>
          <UserForm />        
    </div>
  )
}

export default App;
