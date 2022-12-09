import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import SearchBar from "./components/search-bar";
import { getUserGists } from "../../common/api/fetchGists";
import GistsTable from "./components/gists-table";
import Loader from "../../common/components/loader";
import { useParams, useNavigate } from "react-router-dom";

const SearchGists = () => {
    const [gistsData, setGistsData] = useState([]);
    const { username = "" } = useParams();
    const [searchedUsername, setSearchedUserName] = useState(username);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchGistsListForUser = useCallback(searchedUsername => {
        setLoading(true);
        try {
            getUserGists(searchedUsername)
                .then(res => {
                    console.log(res);
                    const { data, status } = res;
                    if (status === 200) {
                        setGistsData(data);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    setLoading(false);
                    setGistsData([]);
                });
        } catch (err) {
            console.log(err.message);
            setLoading(false);
            setGistsData([]);
        }
    }, []);

    useEffect(() => {
        fetchGistsListForUser(username);
    }, [username, fetchGistsListForUser]);

    const handleUserNameChange = useCallback(e => {
        setSearchedUserName(e.target.value);
    }, []);

    const handleUserNameSearch = useCallback(
        e => {
            e.preventDefault();
            navigate(`/gist/search/${searchedUsername}`);
        },
        [navigate, searchedUsername]
    );

    const resetSearch = () => {
        setSearchedUserName("");
        setGistsData([]);
    };

    return (
        <div className='min-h-screen flex justify-between flex-col'>
            <Header />

            <div className='min-h-[70vh]'>
                <div className='container mx-auto'>
                    <SearchBar
                        onUserNameChange={handleUserNameChange}
                        onUserNameSearch={handleUserNameSearch}
                        searchedUsername={searchedUsername}
                    />
                    {loading ? (
                        <Loader />
                    ) : (
                        <GistsTable gistsData={gistsData} />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SearchGists;
