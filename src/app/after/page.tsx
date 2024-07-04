'use client';
import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import adv from '../../images/adv.jpeg';
import beer from '../../images/beer.jpeg';
import home from '../../images/home.png';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const AfterDinnerPage = () => {
  const searchParams = useSearchParams();

  const param = searchParams.get('restaurant');
  return (
    <div className="backgroundImage h-screen flex items-center justify-center">
      <div className="w-[1000px] bg-[#fdf5ef] rounded-3xl flex">
        <Card className="w-1/3 mx-10">
          <Link
            href={{
              pathname: 'endPage',
              query: {
                restaurant: param,
                after: 'adv',
              },
            }}
          >
            <Image src={adv} alt="" className="w-[420px] h-[200px]" />
          </Link>
          <Link
            href={{
              pathname: 'endPage',
              query: {
                restaurant: param,
                after: 'adv',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Adventure Motel{' '}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Muitas montanhas, natureza, piscinas naturais e exercícios
                físicos hihihi
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card className="w-1/3 mx-10">
          <Link
            href={{
              pathname: 'endPage',
              query: {
                restaurant: param,
                after: 'beer',
              },
            }}
          >
            <Image src={beer} alt="" className="w-[420px] h-[200px]" />
          </Link>
          <Link
            href={{
              pathname: 'endPage',
              query: {
                restaurant: param,
                after: 'beer',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Algum barzinho tomar uma cervejinha trincando{' '}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </Link>
        </Card>
        <Card className="w-1/3 mx-10">
          <Link
            href={{
              pathname: 'endPage',
              query: {
                restaurant: param,
                after: 'home',
              },
            }}
          >
            <Image src={home} alt="" className="w-[333px] h-[200px]" />
          </Link>
          <Link
            href={{
              pathname: 'endPage',
              query: {
                restaurant: param,
                after: 'home',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Voltar pra casa{' '}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ver um filminho, ficar bem enroladinha em mim e se amar muito
                bem coladinhos
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default AfterDinnerPage;
