import React from "react";
import "../index.css";

const Table = ({ data, columns }) => {
    console.log("data:", data);
    console.log("columns:", columns);

    return (
        <div className="supercontainer">
            <h2>Shift and Ticket Overview</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} scope="col">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            try {
                                return (
                                    <tr key={index}>
                                        {columns.map((column, subIndex) => {
                                            return <td key={subIndex}>{item[column]}</td>;
                                        })}
                                    </tr>
                                );
                            } catch (error) {
                                console.error('Error rendering row:', error);
                                return <tr key={index}><td colSpan={columns.length}>Error rendering row</td></tr>;
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
