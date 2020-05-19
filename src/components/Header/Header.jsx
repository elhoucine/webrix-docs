import React from 'react';
import {Link} from 'react-router-dom';
import {HOME, DOCS, TUTORIAL} from '../../routes/Router.routes';
import logo from '../../resources/images/webrix-logo-text-light.png';
import './Header.scss';

const Header = () => (
    <header id='header'>
        <Link to={HOME.path} className='logo'>
            <img src={logo} alt='Webrix logo'/>
        </Link>
        <div className='routes'>
            <Link to={DOCS.path}>{DOCS.name}</Link>
            <Link to={TUTORIAL.path}>{TUTORIAL.name}</Link>
            <Link to={TUTORIAL.path}>Playground</Link>
            <Link to={TUTORIAL.path}>Examples</Link>
        </div>
        <div className='version'>v1.0.0</div>
    </header>
);

export default Header;