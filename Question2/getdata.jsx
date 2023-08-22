import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const TrainDetail = () => {
  const { trainId } = useParams();

  // Fetch train details based on 'trainId' parameter

  return (
    <div>
      <Typography variant="h4">Train Details</Typography>
      {/* Display train details */}
    </div>
  );
};

export default TrainDetail;
