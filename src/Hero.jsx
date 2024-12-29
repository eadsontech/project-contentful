import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sunt. Beatae dignissimos laborum quae id error ipsum porro illum qui alias labore officia minus, dolores libero, earum ad. Commodi veniam repellendus cum autem perferendis odio magnam nostrum cupiditate facere vero!</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="hero image" />
            </div>
        </div>
    </section>
  )
}
export default Hero
