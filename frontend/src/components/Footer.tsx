export default function Footer() {
  const currentYear = new Date().getFullYear()
  return <p>EventHub &copy; {currentYear}</p>
}
