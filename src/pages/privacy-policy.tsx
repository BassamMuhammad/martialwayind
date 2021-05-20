import { Box, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const PrivacyPolicy = () => {
  const privacyPolicy = [
    "1. Who is the data controller?",
    "2. What personal data do we collect?",
    "3. How do we use the personal data we collect?",
    "4. What is our legal basis for processing your personal data?",
    "5. Who will process your data?",
    "6. Data transfer outside the European Union",
    "7. How long do we keep your data?",
    "8. Your rights",
    "9. Security",
    "10. Complaints",
    "11. Changes to this notice",
    "12. Legislative references and useful links",
  ]
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      {privacyPolicy.map(item => (
        <Box marginTop={5}>
          <Typography variant="h5">{item}</Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            accusamus voluptas animi itaque, assumenda reiciendis doloremque
            quaerat consequuntur aperiam iusto autem doloribus deserunt
            laboriosam dolorem minima illum ratione placeat. Minima?
          </Typography>
        </Box>
      ))}
    </Layout>
  )
}

export default PrivacyPolicy
