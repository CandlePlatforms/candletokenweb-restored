import { Link as A, SxStyleProp, Box } from "theme-ui";
import candleLogo from "components/svgs/candle-logo";

type Props = {
  pushSx?: SxStyleProp;
  pushLogoSx?: SxStyleProp;
  pushEmailSx?: SxStyleProp;
  id?: string;
};

const LogoAndEmail = ({ pushSx, pushLogoSx, pushEmailSx, id }: Props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...pushSx,
    }}>
    <candleLogo isDark pushSx={{ mr: 4, ...pushLogoSx }} id={id} />
    <A
      href="mailto:contact@candlelabs.org"
      sx={{
        color: "primary",
        "&:hover": { color: "gradient.to" },
        ...pushEmailSx,
      }}>
      contact@candle.org
    </A>
  </Box>
);

export default LogoAndEmail;
