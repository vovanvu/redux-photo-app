import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const initialValue = {
    title: '',
    category: null,
    photo: ''
  }



  // npm i --save react-select
  return (
    <Formik initialValues={initialValue}
    onSubmit={values => console.log('Submit', values)}
    >
      {formikProps => {
        // do something here
        const {values, errors, touched} = formikProps;
        console.log({values, errors, touched});

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
            
              label="Title"
              placeholder="Eg: Wow nature...."
            />

            <FastField
              name="category"
              component={SelectField}
            
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
      
            <FormGroup>
              <Button color="primary" type='submit'>Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;