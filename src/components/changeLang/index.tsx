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
        <S.LiDropdown onClick={() => changeLang("en")}>
          <span>EN</span>
          <LiaFlagUsaSolid />
        </S.LiDropdown>
        <S.LiDropdown onClick={() => changeLang("pt")}>
          <span>PT</span>
          <GiBrazilFlag />
        </S.LiDropdown>
      </S.Ul>
    </S.Container>
  );
};
