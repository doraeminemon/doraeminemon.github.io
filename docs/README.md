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
Hi, my name is Thy Sơn, or you can just call me Tyson. Having worked on multiple projects and multiple teams, I see my strength is the ability to abstract problem, research it and find the most suitable solution. Beside that, effective writing & speaking communication, organizing data is a must when I have to work with my team remotely. What I'm still working on is my responsibility and carefulness while working with production system.

Beside the original scope of a software engineer, I've been interested and learn about different-yet-related aspect of building software, including but not limited to: graphic / UX design, math, economics, business, psychology, politics.
## Tools in use
Golang, NodeJS, Protobuf, tailwind-css, React, React Native ( iOS )
## Work experience
### Pickupp
October 2019 - Present: Full stack developer solving last mile logistics problems in Hong Kong, Singapore, Malaysia & Taiwan.

- Delivery Agent’s Wallet features: database structure for calculating agent’s wallet balance, ensuring performance and accuracy using NodeJS ( requiring using exact-math, number-as-string to ensure calculation are correct despite JS’s floating point ). There are some problem along the way but my team & I have fixed it.

- Data warehouse on Postgres using AWS’s Database Migration System ( WAL replication ): using terraform and some js script, created a system to pipe data from 4 regional databases into a single read-only warehouse, ensuring performance & reliability of data of the data warehouse and all regional databases.

- Product split refactor : with a lot of help from teammate, I sketch out the major structure for a big refactor for the “order state” within the system to allow different delivery product type be build up from the original. This system is similar to a state-machine where depends on the original state + conditions of order, will allow certain next-state to be achieved. The new system also make it easier re-use parts of the transition & enhance code readability. It's still far from the ideal "pure function" that I've set out but still one of my best work.

- Job-system clustering algorithm: implementing hierarchical clustering for a trip-grouping system, based on the “flying distance” between pickup & dropoff distance differences. This involve a smart ( math ) way of merging conditions of cluster instead of using typical “binary” logic.

A lot of thanks to the teammate who got my back and helped me grow: Stan Ley, Clong & Lan Nguyen.

### InApps Technology

May 2019 - Oct 2019: Back End Team Lead for multiple outsource projects, mostly CRUD web / mobile app: Deliverycontainers.com, Fanathon, Travelr

Manage team daily operation task.
Support team on development and deploy using CI/CD, integrated with VueJS front end and NodeJS backend.
Develop plan and framework for contigency as well as improve team efficiency.
Weekly short seminar to improve team knowledge on debugging, problem solving and devops skill, as well as standardized team's framework and 3rd party dependencies.

Oct 2018 - May 2019: Backend Engineer for SwiftEngine.io - Serverless Backend platform for Swift

Work as a developer to develop and deploy websites written in Swift, as well as ops related system.

A lof of thanks to Tri Nguyen - CTO and Tam Nguyen - CEO who supports me to deal with technical & management problems.

### Innovatube
2016-July 2018: iOS Developer

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

Pardon to teammate who bear my problems: Hayley, Tarah worked as PM, Tu Nguyen worked as designer, Bella worked as QA.

### JMango360
2015-2016: iOS Developer maintaining JMango360 iOS codebase.

-	Maintaining old codebase written in Objective-C
- Engage in agile scrum workflow for releasing features

Thanks to Mr. Tien who teach me Git & other developer tools, as well as thinking in RxCocoa / RxSwift.

## Education
### James Cook University Singapore
2013 - 2015

Bachelor of IT – Game design major
-	Game design using Unity engine
-	Hands on game networking using C# by creating a network multiplayer chess game client – server
-	Studying algorithm and basic programming theories and concept
-	Participate in Vietnamese community as a President for 2 trimesters. Active member throughout study period

## Readings / Experiments
- Category theory for programmer: not finished, touched on some topic regarding basic category, how it’s related to programming, why it’s the ideal way of doing things. Really want to finish sometimes soon due to its breadth and applicability.
- The book of shader : writing & toying with some basic shader, render mostly 2D graphics and some liquid-like shader using 2D complex noise. Still struggle to render a 3d cube from scratch.
- Finished Andrew Ng’s Machine Learning course on Coursera: all exercises done with required mark. Got some understanding & intuition regarding matrix multiplication and power of GPU.

## Opinions
- Golang are good in teams with different level of seniority levels. Very bad at addressing cross-cutting concerns of logic. Should have better way to “merge” objects. go-pg are bad due to treating all null as zero values.
- NodeJS: flexible and can be really powerful in the right hand. With some instructions & eslint conditions can be really adapt to any team. Number are a big pain when system need to address accuracy of numbers. Package ecosystem are in disarray because of too much people who think they are doing something new instead of search & contribute.
- Functional programming beats OOP hands down, first for easy scaling when refactor, second for debuggable system. FP with strong type language is the best system for maintaining / refactoring. To quote functional programming - a pragpub anthology : “FP’s recognized good fit for concurrency appeals to people writing multi-processor apps, high-availability apps, web servers for the social network, and more. FP’s higher-level abstractions appeal to those looking for faster development time or more understandable code. FP’s emphasis on immutability has a strong appeal for anyone concerned about reliability.”
- Within functional programming language, currently there aren’t any language which satisfy all these:
    - Popular enough to have a healthy ecosystem ( including: package, tooling, deployment service )
    - Have good type system
    - Have a pipe operator
    - Typescript is the closest we can get to all 3
    - Elixir is have a lot of strength mentioned, but seems like still waiting for some big company to adopt

## Exhaustive list of projects & technologies
- Pickupp platform : React, Redux, Mobx, React Native, NodeJS, Golang, Docker, N8N
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

## Life achievements

- Gaining ~20kg of weight since 2015 years old. Maintain good body composition throughout the process.
- Stable salary & skill growth rate since start of career.
