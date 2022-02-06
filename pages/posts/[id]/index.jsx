import {server} from '../../../config'
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta';

const Article = ({ article }) => {
   // const router = useRouter();
   // const { id } = router.query;

   return (
      <div>
         <Meta title={article.title} description={article.excerpt} />
         <h2>{article.title}</h2>
         <p>{article.body}</p>
         <br />

         <Link href='/' >Go Back</Link>
      </div>
   );
};



// export const getServerSideProps = async (context) => {
//    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//    const article = await res.json();

//    return {
//       props: {
//          article
//       }
//    }
// }

export const getStaticProps = async (context) => {
   const res = await fetch(`${server}/api/articles/${context.params.id}`);

   const article = await res.json();

   return {
      props: {
         article
      }
   }
}

export const getStaticPaths = async () => {
   const res = await fetch(`${server}/api/articles`);

   const articles = await res.json();

   const paths = articles.map(article => {
      return {
         params: { id: article.id.toString() }
      }
   })

   return {
      paths: paths,
      fallback: false // return 404 if id doesn't exist
   }
}

// export const getStaticPaths = async () => {
//    const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts`
//    );

//    const articles = await res.json();

//    const paths = articles.map(article => {
//       return {
//          params: { id: article.id.toString() }
//       }
//    })

//    return {
//       paths: paths,
//       fallback: false // return 404 if id doesn't exist
//    }
// }

export default Article;
