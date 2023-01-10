import { Button } from 'components/Button/Button';
import React from 'react';
//import css from 'components/Filter/Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from 'redux/constans';
import { setStatusFilter } from 'redux/filterSlice';
import { selectFilterStatus } from 'redux/selectors';

const StatusFilter  = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterStatus);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
   
  return (
    <div>

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
    </div>
);
};
//Filter.propTypes = {
//  value: PropTypes.string.isRequired,
  //onChange: PropTypes.func.isRequired,
//};

export default StatusFilter;