import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../services/graphqlQueries";
import * as S from "./style";

type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

export const DisplayLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }: Location) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};
