import { CONSTANTS } from "../actions"


export const getList = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const db = firestore.collection("lists");
    db.orderBy("index", "asc")
      .get()
      .then(lists => {
        let _lists = []
        lists.forEach(list => {
          _lists.push({ _id: list.id, ...list.data() })
        })
        return _lists
      }).then(resp =>
        dispatch({
          type: "LIST_SEARCHED",
          payload: resp
        }))

  };

}


export const addList = (list) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const { title, index } = list

    firestore.collection("lists").add({
      title, index, cards: []
    })
      .then(resp =>
        dispatch(getList()))
      .catch((err) => {
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
      }).then(resp =>
        dispatch(getList()))

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
      .then(resp =>
        dispatch(getList()))
      .catch((err) => {
        dispatch({
          type: CONSTANTS.REMOVE_ERR,
          err,
        });
      });
  };
};

