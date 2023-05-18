import { useEffect, useState } from "react";
import { fetchUsersInfo } from "../../services/tweets-api";

const UsersInfoList = () => {
    const [usersInfo, setUsersInfo] = useState([]);
    console.log(usersInfo);

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
        <ul>
            {
                <li>point</li>
            }
        </ul>
    );
}

export default UsersInfoList;