'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MenuLink({href, children}) {
    const currentPath = usePathname()
    //console.log(currentPath)
  return (
    <Link href={href} className={`p-2 bg-blue-900 text-white ${href == currentPath ? "bg-red-500" : ""}`}>{children}</Link>
  )
}

export default MenuLink
