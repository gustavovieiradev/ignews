import Head from 'next/head'

import styled from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <h1 className={styled.title}>Hello world</h1>
    </>
  )
}
