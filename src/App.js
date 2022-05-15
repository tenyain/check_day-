import React from 'react';
import { NavBar } from './components';
import Router from './Router';

const App = () => {
    return (
        <main className='font-body max-w-full'>
            <NavBar/>
            <section className='relative'>
                <Router/>
            </section>
        </main>
    );
}

export default App;
