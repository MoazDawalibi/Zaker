import { ContactPage as ContactPageData } from '../../../data.json';

const Left = () => {
  return (
    <div className="Left">
      <h1> {ContactPageData.title} </h1>
      <p>{ContactPageData.description}</p>
      <div>
        {Object.entries(ContactPageData.Data)?.map((item, index) => {
          return (
            <span key={index}>
              <div>
                <img loading="lazy" src={item[1].image} alt="" />
                <h6> {item[1].title} </h6>
              </div>
              <p> {item[1].value} </p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Left;
