import { CONSTANTS } from "../actions"

export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { title, index } = list

    firestore.collection("lists").add({
      title, index, cards: []
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
    const list = data;
    const db = firestore.collection("lists");

    // SEARCH THE LISTS BY ID
    db.where("index", "==", list.index)
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

export const movedList = (data) => {

  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { list1Index, list2Index } = data
    const db = firestore.collection("lists");

    //update two list changing index

    // SEARCH THE LISTS BY ID
    db.where("index", "==", list1Index)
      .get()
      .then(function (querySnapshot) {//CONVERT DATA

        querySnapshot.forEach(function (list) {
          //update the list changing the index
          db.doc(list.id).update({ ...list.data(), index: list2Index })
            .catch((err) => {
              dispatch({
                type: CONSTANTS.UPDATE_ERR,
                err,
              });
            });

        });
      })

    db.where("index", "==", list2Index)
      .get()
      .then(function (querySnapshot) {//CONVERT DATA

        querySnapshot.forEach(function (list) {
          //update the list changing the index
          db.doc(list.id).update({ ...list.data(), index: list1Index })
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
    console.log(list);
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

