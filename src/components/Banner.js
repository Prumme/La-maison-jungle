import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'La maison jungle'
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const recommendation = isSpring ?
        (<div>C'est le printemp, rempotez 🌱</div>) :
        (<div>Ce n'est pas le moment de rempoter</div>)
    console.log(currentMonth)
    return (
        <div className='lmj-banner'>
            <div>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            {recommendation}
        </div>
    )
}

export default Banner