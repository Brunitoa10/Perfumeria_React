import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

function ShoppingCart({ cartItems, onRemoveFromCart }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <Box>
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`Price: $${item.price}`}
                  />
                  <Button
                    onClick={() => onRemoveFromCart(item.id)}
                    variant="text"
                    color="error"
                  >
                    Remove Product
                  </Button>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Typography variant="h6" align="right" sx={{ marginTop: 2 }}>
            Total: ${totalAmount.toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ShoppingCart;
