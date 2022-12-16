import React from "react";
import * as C from "components";
import styles from "../../price-scanner.module.scss";
import * as LC from "./components";
import * as I from "@ant-design/icons";
import * as LH from "./hooks";

const Form = ({ title }) => {
  const [results, scan] = LH.useScan();
  const [request, setRequest] = React.useState(null);

  const extra = React.useMemo(() => {
    if (!results || !request) return {};

    const requestMap = request.reduce((requestMap, item) => {
      requestMap[item.name] = item;
      return requestMap;
    }, {});

    return results.itemPrices.reduce((prices, item) => {
      prices[item.name] = {
        price: item.fullPriceInCopper,
        count: item.count,

        request: {
          ...requestMap[item.name],
        },
      };
      return prices;
    }, {});
  }, [results, request]);

  return (
    <>
      <C.Typography.Title level={2}>{title}</C.Typography.Title>

      <C.Formik
        initialValues={{
          items: [
            { name: "Плотная кожа", count: 100 },
            { name: "Руническая ткань", count: 10000 },
          ],
        }}
        onSubmit={(values) => {
          setRequest(values?.items);
          scan(values?.items);
        }}
      >
        {({ values, handleSubmit }) => (
          <C.Form layout="vertical" className={styles.column}>
            <C.FieldArray name="items">
              {({ push, remove }) => (
                <C.Space direction="vertical" className={styles.columnContent}>
                  {values.items?.map((item, index) => (
                    <LC.Field
                      key={index}
                      index={index}
                      onRemove={() => remove(1)}
                      removeDisabled={values.items?.length <= 1}
                      extra={extra[item.name]}
                    />
                  ))}

                  <C.Button
                    size="large"
                    icon={<I.PlusOutlined />}
                    onClick={() => push({ name: "", count: 0 })}
                  />
                </C.Space>
              )}
            </C.FieldArray>

            <div className={styles.columnFooter}>
              <C.Button
                size="large"
                type="primary"
                onClick={() => handleSubmit()}
              >
                Scan!
              </C.Button>
            </div>
          </C.Form>
        )}
      </C.Formik>
    </>
  );
};

export default Form;
