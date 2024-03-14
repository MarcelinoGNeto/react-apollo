import i18n from "../../dictionary/i18nextConfig";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag, GiGlobe } from "react-icons/gi";
import * as S from "./style";

export const ChangeLanguage = () => {
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <S.Container>
      <GiGlobe color="#fff" size={30} />
      <S.Ul>
        <S.LiDropdown>
          <div onClick={() => changeLang("en")}>
            EN
          </div>
            <LiaFlagUsaSolid />
        </S.LiDropdown>
        <S.LiDropdown>
          <div onClick={() => changeLang("pt")}>
            PT
          </div>
            <GiBrazilFlag />
        </S.LiDropdown>
      </S.Ul>
    </S.Container>
  );
};
