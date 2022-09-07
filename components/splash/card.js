import globals from '../../styles/globals.module.css'
import styles from './card.module.css'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

function Card(props) {
	return (
		<div className={`${globals.glass} ${styles.card}`} style={{display: 'flex', flexDirection: 'column'}}>
      <div className={styles.greeting}>
				Selamat Datang!
			</div>
			<div className={styles.name}>
				(ID) Saya adalah seorang mahasiswa Informatika yang menyukai dan masih mencoba untuk bermain-main dengan dunia pemrograman. Jika Anda tertarik untuk berkenalan dengan saya, silakan cek kontak saya di bawah.
			</div>
			<div className={styles.name}>
				(EN) I am an undergraduate student of Informatics at Institut Teknologi Bandung. I like to tinker things about programming and web development. If you want to know more about me, you can check my contact below.
			</div>
			<div className={styles.name}>
				- Andika Naufal Hilmy a.k.a. dawetmaster -
			</div>
			<hr style={{borderTop:'1px solid rgba(255, 255, 255, 0.3)', width:'100%'}}/>
			<div style={{display: 'flex', gap: '2rem', margin: '1rem auto'}}>
				<div style={{display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center'}}>
					<a href='https://www.github.com/dawetmaster'>
						<BsGithub size={'4em'} />
					</a>
				</div>
				<div style={{display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center'}}>
					<a href='https://www.instagram.com/andhilmy'>
						<BsInstagram size={'4em'} />
					</a>
				</div>
				<div style={{display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center'}}>
					<a href='https://www.linkedin.com/in/andikahilmy'>
						<BsLinkedin size={'4em'} />
					</a>
				</div>
				<div style={{display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center'}}>
					<a href='mailto:andika.naufal48@gmail.com'>
						<FiMail size={'4em'} />
					</a>
				</div>
			</div>
		</div>
	);
}
export default Card;