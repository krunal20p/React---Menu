import React from 'react';

const Categories = ({categories, filterCat}) => {
    return(
        <div className='btn-container'>
            {categories.map((category) => {
                return (
                    <button 
                    type='button' 
                    className='filter-btn'
                    onClick={() => filterCat(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories