import { useState } from 'react';
import { LoadingSpinner } from '../../shared/components';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { State } from '../interfaces';
import { useIssuesInfinite } from '../hooks/useIssuesInfinite';

export const ListViewInfinite = () => {

  const [issueState, setIssueState] = useState(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery } = useIssuesInfinite({
    state: issueState,
    selectedLabels: selectedLabels,
  });

  const issues = issuesQuery.data?.pages.flat() ?? [];

  const onLabelSelected = (label: string) => {

    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label))
    } else {
      setSelectedLabels([...selectedLabels, label])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">


        {
          issuesQuery.isLoading
            ? <LoadingSpinner />
            :
            <div className='flex flex-col justify-center'>

              <IssueList issueList={issues} onStateChange={setIssueState} selectedState={issueState} />

              <button
                disabled={issuesQuery.isFetchingNextPage}
                onClick={() => issuesQuery.fetchNextPage()}
                className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-500'>
                {issuesQuery.isFetchingNextPage
                  ? 'Cargando mas...'
                  : 'Cargar mas...'
                }

              </button>
            </div>

        }


      </div>

      <div className="col-span-1 px-2">
        <LabelPicker onLabelSelected={onLabelSelected} selectedLabels={selectedLabels} />
      </div>
    </div>
  );
};
