import React from "react";
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  searchImage: "",
};
export default function SeachComponent({ setImages, setHeadings }) {
  const validationSchema = Yup.object({
    searchImage: Yup.string().required("Required text!"),
  });

  const onSubmit = async (values) => {
    console.log("values", values);
    const {
      data: {
        photos: { photo },
      },
    } = await Axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${values.searchImage}&per_page=24&format=json&nojsoncallback=1`
    );
    console.log(photo);
    setImages(photo);
    setHeadings(values.searchImage + " " + "Images");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <h1 className="heading">Snap Shot</h1>
          <Field
            className="field-component"
            type="text"
            name="searchImage"
            placeholder="Search ...."
          ></Field>
          <button type="submit">Search</button>
          <ErrorMessage name="searchImage" />
        </div>
      </Form>
    </Formik>
  );
}
