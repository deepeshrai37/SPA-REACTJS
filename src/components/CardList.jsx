import React from 'react';
import Cards from './Cards'; // Ensure the path is correct

const Items = [
  {
    title: 'DENTAL',
    image: '',
    link: '',
    body:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'
  },
  {
    title: 'HAIR AND SKIN',
    image: '',
    link: '',
    body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'
  },
  {
    title: 'TRAINING',
    image: '',
    link: '',
    body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'
  }
];

const CardList = () => {
  return (
    <>
      {Items.map((item, index) => (
        <Cards key={index} item={item} />
      ))}
    </>
  );
}

export default CardList;