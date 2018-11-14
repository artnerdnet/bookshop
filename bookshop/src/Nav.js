import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Nav extends React.component {
    render() {
        return (
            <header className='nav'>
                <nav className='nav_bar'>
                    
                    <div className='nav_logo'>The Logo</div>
                   <div className='nav_items'>
                   
                       <Link to={{pathname: `book/${book.title}`, query: { id: book.id }}}/>
                    
                </div>
                </nav>
            </header>

        )
    }
};

export default Nav;