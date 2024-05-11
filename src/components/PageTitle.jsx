import { useEffect, useState } from "react";
import styles from "../stylesheets/pagetitle.module.css";

export default function PageTitle() {
  return (
    <div>
      <h1>Item Inventory</h1>
      <div className={styles.navBar}>
        <input className={styles.searchBar} placeholder=" Search Items"></input>
        <button>Add New</button>
        <button>Select Items</button>
      </div>
      <div className={styles.sortContent}>
        <p>Sort By:</p>
        <select>
          <option>Quantity</option>
        </select>
        <p>Categories:</p>
        <select>
          <option>All</option>
        </select>
      </div>
    </div>
  );
}
