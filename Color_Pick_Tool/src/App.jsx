import React, { useRef, useState, useEffect } from 'react';
import Topbar from './components/Topbar';

function App() {
  const [color, setColor] = useState('#ff69b4');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 400;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctxRef.current = ctx;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.strokeStyle = color;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <Topbar />
      <div className="container text-center py-5">
        <h4 className="mb-3">Pick a Color 🎨</h4>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="form-control form-control-color mx-auto"
          title="Choose your color"
          style={{ width: '80px', height: '80px', border: 'none' }}
        />

        <div className="mt-3">
          <p className="lead">Selected Color: {color}</p>
          <button className="btn btn-outline-pink" style={{ borderColor: '#ff69b4', color: '#ff69b4' }} onClick={copyToClipboard}>
            {copied ? '✅ Copied!' : '📋 Copy HEX'}
          </button>
        </div>

        <hr className="my-5" />

        <h4 className="mb-3">Draw Something 🖌</h4>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          style={{ border: '2px solid #ff69b4', cursor: 'crosshair' }}
        />
      </div>
    </>
  );
}

export default App;
