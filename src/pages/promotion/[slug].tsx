// import { client } from '@/lib/client';

// export default function Promotion({ promotion }) {
//   console.log(promotion.slug.current);

//   return (
//     <>
//       <h1>Promotion Page</h1>
//       <p>{promotion.title}</p>
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const query = `*[_type == "promotion"] {
//       slug {
//           current
//       }
//   }`;

//   const promotions = await client.fetch(query);
//   const paths = promotions.map((promotion) => ({
//     params: {
//       slug: promotion.slug.current,
//     },
//   }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type == "promotion" && slug.current == '${slug}'][0]`;

//   const promotion = await client.fetch(query);
//   return { props: { promotion } };
// };
