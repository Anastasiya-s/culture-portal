import React from "react";

import {GetPeople} from "../getPeople";
import  './../../style.css' ; 
const team = [
  {
    name: "Denis Poleshchuk",
    linkGit: "https://github.com/ronoarus",
    image: "https://avatars3.githubusercontent.com/u/48986345?s=460&v=4",
    workLog: [
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      }
    ]
  },
  {
    name: "Vladislav Matveev",
    linkGit: "https://github.com/invisiblespectator",
    image: "https://avatars0.githubusercontent.com/u/33596224?s=460&v=4",
    workLog: [
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      }
    ]
  },
  {
    name: "Anzhela Martsinovich",
    linkGit: "https://github.com/AnzhelaMartsinovich",
    image: "https://avatars0.githubusercontent.com/u/51420320?s=460&v=4",
    workLog: [
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      }
    ]
  },
  {
    name: "Anastasiya Sukhaverkhaya",
    linkGit: "https://github.com/Anastasiya-s/",
    image: "https://avatars0.githubusercontent.com/u/37982141?s=460&v=4",
    workLog: [
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      }
    ]
  },
  {
    name: "Yegor Kuzin",
    linkGit: "https://github.com/Yegor0",
    image: "https://avatars0.githubusercontent.com/u/43149672?s=460&v=4",
    workLog: [
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      }
    ]
  },
  {
    name: "Alexandr Mazharov",
    linkGit: "https://github.com/AlexandrMazharov",
    image: "https://avatars2.githubusercontent.com/u/55503710?s=460&v=4",
    workLog: [
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      },
      {
        time: "1",
        description: "xxxx"
      }
    ]
  }
];

function People() {  
  return (    
    <div>
      <GetPeople prsn={team[0]} />
      <GetPeople prsn={team[1]} />
      <GetPeople prsn={team[3]} />
      <GetPeople prsn={team[4]} />
      <GetPeople prsn={team[5]} />
    </div>
  );
}

export default People;
