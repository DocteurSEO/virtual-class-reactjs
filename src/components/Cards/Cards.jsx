import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { Card } from "./Card";

import "./Cards.scss";
import perso from "./img/perso.jpg";

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

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);
  return (
    <div className="container">
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
