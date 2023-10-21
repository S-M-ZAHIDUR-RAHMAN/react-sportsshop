
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';

const Root = () => {
    const locationPage = useLocation()

    useEffect(()=> {
        if(locationPage.pathname==="/"){
            document.title = `Sportsshop - Home`
        }
        else{
            document.title = `Sportsshop ${locationPage.pathname.replace("/",'- ')}`
        }
        
    },[locationPage.pathname])

    return (
        <div className='bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/vJXJZLP/annie-spratt-0-ZPSX-m-Q3x-I-unsplash.jpg)' }}>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;