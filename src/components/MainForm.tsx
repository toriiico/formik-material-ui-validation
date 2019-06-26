import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import InputLabel from "@material-ui/core/InputLabel"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Select, MenuItem } from "@material-ui/core"

interface MainProps extends React.Props<{}> {}

const Contact: React.FC<MainProps> = props => {
  return (
    <React.Fragment>
      <Container>
        <Card style={{ width: 800 }}>
          <Formik
            initialValues={{
              email: "",
              name: "",
              comment: "",
              area: -1,
              gender: [],
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
              setSubmitting(true)
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Required"),
              name: Yup.string().required("Required"),
              comment: Yup.string().required("Required"),
              area: Yup.number()
                .min(0, "Required")
                .required("Required"),
              gender: Yup.array().required("Required"),
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props

              return (
                <Form>
                  <TextField
                    label="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.name && touched.name && errors.name}
                    margin="normal"
                  />
                  <TextField
                    // error={errors.email && touched.email}
                    label="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email && touched.email && errors.email}
                    margin="normal"
                  />
                  <TextField
                    label="comment"
                    name="comment"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.comment && touched.comment && errors.comment}
                    margin="normal"
                  />

                  <TextField
                    label="area"
                    name="area"
                    select
                    value={values.area}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    style={{ width: 100 }}
                    helperText={errors.area && touched.area && errors.area}
                  >
                    <MenuItem value={-1}>-</MenuItem>
                    <MenuItem value={0}>JPN</MenuItem>
                    <MenuItem value={1}>USA</MenuItem>
                    <MenuItem value={2}>TWN</MenuItem>
                  </TextField>

                  <FormControl margin="normal">
                    <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Select
                      name="gender"
                      multiple={true}
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: 100 }}
                      renderValue={selected => (selected as string[]).join(", ")}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    <FormHelperText>{errors.gender && touched.gender && errors.gender}</FormHelperText>
                  </FormControl>

                  <Box>
                    <Button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
                      Reset
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Box>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default Contact
