import React from 'react';
import './ResultsPage.css'; // Import the CSS file

const resultData = {
    'Iron Feed Percentage': 55.17,
    'Silica Feed Percentage': 14.35,
    'Ore Pulp PH': 9.48686,
    'Percentage Silica Concentrate': 4.90,
};

const imageUri = 'http://res.cloudinary.com/ds90zherj/image/upload/v1703162022/q4unfqssb7yysqh5pc3m.jpg';

const ResultPage = () => {
    return (
        <div className="container">
            <div className="image-container">
                <img src={imageUri} alt="Descriptive Alt Text" />
            </div>
            <div className="data-container">
                {Object.entries(resultData).map(([key, value]) => (
                    <p key={key}><strong>{key}:</strong> {value}</p>
                ))}
            </div>
        </div>
    );
};

export default ResultPage;
