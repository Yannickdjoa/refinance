import React from 'react';

export const SearchButton=()=> {
    const handleSearchChange='';
    return (
        <div>
            <form method='POST' action=''>

                <label for='search'>
                    <input
                        type='text'
                        name='search'
                        value='search...'
                        id='search'
                        onChange={handleSearchChange}
                    />
                    
                </label>
                <button className='search-button' type='submit'>
                    <img src='../../../../assets/images/searchIcon.jpg' alt='search button'/>
                </button>
                
            </form>
        </div>
    );
}
