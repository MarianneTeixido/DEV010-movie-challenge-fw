import {useState } from "react";

interface PaginationProps {
    currentPage: number;
    pageSize: number;
    totalCount: number;
}

interface PaginationActions {
    nextPage: () => void;   
    prevPage: () => void;
    jumpPage: (page: number) => void;
}

function usePagination(props: PaginationProps): [PaginationProps, PaginationActions] {
    const initialState = {
        currentPage: props.currentPage,
        pageSize: props.pageSize,
        totalCount: props.totalCount,
    };

    const [state, setState] = useState(initialState);

    const nextPage = () => {
        setState((prevState) => {
            const nextPage = prevState.currentPage + 1;
            return {
                ...prevState,
                currentPage: nextPage,
            };
        });
    };

    const prevPage = () => {
        setState((prevState) => {
            const prevPage = prevState.currentPage - 1;
            return {
                ...prevState,
                currentPage: prevPage,
            };
        });
    };

    const jumpPage = (page: number) => {
        setState((prevState) => {
            return {
                ...prevState,
                currentPage: page,
            };
        });
    };

    return [state, { nextPage, prevPage, jumpPage }];
}
export default usePagination;
  

