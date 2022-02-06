import {server} from '../../config'
import React from 'react';
import Head from 'next/head';
import ArticleList from '../../components/ArticleList/ArticleList';

const Posts = ({articles}) => {
   console.log(articles)
  return (
     <div>
        <ArticleList articles={articles} />
     </div>
  );
};

export const getStaticProps = async () => {
   const res = await fetch(`${server}/api/articles`);
   const data = await res.json();
   
   return {
      props: {
         articles: data
      },
      
   }
}

// export const getStaticProps = async () => {
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//    const data = await res.json();
   
//    return {
//       props: {
//          articles: data
//       },
      
//    }
// }

export default Posts;
