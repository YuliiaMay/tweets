import UsersInfoList from "../../components/UsersInfoList/UsersInfoList";
import { Section, TweetsGalleryContainer } from "./TweetsPage.styled";

const TweetsPage = () => {
    return (
        <Section>
            <TweetsGalleryContainer>
                <UsersInfoList/>
            </TweetsGalleryContainer>       
        </Section>
    )
};

export default TweetsPage;