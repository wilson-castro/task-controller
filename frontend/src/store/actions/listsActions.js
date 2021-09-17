import { CONSTANTS } from "../actions"

export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { text: title, id } = list

    firestore.collection("lists").add({
      title, id: id, cards: []
    }).then(() => {
      dispatch({
        type: CONSTANTS.ADD_LIST,
        payload: {
          title,
          id: id,
          cards: []
        }
      });
    }).catch((err) => {
      dispatch({
        type: CONSTANTS.ADD_ERR,
        err,
      });
    });
  }
}


export const updateList = (data) => {

  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { list, newCard } = data;
    const db = firestore.collection("lists");

    // SEARCH THE LISTS BY ID
    db.where("id", "==", list.id)
      .get()
      .then(function (querySnapshot) {//CONVERT DATA

        querySnapshot.forEach(function (doc) {
          //doc.id doc.data()
          db.doc(doc.id).update({ ...list })
            .then(() => {
              dispatch({
                type: CONSTANTS.ADD_CARD,
                payload: {
                  card: newCard,
                  listID: list.id
                }
              });
            })
            .catch((err) => {
              dispatch({
                type: CONSTANTS.UPDATE_ERR,
                err,
              });
            });

        });
      })

  };
};
