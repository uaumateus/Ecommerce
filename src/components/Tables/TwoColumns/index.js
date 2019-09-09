import React from 'react';
import '../style.css';

const TwoColumns = ({ report, tab1, tab2 }) => {
    return(
        <table className="table">
            <tr>
                <th className="Medium-Text-Bold">{tab1}</th>
                <th className="Medium-Text-Bold">{tab2}</th>
            </tr>
            {report.map((item, index) => (
                <tr>
                    <td className="Medium-Text-Regular">{item.tab1}</td>
                    <td className="Medium-Text-Regular">{item.tab2}</td>
                </tr>
            ))}
        </table>
    )
}

export default TwoColumns;