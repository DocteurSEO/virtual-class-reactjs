import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import PropTypes from "prop-types";
import { Card } from "./Card";

import "./Cards.scss";
import perso from "./img/perso.jpg";

import { atomAnimation } from "../../atoms/atomAnimation";

/**
 *
 * Cards component : displays user informations  
 * 

 * 
 * ```jsx
 *
 *<Card userInfo={ 
   name: "Ahmed Seneina",
    info: "Developer FullStack Javascript",
    picture: perso,
  } />
 *
 * ```
 */

export const Cards = ({ userInfo }) => {
  const [user, setUser] = useState(userInfo);
  const animation = useRecoilValue(atomAnimation);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);
  return (
    <div className={animation.cards}>
      <div class="at-grid" data-column="3">
        <Card userInfo={user} />
      </div>
    </div>
  );
};

Cards.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string),
};

Cards.defaultProps = {
  userInfo: {
    name: "Mathieu Ragnofki",
    info: "Developer React",
    picture: perso,
  },
};
