import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import {
  Link,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import Image from 'next/image';

export default function ProductScreen() {
  const classes = useStyles();

  //definir un routeur qui utilise la fonction useRouter
  const router = useRouter();
  //recup slug :definir et le recuperer de router.query
  const { slug } = router.query;
  //definir le produit import de /utils/data et appeler la fonction  find() e, parametre
  const product = data.products.find((a) => a.slug === slug);
  // et si le produit est null retourner un  message x
  if (!product) {
    return <div>Produit non trouvé</div>;
  }
  // sinon aaafficher produit
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>retour aux produits</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12} className={classes.sectR}>
          <List>
            <ListItem>
              <Typography component="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Categorie: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Marque: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Note: {product.rating} étoiles ({product.numReviews}{' '}
                commentaires)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description} </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12} className={classes.sectR}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Prix</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{product.price}€</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Statut</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInstock > 0 ? 'En stock' : 'Indisponible'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  className={classes.btn}
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Ajouter au panier
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
