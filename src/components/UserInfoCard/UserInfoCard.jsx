import { Card } from "./UserInfoCard.styled";
import goitLogo from "../../images/card/logo.svg";
import cardBackground from "../../images/card/background.png"


const UserInfoCard = ({ userName, tweetsCount, followersCount, avatar }) => {
    return (
        <Card>
            <div>
                <img src={goitLogo} alt="GOIT icon" />
                <img src={cardBackground} alt="backgroung" />
            </div>

            <img src="" alt="avatar" />

            <div>
                <p>{userName}</p>
                <p>
                    <span>{tweetsCount}</span>
                    tweets
                </p>
                <p>
                    <span>{followersCount}</span>
                    followers
                </p>
                <button>follow</button>
            </div>
            
        </Card>
    );
}

export default UserInfoCard;