import './Card.css';

const Card = (props) => {

  return (
    
    <div className="card">
      <h2>Alumna: {props.alumna},</h2>
      <h2>numero de faltas: {props.faltas},</h2>
      <h2>Nota: {props.nota}.</h2>
    </div>
  );
};

export default Card;
