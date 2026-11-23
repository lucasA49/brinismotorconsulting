import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
