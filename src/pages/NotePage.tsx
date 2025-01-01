import React from 'react';
import { Rate } from 'antd';
import { NotePage as NotePageData } from '../../data.json';

const NotePage = () => {
  return (
    <div className="NotePage" id="note">
      <h1> {NotePageData.title} </h1>
      <p>{NotePageData.description}</p>
      <div>
        {Object.entries(NotePageData.Data).map((item, index: number) => {
          return (
            <article key={index}>
              <div>
                <img
                  className="message_form"
                  src="/Note/message.png"
                  alt=""
                  width={20}
                />
                <p>{item[1].description}</p>
                <Rate value={item[1].rate} />
              </div>
              <span>
                <img loading="lazy" src={item[1].img} alt="" />
                <h5> {item[1].name} </h5>
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default NotePage;
