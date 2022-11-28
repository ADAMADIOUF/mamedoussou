import React from 'react'
import valeurImg from "../images/valeur1.png"
import cateGoImg1 from '../images/catego1.png'
import cateGoImg2 from '../images/catego2.png'
import cateGoImg3 from '../images/catego3.png'
import cateGoImg4 from '../images/catego4.png'
import vImg1 from '../images/v1.png'
import vImg2 from '../images/v2.png'
import vImg3 from '../images/v3.png'
import vImg4 from '../images/v4.png'
import vImg5 from '../images/v5.png'
import vImg6 from '../images/v6 1.png'
import vImg7 from '../images/v7 1.png'
import vImg8 from '../images/v8.png'
import GImg1 from '../images/gie1.png'
import GImg2 from '../images/gie2.png'
import LogalImg2 from '../images/local2.jpeg'
import LastImg1 from '../images/last-home1.jpg'
import LastImg2 from '../images/last-home2.png'
import Products from './Products'
import Footer from '../Footer'
const Home = () => {
 
  return (
    <div>
      <header>
        <div className='banner'></div>
      </header>
      <section className='sectio valeur'>
        <div className='valeur-img'>
          <img src={valeurImg} alt='' />
        </div>
        <div className='valeur-details'>
          <h3>Goûtez à la saveur du terroir
            <span>chez mame dousso</span> </h3>
          <p>
            C’est avec un immense plaisir que je vous invite à découvrir ma
            production de volailles et de foie gras. J’élève dans ma ferme,des
            chèvres ,des moutons ,des canards,des poulets, et des pintades,des lapins issues
            de la région. A travers ma gastronomie, je vous propose des produits
            de qualité, d’une saveur exceptionnelle. Pour découvrir la diversité
            de mes produits, n’hésitez pas à visiter mon exploitation. Je vous
            garantis une expérience gustative enrichissante.
          </p>
        </div>
      </section>
      <section className='section-center gategory-home'>
        <div className='conatainer-gategory-home'>
          <article>
            <img src={cateGoImg1} alt='' />
            <div className='bg-div'></div>
            <h3>poulet</h3>
          </article>
          <article>
            <img src={cateGoImg2} alt='' />
            <div className='bg-div'></div>
            <h3>pigeon</h3>
          </article>
          <article>
            <img src={cateGoImg3} alt='' />
            <div className='bg-div'></div>
            <h3>lapin</h3>
          </article>
          <article>
            <img src={cateGoImg4} alt='' />
            <div className='bg-div'></div>
            <h3>canard</h3>
          </article>
        </div>
      </section>
      <section className=' section-center nos-viande'>
        <div className='container-nos-viande'>
          <article className='viande-1 v-1'>
            <img src={vImg1} alt='' />
          </article>
          <article className='viande-1 v-2'>
            <img src={vImg2} alt='' />
          </article>
          <article className='viande-1 v-3'>
            <img src={vImg5} alt='' />
          </article>
          <article className='viande-1 v-4'>
            <img src={vImg4} alt='' />
          </article>
          <article className='viande-1 v-5'>
            <img src={vImg3} alt='' />
          </article>
          <article className='viande-1 v-6'>
            <img src={vImg6} alt='' />
          </article>
          <article className='viande-1 v-7'>
            <img src={vImg7} alt='' />
          </article>
          <article className='viande-1 v-8'>
            <img src={vImg8} alt='' />
          </article>
        </div>
      </section>
      <section className='gie'>
        <div className='section-center'>
          <div className='container-gie'>
            <article className='gie-details'>
              <img src={GImg1} alt='' />
            </article>
            <article className='gie-details'>
              <img src={GImg2} alt='' />
            </article>
          </div>
        </div>
      </section>
      <section className='logal'>
        <div className='section-center'>
          <div className='logal-container'>
            <article className='logal-one'>
              <div className='logal-one-details'>
                <h3>
                  de la charcuterie faite maison et des producteurs locaux pour
                  des aperos gourmands
                </h3>
              </div>

              <div className='line-first'></div>
              <div className='line-second'></div>
              <h3>Choisir et acheter un poulailler</h3>
              <p>
                Avant l'arrivée de vos poules, vous devez penser à l'élément
                essentiel de leur future vie chez vous : le poulailler. Que vous
                choisissiez de l'acheter ou de le construire vous-même, votre
                choix va dépendre de l’espace disponible sur votre terrain, du
                nombre de poules envisagé et de l’élevage souhaité. Si vous
                devez acheter votre poulailler sur internet, faites attention
                aux petits prix : les poulaillers pas chers sont souvent de
                qualité et sécurité médiocres, vous mettriez alors vos poules en
                danger... veuillez toujours considérer les avis des internautes
                ayant acheté le produit. Le poulailler en bois reste la
                meilleure alternative si on pense protection de l’environnement
                et recyclage, même si le plastique peut aussi être recyclé.
                L’enclos s’avère nécessaire, c’est pourquoi il vaut mieux opter
                pour un poulailler avec enclos. Plastique ou bois, chaque sorte
                de poulailler présente ses avantages et ses inconvénients. Pour
                le poulailler en plastique, on peut de suite imaginer qu’il
                reste très facile à entretenir, c’est là son principal avantage.
                C’est un poulailler recyclable qui convient beaucoup plus aux
                citadins, soit donc au milieu urbain, il est prêt à poser et ne
                nécessite aucune préparation de travaux. Le poulailler en bois
                mérite un entretien régulier comme tout ce qui est en bois, et
                ce, même pour les bois les plus résistants. Cependant, sur le
                plan esthétique il sait s’adapter à tous les environnements,
                c’est pourquoi et très souvent il est privilégié. Effectivement,
                le poulailler en bois reste le modèle le plus prisé sur le
                marché. Design épuré, le bois est un excellent isolant thermique
                et acoustique. Ainsi les poules sont bien protégées de
                l’humidité, du plein soleil et des courants d’air. Le prix d’un
                poulailler en bois comparé à celui en plastique reste également
                très compétitif.
              </p>
            </article>
            <article className='logal-second'>
              <img src={LogalImg2} alt='' />
            </article>
          </div>
        </div>
      </section>
      <Products />
      <Footer />
    </div>
  )
}

export default Home