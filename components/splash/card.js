import globals from '../../styles/globals.module.css'
import styles from './card.module.css'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Image from 'next/image'

function Card(props) {
	return (
		<div className={`${globals.glass} ${styles.card}`} style={{display: 'flex', flexDirection: 'column'}}>
			<div style={{
				width: '200px',
				height: '200px',
				margin: '0 auto',
			}}>
				<Image
					src="https://doc-00-3k-docs.googleusercontent.com/docs/securesc/s5n4e4cd1opfi9g4rqura49vn2rlb443/4eb0gg49915r12ahpmo3s5arejbi31lf/1698923775000/04170432554838318766/04170432554838318766/16sXg6hrOwLzChIpVC7Gn-6B8VgNbgoK-?e=view&ax=AI0foUrSkltyd6lyIGpgAh-vHAqZIcz4bR8wOMuFK43LaP3tz98ibGPC5hM1Sb2yEPqYLogNeoPtbEw8sLCbPB5kB8DXOz5N2t9ic2nXl8LyvTzeLPWgAbGZVPdaPyGqDQAXYgjl4Z3pEO1VunPokIXvxM-1OUYaZ7gXOMJ4VgIcBrDXUuCrimeHu-w20wDJozkTNFRxDLW9IGqOCy4AtfOccUmepD2jjBn399EisyJGO3hhUMtDWHnrXNyQPYRurUtTIb7BUztS6CJUSq2dOKmG_d67s1wYIf8BiENMc3b439CTcMxbaamAvTnjPpzIllAOsaP9oEFq9uHVAu03ClvyU-xUSGIC69R0mG79v0cryOb-BUpJgjI8FB4S31uNDNmsF9pNB94QmI2UAyz5NKofARS961HenYfG0yFghwtzyBNC2GOpIUlMPQ1-8qM2GPtI2DNcAsL108Pj41CrH4_KTJxV206VaHPnjB93y1XJCPuKQPq-Vzo15KR4yw2IePklH-aGzz5iYnTvLIa59wIZjqciHNaO2n_Nqb9Unlb6e0pglZ5pItMLnZWpFniYfQ0CFV74EGk4Vx6WCIFtFby3s_bmcn0QjG85yydts27YQmpP3C3Q79AaAw8vZiy4EaugJRnbqZGrQFZWa_iVV3RprsDIrSXZZ80jrR-9PNfAA14UiXgJg_X6NwihIFDtD_tz08uMVkXSSK_oERttA8WpOp8qBWlva_9YTehx0lkIJtHsV8b4ZKD9GOrKHYKtF8ukt1o6gtPZFFwDS05PQMVtL_ky1L5jubv-t1_IOyUCo7TBj1wymOnfmDvJRRnExyqXF8wpY_4SH2BGxkSCXloekqmTI7-kT9u4NEUxYFgfY-YCg6zOD2qkVfmIsIngFwZTr_scZtfcq2pbhq0V8qVbcgXjEl79ceqAN4yEvgeRgKyPUgcqkv01oIn6ELlv4dRqWBvdzcO2VdhSrDRIMc_1dL3m7Ku0SMbKhMY3lVBX-i27rvHdtZF3JyIAwxuzCNvipPjhXvprtz8W&uuid=b6dd31e2-88f3-4a8e-8e77-cc011556b7f9&authuser=0&nonce=le597ihd4qkpe&user=04170432554838318766&hash=aelgprse7s97p5m7au7rh9m328h0i5kl"
					alt="photo"
					width={200}
					height={200}
					objectFit='cover'
					style={{
						borderRadius: '50%',
					}}
					/>
			</div>
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