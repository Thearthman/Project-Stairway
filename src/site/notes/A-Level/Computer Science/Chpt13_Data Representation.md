---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt13_Data Representation/"}
---


```ad-cite 
1. # User-defined Data Types
	1. show understanding of why user-defined types are necessary
	2. define and use non-composite types
		1. enumerated, pointer
	3. define and use composite data types
		1. set, record and class/object
	4. choose and design an appropriate user-defined data type for a given problem
2. # File Organisation and Access
	1. show understanding of the methods of file organisation
		1. including serial, sequential (using a key field), random (using a record key)
	2. show understanding of methods of file access
		1. sequential access for serial and sequential files
		2. direct access for sequential and random files 
	3. show understanding of hashing algorithms
		1. describe and use different hashing algorithms to read from and write data to a random / sequential file
3. # Floating Points
	1. describe the format of binary floating-point real numbers
		1. use two’s complement form
		2. understand of the effects of changing the allocation of bits to mantissa and exponent in a floating-point representation
	2. convert binary floating-point real numbers into denary and vice versa
	3. normalise floating-point numbers
		1. understand the reasons for normalisation
	4. show understanding of the consequences of a binary representation only being an approximation to the real number it represents (in certain cases)
		2. understand how underflow and overflow can occur
	5. show understanding that binary representations can give rise to rounding errors
```

# 1. User-Defined Data Types
## 1.1 Why User Defined Data are necessary
>[! def]
>To create a new data type (from existing data types)
>To allow data types not available in a programming language to be constructed // To extend the flexibility of the programming language
## 1.2 Define and Use Non-Composite Types
### Non-Composite Type
>[! def] 
>1. A data type that is defined without referencing another data type/contain only one data type in definition.
>2. It can be a primitive data type found in a programming language or a user-defined data type. 
>3. Example – enumerated data type / pointer data type

### 1 - Enumerated
>[! def]
>A user-defined non-composite data type with a list of all possible values that is ordered.
```pseudocode
TYPE MyEnum = (Monitor, CPU, SSD, HDD, LaserPrinter, Keyboard, Mouse)
```
### 2 - Pointer
>[! def]
>A user-defined non-composite data type that stores addresses/memory locations only and indicates the type of data stored in the memory location
```pseudocode
TYPE PointMyEnum = ^MyEnum
```
## 1.3 Define and Use Composite Types
### Composite Type
>[! def]
>1. It's a collection of data that can consist of multiple elements. Grouped under a single identifier. 
>2. Composite data types can be user-defined or primitive
>3. Composite data types refer to other data types in their definition/contain more than one data type in their definition
>4. Composite data types can be record/set/class
### 1 - Set
>[! def]
>A user-defined composite data type consisting a list of values referencing to another data type.
```pseudocode
TYPE Numbers = SET OF INTEGER　　
DEFINE EvenNumbers (2, 4, 6, 8, 10, 12): Numbers
```
### 2 - Record
>[! def]
>A user-defined composite data type consisting a list of variables of different data types.
```pseusdocode
TYPE <identifier1>
   DECLARE <identifier2> : <data type>
   DECLARE <identifier3> : <data type>
   ...
ENDTYPE
```
### 3 - Class/Object
>[! def]
>A user-defined composite data type consisting of a list of variables and procedures/functions
```
CLASS Pet
   PRIVATE Name : STRING
   PUBLIC PROCEDURE NEW(GivenName : STRING)
      Name ← GivenName
   ENDPROCEDURE
ENDCLASS
```
<u>**Inheritance:**</u>
```
CLASS Cat INHERITS Pet
   PRIVATE Breed: INTEGER
   PUBLIC PROCEDURE NEW(GivenName : STRING, GivenBreed : STRING)
      SUPER.NEW(GivenName)
      Breed ← GivenBreed
   ENDPROCEDURE
ENDCLASS
```
## 1.4 Design User Data Types
>Follow the above pseudocode.
---

