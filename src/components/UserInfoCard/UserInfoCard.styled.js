import styled from '@emotion/styled';

export const Card = styled.li`
    width: 380px;
    height: 460px;
    border-radius: 20px;

    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
`;

export const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
`;

export const CardLogo = styled.img`
    width: 76px;
    height: 22px;
    position: relative;
    top: 20px;
    left: 20px;
`;

export const CardImg = styled.img`
    width: 308px;
    height: 168px;
    position: relative;
    left: 36px;
`;

export const StyledLine = styled.div`
    width: 380px;
    height: 8px;
    position: relative;
    top: 18px;
    background: #EBD8FF;
    box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #FBF8FF inset;
    box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #0000000F;
    box-shadow: 0px -1.7184642553329468px 3.4369285106658936px 0px #AE7BE3 inset;
`;

export const Avatar = styled.img`
    position: absolute;
    width: 62px;
    height: 62px;
    border-radius: 85.92px;
    top: 178px;
    left: 150px;
`;

export const AvatarBorder = styled.img`
    position: absolute;
    top: 168px;
    left: 136px;
`;

export const InfoBlock = styled.div`
    position: relative;
    top: 55px;
    // padding-top: 12px;
`;

export const User = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin-bottom: 16px;
`;

export const Text = styled.p`
    font-family: Montserrat;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    color: #EBD8FF;
    text-align: center;

    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const FollowBtn = styled.button`
    width: 196px;
    height: 50px;
    border-radius: 10.31px;
    background-color: ${props => (props.value ? '#5CD3A8' : 'ebd8ff')};
    margin-right: auto;
    margin-left: auto;

    color: #373737;
    font-family: Montserrat;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;

    &:hover,
    &:focus {
        background-color: ${props => (props.value ? '#ebd8ffaa' : '#5cd3a7aa')};
    }
`;

export const BtnText = styled.span`
    color: #373737;
    font-family: Montserrat;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
`;


