import React from 'react';
import sao from '../../images/saosarue.jpeg';
import Image from 'next/image';
import prime from '../../images/prime.jpeg';
import bawa from '../../images/bawarchi.jpeg';
import pop from '../../images/pop.png';
import mais from '../../images/mais.png';

import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import Background from '../components/Background';

const ClassicOptionsPage = () => {
  return (
    <div className=" h-screen flex  items-center justify-center">
      <Background />

      <div>
        <div className="w-[1000px] bg-[#fdf5ef] rounded-3xl flex">
          <Card className="w-1/3 mx-10">
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'sao',
                },
              }}
            >
              <Image src={sao} alt="" className="w-[333px] h-[200px]" />
            </Link>
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'sao',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  São Saruê
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Restaurante vegano que serve entradas regionais e pratos
                  compartilhados em um espaço descontraído e acolhedor.
                </Typography>
              </CardContent>
            </Link>
          </Card>
          <Card className="w-1/3 mx-10">
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'prime',
                },
              }}
            >
              <Image src={prime} alt="" className="w-[333px] h-[200px]" />
            </Link>
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'prime',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Prime Dog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Calçada com pátio e lanchonete que serve cachorros-quentes,
                  hambúrgueres, sucos e várias opções vegetarianas.
                </Typography>
              </CardContent>
            </Link>
          </Card>
          <Card className="w-1/3 mx-10">
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'bawa',
                },
              }}
            >
              <Image src={bawa} alt="" className="w-[333px] h-[200px]" />
            </Link>
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'bawa',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bawarchi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Restaurante de comida indiana com pratos feitos no forno
                  Tandoor, como gosht sheekh kabab ou pães naan.
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </div>
        <div className="w-[1000px] bg-[#fdf5ef] rounded-3xl flex flex-row justify-start mt-10">
          <Card className="w-[255px] mx-10">
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'pop',
                },
              }}
            >
              <Image src={pop} alt="" className="w-[333px] h-[200px]" />
            </Link>
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'pop',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pop Vegan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hamburgueria e pizzaria
                </Typography>
              </CardContent>
            </Link>
          </Card>
          <Card className="w-[255px] mx-10">
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'mais',
                },
              }}
            >
              <Image src={mais} alt="" className="w-[333px] h-[200px]" />
            </Link>
            <Link
              href={{
                pathname: 'after',
                query: {
                  restaurant: 'mais',
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mais Burguinho
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Temos qualidade, temos sabor, temos rodízio de mini-burgers,
                  mini-dogs, batata fritas e onion rings para você comer até
                  dizer chega, temos shakes fofos e temos mais!
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClassicOptionsPage;
