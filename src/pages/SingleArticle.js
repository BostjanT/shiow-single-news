import React, { useState, useEffect } from "react";
import * as contentful from "contentful";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const { articleId } = useParams();
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

 /*  const singleArticle = allArticles.find(
    (article) => article.fields.id === articleId
  );
  console.log(singleArticle); */

  return (
    <h1>
      {allArticles.find(article => article.fields.id === articleId).map((article) => {
        return <h2>{article.fields.title}</h2>;
      })}
    </h1>
  );
}
export default SingleArticle;
