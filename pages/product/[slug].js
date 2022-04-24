import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';

export default function ProductScreen() {
  //definir un routeur qui utilise la fonction useRouter
  const router = useRouter();
  //recup slug :definir et le recuperer de router.query
  const { slug } = router.query;
  //definir le produit import de /utils/data et appeler la fonction  find() e, parametre
  const product = data.products.find((a) => a.slug === slug);
  // et si le produit est null retourner un  message x
  if (!product) {
    return <div>produit non trouvé</div>;
  }
  // sinon aaafficher produit
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
