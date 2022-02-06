import React from 'react';
import Link from 'next/link';

const ArticleItem = ({article}) => {
  return (
     <Link href={`/posts/${article.id}`} >
        <a>
           <h3>{article.title} &rarr;</h3>
           <p>{article.body}</p>
        </a>
     </Link>
  )
};

export default ArticleItem;
