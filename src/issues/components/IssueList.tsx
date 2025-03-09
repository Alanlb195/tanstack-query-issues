import { GithubIssue, State } from '../interfaces/issues';
import { IssueItem } from './IssueItem';

interface Props {
  issueList: GithubIssue[];
  selectedState: State;

  onStateChange: (state: State) => void;
}

export const IssueList = ({ issueList, selectedState, onStateChange }: Props) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className={ `btn ${ selectedState === State.All ? 'active' : '' }` } onClick={() => onStateChange(State.All)}>All</button>
        <button className={ `btn ${ selectedState === State.Open ? 'active' : '' }` } onClick={() => onStateChange(State.Open)}>Open</button>
        <button className={ `btn ${ selectedState === State.Close ? 'active' : '' }` } onClick={() => onStateChange(State.Close)}>Closed</button>
      </div>



      {/* Lista de issues */}
      <div className="mt-4">
        {issueList.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>

    </>
  );
};
