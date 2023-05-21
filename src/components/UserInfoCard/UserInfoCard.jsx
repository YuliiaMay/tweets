import { Card, Wrapper, CardLogo, CardImg, StyledLine, Avatar, AvatarBorder, InfoBlock, Text, User, FollowBtn, BtnText } from "./UserInfoCard.styled";
import goitLogo from "../../images/card/logo.svg";
import cardBackground from "../../images/card/background.png"
import { useState } from "react";

const ellipsePath = new URL('../../images/card/ellipse.svg', import.meta.url);

const UserInfoCard = ( {id, user, tweets, followers, avatar, isFollowing, onClick }) => {
    // const { id, user, tweets, followers, avatar, isFollowing } = user;

    return (
        <Card>
            <Wrapper>
                <CardLogo src={goitLogo} alt="logo"/>
                <CardImg src={cardBackground} alt="backgroung" />
                <StyledLine />
                <Avatar src={avatar} alt="avatar" />
                <AvatarBorder src={ellipsePath} alt="ellipse" />


                <InfoBlock>
                    <User>{user}</User>
                    <Text>
                        <span>{tweets}</span> tweets
                    </Text>
                    <Text>
                        <span>{followers.toLocaleString('en-US')}</span> followers
                    </Text>
                    <FollowBtn
                        type="button"
                        value={isFollowing}
                        onClick={() => onClick(id, isFollowing)}
                    >
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