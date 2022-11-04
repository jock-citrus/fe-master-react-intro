import Pet from './Pet'

const Results = ({pets}) => {
  const petsList = pets?.map((p) => (
    <Pet name={p.name} animal={p.animal} breed={p.breed} key={p.id} images={p.images} location={`${p.city}, ${p.state}`} id={p.id}/>
  ));
  return <div>{petsList?.length ? petsList : <h1>No pets found!</h1>}</div>;
}

export default Results;