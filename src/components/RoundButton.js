import React from 'react'

const RoundButton = ({ label, color }) => {
    return (
        <button style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: color,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
        }}>
            {label}
        </button>
    )
}

export default RoundButton