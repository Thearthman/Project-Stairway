---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt11_Databases/"}
---

# 11.01 File-based Approach
>[! definition] File-based Approach
>File-based approach is when data are stored using in individual files (like, text file or excel files). This approach is easy to implement when little data need to be stored. 

## Downsides of File-based approach
1. **Data Integrity** related problems 
	1. *Referential Integrity*: happens when user intend to reference data from one file to another. The changes in one file's field will not update the related/referenced fields in other files 
	2. *Data Inconsistency*: data might not be consistent across multiple files when they were supposed to be. 
	3. *Redundancy of data*: data can be duplicated without being noticed, which leaves redundant data.
	4. *Data Fragmentation*: data may be scattered if no file management techniques are implemented. 
2. **Data Validation** related issues
	1. *Incorrect format of data*: User might input data in incorrect formats without being noticed. 
	2. *Double entry/Missing entry*: User may enter multiple values into a single field; User may enter blank value into fields.
	3. *Implicit Structure*: The structure of the file is not explicit in the file, essentially leaving no guide for users inputing data.
3. **Data Availability** related difficulties
	1. *User access rights/Security:* no way/hard to implement user access rights, data can be access by any entity.
	2. *Data Dependency*: The program to view the data highly depends on the format the file was written, which is not explicit in the file itself. For example, excel files can only be read through excel (or other programs that supports excel format).


# 11.02 The Relational Database
>[! definition] Database
>**Databases** are systems that *handles* the *creation*, *read*, *update*, *deletion* ==(CRUD)== of files.

>[! definition] ***Relational*** ***Database***
>***Relational databases*** are databases which *store* a *collection of relational* **tables**, essentially *binding datas* from each **tables** together. 

## Table
>[! definition] Tables
>A **tablet** in relational database *contains*:
>1. **Name**
>2. **Attributes** (Fields, name/header of each columns) *One* or *No* **Value**
>3. **Tuple** (Records of Instances/Entities)
### Primary Key | PK
>[! definition] Primary Key
>A **PK** may be a *single* attribute or *a collection of* **attributes**. Importantly, every **table** *must have* a **PK**. PK are mainly used to resolve data redundency.  
>- *Uniqueness* of PK: *each* **tuple/record** must have a *unique* value of **PK**, i.e., no records could have the same value of **PK**.  
### Candidate key and secondary key
Candidate Keys are keys able to become PK, and candidate keys not being selected as PK will become secondary key.
### Foreign Key | FK
>[! definition] Foreign Key
>Essentially **FKs** are **PKs** *from other tables*, used as attributes in the current table. FKs are used to *resolve* **referential integrity**: when entering value for FKs, DBMS will prevent values that does not exist in the tablet that FK is referencing from.


# 11.03 Conceptual E-R Model
>[! definition] Entity-Relationship Modelling
> The definition of entity-relationship modelling is breaking down the process of database design into simple steps through entity-relationship (E-R) diagram. 

## Relationship symbols
>[! definition] How to read E-R Diagram
> Imagine looking at the relationship from one data set to another data set, the condition/relationship is the symbols you have to pass before entering the other data sets.  
> You can phrase a sentence from looking at the diagram.  
> - For example `M or 0 : 1` in the below diagrams. *Many or 0 bookings can have one and only one Venue*
### M:1
![Pasted image 20240314210139.png](/img/user/Attachments/Pasted%20image%2020240314210139.png)
### Must M : Must 1
![Pasted image 20240314210147.png](/img/user/Attachments/Pasted%20image%2020240314210147.png)
### M or 0 : Must 1
![Pasted image 20240314210235.png](/img/user/Attachments/Pasted%20image%2020240314210235.png)
### M or 1 : M or 0
![Pasted image 20240314211641.png](/img/user/Attachments/Pasted%20image%2020240314211641.png)
### Complete graph view
![Pasted image 20240314211721.png](/img/user/Attachments/Pasted%20image%2020240314211721.png)

# 11.04 Logical E-R Model
>[! definition] Logical E-R Modelling
>Logical E-R model differs from Conceptual E-R because it contains specific ways of implementing a system. 
## Solving for M:M FK implementation
> M:M relationship are broken down into one to many, many to one situation. 

