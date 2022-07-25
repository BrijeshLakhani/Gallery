import './App.css';
import img1 from './images/img2.jpg'
import img2 from './images/img3.jpg'
import img3 from './images/img4.jpg'
import img4 from './images/img5.jfif'
import img5 from './images/img6.jpg'
import img6 from './images/img7.jfif'
import img7 from './images/img8.jfif'

function App() {
  return (
    <div className="App">
      <frames>
      <div className="gallery">
       
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
          <img src={img3} alt=""/>
          <img src={img4} alt=""/>
          <img src={img5} alt=""/>
          <img src={img6} alt=""/>
          <img src={img7} alt=""/>
      </div>
      </frames>
    </div>
  );
}

export default App;
