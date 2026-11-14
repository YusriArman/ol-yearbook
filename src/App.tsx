import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { defaultTerm, terms } from './terms'
import { TermSwitcher } from './TermSwitcher'

/** Shows the yearbook that matches the address, and the button to switch years. */
export default function App() {
  return (
    <BrowserRouter>
      {/* Suspense shows nothing for the split second a year's code is downloading. */}
      <Suspense fallback={null}>
        <Routes>
          {terms.map(({ slug, Yearbook }) => (
            <Route key={slug} path={`/${slug}`} element={<Yearbook />} />
          ))}
          {/* Any other address goes to the default year. */}
          <Route path="*" element={<Navigate to={`/${defaultTerm}`} replace />} />
        </Routes>
      </Suspense>
      <TermSwitcher />
    </BrowserRouter>
  )
}
