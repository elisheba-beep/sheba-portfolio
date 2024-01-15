import "./Body.css";
import Project from "../project/Project";
import chatOne from "/chat1.jpg";
import recipeOne from "/recipe1.jpg";
import payOne from "/pay1.jpg";
import boatOne from "/boat1.jpg";
import weatherOne from "/weather1.jpg";
import chatTwo from "/chat2.jpg";
import recipeTwo from "/recipe2.jpg";
import payTwo from "/pay2.jpg";
import boatTwo from "/boat2.jpg";
import weatherTwo from "/weather2.jpg";
import chatThree from "/chat3.jpg";
import recipeThree from "/recipe3.jpg";
import payThree from "/pay3.jpg";
import boatThree from "/boat2.jpg";
import weatherThree from "/weather3.jpg";

export default function Body() {
  return (
    <div className="bodyContainer">
      <Project
        imageOne={chatOne}
        imageTwo={chatTwo}
        imageThree={chatThree}
        projectName="CHATAHOLIC"
        developmentTool="FLUTTER"
        projectDescription="Flutter and Firebase-powered chat app with register, login and chat screens. Seamless communication experience for users, ensuring a dynamic chat environment."
      />
      <Project
        imageOne={recipeOne}
        imageTwo={recipeTwo}
        imageThree={recipeThree}
        projectName="RECI"
        developmentTool="REACT NATIVE"
        projectDescription="React Native recipe app with register, login, home, recipes and profile screens. Fetches diverse recipes from an external API providing a rich culinary exploration for users."
      />
      <Project
        imageOne={payOne}
        imageTwo={payTwo}
        imageThree={payThree}
        projectName="PAY"
        developmentTool="FLUTTER"
        projectDescription="Flutter-based mobile app for financial transactions. User-friendly and offers a convenient way to manage transactions."
      />
      <Project
        imageOne={weatherOne}
        imageTwo={weatherTwo}
        imageThree={weatherThree}
        projectName="WEATHER"
        developmentTool="REACT NATIVE"
        projectDescription="React Native weather app delivering location-specific forecasts sourced from an external API. Users stay informed about weather conditions with a simple interface."
      />
      <Project
        imageOne={boatOne}
        imageTwo={boatTwo}
        imageThree={boatThree}
        projectName="FERRY"
        developmentTool="FLUTTER"
        projectDescription="Flutter-based water transportation app. Users log in, select routes and efficiently navigate water travel. Enhances user mobility with a user-friendly interface and route customization options."
      />
     <div className="bottom">
        <hr />
     </div>
    </div>
  );
}
