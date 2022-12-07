import axios from "axios";

const host = process.env.REACT_APP_API_HOST;

export const getUserGists = async (userName = "") => {
    const url = `${host}users/${userName}/gists`;
    return await axios.get(url);
};

export const getGistDetail = async (gistId = "") => {
    const url = `${host}gists/${gistId}`;
    return await axios.get(url);
};
