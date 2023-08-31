import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I reset my password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reset your password, go to the login page and click on the
            "Forgot Password" link. Follow the instructions provided to reset
            your password.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What payment methods do you accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept various payment methods, including credit cards (Visa,
            Mastercard, American Express), PayPal, and bank transfers. You can
            select your preferred payment method during the checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How long does shipping take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Shipping times may vary depending on your location and the shipping
            method chosen. Typically, our standard shipping takes 3-5 business
            days, while express shipping delivers within 1-2 business days.
            Please note that these are general estimates, and actual delivery
            times may differ.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
