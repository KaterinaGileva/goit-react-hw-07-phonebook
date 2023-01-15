import { Button } from 'components/Button/Button';
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from 'redux/constans';
import { setStatusFilter } from 'redux/filterSlice';
import { selectFilterStatus } from 'redux/selectors';
import { WraperFilterStatus } from './StatusFilter.styled';

const StatusFilter  = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterStatus);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
   
  return (
    <WraperFilterStatus>

<Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.personal}
        onClick={() => handleFilterChange(statusFilters.personal)}
      >
        Personal
      </Button>
      <Button
        selected={filter === statusFilters.others}
        onClick={() => handleFilterChange(statusFilters.others)}
      >
        Others
      </Button>
      </WraperFilterStatus>
);
};

export default StatusFilter;