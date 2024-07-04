import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import coruja from '../../images/coruja.jpg';
import Image from 'next/image';
import mexi from '../../images/logo_mexicanissimo.png';
import cow from '../../images/unnamed.webp';
import Background from '../components/Background';

const NewOptionsPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Background />

      <div className="w-[1000px] bg-[#fdf5ef] rounded-3xl flex">
        <Card className="w-1/2 mx-10">
          <Link
            href={{
              pathname: 'after',
              query: {
                restaurant: 'coruja',
              },
            }}
          >
            <Image src={coruja} alt="" className="w-[420px] h-[200px]" />
          </Link>
          <Link
            href={{
              pathname: 'after',
              query: {
                restaurant: 'coruja',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                A coruja - Churrasco vegano
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compaixão sem depender de outras espécies animais. Nossa
                filosofia é pratica de vida e compaixão. Pratos deliciosos
                churrascos saborosos que você encontra aqui na 1°Churrascaria
                Vegana do Brasil!!
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card className="w-1/2 mx-10">
          <Link
            href={{
              pathname: 'after',
              query: {
                restaurant: 'mexi',
              },
            }}
          >
            <Image src={mexi} alt="" className="w-[420px] h-[200px]" />
          </Link>
          <Link
            href={{
              pathname: 'after',
              query: {
                restaurant: 'mexi',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mexicanissimo - Rodizio Mexicano
              </Typography>
              <Typography variant="body2" color="text.secondary">
                O MELHOR E MAIS COMPLETO RODÍZIO MEXICANO DE SP
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default NewOptionsPage;
