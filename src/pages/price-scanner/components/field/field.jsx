import * as React from "react";
import * as C from "components";
import * as I from "@ant-design/icons";
import styles from "./field.module.scss";

const ItemField = ({ onAdd, onRemove, addDisabled, removeDisabled, index }) => {
  return (
    <C.Space direction="horizontal">
      <C.Input.Group compact className={styles.inputGroup}>
        <C.Field
          name={`items.${index}.id`}
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
        size="large"
        icon={<I.PlusOutlined />}
        onClick={() => onAdd()}
        disabled={addDisabled}
      />

      {
        !removeDisabled &&
        <C.Button
          danger
          shape="circle"
          type="text"
          icon={<I.StopOutlined />}
          onClick={() => onRemove()}
        />
      }
    </C.Space>
  );
};

export default ItemField;
