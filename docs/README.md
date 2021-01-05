---
title: Do Dinh Thy Son
lang: en-US
meta:
  - name: description
    content: My personal experience
  - name: keywords
    content: full-stack engineer software developer full stack developer docker react native nodejs golang
pageClass: resume-class
---
<h1 class='display'> Đỗ Đình Thy Sơn </h1>
<div class='subtitle'><em>Full-stack developer, 5 years experiences in multiple domain, fluent in JS & Golang</em></div>

::: contacts
[LinkedIn](https://www.linkedin.com/in/đỗ-đình-thy-sơn-532b7886)
|
[Github](https://github.com/doraeminemon)
|
[Email](mailto:dodinhthyson@gmail.com)
:::

## Personal statement
Hi, my name is Thy Sơn, or you can just call me Tyson. Having worked on multiple projects and multiple teams, I see my strength is the ability to abstract problem, research it and find the most suitable existing solution. Beside that, effective writing & speaking communication, organizing data is a must when I have to work with my team remotely. What I'm still working on is my responsibility and carefulness while working with production system.

Beside the original scope of a software engineer, I've been interested and learn about different-yet-related aspect of building software, including but not limited to: graphic / UX design, math, economics, business, psychology, politics.
## Technical skill
### Tools in use :
Golang, NodeJS, tailwind-css, React, React Native ( iOS )
### Mobile :
- iOS Swift
- iOS ObjectiveC
- React Native
### Frontends
- React
- Vue
- Mobx
- GraphQL
### Backend
- LaravelPHP
- Golang
- NodeJS Javascript
- NodeJS Typescript
- Django
### Dev Ops
- Docker, Kubernetes, Terraform
-	Microservices architecture using Docker and Docker-compose
- CI / CD for React Native using Appcenter.ms
-	Firewall and subnet configuration in Google Cloud & AWS
- Slackbot
- N8N
- Amazon Postgres RDS, Amazon S3, Amazon Cloudfront, Amazon Cloudwatch, Amazon EC2, Amazon DMS
- Postgres, MySQL, Hasura Graphql engine
### Others
-	TDD / BDD with native code ( Elixir, Mocha & Chai, Enzyme ) or tools ( Postman, Swagger, etc. )
-	E2E testing using Python Selenium,Cypress, integrate it with production environment using Docker and Concourse
-	Git standard

## Work experience
### Pickupp
September 2020 - Present

A lot of thanks to the teammate who got my back and helped me grow: Stan Ley, Clong & Lan Nguyen.
- Delivery Agent’s Wallet features: database structure for calculating agent’s wallet balance, ensuring performance and accuracy using NodeJS ( requiring using exact-math, number-as-string to ensure calculation are correct despite JS’s floating point ). There are some problem along the way but my team & I have fixed it.

- Data warehouse on Postgres using AWS’s Database Migration System ( WAL replication ): using terraform and some js script, created a system to pipe data from 4 regional databases into a single read-only warehouse, ensuring performance & reliability of data of the data warehouse and all regional databases.

- Product split refactor : with a lot of help from teammate, I sketch out the major structure for a big refactor for the “order state” within the system to allow different delivery product type be build up from the original. This system is similar to a state-machine where depends on the original state + conditions of order, will allow certain next-state to be achieved. The new system also make it easier re-use parts of the transition & enhance code readability. It's still far from the ideal "pure function" that I've set out but still one of my best work.

- Job-system clustering algorithm: implementing hierarchical clustering for a trip-grouping system, based on the “flying distance” between pickup & dropoff distance differences. This involve a smart ( math ) way of merging conditions of cluster instead of using typical “binary” logic.

### InApps Technology
September 2019 - September 2020

A lof of thanks to Tri Nguyen - CTO and Tam Nguyen - CEO who supports me to deal with technical & management problems.

Full Stack developer
Manage team daily operation task.
Support team on development and deploy using CI/CD, integrated with VueJS front end and NodeJS backend.
Develop plan and framework for contigency as well as improve team efficiency.
Weekly short seminar to improve team knowledge on debugging, problem solving and devops skill, as well as standardized team's framework and 3rd party dependencies.

Oct 2018 - May 2019

Backend Engineer / IT Offshore / Beta Particle – US
Work as a developer to develop and deploy websites written in Swift¬¬

SwiftEngine is the first Serverless Swift Platform for web development.

Products
  -	https://swiftengine.io
  -	https://play.swiftengine.io

Technologies
  -	Swift for Linux
  -	Nginx
  -	Docker

### Innovatube
2016-July 2018

Pardon to teammate who bear my problem: Hayley, Tarah worked as PM, Tu Nguyen worked as designer, Bella worked as QA.

Shoubotenken project is a platform where building auditors can join, bid, and participate to audit projects in Japan
-	Developing a mobile client using React Native, GraphQL, Mapbox
-	Using a custom template to render more than 100s of forms, along with their documents
-	Solve many client-side problem and problems related to only a specific platform
-	Maintain good performance on both platform and multiple device types
-	Help setting up and maintain a CI/CD pipeline using Visual Studio App center

3Clicks ( 3Clicks.co ) project is a platform for buying and selling services in Singapore
-	Solo developing a mobile client using native Swift, RxSwift, Realm
-	Develop a chat client with multiple additional functions using Firebase ( now Firebase Realtime Database )
-	Handle smart links and solving smart link routing problems
-	Setting up a CI/CD pipeline using BuddyBuild
### JMango360
2015-2016

iOS Developer
-	Maintaining old codebase written in Objective-C
-	Migrating a thousands lines code base from Objective-C to Swift, with dependencies such as ReactiveCocoa to RxSwift
-	Released a hobby project iOS app using Rails on Heroku to listing currency exchange fluctuation

## Personal projects

### Vietnamese thesaurus – DongNghia.vn
-	Currently early stage
-	Classic RESTful website to experiment with Phoenix framework
-	PostgreSQL, HTTPS, Nginx
-	Deployed to AWS EC2

### Currency converter and history tracking – Ty Gia Hang Ngay
-	Backend in Rails Heroku
-	iOS mobile front end with custom history chart
-	Cron job for daily scraping currency rate from Vietnamese bank websites

## References
Available upon request
Mr. Tri Nguyen – InApps Tech Lead
Mr. Eugene Nguyen – Innovatube Lead Project Manager

## Education
### James Cook University Singapore
2013 - 2015

Bachelor of IT – Game design major
-	Game design using Unity engine
-	Hands on game networking using C# by creating a network multiplayer chess game client – server
-	Studying algorithm and basic programming theories and concept
-	Participate in Vietnamese community as a President for 2 trimesters. Active member throughout study period


## Exhaustive list of projects & technologies
- Jmango mobile app ( maintain ) : iOS ObjectiveC
- Inploi ( maintain ) : iOS Swift RxSwift
- 3Clicks : iOS Swift RxSwift
- Shoubotenken : ReactNative, NodeJS, GraphQL, Javascript
- Tu Dien Dong Nghia ( Vietnamese thesaurus ) : Elixir Phoenix, VueJS Javascript
- Personal website ( thyson.dev ) : VueJS Vuepress Javascript
- SwiftEngine ( maintain ) : Backend Swift, Docker
- Pushtrain: Laravel PHP, VueJS, Javascript, Terraform, Docker, MySQL
- DeliverContainers.com : VueJS, NodeJS, Typescript, Javascript, Docker, Postgres
- Pickupp platform : React, Redux, Mobx, React Native, NodeJS, Golang, Docker
- Pickupp data warehouse : NodeJS scripting, Javascript, Postgresql
- Belazy : Django, Python

## Life achievements

- Gaining ~20kg of weight since 2015 years old. Maintain good body composition throughout the process.
- Stable salary & skill growth rate since start of career.
