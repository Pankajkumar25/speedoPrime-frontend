import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import ProfilePage from '@/components/profile/profile'
import React from 'react'

function page() {
  return (
    <div>
    <Navbar />

<main className="min-h-screen bg-black m-8">
   <ProfilePage />
</main>

<Footer /></div>
  )
}

export default page