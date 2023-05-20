import { useEffect, useState } from "react";
import { fetchUsersInfo } from "../../services/tweets-api";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import { UsersGallery } from "./UsersInfoList.styled";

const UsersInfoList = () => {
    const [usersInfo, setUsersInfo] = useState([]);

    useEffect(() => {
        async function getUsersInfo() {
            try {
                const data = await fetchUsersInfo();
                setUsersInfo(data);
            } catch (error) {
                console.log(error.message);
            }
        }

        getUsersInfo();
    }, []);

    return ( 
        <UsersGallery>
            {
                usersInfo.map(({ user, id, tweets, followers, avatar }) =>
                    <UserInfoCard
                        key={id}
                        userName={user}
                        tweetsCount={tweets}
                        followersCount={followers}
                        avatar={avatar}
                    />
                )
            }
        </UsersGallery>
    );
}

export default UsersInfoList;