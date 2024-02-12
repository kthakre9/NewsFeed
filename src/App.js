import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import './App.css';
import { Header } from './components/Header';
import { FeedItem } from './components/FeedItem';

const Container = styled.div`
margin:0;
background-color: #9f9e9e1f;
`

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [headerData, setHeaderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { t } = useTranslation();

  const renderFeed = async () => {
    let parser = new Parser({
      customFields: {
        item: [['media:content', 'media'], ['media:description', 'mediaDescription']],
      }
    });

    setIsLoading(true);
    setError(null);
    try {
      let feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml');

      const feedDate = new Date(feed.pubDate)
      setHeaderData({
        date: feedDate.toDateString(),
        language: feed.language,
        image: feed.image,
        link: feed.link
      })

      const feedItems = feed.items.map(item => {
        const itemDate = new Date(item.pubDate)
        return {
          date: itemDate.toDateString(),
          link: item.link,
          title: item.title,
          author: item.creator,
          description: item.content,
          media: item.media?.$.url,
          mediaDescription: item.mediaDescription
        }
      });

      const start = currentPage * 6;
      const end = start + 6;

      console.log(feedItems)

      setItems(feedItems.slice(0, end));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    renderFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
        return;
      }
      setCurrentPage(currentPage + 1)
      renderFeed();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, currentPage]);

  return (
    <Container>
      {isLoading && <p>{t('loading')}</p>}
      {error && <p>{t('error')} {error.message}</p>}
      <Header data={headerData} />
      <FeedItem data={items} />
    </Container>
  );
}

export default App;
