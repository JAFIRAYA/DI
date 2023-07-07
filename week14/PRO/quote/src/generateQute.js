import { useState } from 'react';
import quotes from './quotes';
import './App.css';

const ALLQotes = () => {

    const [quote, setQuote] = useState(getQuote());
    const [backgroundColor, setBackgroundColor] = useState(getColor());
    

    function getQuote(){
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];

    }


    function getColor() {
       const letters='0123456789QBCDEF'
       let color='#'

       for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16 ) ]
       }
       return color
      }

    function generateQute(){
      let newQuote = getQuote();
       while (newQuote === quote) {
      newQuote = getQuote();
    }
    setQuote(newQuote);
    setBackgroundColor(getColor());
   


    }
    return (
        <div className='app' style={{ backgroundColor }}>
          <div className='quote-container'>
            <h1 className='quote'  style={{ color:backgroundColor }}>{quote.quote}</h1>
            <p className='author'    style={{ color:backgroundColor }}>{quote.author}</p>
            <button className='generate' style={{ color:backgroundColor }} onClick={generateQute}> generate</button>
          </div>
        </div>
      );

 }

 export default ALLQotes;
