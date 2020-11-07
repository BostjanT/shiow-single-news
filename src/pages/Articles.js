import React, { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from "react-router-dom";

function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState(null);
  const API_SPACE_ID = "quuudgeu6kvg";
  const API_TOKEN = "anFDgz6QfwXf8VYgCQQNCsE8KoJD2ZxLv3t-d1PMJzw";

  const client = contentful.createClient({
    space: API_SPACE_ID,
    accessToken: API_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({ order: "-sys.createdAt", content_type: "klubskeNovice" })
      .then(
        (data) => {
          setAllArticles(data.items);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);
  console.log(error);
  console.log(allArticles);

  return (
    <div>
      {allArticles.map((article) => {
        return (
          <div className='articles' key={article.fields.id}>
            <img
              src={`https:${article.fields.image.fields.file.url}`}
              alt='article'
            />
            <Link to={`/articles/${article.fields.id}`}>
              <h1>{article.fields.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Articles;
