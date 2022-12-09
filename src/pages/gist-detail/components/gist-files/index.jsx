import React from "react";
import FileTag from "../../../search-gists/components/file-tag";

const GistFiles = props => {
    const { files = {} } = props;

    if (!files || Object.keys(files).length === 0) {
        return null;
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
                                        File name
                                    </th>
                                    <th
                                        scope='col'
                                        className='text-sm font-medium text-gray-900 px-12 py-4 text-left'
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope='col'
                                        className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Size
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(files).map((fileItem, index) => {
                                    const {
                                        filename,
                                        type,
                                        raw_url: rawUrl,
                                        size,
                                    } = fileItem;
                                    return (
                                        <tr
                                            className={`${
                                                index % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-white"
                                            } border-b`}
                                        >
                                            <td className='px-6 py-4 text-sm text-left font-medium text-gray-900'>
                                                <a href={rawUrl}>{filename}</a>
                                            </td>
                                            <td className='text-sm text-gray-900 font-light px-12 py-4 text-left'>
                                                <FileTag fileType={type} />
                                            </td>
                                            <td className='text-sm text-gray-900 font-light px-6 py-4  text-left'>
                                                {size}
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

export default React.memo(GistFiles);
