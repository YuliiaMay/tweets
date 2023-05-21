import axios from "axios";

axios.defaults.baseURL = "https://6464b2bf127ad0b8f8a57f71.mockapi.io";

export async function fetchUsersInfo () {
    try {
        const response = await axios.get(`/user`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error.message);
    }
};


export async function updateUsersInfo (id, isFollowing, followers) {
    try {
        const response = await axios.put(`/user/${id}`, {isFollowing, followers});
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error.message);
    }
};