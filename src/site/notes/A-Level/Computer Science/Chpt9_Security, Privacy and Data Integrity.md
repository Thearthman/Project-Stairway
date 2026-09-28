---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt9_Security, Privacy and Data Integrity/"}
---

# 9.01 Definitions

## Data Integrity
#ComputerScience_Revision/P1 
**Consistency**: *Accurate* and *up-to-date* 
>[! definition] Accurate
>Accurate in the means of both the content and the format and the type of the data.
## Data privacy
Keeping data *private*, *block* **unauthorized** users from accessing.
## Data Availability
The ability to *access* the data *when needed* and the data has to be **uncorrupted** and **not lost**.
### System security/availability measures aims
- to ensure the system continues to carry out the tasks users need
- to ensure that only authorized users have access to the system.

# 9.02 Risks and Threats
## Natural Disasters
They cause physical harms to devices
## Internal Mismanagement
This is when an organization fails to organize internal resources, system, and information within it. 
>[! ep]
>An example of an Internal Mismanagement security threat could be an organization failing to implement proper access controls and user permissions for its internal systems. Suppose an employee who no longer requires access to certain sensitive databases or confidential files retains those privileges due to oversight or neglect in updating permissions. This mismanagement could lead to unauthorized access, potential data leaks, or misuse of critical information by an insider with unnecessary access, posing a significant security risk to the organization.
## Legitimate User being dumb
The legitimate user just *gives his confidential information out* **or** *fails to realize a malicious behavior* conducted by a hacker.
## Malicious activity
***Phishing***: 
- sending emails from an **apparently legitimate** sources *requesting confidential information*  

***Pharming***: 
- *redirect traffic* to fake websites to lure information out (like DNS poisoning)  
	- ***DNS cache poisoning***:
		- Directly changing the IP address that the computer was supposed to access through modifying the computer's DNS server (whether is the local server or the online server).

***Unethical hacking***: 
- obviously  

***Cracking***: 
- *crack the software* for license-free (rights to intellectual property)  

## Malicious software (hardware)
***Trojan***: 
- *disguise* to be a functional software

***Virus***: 
- tries to *replicate* itself inside other executable code, it is an **executable file**, *needs you to activate it*.

***Worm***: 
- runs **independently** and *transfers itself to other network hosts*, *network based*

***Logic bomb***: 
- stays **inactive** until some *condition is met*

***Spyware***:
- *collects information* and transmit it to other system. `(keylogger)`

***Bot***: 
- *take control* of your computer and *launch attacks* (DDos)

# 9.03 Computer system protection measures
- ***Disaster recovery*** `protect both software hardware`
	- It's a **contengency plan** covering every part of the sytem. **Fail system(hot site)** is commonly a part of it where an alternative full system is ready to replace the normal operational one.
- ***Safe system update*** `protect both software hardware`
	- When hardware or software **update** *happen*, companies run the **replacement system and the original system** *in parallel* to ensure continuity of service.
- ***User & password & Biometric***
	- Fingerprint scans
	- Retina scans
- ***Antivirus***
	- A antivirus software will *check* **software** or files *before* *they are run* or loaded. Then, *compare possible virus file against a database of known viruses.*
	- They carry out **heuristic** **checks**, i.e. *checks* **software** *for* **behavoir** that could *indicate* a **virus**. *Helpful when a virus is not listed in the database*.
- ***Firewall***
	- Alternatively, a firewall can *run* *as* **software**. **Data** can be *inspected* **immediately**.
	- A firewall can *inspect* the **system addresses** identified in the transmission of data, but can *sometimes* also *inspect* the **data** itself to *check* for **anything unusual or inappropriate**.
- ***Digital signature***
	- acts like signature, unique to each creater.![Pasted image 20240427224146.png](/img/user/Attachments/Pasted%20image%2020240427224146.png)  
- ***Good practice***
- ***UPS***: 
	- **Uninterrupted Power Supply**, saves the service when power cuts off. 
- ***Ethical hacking***
	- A authorised hacking to test security measures.

>[! warning] 
>***Hot site, fail system*** *only* works when the **main system is down**   

# 9.04 Data protection measures
## Recovering from data loss
### Backup of data   
It needs to have: 
	1. A **full backup** made at *regular intervals* (weekly or shorter)   
	2. At least *two* generations of **full backup**   
	3. [Incremental backup](/A-Level/Computer%20Science/Chpt9_Security%2C%20Privacy%20and%20Data%20Integrity/) are made on a **daily basis**   

>[! definition] Incremental Backup
>Incremental Backup is done by *only* backuping the **altered/edited files**  
^1d9c2a
### Disk-Mirroring
It's like fail system, it stores data simultaneously on two disks. 

## Restricting access to data
Authorisation policy give different access rights to different files for different individuals.

# 9.05 Data validation and verification
## Validation of data entry
> [!important]  
> This is for making sure the input data is the correct type, in the correct format and in predetermined range. 
### Types of data checks
- Presence Check
- Existence Check
- Length Check
- Type Check - commonly alphanumeric

## Verification of data entry
>[! definition]
>This is for making sure the information entered is what the legitimate user intended to enter. 
### Double entry
Commonly used when setting up passwords.
### Visual check
look through to see if any errors exist.



## Verification during data transfer

### Parity bit `(*not* able to check position)`
With each 7 number, a parity bit is added to the end. Odd parity means each line has an odd number of 1s. For Even parity, an even number of 1s are needed.
### Parity byte/Parity block `(able to check position)`
Data are send in blocks with parity byte attached to the end of each block. The parity byte is essentially a vertical/column parity check. 
### Checksum `(*not* able to check position)`
Method: First break down data into individual bytes of binary number. Then, the the sum of all those individual bytes are calculated. Lastly, the calculated value is divided by a chosen modulus like modulo 256, and appended to the original data.

### Automatic repeat request 
![Pasted image 20240320212744.png](/img/user/Attachments/Pasted%20image%2020240320212744.png)
Under the same acknowledgement,

```
CALL Send
WHILE NOT Acknowledged
	DECLARE Error : BOOLEAN
	DECLARE Timeout : BOOLEAN
	DECLARE Clear : BOOLEAN
	DECLARE Ackowledged : BOOLEAN
	
	CALL GetReceivedSideStatus
	
	IF Error THEN
		// ask for sender to re-send
		// sender re-send the package
	ENDIF
	IF Timeout THEN
		// ask for sender to re-send
		// sender re-send the package
	ENDIF
	IF Clear THEN
		// send back acknowledgement
		Acknowledge <- TRUE
	ENDIF
ENDWHILE
```



  

