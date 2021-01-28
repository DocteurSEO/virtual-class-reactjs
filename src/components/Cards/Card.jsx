import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";
import perso from "./img/ahmed.jpg";

/**
 *
 * @param {object} userInfo props storing the user's information
 * 
 * * ```jsx
 *
 *<Card userInfo={ 
   name: "Ahmed Seneina",
    info: "Developer FullStack Javascript",
    picture: perso,
  } />
 *
 * ```
 */

export const Card = ({ userInfo, styles, id }) => {
  const { name, info, picture } = userInfo;
  const [animation, setAnimation] = useRecoilState(atomAnimation);
  const [currentUser, setCurrentUser] = useRecoilState(atomEditCurrentUser);
  function editUser(id, userInfo) {
    setAnimation({
      ...animation,
      header: "",
      cards: " container down",
      form: "form rLeft",
      headerTitle: "Les modifications sont enregistrées en ligne ",
    });

    setCurrentUser({ ...userInfo, id });
  }

  return (
    <div
      class="at-column"
      style={styles}
      onClick={() => editUser(id, userInfo)}
    >
      <div class="at-user">
        <div class="at-user__avatar">
          <img src={picture} alt={"Erreur, image non disponible "} />;
        </div>
        <div class="at-user__name">{name && name.substr(0, 19)}</div>
        <div class="at-user__title">{info && info.substr(0, 32)}</div>
        <ul class="at-social">
          <li class="at-social__item"></li>
        </ul>
      </div>
    </div>
  );
};
Card.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string),
};

Card.defaultProps = {
  userInfo: {
    name: "Ahmed Seneina",
    info: "Developer FullStack Javascript",
    picture: perso,
  },
};
