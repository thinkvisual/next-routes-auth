import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <nav>
    <h1>David Helpdesk</h1>
    <Link href="/">Home</Link>
    <Link href="/news">News</Link>
  </nav>
  )
}