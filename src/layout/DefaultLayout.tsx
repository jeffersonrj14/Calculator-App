import { ReactNode } from 'react'
import SEO from '../components/SEO/SEO'
import { HeadTags } from '../utils/types/HeadTags'
import Footer from '../components/shared/Footer'

interface DefaultLayoutProps {
  children: ReactNode
  seoProps: HeadTags
}

const DefaultLayout = ({ children, seoProps }: DefaultLayoutProps) => {
  return (
    <>
      <SEO {...seoProps} />
      <div>
        <main>{children}</main>
      </div>
      <div className='text-center'>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
