import React from 'react';
import { HowItWork as HowItWorkData } from '../../data.json';

const HowItWork = () => {
  return (
    <div className="HowItWork" id="how_it_work">
      <h1> {HowItWorkData.title}</h1>
      <p>{HowItWorkData.description}</p>
      <div>
        <span>
          {Object.entries(HowItWorkData.Data)
            .slice(0, 2)
            .map((item, index) => {
              return (
                <article key={index}>
                  <img
                    loading="lazy"
                    className="scale"
                    src={item[1].img}
                    alt={`${index}`}
                  />
                  <div>
                    <h4>{item[1].title}</h4>
                    <p>{item[1].description}</p>
                  </div>
                </article>
              );
            })}
        </span>
        <img
          loading="lazy"
          className="scale"
          src="/HowItWorks/main.png"
          alt=""
        />
        <span>
          {Object.entries(HowItWorkData.Data)
            .slice(2, 4)
            .map((item, index) => {
              return (
                <article key={index}>
                  <img
                    loading="lazy"
                    src={item[1].img}
                    alt={`${item[1].img}`}
                  />
                  <div>
                    <h4>{item[1].title}</h4>
                    <p>{item[1].description}</p>
                  </div>
                </article>
              );
            })}
        </span>
      </div>
    </div>
  );
};

export default HowItWork;
