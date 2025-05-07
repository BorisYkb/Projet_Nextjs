// app/services/plateforme/components/DescriptionSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface DescriptionProps {
  sectionTitle: string
  sectionText: string
}

export default function DescriptionSection({ sectionTitle, sectionText }: DescriptionProps) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
          {sectionTitle}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {sectionText}
        </p>
      </div>
    </section>
  )
}
