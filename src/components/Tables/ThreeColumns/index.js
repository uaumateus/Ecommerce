import React from 'react';
import '../style.css';

const ThreeColumns = ({ report, tab1, tab2, tab3 }) => {
    return(
        <table className="table">
            <tr>
                <th className="Medium-Text-Bold">{tab1}</th>
                <th className="Medium-Text-Bold">{tab2}</th>
                <th className="Medium-Text-Bold">{tab3}</th>
            </tr>
            {report.map((item, index) => (
                <tr>
                    <td className="Medium-Text-Regular">{item.tab1}</td>
                    <td className="Medium-Text-Regular">{item.tab2}</td>
                    <td className="Medium-Text-Regular">{item.tab3}</td>
                </tr>
            ))}
        </table>
    )
}

export default ThreeColumns;