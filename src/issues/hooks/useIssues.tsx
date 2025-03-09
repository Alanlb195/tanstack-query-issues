import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions/get-issues"
import { State } from "../interfaces"
import { useEffect, useState } from "react";

interface Props {
    state: State;
    selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels, }: Props) => {

    const [page, setPage] = useState(1)


    useEffect(() => {
        setPage(1);
    }, [state])

    useEffect(() => {
        setPage(1);
    }, [selectedLabels])


    // console.log(state);

    const issuesQuery = useQuery({
        queryKey: ['issues', { state, selectedLabels, page }],
        queryFn: () => getIssues(state, selectedLabels, page),
        staleTime: 1000 * 60,
    })

    const nextPage = () => {
        if (issuesQuery.data?.length === 0) {
            return;
        }

        setPage(page + 1);
    }

    const prevPage = () => {
        if (page === 1) {
            return;
        }

        setPage((prevPage) => prevPage - 1);
    }

    return {

        issuesQuery,

        // Getters
        page,

        // Actions
        nextPage,
        prevPage,
    }
}
