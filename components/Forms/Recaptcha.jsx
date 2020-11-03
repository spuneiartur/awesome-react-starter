import React, { useEffect, useRef } from 'react';
import ReactRecaptcha from 'react-google-recaptcha';
import { useFormikContext } from 'formik';

const Recaptcha = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.execute();
    }
  }, [ref]);

  const { setFieldValue } = useFormikContext();
  const onChange = (value) => {
    if (value) {
      setFieldValue('g-recaptcha-response', value);
    }
  };

  const sitekey = process.env.RECAPTCHA_SITE_KEY;
  if (!sitekey) {
    return null;
  }

  return <ReactRecaptcha ref={ref} sitekey={sitekey} size="invisible" onChange={onChange} />;
};

export default Recaptcha;