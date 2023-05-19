import { Card, Wrapper, CardLogo, CardImg, StyledLine, Avatar, AvatarBorder, InfoBlock } from "./UserInfoCard.styled";
import goitLogo from "../../images/card/logo.svg";
import cardBackground from "../../images/card/background.png"


const ellipsePath = new URL('../../images/card/ellipse.svg', import.meta.url);

const UserInfoCard = ({ userName, tweetsCount, followersCount, avatar }) => {
    return (
        <Card>
            <Wrapper>
                <CardLogo src={goitLogo} alt="logo"/>
                <CardImg src={cardBackground} alt="backgroung" />
                <StyledLine />
                <Avatar src={avatar} alt="avatar" />
                <AvatarBorder src={ellipsePath} alt="ellipse" />


                <InfoBlock>
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
                </InfoBlock>
            </Wrapper>
        </Card>
    );
}

export default UserInfoCard;