import React, {useState} from "react";

const TrafficLight = () => {
    const [lightOn, setLightOn] = useState('red');
    const [isPurpleAdded, setIsPurpleAdded] = useState(false);

    const handleClick = (color) => {
        setLightOn(color);
    };

    const togglePurpleLight = () => {
      setIsPurpleAdded(prevState => !prevState);
    };

    return (
      <>
        <nav className="navbar">
          <h3>Click on the lights to turn them on... or click on the button to the right if you're curious</h3>
          <button onClick={togglePurpleLight}>Click me!</button>
        </nav>  
        <div className="traffic-light-container">
          <div className="traffic-light">
          <div 
                        className={`light red ${lightOn === 'red' ? 'on' : ''}`} 
                        onClick={() => handleClick('red')}
                    />
                    <div 
                        className={`light yellow ${lightOn === 'yellow' ? 'on' : ''}`} 
                        onClick={() => handleClick('yellow')}
                    />
                    <div 
                        className={`light green ${lightOn === 'green' ? 'on' : ''}`} 
                        onClick={() => handleClick('green')}
                    />
                    {isPurpleAdded && (
                        <div 
                            className={`light purple ${lightOn === 'purple' ? 'on' : ''}`} 
                            onClick={() => handleClick('purple')}
                        />
                    )}
          </div>
          <div className="pole"></div>
        </div>     
      </>       
    );
}

export default TrafficLight;