import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="relative w-full hero-section h-[780px]">
     <img src="/images/bg.jpeg" className='w-full h-full absolute top-0 left-0 object-cover object-center'/>
    <div className="mx-auto max-w-[1500px] z-10 relative pt-18 px-5">
      <div className="transform -translate-x-[40px] sm:-translate-x-[70px] xl:translate-x-0 xl:-ml-5 logo"><img src="/images/white-logo.png" className='w-[670px]' alt="logo" /></div>

      <p className=' xl:ml-16 text-white hero-content opacity-95 text-2xl mt-16 pt-10'>
      Sjöström Skärgård är ett välrenommerat & heltäckande byggföretag som utför alla vanligt förekommande byggarbeten vid byggnation och snickeri, renoveringar, tillbyggnader och platsbyggda möbler.
<br /><br />
Vi hjälper privatpersoner, fastighetsägare, bostadsrättsföreningar och företag i Stockholms Skärgård med omnejd. Inget jobb är för litet eller stort för oss.
<br /><br />

Välkommen att kontakta oss idag på 072 857 90 13
<br />
Jan Sjöström

      </p>
    </div>
    </div>


   
   <div className="w-full mt-10 mb-7">
    <div className="mx-auto max-w-[1500px] main-flex px-5 flex gap-7 justify-between">
    <div>
          <div className="font-bold text-2xl mb-3">TJÄNSTEUTBUD:</div>
          <div className="flex flex-col sm:flex-row sm:justify-between max-w-full sm:max-w-[600px] gap-3">
              <div>
                  <div className='font-semibold text-lg opacity-95'>Byggnation och finsnickeri</div>
                  <div className='font-semibold text-lg opacity-95'>Totalentreprenad</div>
                  <div className='font-semibold text-lg opacity-95'>Bygglovsinsatser</div>
                  <div className='font-semibold text-lg opacity-95'>Platsbyggda möbler</div>
                  <div className='font-semibold text-lg opacity-95'>Tillbyggnader</div>
                  <div className='font-semibold text-lg opacity-95'>Attefallshus</div>
                  <div className='font-semibold text-lg opacity-95'>Inredning</div>
                  <div className='font-semibold text-lg opacity-95'>Måleri</div>
              </div>

              <div>
                  <div className='font-semibold text-lg opacity-95'>Altanbyggen</div>
                  <div className='font-semibold text-lg opacity-95'>Uteplatser</div>
                  <div className='font-semibold text-lg opacity-95'>Köks byten</div>
                  <div className='font-semibold text-lg opacity-95'>Eldstäder</div>
                  <div className='font-semibold text-lg opacity-95'>El-dragningar och anpassning</div>
                  <div className='font-semibold text-lg opacity-95'>Bryggor</div>
                  <div className='font-semibold text-lg opacity-95'>Muddring</div>
              </div>
          </div>

        <img src="/images/first-image.jpg" className='w-full mobileImages hidden my-6' />

                  
          <div className="font-bold text-2xl mb-2 mt-6">TOTALENTREPRENÖR</div>

          <p className='font-semibold text-lg opacity-95'>Företaget har genom väl utförda arbeten, tydlig kommunikation och servicekänsla utvecklat verksamheten. Vi jobbar idag med återkommande kunder & via rekommendationer. Sjöström Skärgård utför helhetsåtaganden som totalentreprenör till mindre renoveringar. Efter många år i byggbranschen har vi ett etablerat kontaktnät av många seriösa hantverkare inom alla yrkesgrupper som vi samarbetar regelbundet med. I kontaktnätet ingår arkitekter med känsla för skärgårdsmiljöer och tillhörande kunniga utförare såsom kontrollansvariga (KA).

              <br /><br />
              Fyll i formuläret så hjälper vi er med en kostnadsfri offert och tidsplan.

          </p>



          <img src="/images/second-image.jpg" className='w-full mobileImages hidden  mt-6' />



          <div className="button w-fit mt-7 bg-[#01687f] rounded-[5px] text-white font-bold relative text-center px-[15px] py-[0.5rem]"><Link to="/kontkat">KONTAKT/OFFERT</Link></div>




    </div>


    <div className="flex desktopImages flex-col gap-7">
        <img src="/images/first-image.jpg" className='w-[2900px]' />
        <img src="/images/second-image.jpg" className='w-[2900px]' />

    </div>


    </div>
   </div>
    
    </>
  )
}

export default Home