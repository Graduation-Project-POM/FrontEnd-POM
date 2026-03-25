import { ExternalResources } from "../Components/ResourcesComponents/externalResources/external-resources.tsx"
import { Header } from "../Components/ResourcesComponents/header/header.tsx"
import Books from "../Components/ResourcesComponents/books/book.tsx"
import Problems from "../Components/ResourcesComponents/problems/problems.tsx"
import Worksheets from "../Components/ResourcesComponents/worksheets/worksheets.tsx"
import Playlist from "../Components/ResourcesComponents/playlist/playlist.tsx"
import { Box } from "@mui/material"
import Material from "../Components/ResourcesComponents/trainingMaterial/material.tsx"

function Resources() {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      <Header />
      <Books />
      <Problems />
      <Worksheets />
      <Material />
      <Playlist />
      <ExternalResources />
      
    </Box>
  )
}

export default Resources
