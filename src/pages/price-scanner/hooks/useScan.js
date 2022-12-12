import * as React from "react";
import axios from "axios";

const useScan = () => {
  const [results, setResult] = React.useState([]);

  const scan = () => {
    axios("http://141.147.14.88/analytics/items/", {
      method: "post",
      data: [
        {
          name: "Грубая кожа",
          count: 1000,
        },

        {
          name: "Адамантитовая оружейная цепь",
          count: 1,
        },
      ],
    })
      .then((data) => {
        console.log(data);
        setResult(data);
      })
      .catch((error) => console.log(error));
  };

  return [results, scan];
};

export default useScan;
