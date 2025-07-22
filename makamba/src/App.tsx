import Header from "./components/Header"
import Main from "./layout/section-main/Main"
import { ThemeProvider } from "./components/theme-provider"

export default function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
      <Header/>
      <Main/>
    </ThemeProvider>
  )
}
