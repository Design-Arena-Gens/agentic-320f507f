'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Loader from '@/components/Loader'

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => <Loader />
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<Loader />}>
        <Scene3D />
      </Suspense>
      <Menu />
      <About />
      <Contact />
    </main>
  )
}
