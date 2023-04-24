import React from 'react'

const Header = () => {
    const handleClickScroll = (id) => {
        let element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <h1 className='logo'>space <b>ray</b> 🌎</h1>
            <nav>
                <button onClick={() => handleClickScroll('hero')}>Sobre o projeto</button>
                <button onClick={() => handleClickScroll('section-1')}>Como funciona</button>
                <button onClick={() => handleClickScroll('contato')}>Contato</button>
            </nav>
        </header>
    )
}

export default Header