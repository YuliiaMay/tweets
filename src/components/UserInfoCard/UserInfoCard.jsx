import { Card, Wrapper, CardLogo, CardImg, StyledLine, Avatar, AvatarBorder, InfoBlock, Text, User, FollowBtn, BtnText } from "./UserInfoCard.styled";
import goitLogo from "../../images/card/logo.svg";
import cardBackground from "../../images/card/background.png"
import { useState } from "react";

const ellipsePath = new URL('../../images/card/ellipse.svg', import.meta.url);

const UserInfoCard = ({ userName, tweetsCount, followersCount, avatar }) => {
    const [user, setUser] = useState();

    const hendleFollowBtnClick = () => {

    }
    
    return (
        <Card>
            <Wrapper>
                <CardLogo src={goitLogo} alt="logo"/>
                <CardImg src={cardBackground} alt="backgroung" />
                <StyledLine />
                <Avatar src={avatar} alt="avatar" />
                <AvatarBorder src={ellipsePath} alt="ellipse" />


                <InfoBlock>
                    <User>{userName}</User>
                    <Text>
                        <span>{tweetsCount}</span> tweets
                    </Text>
                    <Text>
                        <span>{followersCount}</span> followers
                    </Text>
                    <FollowBtn>
                        <BtnText>follow</BtnText>
                    </FollowBtn>
                </InfoBlock>
            </Wrapper>
        </Card>
    );
}

export default UserInfoCard;