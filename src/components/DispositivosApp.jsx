import { Container } from "react-bootstrap"
import { AccionesApp } from "./AccionesApp"
import { TablaApp } from "./TablaApp"

export const DispositivosApp = () => {
  return (
    <Container>
      <AccionesApp></AccionesApp>
      <TablaApp></TablaApp>
    </Container>
  )
}
