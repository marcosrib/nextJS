import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}
export default function Home({ recommendedProducts }: HomeProps) {

  return (
    <div>
      <section>
      <Title>Teste</Title>
      <ul>
        {recommendedProducts.map(recommed =>{
          return (
            <li key={recommed.id}>
              {recommed.title}
            </li>
          )
        })}
      </ul>
      </section>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(' http://localhost:3333/recommended');
  const recommendedProducts = await response.json();
  return {
    props: {
      recommendedProducts
    }
  }
}
