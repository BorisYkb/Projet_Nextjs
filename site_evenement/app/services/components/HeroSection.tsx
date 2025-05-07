// app/services/plateforme/components/HeroSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  image: string
}

export default function HeroSection({ title, subtitle, image }: HeroProps) {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      delay: 0.3,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      delay: 0.5,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="relative px-4 py-20 md:py-32 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div ref={imageRef} className="w-full max-w-md lg:max-w-lg">
            <Image
              src={image}
              alt="Illustration service"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
