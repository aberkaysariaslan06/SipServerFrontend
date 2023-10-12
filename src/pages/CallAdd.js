import { Formik, Form, FieldArray, Field } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { FormField, Button, FormGroup, Grid } from 'semantic-ui-react';
import CallService from '../services/callService';



export default function CallAdd() {

  const [calls, setCalls] = useState([]);

/*
  useEffect(() => {
    let callService = new CallService()
    callService.addCall().then((result) => setCalls(result.data.data));
  }, []);
  */

  const initialValues = {
    calls: [
      {
        callName: '',
        callId: '',
        durationSecond: '',
        callStatus: '',
      },
    ],
  };

  const schema = Yup.object({
    calls: Yup.array().of(
      Yup.object({
        callName: Yup.string().required('isim zorunlu'),
        callId: Yup.string().required('Call Id zorunlu'),
        durationSecond: Yup.string().required('Duration Second zorunlu'),
        callStatus: Yup.string().required('Call Status zorunlu'),
      })
    ),
  });
  
  const callService = new CallService();
  const handleSubmit = (values) => {
    //gonder butonuna tiklandiginda calisan 
    callService.addCall(values.calls).then((response)=> {
      if(response.data.success) {
        console.log("Veri basariyla eklendi", response.data.data);
        setCalls(response.data.data)
      } else {
        console.error("Hata olustu : ", response.data.message)
      }
      //console.log(response.data);
    });
    //.catch((error)=> {
      //console.error("Hata olustu : ", error);
    };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(handleSubmit) => {
          //console.log(values);
        }}
      >
        {(formikProps) => (
          <Form className="ui form">
            <FieldArray
              name="calls"
              render={(arrayHelpers) => (
                <div>
                  {formikProps.values.calls.map((call, index) => (
                    <div key={index}>
                      <FormGroup widths="equal">
                        <FormField>
                          <label>Call Id</label>
                          <Field
                            name={`calls[${index}].callId`}
                            placeholder="Call Id"
                          />
                        </FormField>
                        <FormField>
                          <label>Call Name</label>
                          <Field
                            name={`calls[${index}].callName`}
                            placeholder="Call Name"
                          />
                        </FormField>
                        <FormField>
                          <label>Call Duration</label>
                          <Field
                            name={`calls[${index}].durationSecond`}
                            placeholder="Duration Second"
                          />
                        </FormField>
                        <FormField>
                          <label>Call Status</label>
                          <Field
                            name={`calls[${index}].callStatus`}
                            placeholder="Call Status"
                          />
                        </FormField>
                      </FormGroup>
                      <Button
                        inverted
                        color="orange"
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Sil
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            />
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Button
                    inverted
                    color="orange"
                    type="button"
                    onClick={() =>
                      formikProps.setFieldValue('calls', [
                        ...formikProps.values.calls,
                        {
                          callId: '',
                          callName: '',
                          durationSecond: '',
                          callStatus: '',
                        },
                      ])
                    }
                  >
                    Yeni Ekle
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button inverted color="orange" type="submit">
                    Gönder
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button
                    inverted
                    color="orange"
                    type="button"
                    onClick={() => {
                      formikProps.setFieldValue('calls', []);
                    }}
                  >
                    Tümünü kaldır 
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}