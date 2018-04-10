import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrettyPic from './components/Body.js';
import pic from './components/images/image.webp'
import Footer from './components/Footer.js';
import Header from './components/Header.js';

class Application extends React.Component {
  render() {
      let trips= {
          trip1:"#",
          trip2:"#",
          trip3:"#",
          trip4:"#"
        }
          return (
         <div className="App">
           <Header title="Wide World Travel 1"/>
           <PrettyPic pic={pic}/>
           <Footer trips={trips}/>
          </div>
            );
          }
        }

ReactDOM.render(<Application />, document.getElementById('root'));
