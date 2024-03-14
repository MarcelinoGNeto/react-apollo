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
    <S.Container key={id}>
      <S.H3>{name}</S.H3>
      <S.ImgContainer>

      <img width="320" height="180" alt="location-reference" src={`${photo}`} />
      </S.ImgContainer>
      <b>About this location:</b>
      <S.TextContainer>
        <p>{description}</p>
      </S.TextContainer>
    </S.Container>
  ));
};
