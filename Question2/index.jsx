import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Make API call to fetch train data
    // Update the 'trains' state with the fetched data
  }, []);

  return (
    <div>
      <Typography variant="h4">Train Schedule</Typography>
      <List>
        {trains.map(train => (
          <ListItem key={train.id}>
            <ListItemText primary={`Train ${train.name}`} secondary={`Price: $${train.price}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TrainList;
