import { Carousel } from 'react-carousel-minimal';

function Carousal() {
 const data = [
    {
      image: "https://m.economictimes.com/thumb/msid-72304068,width-1200,height-900,resizemode-4,imgsize-191408/money10-getty.jpg",

    },
    {
      image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg",

    },
    {
      image: "https://creditkarma-cms.imgix.net/wp-content/uploads/2018/02/struggling-financially-ask-help.jpg",

    },
    {
      image: "https://www.investopedia.com/thmb/EEHqGds4vrYeJjjPiX0IiMBGcW4=/680x440/filters:fill(auto,1)/bank-5bfc2ff2c9e77c00519b738d.jpg",

    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lsXPp5K6ljRmHPPCQtlqe4Ao8jv_FFfcaw&usqp=CAU",

    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Caraousel">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 10px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="600px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="black"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "400px",
              margin: "6px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousal;