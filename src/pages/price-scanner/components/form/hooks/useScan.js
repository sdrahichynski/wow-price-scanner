import * as React from "react";
import { message } from "antd";
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
      .catch((error) => {
        message.open({
          type: "error",
          content: error.message,
        })
        console.dir(error)
      });
  };

  return [results, scan];
};

export default useScan;
