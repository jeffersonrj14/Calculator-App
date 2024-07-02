import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  noindex?: boolean
}

const DEFAULT_TITLE_PAGE = 'Front End Mentor Solution by RJ Jefferson'

const SEO = ({ title, noindex }: SEOProps) => {
  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <title>{title ? `${title} | Solution by RJ Jefferson` : DEFAULT_TITLE_PAGE}</title>
      {noindex && <meta name='robots' content='noindex' />}
      <meta name='generator' content='Vite' />
    </Helmet>
  )
}

export default SEO
