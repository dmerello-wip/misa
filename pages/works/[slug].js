import Head from 'next/head'
import {getWorkFromSlug, getWorksSlugs} from '@/lib/api-pages';
import Header from '@/components/Header';
import IconBack from '@/components/svg/IconBack';
import { useRouter } from 'next/router';

export default function Work({title, picture, description}) {
  const router = useRouter();

  const handleBack = (slug)=>{
    router.push(`/`);
  };

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
          <picture className="detail__picture">
            <img src={picture} alt={title}/>
          </picture>
          <div className="detail__content">
            <div className="detail__content__title">
              {title}
            </div>
          </div>
          <div className="detail__back">
            <button className="btn-withicon" onClick={handleBack}>
              <IconBack/>
              <span>back to gallery</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}


export async function getStaticPaths() {
  // generate static paths of all work pages on build
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

