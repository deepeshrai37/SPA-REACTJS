import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="customer-review">
      <h1>Reviews</h1>
       <div className='wrapper'>
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="card">
            <div className='image-container'>
              <img src={d.img} alt="" className="profile-image" />
            </div>
            <div className="card-content">
              <p className="card-title">{d.name}</p>
              <p className="card-review">{d.review}</p>
              <button className='read-more-button'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
    </div>
  
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default Reviews;