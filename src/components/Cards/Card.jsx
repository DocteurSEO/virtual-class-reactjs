import PropTypes from "prop-types";

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

export const Card = ({ userInfo, styles }) => {
  const { name, info, picture } = userInfo;
  return (
    <div class="at-column" style={styles}>
      <div class="at-user">
        <div class="at-user__avatar">
          <img src={picture} />;
        </div>
        <div class="at-user__name">{name}</div>
        <div class="at-user__title">{info}</div>
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
