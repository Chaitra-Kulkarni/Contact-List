const ContactCard = (props) => {
    return (
        <div className="contact-card">
            <img src="./logo192.png" width="120px" />
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>email: {props.email}</p>
                <p>location: {props.location}</p>
                <p>Age: {props.age}</p>
            </div>
        </div>
    )
}

export default ContactCard;