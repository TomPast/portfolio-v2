import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: window.innerWidth < 800,
    duration: 400,
    easing: 'ease-in-out-cubic',
    once: true,
  })

  AOS.refresh()
}
