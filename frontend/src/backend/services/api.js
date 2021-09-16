export function loadLists() {

  return [
    {
      title: "Last Episode",
      id: 0,
      cards: [
        {
          id: 0,
          text: "we created a static list and a static card",
          dataDeadline: "14/02/2002",
          completed: false
        }, {
          id: 1,
          text: "we a mix between  material ui  react and styled components",
          dataDeadline: "",
          completed: true
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
          dataDeadline: "14/02/2002",
          completed: false
        }, {
          id: 1,
          text: "and render many cards  on our list with static data",
          dataDeadline: "",
          completed: false
        }, {
          id: 2,
          text: "we will also make some little changes  i forgot  in the last episode...",
          dataDeadline: "",
          completed: true
        }
      ]
    },
    {
      title: "This Episode",
      id: 2,
      cards: [
        {
          id: 0,
          text: "we will create our first reducer",
          dataDeadline: "14/02/2002",
          completed: true

        }, {
          id: 1,
          text: "and render many cards  on our list with static data",
          dataDeadline: "",
          completed: true

        }, {
          id: 2,
          text: "we will also make some little changes  i forgot  in the last episode...",
          dataDeadline: "",
          completed: false
        }
      ]
    },
  ]
}