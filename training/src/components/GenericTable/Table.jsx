import React from 'react';
import {PropTypes} from 'prop-types';


const Table = (props) => {
  const {id, columns, data} = props;
  return (
    <div className="Table">

    </div>
  )
}
Table.prototype = {
  id: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array
}
Table.defaultProps = {
  id:'',
  column:[{field:"", label:"", align:"center"}],
  data:[{}]
}
export default Table;
