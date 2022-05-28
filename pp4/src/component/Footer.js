import React from "react";

const Footer = () => {

    return (
        <footer style={styles.footer}>
            <p style={styles.p}>© Christopher Hile 2022</p>
        </footer>
    )
} 

export default Footer;

const styles = {
    footer: {
        backgroundColor: '#0B2027',
        marginTop: '30px',
        padding: '50px'
    },
    p: {
        fontSize: '16px',
        marginLeft: '5%',
        color: '#DFF0F6'
    }
}