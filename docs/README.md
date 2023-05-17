---
title: Do Dinh Thy Son
lang: en-US
meta:
  - name: description
    content: My personal experience
  - name: keywords
    content: full-stack engineer software developer full stack developer docker react native nodejs golang elixir
pageClass: resume-class
---
<h1 class='display'> Đỗ Đình Thy Sơn </h1>
<div class='subtitle'><em>Full-stack developer, 6 years experiences in multiple domain, fluent in JS, Golang & Elixir</em></div>
<div class='subtitle'><em>Reading time: 5 minutes 30 seconds</em></div>

::: contacts
[LinkedIn](https://www.linkedin.com/in/đỗ-đình-thy-sơn-532b7886)
|
[Github](https://github.com/doraeminemon)
|
[Email](mailto:dodinhthyson@gmail.com)
:::
## Personal statement
Hi, my name is Thy Sơn, or you can just call me Tyson. Having worked on multiple projects and multiple teams, I see my strength is the ability to abstract problems, research it, and find the most suitable solution. Besides that, effective writing & speaking communication, organizing data is a must when I have to work with my team remotely. My goal for the next few years is to become an engineering manager.

Besides the original scope of a software engineer, I've been interested and learn about different-yet-related aspects of building software, including but not limited to: graphic / UX design, math, economics, business, psychology, politics.
## Tools in use
Golang, NodeJS, Protobuf, TailwindCSS, React, React Native ( iOS ), Elixir
## Work experience

### Doyobi
Jan 2022 - Nov 2022: Full stack developer developing real time metaverse to teach children through the metaverse
- Technology used: Javascript, React, Elixir, NextJS, Figma
#### Responsibilities
- Metaverse feature: building a game-like platform which allows multiple people to join and interact with each other and the environment. Also built a system to allow admin to import their maps into the game to teach children through multiplayer adventure with guidance.
- Designing database schema, implement backend services for syncing player state.
- Building the deployment and containerization system.
- Code review and writing documentation for each and every part of the features.
- Discuss and designing the UX / UI of the metaverse with the team.
- Write unit testing and ensure unit test coverage on the whole project.

### Pickupp
October 2019 - Jan 2022: Full stack developer solving last-mile logistics problems in Hong Kong, Singapore, Malaysia & Taiwan.
- Technology used: NodeJS, React, React Native, Golang, Jest

#### Responsibilities
- Discuss with the team to design most of the features from scratch; discuss and review with operation team so that every features meet its requirement on timeline and usability as well as performance.

- Delivery Agent’s Wallet features: design the database structure for calculating agent’s wallet balance, ensuring performance and accuracy using NodeJS. Discussion with the team to design the database structure as well as selecting the library fitting for the task.

- Data warehouse on Postgres using AWS’s Database Migration System ( WAL replication ): using terraform and some js script ( NodeJS, ReactJS ), created a system to pipe data from 4 regional databases into a single read-only warehouse, ensuring performance & reliability of data of the data warehouse ( containing at least 2m orders ) and all regional databases.

- Product split refactor: with a lot of help from teammates, I sketch out the major structure for a big refactor for the “order state” within the system to allow different delivery product types to be build up from the original. This system is similar to a state-machine where depends on the original state + conditions of the order, which will allow certain next-state to be achieved. The new system also makes it easier to re-use parts of the transition & enhance code readability. It's still far from the ideal "pure function" that I've set out but still one of my best works.

- Job-system clustering algorithm: implementing hierarchical clustering for a trip-grouping system, based on the “flying distance” between pickup & dropoff distance differences. The logic for this is mostly based on k-means clustering logic for points in 2d plane.

- Using Jest and Mocha for unit test for the whole project.

A lot of thanks to the teammate who got my back and helped me grow: Stan Ley, Clong & Lan Nguyen.

### InApps Technology
May 2019 - Oct 2019: Back End Team Lead for multiple outsource projects, mostly CRUD web / mobile app: Deliverycontainers.com, Fanathon, Travelr
- Technology used: NodeJS, React, React Native, PHP, Swift, Vue

#### Responsibilities
- Manage team daily operation tasks.
- Support team on development and deploy tasks using CI/CD, integrated with VueJS front end and NodeJS backend.
- Develop plan and framework for contingency as well as improve team efficiency.
- Weekly short seminar to improve team knowledge on debugging, problem -solving and DevOps skill, as well as standardized team's framework and 3rd party dependencies.

Oct 2018 - May 2019: Backend Engineer for SwiftEngine.io - Serverless Backend platform for Swift

- Work as a developer to develop and deploy websites written in Swift, as well as ops related system.

A lot of thanks to Tri Nguyen - CTO and Tam Nguyen - CEO who supports me to deal with technical & management problems.

### Innovatube
2016-July 2018: iOS Developer
- Technology used: NodeJS, React, React Native, PHP, Swift

#### Responsibilities
- Shoubotenken project is a platform where building auditors can join, bid, and participate in audit projects in Japan
  -	Developing a mobile client using React Native, GraphQL, Mapbox
  -	Using a custom template to render more than 100s of forms, along with their documents
  -	Solve many client-side problem and problems related to only a specific platform
  -	Maintain good performance on both platform and multiple device types
  -	Help setting up and maintain a CI/CD pipeline using Visual Studio App center

- 3Clicks ( 3Clicks.co ) project is a platform for buying and selling services in Singapore
  -	Solo developing a mobile client using native Swift, RxSwift, Realm
  -	Develop a chat client with multiple additional functions using Firebase ( now Firebase Realtime Database )
  -	Handle smart links and solving smart link routing problems
  -	Setting up a CI/CD pipeline using BuddyBuild

Pardon to teammates who bear my problems: Hayley, Tarah worked as PM, Tu Nguyen worked as a designer, Bella worked as QA.

### JMango360
2015-2016: iOS Developer maintaining JMango360 iOS codebase.
- Technology used: Ruby on Rails, Swift

#### Responsibilities
-	Maintaining old codebase written in Objective-C
- Engage in agile scrum workflow for releasing features
- Learning to use git and basic concepts of software engineering: source control, collaboration, designing features ...

Thanks to Mr. Tien who teach me Git & other developer tools, as well as thinking in RxCocoa / RxSwift.

## Education
### James Cook University Singapore
2013 - 2015

Bachelor of IT – Game design major
-	Game design using Unity engine
-	Hands-on game networking using C# by creating a network multiplayer chess game client-server
-	Studying algorithm and basic programming theories and concept
-	Participate in the Vietnamese community as a President for 2 trimesters. Active member throughout the study period

## Readings / Experiments
Category theory for programmers
- Not finished, touched on some topic regarding basic category, how it’s related to programming, why it’s the ideal way of doing things. Really want to finish it sometimes soon due to its breadth and applicability.

The book of shader
- Writing & toying with some basic shader, render mostly 2D graphics and some liquid-like shader using 2D complex noise. Still struggle to render a 3d cube from scratch.

Andrew Ng’s Machine Learning course on Coursera
- All exercises were done with required marks. Got some understanding & intuition regarding matrix multiplication and the power of GPU. Finished and got a certificate from Coursera.

## Opinions
- Golang is good in teams with different levels of seniority levels. Very bad at addressing cross-cutting concerns of logic. Should have a better way to “merge” objects. go-pg are bad due to treating all null as zero values.
- NodeJS: flexible and can be powerful in the right hand. With some instructions & eslint conditions can be adapt to any team. Number is a big pain when the system needs to address the accuracy of numbers. Package ecosystem is in disarray because of too many people who think they are doing something new instead of search & contribute.
- Functional programming beats OOP hands down, first for easy scaling when refactor, second for easy to debug system. FP with a strong type language is the best system for maintaining/refactoring. To quote functional programming - a pragpub anthology : “FP’s recognized good fit for concurrency appeals to people writing multi-processor apps, high-availability apps, web servers for the social network, and more. FP’s higher-level abstractions appeal to those looking for faster development time or more understandable code. FP’s emphasis on immutability has a strong appeal for anyone concerned about reliability.”
- Within functional programming language, currently ( 2019 ), there isn’t any language which satisfies all these:
    - Popular enough to have a healthy ecosystem ( including package, tooling, deployment service )
    - Have a good type system
    - Have a pipe operator
    - Typescript is the closest we can get to all 3
    - Elixir has a lot of strength mentioned but seems like still waiting for some big company to adopt
- With the recent update of React to React Hooks ( 2022 ), React are at a spot where it's really close to proper functional programming now. The templating part are essentially stateless and we don't have to relied onto any Object lifecycle like before / after mount. There is just a little problem with event passing between different components now and it can be solve much elegantly than before with React-Redux. Comparing the state of the ecosystem, Phoenix LiveView or Svelte is at a much better place where event and message passing are an essential part of the ecosystem. LiveView with heex or Surface template can pretty much replace a front end framework anytime without sacrificing any development time.

## Exhaustive list of projects & technologies
- Pickupp platform : React, Redux, Mobx, React Native, NodeJS, Golang, Docker, N8N, Jest for automate testing
- Pickupp data warehouse : NodeJS scripting, Javascript, Postgresql, Terraform
- ChildrenOf.vn : StrapiJS, React, Netlify
- Miracle Group website ( abandoned ): TailWindCSS, React, GatsbyJS, NetlifyCMS
- Jmango mobile app ( maintain ) : iOS ObjectiveC
- Inploi ( maintain ) : iOS Swift RxSwift
- 3Clicks : iOS Swift RxSwift
- Shoubotenken : ReactNative, NodeJS, GraphQL, Javascript
- Tu Dien Dong Nghia ( Vietnamese thesaurus ) : Elixir Phoenix, VueJS Javascript
- Personal website ( thyson.dev ) : VueJS Vuepress Javascript
- SwiftEngine ( maintain ) : Backend Swift, Docker
- Pushtrain: Laravel PHP, VueJS, Javascript, Terraform, Docker, MySQL
- DeliverContainers.com : VueJS, NodeJS, Typescript, Javascript, Docker, Postgres
- Belazy : Django, Python
- Memos to us: NextJS, TailwindCSS, ReactJS, Phoenix 1.6, AWS Lightsail
- Web3 Hello world: Web3JS, EtherJS, ReactJS, TailwindCSS
- Personal stock trading bot: Phoenix, Elixir, TailwindCSS, Postgresql, Python
