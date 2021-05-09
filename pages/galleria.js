import Head from 'next/head'
import {getPageFromSlug} from '@/lib/api-pages.js';
import Scroller from '@/components/Scroller';
import Test from '@/components/Test';


export default function Home({title, description, works}) {
  return (
    <div>
      <Head>
        <title>test</title>
        <meta name="description" content="to be implemented"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Scroller scrollType="horizontal">
          <Test works={works}/>
        </Scroller>
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

