import React from 'react';
import Head from 'next/head';
import ArticleList from '../../components/ArticleList/ArticleList';

const Posts = ({articles}) => {
   console.log(articles)
  return (
     <div>
        <Head>
           <title>My Articles</title>
           <meta name="keywords" content="web development, coding" />
        </Head>

        <ArticleList articles={articles} />
     </div>
  );
};

export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
   const data = await res.json();
   
   return {
      props: {
         articles: data
      },
      
   }
}

export default Posts;
