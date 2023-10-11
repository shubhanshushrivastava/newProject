import React, { useState, useEffect } from 'react';
// import './styles.css'; // Add your custom styles in this file

const TypingEffect = () => {
    const [text, setText] = useState("");
    const textToType = "Coonnecting Emotions,Healing Mind .";
    let index = 0;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < textToType.length) {
                setText(prevText => prevText + textToType.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Adjust the typing speed by changing the interval duration

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <h2>{text}</h2>
    );
}

export default TypingEffect;
