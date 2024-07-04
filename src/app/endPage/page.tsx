'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@mui/material';

enum Restaurants {
  pop = 'Pop Vegan',
  mais = 'Mais Burguinho',
  mexi = 'Mexicanissimo',
  coruja = 'A coruja',
  prime = 'Prime Dog',
  bawa = 'Bawarchi',
  sao = 'São Saruê',
}

enum Afters {
  adv = ' no Adventure Motel',
  beer = ' em algum barzinho',
  home = ' em casa',
}

interface Timer {
  days: number | string;
  hours: number | string;
  mins: number | string;
  secs: number | string;
}

const EndPage = () => {
  const [counter, setCounter] = useState<Timer>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  useEffect(() => {
    setCounter(calculateTime(2));
    const timer = setInterval(() => {
      setCounter(calculateTime(1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTime(a): Timer {
    let today = new Date(2023, 1, 5, 23, 52, 0);
    let counter = new Date().valueOf() - today.valueOf();

    let days = Math.floor(counter / (24 * 60 * 60 * 1000));
    let seconds: string | number = Math.floor((counter / 1000) % 60);
    let minutes: string | number = Math.floor((counter / (1000 * 60)) % 60);
    let hours: string | number = Math.floor((counter / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return {
      days: days,
      hours: hours,
      mins: minutes,
      secs: seconds,
    };
  }
  const searchParams = useSearchParams();
  const after = searchParams.get('after');

  const restaurant = searchParams.get('restaurant');
  return (
    <div className="backgroundImage h-screen flex items-center justify-center">
      <div className="w-[500px] bg-[#fdf5ef] rounded-3xl flex">
        <Typography className="text-xl font-bold text-blue-900">
          Minha princesa, não tive tempo de elaborar uma coleção de fotos,
          elogios e listar todos os motivos que me fazem ser completamente
          apaixonado por você, mas to olhando pra você agora, sentadinha no sofá
          e eu não podia ter mais certeza de que é com você que eu quero passar
          minha vida toda, de que eu amo tudinho que você é, seu jeito, seu
          rosto, seu corpo, seu cheiro.
          <br />
          <br />
          Queria que você soubesse que faz{' '}
          <span className="text-red-500">
            {counter.days} dias {counter.mins} minutos {counter.secs} segundos
          </span>{' '}
          que sou a pessoa mais feliz desse mundo e sim, todo esse tempo foi
          namorando você ❤️ Quero agradecer por cada segundo do seu lado porque
          assim eu consigo expressar um pouquinho do que eu sinto, você é a
          coisinha mais especial do mundo todo. Amo você demais!
          <br />
          <br />E por último, mas não menos importante, gostaria de deixar
          registrado que teremos um jantar romântica no restaurante{' '}
          <span className="text-red-500">{Restaurants[restaurant]}</span> e
          depois um after maravilhoso
          <span className="text-red-500">{Afters[after]}</span>
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default EndPage;
