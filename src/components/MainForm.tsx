import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Select, MenuItem } from "@material-ui/core"

interface MainProps extends React.Props<{}> {}

const Contact: React.FC<MainProps> = props => {
  return (
    <React.Fragment>
      <Container>
        <Card style={{ width: 600 }}>
          <Formik
            initialValues={{
              email: "",
              name: "",
              comment: "",
              area: -1,
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
                    helperText={errors.area && touched.area && errors.area}
                  >
                    <MenuItem value={-1}>-</MenuItem>
                    <MenuItem value={0}>JPN</MenuItem>
                    <MenuItem value={1}>USA</MenuItem>
                    <MenuItem value={2}>TWN</MenuItem>
                  </TextField>

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
