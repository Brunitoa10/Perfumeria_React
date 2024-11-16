import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import React from 'react';

const ProductCardDetails = ({ expanded, details }) => (
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        {details}
      </Typography>
    </CardContent>
  </Collapse>
);

export default ProductCardDetails;
