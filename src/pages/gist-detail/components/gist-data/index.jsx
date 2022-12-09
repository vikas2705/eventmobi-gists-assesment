import React from "react";
import Moment from "react-moment";
import GistFiles from "../gist-files";
import GistForks from "../gist-forks";

const GistData = props => {
    const { gistDetails = {}, gistId = "" } = props;

    if (!gistId || !gistDetails || !gistDetails.description) {
        return (
            <p className='flex justify-center my-8 text-xl'>
                Invalid Gist. Please check and try again
            </p>
        );
    }

    const {
        files = {},
        created_at: createdAt,
        description = "",
        url = "",
        forks_url: folksUrl = "",
        commits_url: commitsUrl = "",
        owner: {
            login = "",
            avatar_url: avatarUrl = "",
            url: ownerUrl = "",
        } = {},
        forks = [],
    } = gistDetails;

    return (
        <div className='flex flex-col text-left mx-4 my-8 border-solid border-2 p-8'>
            <div className='block sm:flex sm:justify-between my-4 sm:my-1 text-gray-500'>
                <p>Id: {gistId}</p>
                <p className='text-sm'>
                    Created At:{" "}
                    <Moment date={createdAt} format='MMM-DD-YYYY HH:mm:ss' />
                </p>
            </div>
            <h2 className='font-semibold'>Description: {description}</h2>
            <div className='flex items-center'>
                <h3>
                    Owner:{" "}
                    <a
                        href={ownerUrl}
                        className='hover:underline font-semibold'
                    >
                        {login}
                    </a>
                </h3>
                {avatarUrl && (
                    <img
                        src={avatarUrl}
                        alt='Owner avatar'
                        className='h-[40px] ml-4'
                    />
                )}{" "}
            </div>
            <GistFiles files={files} />

            <GistForks forks={forks} />

            <div className='flex items-center mt-2 mb-1 text-gray-500'>
                <a href={url} className='hover:underline'>
                    See details
                </a>
                <a href={folksUrl} className='hover:underline ml-4'>
                    See Fork details
                </a>
                <a href={commitsUrl} className='hover:underline ml-4'>
                    See Commit details
                </a>
            </div>
        </div>
    );
};

export default React.memo(GistData);
