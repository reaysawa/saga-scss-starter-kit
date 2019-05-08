import React from 'react'
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'

export function MainLayout({children}) {
  return (
    <main>
      <section className="nav-section">
        <Breadcrumbs />
      </section>
      <section className="main-body">
        {children}
      </section>
    </main>
  )
}

export default MainLayout

