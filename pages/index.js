import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mon site qui tue!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Aller sur <Link href="/surveys">Mes questionnaires</Link>
        </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.745542886644!2d2.3188726508101745!3d50.687548079408224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcfe65585fdecf%3A0x4159c8dde17510a6!2s990%20Rue%20Blamart%2C%2062129%20Ecques!5e0!3m2!1sfr!2sfr!4v1625580587836!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
      
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
