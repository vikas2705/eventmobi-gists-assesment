import React from "react";

const GistForks = props => {
    const { forks = [] } = props;

    // getting the last 3 forks
    const forksToShow = [];
    for (
        let index = forks.length - 1;
        index >= 0 && index >= forks.length - 3;
        index--
    ) {
        forksToShow.push(forks[index]);
    }

    return (
        <div className='my-3'>
            <p className='my-2'>
                Forked by :{" "}
                {!forks || (forksToShow.length === 0 && <span>None</span>)}
            </p>
            <div className='flex items-center'>
                {forksToShow.map(fork => {
                    const { user: { avatar_url: avatarUrl, url, login } = {} } =
                        fork;
                    return (
                        <>
                            <a href={url}>
                                <div className='mr-3 align-center text-center'>
                                    <center>
                                        <img
                                            src={avatarUrl}
                                            alt={`Avatar for ${login}`}
                                            className={"h-[40px]"}
                                        />
                                    </center>
                                    <h4>{login}</h4>
                                </div>
                            </a>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(GistForks);
