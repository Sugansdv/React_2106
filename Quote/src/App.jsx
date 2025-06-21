import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topbar from './components/Topbar';

const colors = ['#f39c12', '#8e44ad', '#2ecc71', '#1abc9c', '#e74c3c', '#3498db', '#e67e22'];

function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [themeColor, setThemeColor] = useState(colors[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'b5b7XTDdfm9XJFV+BmMRDQ==kfZj2nugpR4cwzqb' }
      });
      const data = res.data[0];
      setQuote({ quote: data.quote, author: data.author });
      setThemeColor(colors[Math.floor(Math.random() * colors.length)]);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.quote}" — ${quote.author}`);
    alert('Copied to clipboard!');
  };

  const tweetQuote = () => {
    const text = `"${quote.quote}" — ${quote.author}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: themeColor, minHeight: '100vh', transition: 'background .3s' }}>
      <Topbar />
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="card shadow-lg p-4" style={{ maxWidth: '700px' }}>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <div className="text-center text-danger">
              <p>{error}</p>
              <button className="btn btn-primary" onClick={fetchQuote}>Try Again</button>
            </div>
          ) : (
            <>
              <h4 className="mb-3">❝ {quote.quote} ❞</h4>
              <p className="text-end mb-4">— <strong>{quote.author}</strong></p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={copyToClipboard}>📋 Copy</button>
                <button className="btn btn-info text-white" onClick={tweetQuote}> Tweet</button>
                <button className="btn btn-primary" onClick={fetchQuote}>🔄 New Quote</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
