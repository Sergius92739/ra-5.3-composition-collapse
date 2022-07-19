import { useState } from "react";
import PropTypes from "prop-types"

export default function Collapse(props) {
  const [hidden, setHidden] = useState(false);
  const { collapsedLabel, expandedLabel } = props;

  const toogleWidget = () => { setHidden(!hidden); }

  return (
    <div className="widget">
      <div className={hidden ? 'widget__content' : 'widget__content hidden'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates numquam eligendi earum aliquid
        sint vitae, error vel! Totam exercitationem amet asperiores incidunt unde! Architecto, obcaecati. Explicabo
        corporis odit sit expedita maiores alias excepturi debitis omnis non voluptate sunt et modi, aperiam nobis
        magnam animi voluptatibus aspernatur incidunt, ullam eligendi.
      </div>
      <button onClick={toogleWidget} className="widget__btn">
        {hidden ? expandedLabel : collapsedLabel}
      </button>
    </div>
  )
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть'
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string.isRequired,
  expandedLabel: PropTypes.string.isRequired
}
