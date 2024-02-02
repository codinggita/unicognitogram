import logo from './logow.png';
import rect from './Rectangle-5.svg';
import arro from './Arrow1.svg';
import './App.css';


function App() {
  return (
    <>
    <div className='bod'>
    <div className="text1">
    <p style={{ color: '#F53816', fontFamily: 'Praise' }}>You have gone Unicognito</p>
    </div>
    <div className="text2">
    <p style={{ color: '#FFFFFF', fontFamily: 'Playfair Display' }}>UNICOGNITO</p>
    </div>
    <div className="applogo">
      <img src={logo} className="logoo" alt="logo" />
    </div>
    
    <a href="http://localhost:3000/home/signup" target="_blank" rel="noopener noreferrer">
        <button className='btn' >
        <img className='rec' alt="" src={rect}/>
        <div className='laun' style={{ color: '#FFFFFF', fontFamily: 'Hammersmith One' }}>LAUNCH</div>
        <img className='arrow' alt="" src={arro} />
        </button>
    </a>  
    </div>
    </>
  );
}


export default App;
