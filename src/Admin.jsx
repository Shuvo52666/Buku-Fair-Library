import './App.css';
import Header from './components/AdminHeader/Header';
import SignIn from './components/SignIn/SignIn';
import InputBox from './components/InputBox/InputBox';



function Admin(){
    return(
        <>
            <section>
                <Header />
                <SignIn />
                <InputBox />
            </section>
        </>
    )
}

export default Admin;