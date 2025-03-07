import { useQuery } from "@tanstack/react-query"
import { getIssue, getIssueComments } from "../actions"


export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ['issue', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60,
        // retry: false
    })

    // const commentsQuery = useQuery({
    //     queryKey: ['issue', issueNumber, 'comments'],
    //     queryFn: () => getIssueComments(issueNumber),
    //     staleTime: 1000 * 60,
    //     // retry: false
    // })


    const commentsQuery = useQuery({
        queryKey: ['issue', issueQuery.data?.number, 'comments'],
        queryFn: () => getIssueComments(issueQuery.data!.number),
        staleTime: 1000 * 60,
        enabled: issueQuery.data !== undefined,
        // retry: false
    })

    return {
        issueQuery,
        commentsQuery
    }
}