Here is a code for when you want to implement M:M relationship between student information and respective course information.
```SQL
CREATE TABLE Students ( 
student_id INT PRIMARY KEY, 
student_name VARCHAR(50) 
); -- Create Courses table 

CREATE TABLE Courses ( 
course_id INT PRIMARY KEY, 
course_name VARCHAR(50) 
); -- Create Linking Table 

CREATE TABLE Student_Course ( 
student_id INT, 
course_id INT, 
FOREIGN KEY (student_id) REFERENCES Students(student_id), 
FOREIGN KEY (course_id) REFERENCES Courses(course_id) 
); -- Insert Records into Students table 

INSERT INTO Students (student_id, student_name) 
VALUES (1, 'John'), (2, 'Alice'), (3, 'Bob');
-- Insert Records into Courses table 

INSERT INTO Courses (course_id, course_name) 
VALUES (101, 'Math'), (102, 'Science'), (103, 'History'); 
-- Insert Records into Linking Table 

INSERT INTO Student_Course (student_id, course_id)
VALUES (1, 101), -- John is enrolled in Math 
(1, 102), -- John is enrolled in Science 
(2, 101), -- Alice is enrolled in Math 
(3, 102); -- Bob is enrolled in Science
```


# 11.05 Normalization
>[! definition] Normalization 
>Normalization are used to construct *a set of* data items. Also can be used to improve existing table designs.

## How to design
When designing table, we first put the lists (like student_id, student_name) inside brackets: `(BookingID, VenueName, VenueAddress1, VenueAddress2, Date)`, similar to how a table's attributes are put inside brackets. However, during this process, we may encounter **repeating groups**, which are essentially tables of data $_{\text{see below definition block for clarification}}$ (instead of lists). We include them as tuples (basically append them as table).
>[! definition] Repeating groups
>Basically data already comes with relationship, i.e, in forms of table.

## First Normal Form | 1NF
- ***Data Redundancy***: **No** *multiple* or *different type* of values in the **same attribute** (field).
- All value of Entity's attributes must not be the same (would be ok as long as not all attributes are the same)
- Must have PK
> Still, a phenomemon called **Partial Dependency** can occur in 1NF.

## Partial dependency
When a table has a composite key like this:
![Pasted image 20240304102031.png](/img/user/Attachments/Pasted%20image%2020240304102031.png)
It can be called STUDENTSUBECT(<u>StudentID+SubjectName</u>, SubjectTeacher)
What can be noticed here is: only the SubjectName (part of the primary key) determines the SubjectTeacher.

## 2NF
- Break down table with partial dependency into two tables. 
- The resultant table should not contain partial dependency.

## 3NF
- Break down non-key attribute that has dependency on each other into another table


# 11.06 The DBMS
>[! definition] Database management system
>The software that controls the physical storage of the data, on internal level. 

## The external level
User and programmer views. Views are external schema determining a accessility of the database.
## The conceptual level
The database administrator (DBA) controls logical schema.
## The internal level
The DBMS.

## Developer interface
the provided software tools by DBMS
## Query processor
Allows for query to be created and processed
## Query
mechanism for extracting and manipulating data from database.
## Data Dictionary
> Data dictionary 
> Metadata about the **Database**

#ComputerScience_Revision/P1 
Composition of a Data Dictionary ***IMPORTANT***
- A listing of **data objects** (names and definitions)
- Detailed **properties** of **data elements** (data type, size, nullability, optionality, indexes)
- **Entity-relationship** (ER) and other **system-level diagrams**
- **Reference data** (classification and descriptive domains)
- **Missing data** and quality-indicator codes
- **Data source** (data warehouse, data lakes, databases, applications)
- **Date** and **time** when the property was created or changed
- **Descriptive statistics** that go beyond missing values, such as min-max values and histogram distribution
- **Owners** and **editors** of data sets that contain these variables
- **SQL queries** attached to the data asset



## Index
>[! definition] Index
>DBMS has the capability to create indexs of tables. The table of index only contains index and the PK or Secondary Key. Searching through the index will be much faster because data is so much less.

# 11.07 SQL
Query processor, enable usage of SQL

## DDL
>[! definition] Data Definition Language
>Part of SQL for creating or altering tables.  
> #ComputerScience_Revision/P1   
> - Besure to *declare* **Primary Key** in CREATE TABLE  
> - INTEGER type data can't start with 0 like 0010.  


## DML
>[! definition] Data Manipulation Language
>- Insertion of data into tables
>- modification or removal of data
>- reading of data


## Group By
![Pasted image 20240315102954.png](/img/user/Attachments/Pasted%20image%2020240315102954.png)
