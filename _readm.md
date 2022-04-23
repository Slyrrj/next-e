-vscode : es7 React/Redux _ javascript (es6) code snippets - Prettier
-google chrome - 
-nodejs 

> npx create-next-app => next-e  => cd next-e 
> npm run dev
Installation Framework Material-Ui pour les composants 
> npm install @material_ui/core --force

aller dans index.js  enlever contenu remplacer par  Produits  pour test

Créations dossier composants  "components" dans racines  => Layout.js
=> rfc tab  Ajouter <Head> < /Head>  _ import Head from 'next/head';
-Ajouter title dans head <title>next-e</title>
-introduire un composant Material ui
=>  <AppBar position="static">  </AppBar>  import {AppBar, ToolBar, Typography} from '@material-ui/core';
=> mettre dedans <ToolBar> ajouter l import  avec AppBar
=> mettre <Typography> puis importer puis ajouter dedans le titre next-e
- Créer le Main Section :
=> ajouter <Container > puis importer , mettre dedans {childrer} 
puis ajouter en parametre de la function Layot({childrer})
=> mettre <Layout> dans index.js, importer et deplacer dedans  le contenu div

Créer Footer <footer> puis <Typography> dedans  puis test All reserved next-e.
================================================================================
Ajout de styles sur le layout
Créer dans la racine  mkdir utils/styles.js dedans declerer une variable:
const useStyles = makeStyles de material-ui qui va etre importé
-passer un objet dans la fonction, 
>changer la coleurr bg du navbar dednas (encamelCase)
const useStyles = makeStyles ({
	navbar: { backgroundColor: '#702632', '& a':{color:'#fff', marginLeft: 10}
}) save export default useStyles;
importer dans layout puis déclarer dans le composant (avant return) const classes = useStyles();
=> puis ajouter la class dans navbar className={classes.//lenomdelaclass: navbar}
> styliser le main  en mettant minHeight 80vh
> centrer le footer textAlign : center;
===============================================================================

fixer Material Ui, pour que les styles restent apres un refresh de la page
>pqdpqdpqdpqdpqqd