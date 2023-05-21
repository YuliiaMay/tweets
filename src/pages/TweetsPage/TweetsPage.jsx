import { useCallback, useEffect, useState } from "react";
import UsersInfoList from "../../components/UsersInfoList/UsersInfoList";
import { Section, TweetsGalleryContainer } from "./TweetsPage.styled";
import { fetchUsersInfo, updateUsersInfo } from "../../services/tweets-api";


const TweetsPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getUsersInfo() {
            setIsLoading(true);
            try {
                const data = await fetchUsersInfo();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }

        getUsersInfo();
    }, []);

    const toggleFollowing = useCallback((id, isFollowing) => {
        try {
            setUsers(prevUsers => {
                prevUsers.map(user => {
                    if (user.id === id) {
                        const countFollowers = isFollowing ? user.followers - 1 : user.followers + 1;
                        console.log(countFollowers);
                        const updatedUser = {
                            ...user,
                            followers: countFollowers,
                            isFollowing: !user.isFollowing
                        }
                        updateUsersInfo(id, updatedUser.isFollowing, countFollowers);

                        return updatedUser;
                    }
                    return user;
                })
            })
        } catch (error) {
            console.log(error);
        }
    }, []);
    
    return (
        <Section>
            <TweetsGalleryContainer>
                <UsersInfoList usersInfo={users} onClick={toggleFollowing} />
            </TweetsGalleryContainer>       
        </Section>
    )
};

export default TweetsPage;