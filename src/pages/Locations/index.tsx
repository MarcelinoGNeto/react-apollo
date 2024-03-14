import { DisplayLocations } from "../../components/displayLocations";
import * as S from "./style";

function LocationsPage() {

  return (
    <S.Container>
      <S.H1>Locations Page</S.H1>

      <S.ContainerCard>
        <DisplayLocations />
      </S.ContainerCard>
    </S.Container>
  );
}

export default LocationsPage;
