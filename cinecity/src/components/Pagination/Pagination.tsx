import './Pagination.css'
import React, { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
    page: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ page, setCurrentPage }: PaginationProps) {

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        setCurrentPage(page + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(page - 1);
    };

    const handleLastPage = () => {
        setCurrentPage(500);
    };

    return (
        <footer className='pagination'>

            {page === 1 && (
                <>
                    <div className='contpage'>
                            <button className='btn-page' onClick={handleNextPage}>  &#62;&#62;  </button>
                            <button className='btn-page' onClick={handleLastPage}> &#62;&#124;  </button>
                    </div>
                </>
            )}
            {page === 500 && (
                <>
                    <div className='contpage'>
                            <button className='btn-page' onClick={handleFirstPage}>  &#124;&#60;  </button>
                            <button className='btn-page' onClick={handlePreviousPage}>  &#60;&#60;  </button>
                    </div>
                </>
            )}
            {page > 1 && page < 500 && (
                <>
                    <div className='contpage'>
                        <span>
                            <button className='btn-page' onClick={handleFirstPage}>  &#124;&#60;  </button>
                            <button className='btn-page' onClick={handlePreviousPage}>  &#60;&#60;  </button>
                            <button className='btn-page' onClick={handleNextPage}>  &#62;&#62;  </button>
                            <button className='btn-page' onClick={handleLastPage}> &#62;&#124;  </button>
                        </span>
                    </div>
                </>
            )}

        </footer>
    );


};

export default Pagination;


// import React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';


// interface PaginationProps {
//     page: number;
//     setPage: React.Dispatch<React.SetStateAction<number>>;
// }

// const PaginationComponent: React.FC<PaginationProps> = ({ page, setPage }) => {
//     const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//         setPage(value);
//     };

//     return (
//         <Stack spacing={2}>
//             <Pagination
//                 count={500} 
//                 page={page}
//                 onChange={handleChange}
//                 color="primary"
//                 size="large"
//             />
//         </Stack>
//     );
// };

// export default PaginationComponent;
