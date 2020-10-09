# SingleSPA
Goals

create portal-like application with top-header and left-side navigation bar navigation bar has links that open sub-applications

each sub-application can be implemented in different technology (like Angular 5, React 15 and React 16)

we can render single sub-application in single page

we can render many sub-applications in a single page

each sub-application can be deployed independently and hosted on different servers

CSS stylesheets are independent

communication between sub-applications is possible<br />
Modules<br />
sub-app-angular<br />
Angular 5 application. It a sub-application of the portal.<br />

sub-app-react16<br />
React 16 application. It a sub-application of the portal<br />.

main-app<br />
React 15 application. It is a template application, which aggregates sub-app-angular and sub-app-react16 as a portal.<br />

Deployment<br />
sub-app-angular<br />
cd sub-app-angular<br />
npm install<br />
npm run build<br />
npm run serve<br />
Now bundles are available here: http://localhost:3001<br />

sub-app-react16<br />
cd sub-app-react16<br />
npm install<br />
npm run build<br />
npm run serve<br />
Now bundles are available here: http://localhost:3002<br />

main-app<br />
cd main-app<br />
npm install<br />
npm run build<br />
npm run serve<br />
Now the application is available here: http://localhost:3000<br />
