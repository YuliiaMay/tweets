import UserInfoCard from "../UserInfoCard/UserInfoCard";
import { UsersGallery } from "./UsersInfoList.styled";

const UsersInfoList = ({ usersInfo, onClick }) => {
    console.log(usersInfo);
    return ( 
        usersInfo &&
        <UsersGallery>
            {
                usersInfo.map((user) =>
                    <UserInfoCard
                        key={user.id}
                        {...user}
                        // id={id}
                        // userName={user}
                        // tweetsCount={tweets}
                        // followersCount={followers}
                        // avatar={avatar}
                        // isFollowing={isFollowing}
                        onClick={onClick}
                    />
                )
            }
        </UsersGallery>
    );
}

export default UsersInfoList;