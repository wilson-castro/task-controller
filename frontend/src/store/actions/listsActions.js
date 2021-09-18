import { CONSTANTS } from "../actions"

export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { title, id } = list

    firestore.collection("lists").add({
      title, id, cards: []
    }).catch((err) => {
      dispatch({
        type: CONSTANTS.ADD_ERR,
        err,
      });
    });
  }
};

export const updateList = (data) => {

  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { list } = data;
    const db = firestore.collection("lists");

    // SEARCH THE LISTS BY ID
    db.where("id", "==", list.id)
      .get()
      .then(function (querySnapshot) {//CONVERT DATA

        querySnapshot.forEach(function (doc) {
          //doc.id doc.data()
          db.doc(doc.id).update({ ...list })
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

export const removeList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("lists")
      .doc(list._id)
      .delete()
      .catch((err) => {
        dispatch({
          type: CONSTANTS.REMOVE_ERR,
          err,
        });
      });
  };
};

