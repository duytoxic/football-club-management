import React from 'react';
import './Button.scss';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--small',
    'btn--medium',
    'btn-large'
]

export const Button = ({
    children,
    type,
    onhandleClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

    return (
        <button className={ `btn ${checkButtonStyle} ${checkButtonSize}` } onClick = { onhandleClick }>
            { children }
        </button>
    )
}