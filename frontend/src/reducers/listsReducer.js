const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a static list and a static card",
        dataDeadline: "14/02/2002"
      }, {
        id: 1,
        text: "we a mix between  material ui  react and styled components",
        dataDeadline: ""
      }
    ]
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "we will create our first reducer",
        dataDeadline: "14/02/2002"
      }, {
        id: 1,
        text: "and render many cards  on our list with static data",
        dataDeadline: ""
      }, {
        id: 2,
        text: "we will also make some little changes  i forgot  in the last episode...",
        dataDeadline: ""
      }
    ]
  },
]


const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listsReducer;