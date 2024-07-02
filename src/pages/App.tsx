import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { HeadTags } from '../utils/types/HeadTags'
import NotFound from './404'
import CalculatorMain from '../components/CalculatorMain'

function App() {
  const seoProps: HeadTags = {
    title: 'Calculator App',
    description: 'Calculator with 3 different themes',
    og: {
      title: 'Calculator App',
      description: 'Calculator with 3 different themes',
      alt: 'Front End Mentor Solution'
    },
    noindex: false
  }
  const NotFoundPage: HeadTags = {
    title: '404: Not Found',
    description: 'page not found',
    og: {
      title: '404: Not Found',
      description: 'page not found',
      alt: '404'
    },
    noindex: false
  }

  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path='/'
          element={
            <DefaultLayout seoProps={seoProps}>
              <CalculatorMain />
            </DefaultLayout>
          }
        />
        {/* 404 Not Found Page */}
        <Route
          path='*'
          element={
            <DefaultLayout seoProps={NotFoundPage}>
              <NotFound />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
