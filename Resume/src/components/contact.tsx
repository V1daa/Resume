import subtract from '../images/Send_fill.svg'

const Contact = () => {
    return(
        <>
        <div className="contact-strip-container">
            <h1 className="contact-paragraph">Contact</h1>
        </div>
        <div className="contact-main-container">
            <div className="contact-main-rectangle">
                <div className="contact-image-container">
                <img className="contact-image" alt="#" src={subtract}></img>
                </div>
                <div className='contact-info-container'>
                    <h1 className='contact-name-h1'>User name</h1>
                    <input type='text' placeholder='Enter your Name'></input>
                    <h1 className='contact-email-h1'>Email</h1>
                    <input type='text' placeholder='Enter your email'></input>
                    <h1 className='contact-message-h1'>Message</h1>
                    <input type='text' placeholder='Enter your message'></input>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact