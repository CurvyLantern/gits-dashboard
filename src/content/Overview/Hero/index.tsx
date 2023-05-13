import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled
} from '@mui/material';

import Link from 'src/components/Link';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

// const LabelWrapper = styled(Box)(
//   ({ theme }) => `
//     background-color: ${theme.colors.success.main};
//     color: ${theme.palette.success.contrastText};
//     font-weight: bold;
//     border-radius: 30px;
//     text-transform: uppercase;
//     display: inline-block;
//     font-size: ${theme.typography.pxToRem(11)};
//     padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
//     margin-bottom: ${theme.spacing(2)};
// `
// );

// const MuiAvatar = styled(Box)(
//   ({ theme }) => `
//     width: ${theme.spacing(8)};
//     height: ${theme.spacing(8)};
//     border-radius: ${theme.general.borderRadius};
//     background-color: #e5f7ff;
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

// const TsAvatar = styled(Box)(
//   ({ theme }) => `
//     width: ${theme.spacing(8)};
//     height: ${theme.spacing(8)};
//     border-radius: ${theme.general.borderRadius};
//     background-color: #dfebf6;
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

// const NextJsAvatar = styled(Box)(
//   ({ theme }) => `
//   width: ${theme.spacing(8)};
//   height: ${theme.spacing(8)};
//   border-radius: ${theme.general.borderRadius};
//   background-color: #dfebf6;
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Gits Furniture Dashboard
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Please create an account or sign in
          </TypographyH2>
        </Grid>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div>input anything for the dummy purpose</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Box my={2}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="demo@dummy.com"
              />
            </Box>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="demo@dummy.com"
                type="password"
              />
            </div>
            <Box mt={3}>
              <Button variant="outlined" fullWidth>
                <Link href={'/dashboards/tasks'}>Submit</Link>
              </Button>
            </Box>
          </form>
        </div>
      </Grid>
    </Container>
  );
}

export default Hero;
