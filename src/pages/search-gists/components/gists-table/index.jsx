import React from "react";
import Moment from "react-moment";

const GistsTable = props => {
    const { gistsData = [] } = props;

    if (!gistsData || !gistsData.length) {
        return (
            <p className='flex justify-center my-8 text-xl'>
                No gists data to show!
            </p>
        );
    }

    return (
        <div className='flex flex-col'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full'>
                            <thead className='bg-white border-b'>
                                <tr>
                                    <th
                                        scope='col'
                                        className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Id
                                    </th>
                                    <th
                                        scope='col'
                                        className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope='col'
                                        className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Created At
                                    </th>
                                    <th
                                        scope='col'
                                        className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Files count
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {gistsData.map((gistItem, index) => {
                                    const {
                                        id,
                                        files = {},
                                        created_at: createdAt,
                                        description,
                                    } = gistItem;
                                    return (
                                        <tr
                                            className={`${
                                                index % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-white"
                                            } border-b`}
                                        >
                                            <td className='px-6 py-4 text-sm text-left font-medium text-gray-900'>
                                                <a
                                                    href={`/gist/${id}`}
                                                    className='underline'
                                                >
                                                    {id}
                                                </a>
                                            </td>
                                            <td className='text-sm text-gray-900 font-light px-6 py-4  text-left'>
                                                {description}
                                            </td>
                                            <td className='text-sm text-gray-900 font-light px-6 py-4 text-left'>
                                                <Moment
                                                    date={createdAt}
                                                    format='MMM-DD-YYYY HH:mm:ss'
                                                />
                                            </td>
                                            <td className='text-sm text-gray-900 font-light px-6 py-4 text-left'>
                                                {Object.keys(files).length}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(GistsTable);
