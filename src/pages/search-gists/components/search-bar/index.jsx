import React from "react";
import SearchIcon from "../../../../common/assets/icons/search";

const SearchBar = props => {
    const {
        onUserNameChange,
        onUserNameSearch,
        searchedUsername = "",
        showCancelIcon = false,
        resetSearch,
    } = props;

    return (
        <div className='flex justify-center mt-8'>
            <form className='m-3 w-full sm:w-2/4' onSubmit={onUserNameSearch}>
                <h3 className='font-bold text-xl sm:text-3xl mb-3'>
                    Search for public gists of any user
                </h3>
                <label
                    for='default-search'
                    className='mb-2 text-sm font-medium text-gray-900 sr-only'
                >
                    Search
                </label>
                <div className='relative'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
                        <SearchIcon />
                    </div>
                    <input
                        type='search'
                        id='default-search'
                        className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Github username, e.g. joyrexus...'
                        value={searchedUsername}
                        onChange={onUserNameChange}
                    />
                    {showCancelIcon && (
                        <button
                            onClick={resetSearch}
                            className='text-white cursor-pointer absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
                        >
                            X
                        </button>
                    )}
                    <button
                        type='submit'
                        className={`text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${
                            showCancelIcon ? "hidden" : ""
                        }`}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default React.memo(SearchBar);
