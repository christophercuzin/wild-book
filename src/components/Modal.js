
import Select from "../components/Select"
import { useContext } from 'react';
import { wildersContext } from '../contexts/WildersContext';

const Modal = ({id}) => {
  const {handleCloseModal} = useContext(wildersContext)
  return (
    <div id={`${id.toString()}modal`} className="modalHidden">
      <div className="modal">
      <div className="modalHeader">
        <h4>Add a skill</h4>
        <span onClick={handleCloseModal}>X</span>
      </div>
      <div className="modalBody">
        <Select
          wilderId={id}
        />
      </div>
      </div>
  </div>
  
  )
}

export default Modal