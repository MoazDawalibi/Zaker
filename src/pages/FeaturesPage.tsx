import { Features } from '../../data.json';

const FeaturesPage = () => {
  console.log();

  return (
    <div className="FeaturesPage" id="features">
      <h1> {Features.title} </h1>
      <p> {Features.description}</p>
      <div>
        <span>
          {Object.entries(Features.Data).map((item, index) => {
            console.log(item, 'item');

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
        <img loading="lazy" className="scale" src={Features.mainImage} alt="" />
      </div>
    </div>
  );
};

export default FeaturesPage;
