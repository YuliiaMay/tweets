import { Card, Wrapper, CardLogo, CardImg, StyledLine, Avatar, AvatarBorder, InfoBlock, Text, User, FollowBtn, BtnText } from "./UserInfoCard.styled";
import goitLogo from "../../images/card/logo.svg";
import cardBackground from "../../images/card/background.png"
import { useState } from "react";

const ellipsePath = new URL('../../images/card/ellipse.svg', import.meta.url);

const UserInfoCard = ({ userName, tweetsCount, followersCount, avatar, isFollowing }) => {
    const handleToggleFollowing = (e) => {
        if (e.currentTarget.nodeName !== 'LI') return;

        const followBtn = e.target.closest("button");
        console.log(followBtn);
        if(e.target.nodeName === 'BUTTON')
        console.log(e.target);
    };


    // const hendleFollowBtnClick = (e) => {
    //     setIsUser(true);
    // }
    
    return (
        <Card onClick={handleToggleFollowing}>
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
                        {
                            isFollowing
                                ? <span>following</span>
                                : <span>follow</span>
                        }
                        
                        {/* <BtnText>follow</BtnText> */}
                    </FollowBtn>
                </InfoBlock>
            </Wrapper>
        </Card>
    );
}

export default UserInfoCard;