import Head from 'next/head';
import HomePage from '../components/Home';

const Home = () => (
  <div className="container">
    <Head>
      <title>LML Documentation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage />
  </div>
);

export default Home;