import './Card.css'

const Card = ({ name, review, img }) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>{review}</p>
            <img style={{ height: '100px' }} src={img} alt={name} />
        </div>
    )
}

export default Card