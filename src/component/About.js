import React,{useState} from 'react'
import BannerImg1 from "../images/about1.png"
import HImg1 from '../images/history1.png'
import HImg2 from '../images/history2.png'
import HImg3 from '../images/history3.png'
import HImg4 from '../images/history4.png'
import data from '../dataQuestion'
import Question from '../Question'
import Footer from '../Footer'
import Gallery from '../Gallery'
const About = () => {
 const[questions,setQuestions] = useState(data)
  return (
    <div>
      <section className='section-center'>
        <div className='banner-about'>
          <div className='banner-about-img'>
            <img src={BannerImg1} alt='' />
            <div className='about-banner-details'>
              <h3>
                le <span>g i e mame doussou</span>, passion et savoir-faire
                artisanal familial
              </h3>
            </div>
          </div>
        </div>
        <div className='about-history'>
          <div className='history-container'>
            <article className='history-details'>
              <h3>l'histoire du g i e mame doussou</h3>
              <h5>un savoir-faire artisanal familial</h5>
              <p>
                L'Élevage du poulet je l'ai hérité de ma grande mere mame
                Doussou camara qui etait une saint louisaine gres pieu se qui
                Sadonnait à l'Élevage du poulet et parmi ses sujets il y avait
                un grand coq qu'lle appelait Bocar; Bocar était un cousin de mon
                Grand-père Baîdy mon père Semou faisait l'Élevage du poulet
                ainsi mon oncle Léonce Gueye de Saint-Louis donc c'est un
                héritage puis pour avoir de bonnes viandes de qualité ils faut
                allait vers l'Élevage écologique.
              </p>
            </article>
            <article className='history-content'>
              <div>
                <img src={HImg1} alt='' />
                <h3>soutien des producteurs locaux</h3>
              </div>
              <div>
                <img src={HImg2} alt='' />
                <h3>maitrise de la decoupe</h3>
              </div>
              <div>
                <img src={HImg3} alt='' />
                <h3>produits issus des circuits courts</h3>
              </div>
              <div>
                <img src={HImg4} alt='' />
                <h3>viandes de qualite superieure</h3>
              </div>
            </article>
          </div>
        </div>
        <div className='questions'>
          <h4>questions & reponses</h4>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </div>
        <Gallery/>
      </section>
      <Footer />
    </div>
  )
}

export default About