import React from 'react';
import style from "./Card2.module.css"

const Card2 = ({ title,subtitle,description, image }) => (
  <section className={style.card2}>
  <h1>{title}</h1>
  <div className={style.container}>
    <div className={style.content} >
    
      <h2>{subtitle}</h2>
      <h3>{description}</h3>

      <button className={style.button}>
          <a href="https://discord.gg/uA2c3FPZ" target='_blank' rel="noreferrer">Clique aqui e Confira!</a>
        </  button>

    </div>
  
  <div className={style.image}>
  <img src={image} alt={title} />
  </div>
  </div>
</section>
);

export default Card2;
