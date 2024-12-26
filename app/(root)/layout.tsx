import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

const layout = ({ children}: {
  children: ReactNode
}) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
export default layout