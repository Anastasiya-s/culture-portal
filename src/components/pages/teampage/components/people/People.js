import React from "react";

import {GetPerson} from "../getPerson";
import  '../../style.css' ; 
const team = [
  {
    name: "Denis Poleshchuk",
    description: "Человек хороший. Сделал все",
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
    description: "Человек хороший. Сделал все",
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
    description: "Человек хороший. Сделал все",
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
    description: "Человек хороший. Сделал все",
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
    description: "Человек хороший. Сделал все",
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
    description: "Человек хороший. Сделал все",
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
    <div className="card-wrap">
     { team.map((v, i) => (
      <GetPerson prsn={v} />
      ))}
    </div>
  );
}

export default People;
