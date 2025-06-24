import { useSelector } from "react-redux";
import lang from "../../utility/languageConstant";

const GptSearchBar = () => {
  const language = useSelector(store=>store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="p-2 m-2 col-span-9 rounded-lg bg-white text-sm"
          type="text"
          placeholder={lang[language].searchPlaceHolder}
        />
        <button className="col-span-3 bg-red-700 py-2 px-2 m-2 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
