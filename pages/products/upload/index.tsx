import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const categories = [
  {
    value: 'br-1',
    label: 'Bedroom'
  },
  {
    value: 'dr-1',
    label: 'Drawing Room'
  },
  {
    value: 'dr-2',
    label: 'Dining Room'
  },
  {
    value: 'kr-1',
    label: 'Kids room'
  }
];

const ProductUpload = () => {
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = useState(30);

  const handleChange2 = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Upload products</title>
      </Head>
      <PageTitleWrapper>
        <PageTitle
          heading="Product Form"
          subHeading="You can create a new product and upload from here"
          docs="#"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Product Name"
                      defaultValue="Write the name of product"
                    />

                    <TextField
                      id="outlined-number"
                      label="Product Price"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Select Inputs" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select from category"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                    >
                      {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Availability" />
              <Divider />
              <CardContent>
                <FormControlLabel
                  value="Ready to be shipped"
                  label="Ready to be shipped"
                  control={<Switch defaultChecked />}
                ></FormControlLabel>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Checkboxes &amp; Radios" />
              <Divider />
              <CardContent>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600]
                    }
                  }}
                />
                <Divider sx={{ my: 5 }} />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Sliders" />
              <Divider />
              <CardContent>
                <Box sx={{ width: 200 }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ mb: 1 }}
                    alignItems="center"
                  >
                    <VolumeDown />
                    <Slider
                      aria-label="Volume"
                      value={value}
                      onChange={handleChange2}
                    />
                    <VolumeUp />
                  </Stack>
                  <Slider
                    disabled
                    defaultValue={30}
                    aria-label="Disabled slider"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

ProductUpload.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductUpload;
