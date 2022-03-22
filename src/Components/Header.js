import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'


const Header = () => {


  const [menu, setmenu] = useState("-right-full");



  return (
    <>
    <div className="w-full bg-white py-4">
         <div className="mx-auto max-w-[1500px] px-5 flex items-center justify-between">
                 <Link to="/"><img src="/images/logo.jpg" className='w-[170px] transform -translate-x-5' alt="logo" /></Link>
                 <nav className={`flex flex-col  px-3 pt-14 sm:pt-0 sm:right-0 sm:px-0 sm:flex-row gap-5 sm:gap-10 fixed top-0  sm:relative w-[300px] bg-white border-l-2 sm:border-none sm:w-auto h-screen z-50 sm:h-auto ${menu}`} style={{transition: "0.3s"}}>
                    <NavLink activeClassName="active" to="/hem" className='w-fit sm:w-auto font-[600]'>HEM</NavLink>
                    <NavLink exact activeClassName="active" to="/" className='w-fit sm:w-auto font-[600]'>OM OSS</NavLink>
                    <NavLink activeClassName="active" to="/projekt" className='w-fit sm:w-auto font-[600]'>PROJEKT</NavLink>
                    <NavLink activeClassName="active" to="/kontakt" className='w-fit sm:w-auto font-[600]'>KONTAKT</NavLink>
                    <i class="far fa-times cursor-pointer block sm:hidden absolute top-5 right-5 text-3xl"
                     onClick={() =>{
                      setmenu('-right-full')
                    }}
                    ></i>
                 </nav>
                 <i class="far fa-bars cursor-pointer block sm:hidden text-3xl"
                 onClick={() =>{
                   setmenu('right-0')
                 }}
                 ></i>
         </div>    
     </div>    
    </>
  )
}

export default Header