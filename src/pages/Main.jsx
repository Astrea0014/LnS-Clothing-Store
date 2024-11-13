import '../App.css';
import Slider from 'react-slick';
import sources from '../Data.jsx'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImagePresenter({ sources, altText }) {
  return (
    <picture>
      <source media='(min-width: 600px)' srcSet={sources.tablet}/>
      <source media='(min-width: 769px)' srcSet={sources.desktop}/>
      <img src={sources.mobile} alt={altText}/>
    </picture>
  );
}

function CarouselItem({ collectionName, sources, altText }) {
  return (
    <div className='carousel-item'>
      <ImagePresenter style={{zIndex:-1}} sources={sources} altText={altText}/>

      <div className='collection-header-container'>
        <p className='collection-name-label'>{collectionName}</p>
        <p className='collection-label'>COLLECTION</p>
      </div>
    </div>
  );
}

function OnSaleItem({ name, price, collectionName, sources }) {
  return (
    <div className='on-sale-item'>
      <img src={sources.mobile}/>
    </div>
  );
}

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const carouselItems = [
    {
      collectionName: 'Spirit Blossom',
      altText: 'Spirit Blossom Ahri',
      sources: sources['spirit-blossom-ahri']
    },
    {
      collectionName: 'The Coven',
      altText: 'Coven LeBlanc',
      sources: sources['coven-leblanc']
    },
    {
      collectionName: 'Café Cuties',
      altText: 'Café Cuties Sivir',
      sources: sources['cafe-cuties-sivir']
    },
    {
      collectionName: 'High Noon',
      altText: 'High Noon Evelynn',
      sources: sources['high-noon-evelynn']
    },
    {
      collectionName: 'Porcelain',
      altText: 'Porcelain Lux',
      sources: sources['porcelain-lux']
    },
    {
      collectionName: 'K/da All Out',
      altText: 'K/DA ALL OUT Akali',
      sources: sources['kda-all-out-akali']
    }
  ];

  return (
    <main>
      <header className='content-carousel'>
        <Slider {...settings}>
          {carouselItems.map((item) => {
            return (
              <CarouselItem {...item} className='carousel-item'/>
            );
          })}
        </Slider>
      </header>

      <span className='divider'></span>

      <section className='suggestions popular'>
        <h1>MOST WANTED</h1>

        <article>
          <OnSaleItem name='Ahri' price='1820' collectionName='Spirit Blossom' sources={sources['spirit-blossom-ahri']}/>
        </article>
      </section>

      <section className='suggestions new'>
        <h1>New collection drops</h1>
      </section>

      <section className='suggestions personal'>
        <h1>Just for you</h1>
      </section>
    </main>
  );
}