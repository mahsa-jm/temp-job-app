import { useEffect } from 'react';
import { StatsContainer,  ChartsContainer } from '../../components'; //removed Loading
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
  const { monthlyApplications } = useSelector(
    (store) => store.allJobs
  ); //removed isLoading

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]); //added dispatch
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
