import UserInfoCard from "../UserInfoCard/UserInfoCard";
import { UsersGallery } from "./UsersInfoList.styled";

const UsersInfoList = ({ users, onClick }) => {
    return (
        <UsersGallery>
            {
                users.map((user) =>
                    <UserInfoCard
                        key={user.id}
                        {...user}
                        onClick={onClick}
                    />
                )
            }
        </UsersGallery>
    );
}

export default UsersInfoList;