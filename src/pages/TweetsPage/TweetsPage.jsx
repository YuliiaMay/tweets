import { useCallback, useEffect, useState } from "react";
import UsersInfoList from "../../components/UsersInfoList/UsersInfoList";
import { Section, TweetsGalleryContainer } from "./TweetsPage.styled";
import { fetchUsersInfo, updateUsersInfo } from "../../services/tweets-api";


const TweetsPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!users) return;
        async function getUsersInfo() {
            setIsLoading(true);
            try {
                const data = await fetchUsersInfo();
                setUsers(data);
                setIsLoading(false);
                return data;
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }

        getUsersInfo();
    }, []);

    
    const onFollowClick = (id, isFollowing) => {
        const clickedUser = users.find((user) => {
            if (user.id === id) {

                const updatedUser = {
                    ...user,
                    isFollowing: !user.isFollowing,
                    followers: isFollowing ? user.followers - 1 : user.followers + 1,
                };
                updateUsersInfo(id, updatedUser.followers, updatedUser.isFollowing);
                return updatedUser;    
            }
            
            return user;
            
        });


        
        // if (id ===) {
            
        // }
        // if(e.target.nodeName === "BUTTON") 
    };

    return (
        <Section>
            <TweetsGalleryContainer>
                {
                    users && <UsersInfoList users={users} onClick={onFollowClick} />
                }
            </TweetsGalleryContainer>       
        </Section>
    )
};

export default TweetsPage;