export default function Post(){
    return (
        <div className="post">
        <div className="image">
         <img src="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg" alt=""/>
        </div>        
        <div className="texts">
          <h2>Lamborghini matt-black edition</h2>
          <p className="info">
            <a className="author">Yashraj</a>
            <time>2024-01-31 15:45</time>
          </p>
          <p className="summary">Automobili Lamborghini is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.</p>
        </div>
      </div>
    );
}