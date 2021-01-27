import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ref } from "../../firebase";

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

const userDataRef = ref.child("user");

export const Cards = () => {
  const [userData, setUserdata] = useState(false);
  const animation = useRecoilValue(atomAnimation);
  const [userDataKey, setUserDataKey] = useState([]);

  function userEdit(id) {}
  useEffect(() => {
    userDataRef.on("value", (snapshot) => {
      if (snapshot.val()) {
        setUserDataKey(Object.keys(snapshot.val()));
        setUserdata(Object.values(snapshot.val()));
      }
    });
  }, []);
  return (
    <div className={animation.cards}>
      <div class="at-grid" data-column="3">
        {userData &&
          userData.map((user, i) => {
            return (
              <Card key={userDataKey[i]} userInfo={user} id={userDataKey[i]} />
            );
          })}
        {/* <Card userInfo={} /> */}
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
