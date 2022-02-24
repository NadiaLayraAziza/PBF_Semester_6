import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';

const Hello = () => {
  // return <p>hello</p>
  return <div>
            <header className="Main-page">
              <h1>
                <marquee direction="right">Hello Nadia Layra Aziza !!! Selamat Datang di React JS</marquee>    
              </h1>
              <a
                className="App-link"
                href="https://github.com/NadiaLayraAziza"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Github Account
              </a>
            </header>
          </div>
  
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
