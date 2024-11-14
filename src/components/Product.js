import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'; // Import `styled`
import accounting from "accounting";
import React from 'react';

// Styled components
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const CardRoot = styled(Card)(({ theme }) => ({
  maxWidth: 345,
}));

const PriceText = styled(Typography)(({ theme }) => ({
  paddingRight: theme.spacing(2),
  fontWeight: 'bold',
  color: theme.palette.text.secondary,
}));

/*const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));*/

const ProductDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardRoot>
      <CardHeader
        action={<PriceText variant="h5">{accounting.formatMoney(250, "US$", 0)}</PriceText>} // You can replace this with dynamic value
        title="212 Man"
        subheader="November 14, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://imgs.search.brave.com/1fQQ-aa--XwFCcFU-P5G6aaOrG_A9nPuQ0C2ZCEcYnc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGFmaXRpLmNv/bS5jby9wL2Nhcm9s/aW5hLWhlcnJlcmEt/MjcxMS0xNTgyNjUx/LTEtY2F0YWxvZy1u/ZXcuanBn"
        alt="212 Hombre - Carolina Herrera"
      />
      <CardContent>
        <ProductDescription variant="body2">
          212 Man - Carolina Herrera
        </ProductDescription>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Fragancia masculina fresca y urbana, diseñada para hombres modernos y elegantes.
            Combina notas de cítricos, especias y madera, creando un aroma sofisticado y duradero perfecto para el día
            y la noche.
          </Typography>
        </CardContent>
      </Collapse>
    </CardRoot>
  );
}
