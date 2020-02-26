import React from 'react';
import './SelfEvaluation.scss'

const SelfEvaluation = () => (
  <div>
    <p>Maximum points - <strong>240</strong></p>
    <h3 id="min-scope---50">Min scope - <strong>50</strong></h3>
    <ul>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Main page + page with a list of authors + author's page (only pages with content without widgets);</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Page with team members + page with worklog</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Page with list of authors contains search widget;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>20</strong> Portal has two languages;</li>
    </ul>
    <h3 id="normal-scope---140">Normal scope - <strong>140</strong></h3>
    <ul>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>20</strong> Portal has page with styleguide;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Mobile version is okey</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Ipad/tablet version is okey</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Author's page contains timeline;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>10</strong> Author's page contains video overlay;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>20</strong> Author's page contains photo gallery;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>10</strong> Author's page contains map (geowidget);</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>from 0 to 20</strong> Design (typography, icons, colors, links + buttons + input are styled)</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>20</strong> Material-ui / bootstrap is used</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>10</strong> Portal has third language;</li>
    </ul>
    <h3 id="extra-scope---70">Extra scope - <strong>70</strong></h3>
    <ul>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>10</strong> Confidence of the project presentation;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>10</strong> Project is made using gatsbyjs;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input> <strong>10</strong> Contentful / netlify cms is used for content management</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>20</strong> Animations / special effects like paralax </li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>up to 20</strong> Outstanding design;</li>
      <li className="task-list-item" ><input type="checkbox" disabled="" ></input><strong>20</strong> Storybook/styleguidist/other react styleguide tool usage for the page with styles</li>
    </ul>
    <h3 id="fines">Fines</h3>
    <ul>
      <li><strong>-50</strong> if there are less than 5 commits from each active team member. Everyone should merge their own PRs.</li>
      <li>up to <strong>-50</strong> points for violations <br></br>
        <a href="https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md" target="_blank">stage2-tasks-requirements</a></li>
      <li><strong>-40</strong> if there is no worklog for team</li>
      <li><strong>-20</strong> too primitive (ugly for 2020) design / UX</li>
    </ul>
  </div>
);

export default SelfEvaluation;