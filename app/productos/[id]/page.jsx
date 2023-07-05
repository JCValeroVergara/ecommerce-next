import CardIndividual from './CardIndividual';

const getProduct = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' })
    .then((response) => response.json())
};

const page =async ({ params }) => {
  const { id } = params;
  const data =await getProduct(id)
  return (
    <div>
      <CardIndividual data={data} />
    </div>
  );
}

export default page;