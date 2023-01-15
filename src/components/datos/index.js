import Card from '../card';

const Datos = () => {
  const datos= [
  {
    alumna: "Mariela",
    faltas: 3,
    nota: 7
  },
  {
    alumna: "Juana",
    faltas: 1,
    nota: 8
  },
  {
    alumna: "Maria",
    faltas: 0,
    nota: 10
  },
]
  return (
    <div>
      {datos.map((dato)=> {
        return(
          <Card
          className="card"
          alumna={dato.alumna} 
          faltas={dato.faltas} 
          nota={dato.nota}        
        />
        )
      })}
    </div>
  );
};

export default Datos;