import React from "react";
import { FaPlus } from "react-icons/fa6";
import "./acitvityrow.css";

const ActivityRow = () => {
  return (
    <table>
      <tbody>
        <tr className="activity_row_container">
          <td className="packages_col">
            <div className="input_checkbox">
              <input type="checkbox" />
            </div>
            <p>sdfsdf</p>
          </td>
          <td>dfsdf</td>
          <td className="total_col">
            <p>₹ sdfsdf</p>
            <button>
              <FaPlus />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ActivityRow;

// return (
//     <tbody>
//       <tr className="row_container">
//         <td className="level1" onClick={handleCollapse}>
//           {data.name}
//         </td>
//         <td>{data.rate}</td>
//         <td>₹ {data.total}</td>
//       </tr>
//       {isCollapse && (
//         <tr>
//           <td colSpan="3">
//             <table>
//               <tbody>
//                 {data.subItems.map((subItem, index) => (
//                   <React.Fragment key={index}>
//                     <tr className="level2">
//                       <td>{subItem.name}</td>
//                       <td>{subItem.rate}</td>
//                       <td>₹ {subItem.total}</td>
//                     </tr>
//                     {subItem.subSubItems && (
//                       <tr>
//                         <td colSpan="3">
//                           <table>
//                             <tbody>
//                               {subItem.subSubItems.map((subSubItem, idx) => (
//                                 <tr className="level3" key={idx}>
//                                   <td>{subSubItem.name}</td>
//                                   <td>{subSubItem.rate}</td>
//                                   <td>₹ {subSubItem.total}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </td>
//         </tr>
//       )}
//     </tbody>
//   );
// };
