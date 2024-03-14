import i18n from "../../dictionary/i18nextConfig";

export const ChangeLanguage = () => {
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLang("pt")}>PT</button>
      <button onClick={() => changeLang("en")}>EN</button>
    </div>
  );
};