# 2. File Organisation
## 2.1 Methods of Organisation
### 1 - Serial
>[! def]
>1. Records are stored one after the other // and need to be accessed one after the other.
>2. Serial files are stored in chronological order.
>3. In serial files, new records are appended to the file.
>4. A new version (of the file) has to be created to update the file.
### 2 - Sequential
>[! def]
>1. Records are stored one after the other // and need to be accessed one after the other.
>2. Sequential files are stored with ordered records // in the order of the key field.
>3. New records are inserted in the correct position.
>4. A new version (of the file) has to be created to update the file.
### 3 - Random
>[! def]
>1. Records are stored in no particular order within the file.
>2. There is a relationship between the key of the record and its location within the file // a hashing algorithm is used to find the location of the record.
>3. Updates to the file can be carried out directly.
## 2.2 Methods of File Access
### 1 - Serial
>[! def]
>
### 2 - Sequential
>[! def]
>Sequential access method searches for records by searching from the beginning of the file, record by record // until the required record is found or key field value is exceeded

>[! ex] <u>**To Serial and Sequential File Organisation**</u>
>**Serial**: 
>- For serial files, records are stored in chronological order
>- every record needs to be checked until the record is found, or all records have been checked. 
>
>**Sequential**:
>
>- For sequential files, records are stored in order of a key field/index, and it is the key field/index that is compared.
>- every record is checked until the record is found, or the key field of the current record is greater than the key field of the target record.
### 3 - Direct/Random
>[! def]
>1. Direct access allows a record to be found in a file without other records being read. 
>2. Records are found by using the key field of the target record // the location of the record is found using a hashing algorithm.

>[! ex] <u>**To Sequential and Random File Organisation**</u>
>**Sequential**:
>
>- In sequential files, an index of all key fields is kept
>- The index is searched for the address of the file location where the target record is stored.
>
>**Random**: 
>
>- A hashing algorithm is used on the key field of the record to calculate the address of the memory location where the target record is expected to be stored. 
>- Method to find a record if it is not at the expected location e.g. linear probing, search overflow area etc. See Below.

<u>**Collision**</u>
>[! def]
>1. A collision occurs when the record key doesn’t match the stored record key 
>2. This means the determined storage location has already been used for another record.  
>
>If the record is to be stored  
>
>3. Create a linked list for collisions with start pointer at the hashed address. (chaining)
>4. Search the file linearly  to find the next available storage space (closed hash) 
>5. Search the overflow area linearly to find next available storage space (open hash) 
>
>If the record is to be found 
>
>6. Search the linked list until the matching record key is found (chaining)
>7. Search the overflow area linearly (open hash) until the matching record key is found 
>8. Search linearly from where you are (closed hash) until the matching record key is found 
>9. If not found record is not in file
## 2.3 Hashing Algorithm
>[! def]
>Calculating an address from a key is called "hashing"
>`CIE only requires you to be able to calculate an address through hashing`
>
><u>**Mod | modulo operation**:</u>
>Mod calculates the remainder when one number is divided by another. For example, 7 mod 3 would be 1, because 7 divided by 3 is 2 with a remainder of 1.
# 3. Floating Points
## 3.1 Format of Binary Floating-Point Real Number
### 3.1.1 Two's Complement
### 3.1.2 Effects number of bits of mantissa and exponent
## 3.2 Conversion between binary to denary

## 3.3 Normalise floating-point
### Reason for Normalisation
>[! def]
>- To store the maximum range of numbers in the minimum number of bytes / bits. 
>- Normalisation minimises the number of leading zeros/ones represented. 
>- Maximising the number of significant bits // maximising the (potential) precision / accuracy of the number for the given number of bits. 
>- It enables very large / small numbers to be stored with accuracy. 
>- Avoids the possibility of many numbers having multiple representations.
## 3.4 Binary Representation Limitation
### Underflow
>[! def]
> The precision/accuracy of the number would be reduced. Least few significant bits being truncated.
> 
> Following an arithmetic/logical operation, the result is too small to be precisely represented in the available system // When the number of bits is not enough / too small for the computer’s allocated word size / to represent the binary number
## 3.5 Rounding Errors
>[! def]
>- Real numbers (can) have a fractional part (such as $\frac{1}{3}$ and $\frac{1}{2}$).  
>- The fixed length of the storage means that you can’t store very large / very small numbers.  
>- Binary numbers represent numbers based on powers of 2, with limited fractional representations such as 1/2, 1/4, 1/8, 1/16, etc.  
>- It isn’t possible to store all fractions with the level of precision provided by this system, the fractional part of the number is as close as possible within these constraints. 




<br><br>
<br><br>

