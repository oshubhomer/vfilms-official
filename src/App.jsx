import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceFilm from './pages/ServiceFilm.jsx'
import ServiceBranding from './pages/ServiceBranding.jsx'
import ServiceArt from './pages/ServiceArt.jsx'
import TheirStory from './pages/TheirStory.jsx'
import OurStory from './pages/OurStory.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

function Navbar(){
  const items = [
    {to:'/services', label:'Services'},
    {to:'/their-story', label:'Their Story'},
    {to:'/our-story', label:'Our Story'},
    {to:'/', label:'Varnan'}
  ]
  return (
    <header className='sticky top-0 z-50 bg-brand-bg/80 backdrop-blur'>
      <div className='mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-2'>
          <span className='text-brand-accent font-display italic text-2xl'>V</span>
          <span className='text-gray-900'>Films</span>
        </Link>
        <nav className='hidden md:flex items-center gap-8 text-sm'>
          {items.map(i=> <Link key={i.label} to={i.to} className='hover:text-brand-accent'>{i.label}</Link>)}
          <Link to='/contact' className='ml-2 inline-flex items-center rounded-full bg-brand-accent text-white px-4 py-2 text-sm hover:opacity-90'>Let’s Talk</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer(){
  return (<footer className='py-10 text-center text-sm text-gray-600'>© {new Date().getFullYear()} V Films • All rights reserved</footer>)
}

export default function App(){
  return (
    <BrowserRouter basename="/vfilms-official">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/film' element={<ServiceFilm/>}/>
        <Route path='/services/branding' element={<ServiceBranding/>}/>
        <Route path='/services/art' element={<ServiceArt/>}/>
        <Route path='/their-story' element={<TheirStory/>}/>
        <Route path='/our-story' element={<OurStory/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
