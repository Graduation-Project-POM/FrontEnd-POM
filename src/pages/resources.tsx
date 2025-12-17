import { ExternalResources } from "../Components/ResourcesComponents/externalResources/external-resources.tsx"
import { Header } from "../Components/ResourcesComponents/header/header.tsx"
import Books from "../Components/ResourcesComponents/books/book.tsx"
import Problems from "../Components/ResourcesComponents/problems/problems.tsx"
import Worksheets from "../Components/ResourcesComponents/worksheets/worksheets.tsx"

function Resources() {
  return (
    <>
      <Header />
      <Books />
      <Problems />
      <Worksheets />
      <ExternalResources />
    </>
  )
}

export default Resources
