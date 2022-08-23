import React, {FC, useState} from 'react';
import s from './index.module.scss';
import {data} from "./data";


export const ForRuslick: FC = (props) => {
  return (
    <>
      <div className={s.Title}>Очкося наша , вітаємо тебе з Днем варення, з Днем народження !!!
        Ураааа!!!
      </div>
      <p className={s.Comment}>
        Щоб отримати доступ до привітань - натисни на кожну картинку
      </p>
      <div className={s.Component}>
        {data.map((item) => {
          return (
            <Greeting
              {...item}

            />
          )
        })}
      </div>
    </>

  );
};

type GreetingPropsType ={
  str:string,
  img: string
}
const Greeting: FC<GreetingPropsType> = ({str,img}) => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <button
      onClick={()=>setIsOpen(!isOpen)}
      className={s.Str}
      style={{
        backgroundColor: isOpen ? '': 'blueviolet',
        backgroundImage: isOpen ? '': `url(${img})`
    }}
    >
      {isOpen && str}
    </button>
  )
}
