import { useEffect, useState } from "react";

const useUserLanguage = () => {
  const [userLang, setUserLang] = useState<string>("");

  useEffect(() => {
    // Detect the language of the browser
    const language = navigator.language || navigator.languages[0];
    setUserLang(language);
  }, []);

  return userLang;
};

export default useUserLanguage;
