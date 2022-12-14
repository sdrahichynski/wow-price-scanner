import * as React from "react";
import * as C from "components";
import * as I from "@ant-design/icons";
import styles from "./field.module.scss";

const ItemField = ({
  onRemove,
  removeDisabled,
  index,
  extra,
}) => {
  return (
    <C.Space direction="horizontal" className={styles.wrapper}>
      <C.Input.Group compact className={styles.inputGroup}>
        <C.Field
          name={`items.${index}.name`}
          className={styles.inputName}
          size="large"
          as={C.Input}
          placeholder={"Type some..."}
        />

        <C.Field
          name={`items.${index}.count`}
          className={styles.inputCount}
          size="large"
          as={C.Input}
        />
      </C.Input.Group>

      <C.Button
        className={styles.removeButton}
        danger
        shape="circle"
        type="text"
        icon={<I.StopOutlined />}
        onClick={() => onRemove()}
        disabled={removeDisabled}
      />

      {
        extra &&
        <>
          <C.WowPrice priceInCopper={extra.price} /> for {extra.count} of {extra.request.count}
        </>
      }
    </C.Space>
  );
};

export default ItemField;
