import { useEffect, useState } from "react";
import styles from "../stylesheets/orders.module.css";

export default function Orders() {
  const [order, setOrder] = useState({ orderName: "" });

  function addOrder(e) {
    e.preventDefault();
    setOrder({ orderName: "", orderCount: 0 });
    console.log(order.orderName);
    console.log(order.orderCount);
  }

  return (
    <div>
      <div className={styles.orderForm}>
        <form onSubmit={addOrder}>
          <div className={styles.orderContent}>
            <div className={styles.orderInputTitle}>Order:</div>
            <input
              className={styles.orderInput}
              onChange={(e) => {
                setOrder({ ...order, orderName: e.target.value });
              }}
              value={order.orderName}
              type="text"
            ></input>
            <div className={styles.orderInputTitle}>Quantity:</div>
            <input
              className={styles.orderInput}
              onChange={(e) => {
                setOrder({ ...order, orderCount: e.target.value });
              }}
              value={order.orderCount}
              type="number"
            ></input>
          </div>
          <button className={styles.addOrderButton} type="submit">
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
}
