import './globals.css'
import type { Metadata } from 'next'
export const metadata:Metadata={title:'AuricVista Travel — Discover India',description:'A modern travel companion for discovering India, its history, food, stays and experiences.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
