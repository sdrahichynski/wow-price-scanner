import * as React from "react";
import axios from "axios";

const useScan = () => {
  const [results, setResult] = React.useState(null);

  const scan = (values) => {
    axios("http://141.147.14.88/analytics/items/", {
      method: "post",
      data: [
        ...values
      ],
    })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => console.log(error));
  };

  return [results, scan];
};

export default useScan;
