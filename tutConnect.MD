# tutConnect

## Document:
System Requirement Specifications Document

## Title:
System Reqruiement Spefications for Online Extra Academic Activities(Arts, Sports, Writing,Acting, Workshops) Learning Platform for  Trainer and Student Connection

## Team: 
Students, Trainers, Admin Manager

## Objective (Purpose):
	The online learning System(tutConnect) for product Web Applictaion is intended to  provide a medium to connect between students, trainers and internal users (Management Staff)  through  a single gateway using internet or Web Application. It will enable  students to book offline one on one or batch learning sessions through the workshops arranged by the trainers displayed on our portal. 

## Scope:
This System allows Trainers to maintain training calender for viewing, scheduling and  updation of Courses sheduling their work flow and timing catalogue based on their availablity.

Faculty will be able to view the schedule and inform about availability to training manager within specific time.
They will be able to check about the Fees payment status.
They will be able to assign grades according to performance


Student will be able to view the workshops, and training modules. 
They can apply, revoke and give feedback of the attended sessions.
They will be able to pay the fees using payment gateway on Web Application.
They will be allowed to give feedback to their trainer

Admin will be able to add or remove any entity.
This will be carried ot based on legitimacy of that particular person.



## Definitions:
	Portal: Peronalized Online Web Application
	WorkShop:A workshop is a gathering or seminar where individuals come together to learn, share information
	Dashboard: Personalized information presented using  BI techniques such as grid, score card, graph, KPI, etc.


## Functional Requirements:


Trainers wil be able to see the registration for while entering the app and after clicking on register.
Trainers will be able to fill the basic details.
Trainers will be able to see their desired (Instrument, sports, etc.) option to select while registering as a coach.
They will be able to check about the Fees payment status.
They will be able to assign grades according to performance.




Student will be able to view the workshops, and training modules. 
Student will be able to fill the registration form while first time registering on the portal.
Student will be able to see the type they want to learn.
They can apply, revoke and give feedback of the attended sessions.
They will be able to pay the fees using payment gateway on Web Application.
They will be allowed to give feedback to their trainer


Admin will be able to add or remove any entity.
Admin will verify both student and trainer and let them access the site by logging in.
This will be carried ot based on legitimacy of that particular person.

The System will present same login page for all users.
The dropdown selection will decide the navigation to Student, Admin or trainers page.




	

## NonFunctional Requirement:

		### Security
		Only Authorized users are allowed to access the tutConnect.
		Each user will be to allowed access to the system  through authentication process. 
		System will provide access to  the content on web application, operations on the web application. (Permissions based on Role)
		Using SSL in all transactions  which will be performed. It would protect confidential information shared by system to 
		System access will automatically be taken off from all the trainers and students after the course is completed.
		System will block operations for inactive  stakeholder and would redirect for authentication.
		System  will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, databse Server)
		Sensitive data will be always encrypted across communcation.
		User proper firewall to protect servers from out side phishing, vulnerable attacks.


		### Reliability
		The system will backup business data on regular basis and recover in short time duration to keep system operational
		Continous updates are matained , continous Adminstration is done to keep system operational.
		During peak hours system will maintain same user experaince by managing load balacning .

		### Availability
		 uptime:   24* 7  available
		 99.999%
	
		### Maintainability:
		A Commercial database software will be used to maintain System data Persistence.
		IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers.
		Separate enviornment will be maintained for system for isolation in production, testing, and development.

		### Portablility:
		System will provide portable User Interface ( HTML, CSS, JS) through users will be able to access tutConnect.
		System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP)

		### Accessibility:
		Only registered users will be able to access the portal after authentication.
		Admin can reject or approve  requests  based on role provided.
		Admin team will be able to view daily, weekly, monthly, annual demand growth throgh customized dashboard.
               Trainers will be able to see their student enhancement graph and could know their understanding levels time to time.

	        ### Durability:
		System will retain user session 15 minutes or small data in cookies even though customer loose internet connection and join again.
		  System will maintain wishlist for customer . 
		  System will implement backup and recovery for retaining stake holders data, bussiness operation data and business data over time.

		### Efficiency:
		During vacations the workshops and the traffic for extra academic coaching will be maximum so need to handle the traffic.
		System will be able to manage all transactions with isolation.

		### Modularity:
		 System will designed and developed using reusable, independent or dependent business senarios in the form of modules.
		 These modules will be loosely coupled and highly cohesive.
		
		 modules.
	
		### Scalability:
		System will be able  to  provide  consistent user exeprience to stake holder as well as vistors irrespective of load.

		### Safety:
	tutConnect will be secure from malicious attack, fishing.
		tutConnect functionalilites are protected from outside with prper firewall configuration.
		tutConnect will be always kept updated with latest anit virus software.
		Bussiness data will be backed up periodically to ensure safty of data using increamental back up strategy.
		Role based security will be applied for Application data and operations accessibility.

