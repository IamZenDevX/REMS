# REMS
Real Estate Management System
<h2 align="left"> Intoduction: </h2>

Designed to automate real estate activities including loan processing, transaction handling, property management, and customer connections, this **Real Estate Administration System** is Strong architectural design helps the system to track properties, ownership information, customer data, registrations, loans, and transactions.

<h2 align="left"> Key Features: </h2>

1. **Customer Management :** Control client information including interaction logs, preferences, and contact details.
    
    Present a customized client experience coupled with fast access to property data.
    
2. **Property Management**
    
    View, add, change properties like location, type, value, and status using particular accuracy.
    
    Streamline property handling by controlling rental information and ownership.
    
3. **Owner & Registration Management :**  

   Manage property registrations and control owners to ensure proven, safe ownership.Track history of ownership and keep register documentation.

1. **Loan Management :**

   Include loan services into the property system addressing loan eligibility, approval, and loan tracking.

   Provide real-time loan status information and automated loan related processes.

1. **Transaction Processing :**
    
    Track and record rental, property sales, and payment related events.
    
    Keeping up a history of financial contacts will enable you to report and retrieve quickly.

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used: </h2>

![PostMan Github.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/0d6d1c89-f506-4ac0-8d04-9f5ff3d35244/PostMan_Github.png)

<h2 align="left"> Library: </h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

<h2 align="left"> 1. **Database Structure </h2>

The platform will require a relational database to manage User And Tasks . Below is a proposed database structure with the key tables.

<h2 align="left"> Tables: </h2>

---

<h2 align="left"> a) Category </h2>

| **Field Name** | **Type** |
| --- | --- |
| registrationid | String |
|   propertyname | String |
| customername | String |
| registrationdate | String |
| registrationstatus | String |

<h2 align="left"> b) Property </h2>

| **Field Name** | **Type** |
| --- | --- |
| propertyid | String |
| propertyname | String |
| propertystatus | String |
| propertytype | String |
| propertybhk | Number |
| area | String |
| price | Ref. Object → Provider |
| location | Number |

<h2 align="left"> c) Transaction </h2>

| **Field Name** | **Type** |
| --- | --- |
| transactionid | String |
| transactiondate | Date |
| transactionmode | String |
| bankname | String |
| amtpaid | Number |
| transactionstatus | String |
| referencenum | String |

<h2 align="left"> d) Owner </h2>

| **Field Name** | **Type** |
| --- | --- |
| ownerid | String |
| ownerpassword | Password |
|  |  |

<h2 align="left"> e) Loan </h2>

| **Field Name** | **Type** |
| --- | --- |
| loanid | String |
| bankname | String |
| rate | Number |
| installments | String |
| tenure | Number |
| maxamt | Number |
| emailid | String |

<h2 align="left"> f) Customer </h2>

| **Field Name** | **Type** |
| --- | --- |
| customerid | String |
| customerpassword | String |
| firstname | String |
| middlename | String |
| lastname | String |
| emailid | String |
| dateofbirth | String |
| phonenumber | String |
| occupation | String |
| annualincome | String |
| address | String |

<h2 align="left"> Development with ZenDevx: </h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

# **🐦 Connect With Me:**
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="#" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
