import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { faq } from "../data"
import Seo from "../components/seo"
const Faq: React.FC = () => {
  return (
    <Layout>
      <Seo title="Faq" />
      {["HOW TO SHOP", "PRICING & PAYMENT"].map(value => (
        <Box marginTop={5} key={value}>
          <Typography variant="h4">{value}</Typography>
          {faq[value].map((quest: string) => (
            <Box marginTop={0.5} key={quest}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={quest}
                  id={quest}
                >
                  <Typography>{quest}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Box>
      ))}
    </Layout>
  )
}
export default Faq
