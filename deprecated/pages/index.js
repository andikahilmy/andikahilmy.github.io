import Head from 'next/head'
import Image from 'next/image'
import Splash from '../components/splash/splash'
import globals from '../styles/globals.module.css'
import styles from '../styles/home.module.css'
import githubSvg from '../public/github.svg'
import Card from '../components/splash/card'

const bgImage = 'pattern.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andika&apos;s Homepage</title>
        <meta name="description" content="dawetmaster.github.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Splash bg={bgImage}>
        <Card/>
      </Splash>
      
    </div>
  )
}
// <p>Photo by <a href="https://unsplash.com/@tricell1991?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Waranont (Joe)</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>

/*


          <h1>Selamat datang!</h1>
          <h4>Andika Naufal Hilmy</h4>
          <h5>a.k.a. dawetmaster</h5>
          <p>An undergraduate Informatics student who likes and still trying to tinker things about programming.</p>
          <a style={{margin: '1rem 0'}} href='mailto:andika.naufal48@gmail.com'>Kirimkan aku e-mail!</a>
          <br/>
          
          <br/>
          <a style={{margin: '1rem 0'}} href='https://www.github.com/dawetmaster'>GitHub</a>
          <br/>
          <br/>
          <a style={{margin: '1rem 0'}} href='https://www.linkedin.com/in/andikahilmy/'>LinkedIn</a>
          <br/>
          <br/>
          <a style={{margin: '1rem 0'}} href='https://www.instagram.com/andhilmy'>Instagram</a>

*/