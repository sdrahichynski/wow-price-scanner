import * as React from "react";
import * as LC from "./components";
import * as LH from "./hooks";
import styles from "./price-scanner.module.scss";

const PriceScanner = () => {
  const [results, scan] = LH.useScan();
  const [request, setRequest] = React.useState(null);

  const response = React.useMemo(() => {
    if (!results || !request) return {};

    const requestMap = request.reduce((requestMap, item) => {
      requestMap[item.name] = item;
      return requestMap;
    }, {})

    return results.itemPrices.reduce((prices, item) => {
      prices[item.name] = {
        price: item.fullPriceInCopper,
        count: item.count,

        request: {
          ...requestMap[item.name]
        }
      };
      return prices;
    }, {});
  }, [results, request]);

  return (
    <div className={styles.wrapper}>
      <LC.Form
        onSubmit={(values) => {
          setRequest(values?.items);
          scan(values?.items);
        }}
        extra={response}
      />
    </div>
  );
};

export default PriceScanner;
