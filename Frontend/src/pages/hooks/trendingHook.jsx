import { useEffect, useState } from 'react';
import axios from "axios";
import { contentStore } from '../store/Content';

const getTrending = () => {
  const [trendingContent, setTrendindContent] = useState(null);
  const { useContent } = contentStore();

  useEffect(() => {
    const fetchTrendingContent = async () => {
      const response = await axios.get(`/api/${useContent}/trending`)
      setTrendindContent(response.data.content);
    }

    fetchTrendingContent();
  }, [useContent])
  
  return { trendingContent };
}

export default getTrending;