---
# <u>***OLD NOTE***</u>
# 13.01 User Defined Data Types
## Primitive data types | Built-in data types
>[! definition]
> In Pseudocode, there is 6 primitive data types. They are:
> - REAL
> - INTEGER
> - BOOLEAN
> - STRING
> - CHAR
> - DATE  
> 
> For each one of them, their *Range* of possible value is already **defined by the programming language**; the *Operations* to manipulate them are also **defined by the programming language**.

>[! attention]
> Though in pseudocode there is only 6 primitive non-composite data types, there are many *more primitive data types* in other programming language. Such as `String` in Python, which is a **class** ==(composite data types)== and have different method to manipulate the string data. ==**Primitive data does contain composite data type**==.

## User-defined data types
>[! definition]
> This is the *opposite* of **primitive data**. Here, "User" is the programmer. It means that the data type is defined by the programmer. User-defined Variables can be created using the user-defined data type.  
> 
> This would provide several benefits to the programmer:  
> 1. It **extends the range of avaliable data types**, **creates data types** that's not originally in the programming language.  
> 2. It **improves the flexibility** of the programming language.  



## Non-composite data types
>[! definition]
> Its definition does not involve a reference to another data type. Can both be primitive or (INT,BOOL,CHAR$\dots$) or user-defined (Enum, Pointer, Set). 

### Enumerated data type
>[! definition]
> It is user-defined non-composite data type which contains a list of possible values.  
> When an enum type is defined, every single possible value for it is identified.   
> Enumerated type have implied order, they can be compared according to their order.

>[! example] 
> Type Definition
> ```
> TYPE TDaysInWeek=(Monday, Tuesday, Wednesday, Thusday, Friday, Saturday, Sunday)
> ```
> Variable Declaration 
> ```
> DECLARE Today : TDaysInWeek
> Today <- Monday
> ```

### Pointer
>[! definition]
>Also a non-composite Pointer is a type referencing to a memory location.

### Set
>[! definition]
>A set data type allows a program to create sets and to apply the mathematical operations defined in set
>theory.

## Composite data type
>[! definition]
>It refers other data types and 

## File Organisation





--- 
# User-Defined Datatype
![Pasted image 20250407183849.png](/img/user/Attachments/Pasted%20image%2020250407183849.png)
(a) 
	~~To allow more flexibility in the programming language.~~ Expand the ~~capability~~ **flexibility** of the programming language. 
	**To create new data types from existing ones**
(b) 
	(i)
		`TYPE SchoolDay` ~~<-~~ **=** `(Monday, Tuesday, Wednesday, Thursday, Friday)`
	(ii) 
		`TYPE WeekEnd` ~~<-~~ **=** `(Saturday, Sunday)`
(c)
```
TYPE ClubMeet 
	DECLARE FirstName : STRING
	DECLARE LastName : STRING
	DECLARE AttendenceSchoolDay : SchoolDay
	DECLARE AttendenceWeekEnd : WeekEnd
ENDTYPE
```

--- 
![Pasted image 20250407182922.png](/img/user/Attachments/Pasted%20image%2020250407182922.png)
- "AccountRecord.dat"~~, FOR READ~~ **FOR RANDOM**
- FoundFlag
- INPUT SearchCustomer
- WHILE NOT FoundFlag
- SEEK; Location
- File not found

---
# File Organisation 
![Pasted image 20250407190314.png](/img/user/Attachments/Pasted%20image%2020250407190314.png)
(a)  
	**In both serial and sequential files, records are stored one after another / and must be access one after another** 2 Marks	 
	Sequential File organisation has a key value for each file and puts file in order with respect to the key value. **New records inserted in the correct position**
	Serial File organisation uses time and puts each file in the order ~~which they are created.~~ **chronological**. / **New file are appended to the file**
(b)
	~~Random~~ **Direct** file access
(c)
	~~Serial~~ **Sequential** file access

---
![Pasted image 20250407192706.png](/img/user/Attachments/Pasted%20image%2020250407192706.png)
(a)
	Sequential file organisation <u>**Records** are stored in ordred</u> // which is <u>ordered using their key fields</u>. New files are placed in the correct position. // Files are stored one after another and must be accessed one after another. **Update requires creation of a new file**
	Random file organisation are stored in with respect to their key value **No particular order**. // The key value is calculated through hashing algorithm **to find the location of the file** // Updates can be carried out directly
(b)
	<u>Both method files are access one after another.</u> ~~In serial, files are accessed through chronological order. In sequential, files are accessed through key field order.~~ // **Starts at the beginning of the file** // **Until desired record is found or EOF reached**

