import './App.css';
import Header from './components/AdminHeader/Header';
import SignInput from './components/SignInput/SignInput';




function Admin(){
    console.log("hello");
    return(
        <>
            <section>
                <Header />
                <SignInput />
            </section>
        </>
    )
}

export default Admin;