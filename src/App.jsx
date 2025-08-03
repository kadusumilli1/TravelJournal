import Header from "./components/Header"
import Entry from "./components/Entry"
import entries from "./data"

export default function App() {
  const entryElements = entries.map((entry) => 
    <Entry
      img={{
        src: entry.img.src,
        alt: entry.img.alt
      }} // or entry.img as img is an object
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  )
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}