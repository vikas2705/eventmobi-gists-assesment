import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGistDetail } from "../../common/api/fetchGists";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import Loader from "../../common/components/loader";
import GistData from "./components/gist-data";
import "./gist-detail.css";

const GistDetail = () => {
    const [gistDetails, setGistDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const { gistId = "" } = useParams();
    const navigate = useNavigate();

    const fetchGistDetails = gistId => {
        setLoading(true);
        try {
            getGistDetail(gistId)
                .then(res => {
                    console.log(res);
                    const { data, status } = res;
                    if (status === 200) {
                        setGistDetails(data);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    setLoading(false);
                    setGistDetails({});
                });
        } catch (err) {
            console.log(err.message);
            setLoading(false);
            setGistDetails({});
        }
    };

    useEffect(() => {
        fetchGistDetails(gistId);
    }, [gistId]);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className='min-h-screen flex justify-between flex-col'>
            <Header />

            <div className='min-h-[70vh]'>
                <div className='container mx-auto'>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className=''>
                            <p
                                onClick={goBack}
                                className='text-left my-2 mx-4 text-xl font-semibold hover:underline cursor-pointer'
                            >
                                {"←  Back"}
                            </p>

                            <GistData
                                gistDetails={gistDetails}
                                gistId={gistId}
                            />
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GistDetail;
