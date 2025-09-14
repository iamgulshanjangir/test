import "./Nav.css"

const Nav = () => {
    return (
        <div className='nav'>
            <img style={{ height: '40px' }} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" />

            <div style={{ marginLeft: '10px' }}>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                    <li style={{ display: 'inline', margin: '0 10px', cursor: 'pointer' }}>Homey</li>
                    <li style={{ display: 'inline', margin: '0 10px', cursor: 'pointer' }}>About</li>
                    <li style={{ display: 'inline', margin: '0 10px', cursor: 'pointer' }}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav