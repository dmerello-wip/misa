import Head from 'next/head'
import {getWorkFromSlug, getWorksSlugs} from '@/lib/api-pages.js';
import Header from '@/components/Header.js';


export default function Work({title, picture, description}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title}/>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Header/>
        <div className="detail">
          <div className="detail__title">
            {title}
          </div>
          <picture className="detail__picture">
            <img src={picture} alt={title}/>
          </picture>
        </div>
      </main>
    </div>
  )
}


export async function getStaticPaths() {
  // generate static paths of all deliveries on build
  const items = await getWorksSlugs();
  let paths = items.map((item) => `/works/${item}`);
  return {
    paths: paths || [],
    fallback: false
  };
}


export async function getStaticProps(context) {
  const {title, picture, description} = await getWorkFromSlug(context.params.slug);
  return {
    props: {
      title,
      picture,
      description
    },
  }
}

