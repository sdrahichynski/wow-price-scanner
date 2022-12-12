import * as React from "react";
import * as C from "components";
import * as LC from "./components";
import * as LH from "./hooks";
import styles from "./price-scanner.module.scss";

const PriceScanner = () => {
  const [, scan] = LH.useScan();

  return (
    <div className={styles.wrapper}>
      <C.Formik
        initialValues={{ items: [{ id: "", count: 0 }] }}
        onSubmit={(values) => {
          console.log(values);
          scan();
        }}
      >
        {({ values, handleSubmit }) => (
          <C.Form layout="vertical" className={styles.formWrapper}>
            <C.FieldArray name="items">
              {({ insert, remove }) => (
                <C.Space direction="vertical" className={styles.fieldsWrapper}>
                  {values.items?.map((item, index) => (
                    <LC.Field
                      key={index}
                      index={index}
                      onRemove={() => remove(1)}
                      onAdd={() => insert(index + 1, { id: "", count: 0 })}
                      removeDisabled={values.items?.length <= 1}
                    />
                  ))}
                </C.Space>
              )}
            </C.FieldArray>

            <C.Button
              size="large"
              type="primary"
              className={styles.submit}
              onClick={() => handleSubmit()}
            >
              Scan!
            </C.Button>
          </C.Form>
        )}
      </C.Formik>
    </div>
  );
};

export default PriceScanner;
