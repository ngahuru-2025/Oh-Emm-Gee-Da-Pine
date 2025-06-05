/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import LandingPage from './components/LandingPage'
import Review from './components/Review'


const routes = createRoutesFromElements(
  <>
    {/* Route for the landing page */}
    <Route index element={<LandingPage />} />{' '}
    {/* Route for the products page */}
    <Route path="/products" element={<App />} />{' '}
    {/* Route for the reviews page - assuming review needs product id */}
    <Route path="/reviews/:id" element={<Review />} />
    {/* Route to 404 */}
    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
  </>,
)

export default routes
