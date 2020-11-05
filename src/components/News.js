import news from '../data/news.json';

function News() {
  const { data } = news;
  // TODO: Auto scroll through news articles
  console.log(data)
  return (
    <div className="news">
      <p>{data[0].text}</p>
    </div>
  );
}

export default News;
