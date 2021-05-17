import Head from 'next/head'
import {getPageFromSlug} from '@/lib/api-pages.js';
import Stage from '@/components/Stage.js';


export default function Home({title, description, works}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title}/>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
          <Stage contents={works}/>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const contents = await getPageFromSlug('home');
  return {
    props: {
      title: contents.title,
      description: contents.description,
      works: contents.works || [],
    },
  }
}

