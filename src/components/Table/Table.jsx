import React from "react";
import styles from "./Table.module.scss";
import millify from "millify";

function Table({ countries }) {
  return (
    <div className={styles.table}>
      {countries.map((country) => (
        <tr key={country.country}>
          <td>
            {country.country}
            <img src={country.countryInfo.flag} />
          </td>
          <td>
            <strong>{millify(country.cases)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
