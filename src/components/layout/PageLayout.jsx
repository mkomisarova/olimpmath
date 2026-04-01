import Footer from './Footer'
import Navbar from './Navbar'

export default function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="min-h-screen flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
