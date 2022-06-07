import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
