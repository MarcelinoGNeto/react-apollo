import spaDesktop from "../../assets/images/spa-desktop.png";
import spaMobile from "../../assets/images/spa-mobile.png";
import * as S from "./style";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Header>
        <S.H1>{t("home.header")}</S.H1>
      </S.Header>
      <S.ImgDesktop>
        <img src={spaDesktop} alt="SPA" />
      </S.ImgDesktop>
      <S.ImgMobile>
        <img src={spaMobile} alt="SPA" />
      </S.ImgMobile>
      <S.Main>
        <S.Article>
          <S.P>{t("home.intro.p1")}</S.P>
          <S.P>{t("home.intro.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleReactApollo.title")}</S.H2>
          <S.P>{t("home.articleReactApollo.p1")}</S.P>
          <S.P>{t("home.articleReactApollo.p2")}</S.P>
          <S.P>{t("home.articleReactApollo.p3")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleContextApi.title")}</S.H2>
          <S.P>{t("home.articleContextApi.p1")}</S.P>
          <S.P>{t("home.articleContextApi.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleStyledComponent.title")}</S.H2>
          <S.P>{t("home.articleStyledComponent.p1")}</S.P>
          <S.P>{t("home.articleStyledComponent.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleESLint.title")}</S.H2>
          <S.P>{t("home.articleESLint.p1")}</S.P>
          <S.P>{t("home.articleESLint.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleMicroFrontends.title")}</S.H2>
          <S.P>{t("home.articleMicroFrontends.p1")}</S.P>
          <S.P>{t("home.articleMicroFrontends.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleAccessibility.title")}</S.H2>
          <S.P>{t("home.articleAccessibility.p1")}</S.P>
          <S.P>{t("home.articleAccessibility.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleInternationalization.title")}</S.H2>
          <S.P>{t("home.articleInternationalization.p1")}</S.P>
          <S.P>{t("home.articleInternationalization.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleCiCd.title")}</S.H2>
          <S.P>{t("home.articleCiCd.p1")}</S.P>
          <S.P>{t("home.articleCiCd.p2")}</S.P>
        </S.Article>
        <S.Article>
          <S.H2>{t("home.articleConclusion.title")}</S.H2>
          <S.P>{t("home.articleConclusion.p1")}</S.P>
          <S.P>{t("home.articleConclusion.p2")}</S.P>
        </S.Article>
      </S.Main>
    </S.Container>
  );
}

export default HomePage;
