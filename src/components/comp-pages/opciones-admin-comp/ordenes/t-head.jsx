import { tHead } from "../../../../models/t-head-ordenes-panel-admin";

const THead = () => {
  return (
    <thead className="t-head">
      <tr>
        {
          tHead.map(e => <th key={e} className="th">{e}</th>)
        }
      </tr>
    </thead>
  );
}

export default THead;
