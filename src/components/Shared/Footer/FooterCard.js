import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterCard = () => {
    return (
        <div className='' style={{
            backgroundColor:'white',
            position: 'fixed',
            bottom: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            left: '50%',
            width: '100%',
            transform: 'translateX(-50%)',
        }}>
            <p style={{ color: "#424242", margin: '0px'}}>Made With <span style={{color:'#f44336'}}> <FontAwesomeIcon icon={faHeart} style={{height: "18px", width: "15px"}}/> </span> By Zafor Khalid</p>
        </div>
    );
};

export default FooterCard;