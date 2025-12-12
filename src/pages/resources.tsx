import { Worksheet } from "../Components/ResourcesComponents/worksheets/worksheet.tsx";
import { Header } from "../Components/ResourcesComponents/header/header.tsx"
import Books from "../Components/ResourcesComponents/books/book.tsx"
import Problems from "../Components/ResourcesComponents/problems/problems.tsx"

function Resources() {
  return (
    <>
      <Header />
      <Books />
      <Problems/>
      <Worksheet />
    </>
  )
}

export default Resources
