import React from 'react';

const Menu = () => {
    const styles = {
        menu: {
            position: 'fixed',
            left: '0',
            top: '42px',
            bottom: '42px',
            width: '20%',
            padding: '10px',
            border: '2px black solid'
        }
    }
    return (
        <div style={styles.menu}>
            Menu Filler
        </div>
    )
}

export default Menu