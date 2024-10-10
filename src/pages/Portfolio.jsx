import '../App.css'

export default function Portfolio() {
  return (
    <div className=" text-white min-vh-100 p-4 ">
      <h1>Portfolio</h1>

      <div className="portfolio-container text-center">
        <div className="row">
          <div className="col">
            <a href="https://pac-overflow.onrender.com/api/posts/">
              <img
                src="/images/Video-Games-Blog.jpg"
                alt="PAC-Overflow"
                className="img-fluid"
              />
            </a>
            <p>PAC-Overflow</p>
          
          
            <a href="https://the-great-code-calamity.github.io/tune_tracker/">
              <img
                src="/images/medium.png"
                alt="Tune Tracker"
                className="img-fluid"  
              />
            </a>
            <p>Tune Tracker</p>
         </div>
            <div className="col">
            <a href="https://footy-net.onrender.com/">
              <img
                src="/images/istockphoto-1440483244-612x612.jpg"
                alt="FootyNet"
                className="img-fluid"
              />
            </a>
            <p>FootyNet</p>
            <a href="https://jguzman87.github.io/weather-dashboard/">
              <img
                src="/images/watercolor-weather-effects-collection_23-2149115331.avif"
                alt="Weather Dashboard"
                className="img-fluid"
              />
            </a>
            <p>Weather Dashboard</p>
            </div>
          </div>
        </div>
        </div>
     
  );
}
