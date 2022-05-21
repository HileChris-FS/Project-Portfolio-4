import React from "react";

const Header = () => {
    const newDate = new Date();

    return (
        <header>
            <div style={styles.headerStyle}>
                <h1 style={styles.h1}>Current US Weather</h1>
                <h2 style={styles.h2}>{newDate.toDateString()}</h2>
            </div>
        </header>
    )
}
export default Header;

const styles = {
    headerStyle: {
        backgroundColor: '#0B2027',
        marginBottom: '20px'
    },
    h1: {
        padding: '1rem 0',
        textAlign: 'center'
    },
    h2: {
        padding: '1rem 0',
        textAlign: 'center'
    }
}