import { useEffect, useState } from "react";
import UsersInfoList from "../../components/UsersInfoList/UsersInfoList";
import { Section, TweetsGalleryContainer } from "./TweetsPage.styled";
import { fetchUsersInfo } from "../../services/tweets-api";


const TweetsPage = () => {
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

    // useEffect(() => { }, [])
    
    // const lastTweetIndex = currentPage * tweetsPerPage;
    // const firstTweetIndex = lastTweetIndex - tweetsPerPage;
    // const currentsTweets = 

    return (
        
        <Section>
            <TweetsGalleryContainer>
                <UsersInfoList usersInfo={usersInfo} />
            </TweetsGalleryContainer>       
        </Section>
    )
};

export default TweetsPage;