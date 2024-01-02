import line from '../images/Line 2.svg'

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-main-info">
          <h1>Dmytro Volia</h1>
          <p>
             Languages: English, Polish, Ukrainian, Russian.
          </p>
          <p>
             Location: Poznan, Poland
          </p>
        </div>
        <div className='footer-line-container'>
            <img src={line} alt='#' ></img>
            <h1>2023 All rights reserved.</h1>
            <img src={line} alt='#'></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
