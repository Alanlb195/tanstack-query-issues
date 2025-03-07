import { GithubIssue } from '../interfaces/issues';
import { IssueItem } from './IssueItem';

interface Props {
  issueList: GithubIssue[];
}

export const IssueList = ({ issueList }: Props) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>



      {/* Lista de issues */}
      <div className="mt-4">
        {issueList.map((issue) => (
          <IssueItem key={issue.id} issue={ issue } />
        ))}
      </div>

    </>
  );
};
