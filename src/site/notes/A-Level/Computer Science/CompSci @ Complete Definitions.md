---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/CompSci @ Complete Definitions/"}
---

# **Chapter 13**
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

<div style="page-break-after: always;"></div>  

# **Chapter 14**

```ad-quote
1. # Protocol
	1. why a protocol is essential 
	2. how protocol implementation can be viewed as a stack
	3. TCP / IP protocol suite
		1. Four Layers (Application, Transport, Internet, Link). Purpose and function of each layer. `^with definition for TCP, Socket, Packet and Ethernet`
		2. Application when a message is sent from one host to another on the internet
	4. HTTP, FTP, POP3, IMAP, SMTP, BitTorrent and their purposes
2. # Circuit switching, packet switching
	1. Circuit Switching
		1. Benefits, drawbacks and where it is applicable
	2. Packet Switching
		1. Benefits, drawbacks and where it is applicable
	3. Explain how packet switching is used to pass messages across a network, including the internet
	4. Show understanding of the function of a router in packet switching

`^objects in dark highlight are added due to appearence in exam but absent in the syllabus`

```
# 1. Protocol
## 1.1 Protocol's Essentiality
>[! def] 
>Its a standard set of rules // that's agreed between the sender and the receiver // for any communication transmitted over a network // that enables successful data transfer. // Allows trans-platform communication. // Make communication independent of the software and hardware. 

---
## 1.2 Protocol Stack
>[! def]
>`For a protocol suite the protocols can be viewed as layers within a protocol stack`
>- Each layer can only accept input from the next higher layer or the next lower layer.
>- There is a defined interface between adjacent layers which constitutes the only interaction allowed between layers.
>- A layer is serviced by the actions of lower layers. With the possible exception of the lowest layer the functioning of a layer is created by installed software.
>- Data is added to the headers as the frames/packets pass through the layers
>- A layer may comprise sub-layers.
>- The interactions are carried out by installed software
>- Any user interaction will take place using protocols associated with the highest level layer in the stack.
>- Any direct access to hardware is confined to the lowest layer in the stack.

---
## 1.3 TCP/IP Protocol Suite
>[! def]
>It is a layered model / stack with 4 layers (Application Layer, Transport Layer, Internet Layer, Data Link Layer). It uses a set of protocols for transmission of data, for example, transport control protocol with internet protocol. 
### 1.3.1 Application Layers
#### 1 - Application Layer
>[! def] Function
> Sends data user inputed to Transport Layer

><u>This layer contains the following protocols</u>
[Chpt14_Communication and Internet Technologies#1.3 TCP/IP Protocol Suite](/A-Level/Computer%20Science/Chpt14_Communication%20and%20Internet%20Technologies/#1-3-tcp-ip-protocol-suite)

#### 2 - Transport Layer
>[! def] Function
>1. The transport layer is responsible for delivery of data from the source host to the destination host // 
>2. It establishes end to end contact //
>3. On the **source side**, it break the data into TCP/UDP datagram/packets, adds the sequence number to the packet header and sent to the Internet layer // 
>4. It controls the flow of packets //
>5. On the **receiver side**, it reorganises the datagram, retransmits packets if lost, assemble them into webpages and delivers to Application layer. //
>6. This is where TCP resides //

*TCP*
>[! def]
>TCP belongs to Transport layer in the TCP/IP protocol stack. It allows applications to exchange data, establishes and maintains a connection until exchange of data is complete. It determines how to break application data into packets and adds sequence / packet number to (TCP) header. It sends packets to and accepts packets from the network / Internet layer. It manages flow control // manages congestion avoidance. It acknowledges all packets that arrive and detects when a packet has not arrived at destination. It handles retransmission of dropped packets and reassembles packets into the correct order 
>  
>TCP is connection-oriented, establishes a connection before transferr (**Handshake**), ensure reliable communication.
>- Advantages: Less likely to loose packet, more reliable communication. 
>- Disadvantage: Requires time to establish connection
>
>**TCP Handshake:**
>Initially just one packet of a sequence is sent to the network layer. Once the network layer returns an acknowledgement to the Transport layer indicating that the connection has been established, TCP sends the other packets and receives response packets containing acknowledgements. This allows missing packets to be identified and re-sent.

*UDP*
>UDP is connectionless, does not establish a connection before data transfer, leading to faster transmission, prioritizing speed and efficiency.
>- Advantages: Does not require time to establish connection, resulting in faster transmission speed.
>- Disadvantages: May loose packet

*Socket*
>[! def]
>Sockets are primarily used in the **Transport Layer** of the TCP/IP protocol suite, not the Internet Layer.  
>The socket is primarily a concept used in the transport layer of the Internet protocol suite or session layer of the OSI model. 

#### 3 - Internet Layer (Network Layer)
>[! def]
>1. The Internet Layer identifies the intended network and host // 
>2. It transmits packets to the Link Layer // 
>3. It routes the packets independently through the optimum route // 
>4. It addresses packets with their source and destination IP addresses // 

*IP*
>[! def]
>IP ensures correct routing over the Internet. // To achieve this, IP protocol takes the packet received from the transport layer and adds a further header. // The header contains the IP addresses of both the sender and the receiver

#### 4 - Link Layer (Interface/Physical Layer)
>[! def]
>1. To ensure correct network protocols are followed
>2. To be responsible for transporting data within the network/local segments
>3. It transfers packets that's received from Internet Layer between above hardwares *using* **physical address (MAC)** to ensure direct transfer.
>4. It packs the IP datagrams into frames by adding headings and trailers containing MAC address of the source and destination. 
>5. Maps IP address to MAC address.
>6. Enables upper layer to access the physical medium

---
### 1.3.2 How it is applied to send messages. *


## 1.4 All the protocols
### Protocols related to Application Layer
>[! def] 
> | Protocal | Description  |
>| -------- | ------------------------------------------------------------------------------------------ |
>| **HTTP**     | protocal to make sure files that make up the web pages are transfered correctly  |
>| **SMTP**     | simple mail transfer protocol; this handles the sending of emails  |
>| **POP3/4**  | post office protocol; this handles the receiving of emails |\
>| **MIME** | MIME (Multipurpose Internet Mail Extensions) is a standard that allows email to include various types of content besides plain text, such as images, audio, video, and attachments. |
>| **IMAP**     | internet message access protocol; used by email clients to retrieve email messages from a mail server (over a TCP/IP connection); it allows a copy of the email to be downloaded from the mail server.|
>| **DNS**      | domain name service; protocol used to find the IP address, for example, when sending emails  |
>| **FTP**      | file transfer protocol; this is a protocol used when transferring messages and attachments |
^e7fb77
### BitTorrent | Decentralised Data
>[! def] 
>BitTorrent protocol provides peer-to-peer file sharing
>BitTorrent allows the sharing of files between thousands of users who are connected together over the internet.
>It allows more users to share files with each other than would be the case with a peer-to-peer network.
>Users share files directly with each other // the users’ computers are acting as peers
>… no web server / central device is used // all users are of equal status
>
>### How to Download File
>- Torrent descriptor file is made available
>- File to be shared is split into pieces
>- BitTorrent client software made available to other peers / users / computers
>- Allowing them to work as seeds or leeches.
>- A peer can act as a ‘seed’ – used to upload pieces of a file
>- Peer downloading file can get pieces from different seeds simultaneously
>- Once a peer has a piece of the file it can become a seed for the parts downloaded
>- Central server called a tracker keeps records of all the peers (‘swarm’) and the parts of the file they have
>- Can pause and restart at any time
>
> **Tracker**: central server that:  
> - stores details of other computers that have all / part of file to be downloaded
> - has data on those peers downloading and uploading file 
> - shares IP addresses with other clients in swarm allowing them to connect
> 
> **Seed**: peer computer that has 100% of file // is uploading downloaded content 
> 
> **Swarm**:all the connected peer computers that have all or part of the file to be downloaded / uploaded // share a torrent
> 
> **Leeches**: download much more than they upload


---
# 2. Circuit Switching, Packet Switching
## 2.1 Circuit Switching
>[! def]
>1. Circuit switching uses a dedicated channel to make communication
>2. The dedicated path for circuit switching must be established before the transfer of data can commence
>3. All of the transmission in circuit switching follows the same path 
>4. The message is received in the same order in which it is sent with circuit switching
>5. Circuit switching is implemented at the physical layer 
>6. Circuit switching uses the whole bandwidth of the channel used
>7. Circuit switching communication ends with an error
>8. In circuit switching the message remains intact.
>
><u>** Advantages**</u>
>- Whole of bandwidth is available; Dedicated communication channel increases the quality of transmission
>- Data is transmitted with a fixed data rate; No waiting time at switches; Data arrives in the same order as it was sent
>- Suitable for long continuous communication; Fast method of data transfer; Better for real-time
>- Data all follows the same path / route; Data can’t get lost
>- Simple method of data transfer.
> 
><u>**Disadvantages**</u>
>- A dedicated connection makes it impossible to transmit other data even if the channel is free; bandwidth can’t be shared 
>- Not very flexible; No alternative route in case of failure
>- The time required to establish the physical link between the two stations can be too long
>- The need to establish a dedicated path for each connection can have cost implications
> 
><u>**Application**</u>
>- Circuit switching is used where a dedicated path needs to be sustained throughout the call / communication // where the whole bandwidth is required // where a real time communication is used.
>- A typical application is standard voice communications / video streaming / private data networks 

## 2.2 Packet Switching
>[! def]
>1. Packet switching forms data into packets to transmit over a digital network.
>2. Packet switching doesn’t require a dedicated path 
>3. In packet switching, different packets can take different routes.
>4. Packet switching, the packets can be received out of order (for assembly at the destination).
>5. Packet switching is implemented at the network layer.
>6. Packet switching can share bandwidth.
>7. Packet switching allows packets to be re-sent.
>8. Data in packet switching is split into packets
> 
><u>**Advantages**</u>
>- Packets can be rerouted if there is a problem // more secure as harder to intercept messages 
>- Packets are more likely to arrive because they can be re-routed if a problem occurs with one of the routes//Packets are more likely to arrive because if a packet is lost, it can be re-transmitted
>- Bandwidth can be shared allowing packets from different messages to share the same path 
>- Considered secure as the packets generally travel via different routes 
>- High data transmission rate is possible
>
><u>**Disadvantages**</u>
>- Time delay because packets need to be re-ordered/reassembled at the destination//Time delay caused by missing packets needing to be re-sent//Time delay because it has to share the bandwidth of the circuit / channel with other packets
>- Requires a complex algorithm to function
>- Needs lots of RAM to handle large amounts of data.
> 
><u>**Application**</u>
>- Packet switching is most commonly used on data networks such as the internet to send large data files that don’t need to be live streamed.
>- Packet switching is used when it is necessary to be able to overcome failed/faulty lines by rerouting.
>- Packet switching is used when it is necessary for the communication to be more secure.
>- Packet switching is used for high volume data transmission. 
>- Packet switching is used when it isn’t necessary to use all the bandwidth. 
>- Specific examples e.g. email, text messages, documents, VOIP etc.

## 2.3 Using Packet Switching to Send Message
>[! def]
>- The data to be transmitted is divided into equal sized packets
>- The packet has a header and a payload
>- The header contains a source IP address, destination IP address and packet number
>- Each packet is dispatched independently // and may travel along different routes
>- Routes are determined using a routing table / Packets take the optimum route depending on congestion
>- The packets may arrive out of order // and are reassembled into the original message at the destination 
>- If packets are missing / corrupted a re-transmission request is sent.

## 2.4 Router's Function in Packet Switching
>[! def]
>- The router examines the packet’s header 
>- It reads the IP address of the destination (from the packet header) 
>- A router has access to a routing table
>- The routing table contains information about, e.g., available hops / netmask / gateway used // and the status of the routes along the route
>- The router decides on the next hop / best route // and sends the packet on its next hop.

<div style="page-break-after: always;"></div>  

# **Chapter 15**

```ad-quote
# 1. Processors, Parallel Processing and Virtual Machines
1. Understanding RISC and CISC (Focusing on difference)
2. Pipeline and Registers in RISC
3. SISD, SIMD, MISD, MIMD
4. Characteristics of Massively Parallel Computers 
5. Understanding the concept of Virtual Machines
	1.  examples to the role of virtual machines
	2.  benefits/limitations of virtual machines

---
# 2. Boolean Algebra and Logic Circuits
1. Produce truth table for logic circuit including half adder and full adders
	1.  Include logic gates with more than two inputs
2. Understand flip-flop (SR,JK)
	1.  Draw logic circuit and derive a truth table for a flip-flop
	2.  Understand flip-flop's role as storage elements
3. Understand Boolean Algebra
	1.  Understand and Use De Morgan's laws
	2.  Simplify a logic circuit/expression using Boolean algebra
4. Understand Karnaugh maps 
	1. Understand of the benefits of K-maps  
	2. Solve logic problem using K-maps
```
# 1. Processors, Parallel Processing and Virtual Machines
## 1.1 RISC & CISC
### RISC
>[! def]
>1. Uses hard-wired control units
>2. Uses relatively simple instructions 
>3. Uses relatively few addressing modes 
>4. Uses fixed length instructions 
>5. Uses a lot general-purpose registers 
>6. The design emphasis is on the software 
>7. Uses a single-cycle for each instruction 
>8. Uses RAM instead of cache
>9. Makes use of pipelining 


### CISC
>[! def]
>1. Programmable CU
>2. Uses relatively complex instructions 
>3. Uses relatively more addressing modes 
>4. Uses variable length instructions
>5. Uses few general-purpose registers 
>6. Requires complex circuits/design emphasis on hardware
>7. Instructions may require many clock cycles 
>8. Frequently uses cache 
>9. Poor pipelineability

## 1.2 Pipeline and Registers in RISC
>[! def]
>- Pipelining allows several instructions to be processed simultaneously / concurrently. 
>- therefore, increasing the CPU instruction throughput / the number of instructions completed per unit of time. 
>- Each instruction stage / subtask is completed during one clock cycle  
>- No two instructions can execute their same stage of instruction / subtask at the same clock cycle. 
>- … e.g., while one instruction is being decoded, the next instruction can be fetched, etc.

### Interrupt Handling in pipelining
>[! def]
>- Pipelining adds an additional complexity // there could be a number of instructions still in the pipeline when the interrupt is received 
>- All the instructions currently in operation are usually discarded except for the last one/the one at write back 
>-  … the interrupt handler routine is applied to the remaining instruction. 
>- Once the interrupt has been serviced the processor can restart with the next instruction in the sequence.
## 1.3 SISD, SIMD, MISD, MIMD
### SISD | Single Instruction Multiple Data
>[! def]
>- Single Instruction, Single Data (architecture). 
>- Contains one processor, a control unit and a memory unit.
>- …that executes instructions sequentially.

### SIMD | Single Instruction Multiple Data
>[! def]
>- Single Instruction, Multiple Data
>- Contains many processors (using same instruction)
>- …that uses different data set.
>- Parallel computers with multiple processors.

### MISD | Multiple Instruction Single Data
>[! def]
>- Multiple Instruction, Single Data (architecture).
>- Contains many processors (using different instructions)
>- …that uses the same data set
>- Parallel computers with multiple processors.


### MIMD | Multiple Instruction Multiple Data
>[! def]
>- Multiple Instruction, Multiple Data (architecture).
>- Contains many processors (using different instructions)
>- …that operate asynchronously / independently.
>- Parallel computers with multiple processors.
## 1.4 Characteristics of Massively Parallel Computers 
>[! def]
>- A large number of separate computer processors connected together
>- … simultaneously performing a set of collaborative computations
>- Its a network infrastructure that uses specialised data bus to communicate.
>- Communicate using a message interface / by sending messages.


## 1.5 Virtual Machines
### 1.5.1 Role of virtual machines
>[! def]
>- The emulation of a computer system / hardware and/or software
>- … using a host computer system.
>- Using guest operating system(s) for emulation.
> 
>**Host operating system**:
>- The host operating system is the normal operating system for the host computer / machine. 
>- It has control of all the resources of the host computer / machine. // It can access the physical resources of the host computer / machine. 
>- It provides a user interface to operate the virtual machine software. 
>- It also runs the virtual machine software. 
> 
>**Guest operating system**:
>- The guest operating system runs within the virtual machine. 
>- … it controls the virtual hardware/software during the emulation. // It accesses the actual hardware through the virtual machine and host operating system. 
>- It provides a virtual user interface for the emulated hardware/software. 
>- The guest operating system runs under the control of the host operating system.
### 1.5.2 Benefits/limitations of virtual machines
#### Benefits
>[! def]
>- More than one new computer system can be emulated 
>	- …this allows multiple operating systems to coexist on a single computer.
>- Different instruction set architectures can be emulated on a single computer.
>- A virtual machine can crash without affecting the host machine.
>	- VM provides protection to other software
>- There are security benefits 
>	- Trying a piece of suspicious software and if it is / has a virus, it will only infect the virtual machine. 
>- Cost savings due to not needing to purchase extra hardware.
>	- Can try new systems on different virtual hardware.
>- Can run legacy applications that are currently incompatible.
>	- By using guest operating system

#### Drawbacks
>[! def]
>- A virtual machine is less efficient than real machines because of extra load on the host computer
>	- Its performance will degrade
>- Performance of the guest system cannot be adequately measured.
> - A virtual machine may be affected by any weaknesses of the host machine.
> - Costly and/or complex to maintain / implement / manage.
> 	- Because both host system and the virtual machine must be maintained
> - Cannot emulate some hardware.
> 	- Because this hardware may have been developed since the virtual machine was developed

# 2. Boolean Algebra and Logic Gate
## 2.1 Truth table for logic circuit including half adder and full adders

## 2.2 Flip-flop (SR,JK)
### 2.2.2 flip-flop's role as a Storage Element

## 2.3 Boolean Algebra
### De Morgan's Law

## 2.4 Karnaugh maps
### Understand benefits of K-maps
### Solve logic problem using K-maps

<div style="page-break-after: always;"></div>  

# **Chapter 16**
# Syllabus
```ad-quote
# 1. Purpose of Operating System
1. How OS maximises the use of resource
2. How UI hides complexity of hardware from user
3. Process Management  
	1. The concept of multi-tasking and a process
	2. The process states: running, ready and blocked
	3. The need for scheduling and the function and benefits of different scheduling routines (including round robin, shortest job first, first come first served, shortest remaining time)
	4. How the kernel of the OS acts as an interrupt handler and how interrupt handling is used to manage low-level scheduling
4. Memory Management
	1. The concepts of paging, virtual memory and segmentation
	2. The difference between paging and segmentation
	3. How pages can be replaced
	4. How disk thrashing can occur 
---
# 2. Translation Software
1. How an interpreter can execute programs without producing a translated version
2. The stages in the compilation of a program (Including lexical analysis, syntax analysis, code generation and optimisation)
3. How the grammar of a language can be expressed using syntax diagrams or Backus-Naur Form (BNF) notation
4. Show understanding of how Reverse Polish Notation (RPN) can be used to carry out the evaluation of expressions
```

# 1. Purpose of Operating System
## 1.1 How OS maximises the use of resource
### Memory
>[! def]
>- Moving frequently accessed instructions to cache for faster recall as SRAM is used rather than DRAM for cache  
>- Making use of virtual memory with paging or segmentation to swap memory to and from a disk 
>- Partitioning memory dividing main memory into static/dynamic partitions to allow for more than one program/task to be available //multiprogramming 
>- Removing unused items/tasks from RAM by marking a partition as available as soon as the process using it has terminated
### Disk 
>[! def]
>- Disk caching a disk cache holds data that is frequently transferred to/from the disk  the cache can be held on disk or in RAM 
>- Compression utility decreasing the size of a file stored on disk in order fit more / larger files on the disk
>- Defragmentation utility files are rearranged to occupy contiguous disk space this reduces the time taken to access files// decreases latency 

---
## 1.2 How UI hides complexity of hardware 
>[! def]
>Providing a valid example:
>- Clicking on icon rather than writing code 
>- Using a graphical user interface / icons for navigation
### Benefit
>[! def]
>- The user interface hides the complexities of the computer hardware/operating system from the user 
>- It provides appropriate access systems for users with differing needs MP3 Complex commands involving memory locations/buses/computer hardware/ are avoided


---
## 1.3 Process Management
### 1.3.1 Multi-tasking and process
>[! def]
>Multi-tasking: 
>Managing the execution of many programs that appear to run at the same time. It allows the computer to carry out multiple **processes** at a time. These processes all share the same resources, which is assigned to them by the OS. Scheduling is used to decide which process should be carreid out. 
>
>Process:
>A program that has started to be executed
### 1.3.2 Process States: Running, Ready and Blocked
##### Ready State
>[! def]
>When a new process is created, it is put into the Ready Queue. A Dispatcher checks if the CPU is free. If it is free, the Dispatcher will give the first process in the Ready Queue access to CPU, and it changes to Running State.
##### Running State
>[! def]
> When a processes takes up CPU time. When it is halted by a interrupt, it is changes back to Ready State.
##### Blocked/Waiting State
>[! def]
>When a process can't progress until some action has happened(most likely I/O operation), it is put into Blocked State. When that event is complete, the process is notified and changes to Ready State.
### 1.3.3 Need for Scheduling and different scheduling routines
##### Why scheduling
>[! def]
>- Process scheduling allows more than one program/task to appear to be executed at the same time / enables multitasking / multiprogramming/
>- To allow high priority jobs to be completed first.
>- To keep the CPU busy all the time 
>- … to ensure that all processes execute efficiently
>- … and to have reduced wait times for all processes / to ensure all processes have fair access to the CPU / prevent starvation of some processes.
##### Different Scheduling Routines
**Round Robin**
>[! def]
>- Each process is served by the CPU for a fixed time/time slice (so all processes are given the same priority).
>- Starvation doesn’t occur (because for each round robin cycle, every process is given a fixed time/time slice to execute)

**Shortest Job First**
>[! def]
>- Process are executed in ascending order of the amount of CPU time required // Short processes are executed first and followed by longer processes. 
>- …which leads to an increased throughput (because more processes can be executed in a smaller amount of time)

**First Come First Served**
>[! def]
>- No complex logic, each process request is queued as it is received and executed one by one.
>- Starvation doesn’t occur (because every process will eventually get a chance to run) // less processor overhead. 

**Shortest Remaining Time**
>[! def]
> - Always give the process to the process with the shortest estimated remaining run time.   
> - Responsive: Minimizes the waiting time for processes by selecting ones with the shortest remaining time. Processes will be passing through faster in this schema.   

### 1.3.4 How kernel acts as an interrupt handler and how interrupt handling manages low-level scheduling.
##### How kernel is involved in handling interrupts
>[! def]
>When an interrupt is received, the system enters kernel mode, saving the current process on the kernel stack and enabling kernel instructions. Then, the kernel consults a interrupt dispatch table, which will give out the address of the appropriate low-level routine to handle the interrupt. The low-level routine is then ran, and once completed, the interrupted process is restored from the kernel stack and the interrupt is cleared.  
> 
>**Mark Scheme:**  
>- The kernel receives a signal when an interrupt is generated
>- the kernel checks the priority and reviews the status/priority of the current interrupts
>- system enters kernel mode if the type of interrupt is of higher priority than the current process
>- the kernel consults the interrupt dispatch table / IDT
>- … and saves the state of the interrupted process / contents of the registers on the kernel stack
>- the kernel restores the process state e.g. contents of registers once the interrupt is serviced

##### How handling interrupts is used in managing low-level scheduling 
>[! def]
>Interrupt is required for processes to change states. 
>
>##### Running $\to$ Waiting/Blocked <**Halted**>
>When a process requires I/O usage, due to I/O usually takes for too long for CPU to remain idle waiting, an interrupt will be used to call for the I/O usage and simultaneously changes the process to Waiting state.
>##### Waiting/Blocked $\to$ Ready
>When the I/O operation finishes, the process is moved from Waiting to Ready. 
>##### Running $\to$ Ready 
>When a process is halted by the decision of the process scheduling algorithm, an interrupt is called to move the process back to Ready state.
>##### Ready $\to$ Running 
>When the process scheduling algorithm decided the process needs to move from ready to running, a interrupt is called to perform this. 


---
## 1.4 Memory Management
### 1.4.1 Paging, virtual memory and segmentation
##### 1 - Paging
>[! def]
>Paging divides the physical memory **(RAM)** into *fixed-size* blocks called **frames** and the process (size) into blocks of *same size* called **pages**. **Frames** and **pages** are the same size, so a page and fit perfect into a frame when allocating. This simplifies the process of memory allocation and mapping between logical and physical memory (using a **page-table**). 
##### 2 - Segmentation
>[! def]
>The large processes are divided into **segments**. Each segment is loaded into a dynamic partition in memory. There exist a segment map table which stores the segment number, segment size, and segment offset(starting position).  
>**Segments**: are variable-sized blocks into which the logical memory is split up. 
>
>- In segmented memory, the logical / virtual address space is broken into varying sized blocks called segments / sections. 
>- Each segment has a name and size. 
>- During execution segments from logical / virtual memory are loaded into physical memory. 
>- The address is specified by the user 
>- … it contains the segment name and offset value. 
>- Segments are numbered 
>- … and this number is used as an index in the segment map table. 
>- The offset value determines the size of the segment. 
>- A segment map table maps logical / virtual addresses to physical addresses / contains the segment number and offset.
##### 3 - Virtual Memory
>[! def]
>- Disk / secondary storage is used to extend the RAM / memory available 
>- ... so the CPU appears to be able to access more memory space than the available RAM 
>- Only the data in use needs to be in main memory so data can be swapped between RAM and virtual memory as necessary 
>- Virtual memory is created temporarily
### 1.4.2 Difference between paging and segmentation
>[! def]
>- Paging allows the memory to be divided into fixed size blocks and Segmentation divides the memory into variable sized blocks. 
>- The operating system divides the memory into pages, the compiler is responsible for calculating the segment size. 
>- Access times for paging is faster than for segmentation.
### 1.4.3 How pages can be replaced
>[! def]
> When a page-fault occurs, i.e., an instruction is met that is in a page that's not currently loaded, this new page needs to swap with a existing page in the memory. There are multiple ways for the Memory Manager to choose a page to swap with.   
> 1. FIFO - requires tracking the time stamp entered  
>    When more pages are added, the important pages are treated like normal pages, which leads to more page faults (Belady's Anomoly)  
> 2. Optimal Page Replacement - looks forward in time to see which page can be replaced (impossible)  
> 3. Least Recently Used - requires tracking of the last accessed time  

### 1.4.4 How disk thrashing can occur
>[! def] 
>Disk Thrashing can occur when page-fault happens so often that there is extensive effort spend on moving in and out the pages and the CPU had to wait in idle most of the time. This can lead to performance degradation. 

---
# 2. Translation Software
## 2.1 <u>How Interpreter execute program without compiling</u>
>[! def]
> A Interpreter is capble of running a source code without compiling it. This is because it reads and executes the program line by line, directly interpreting each instruction in the source code at runtime. The interpreter first read the line, checks if the syntax if fine. Then, it either interprets the code and executes it, or reports the error. 
> ![Pasted image 20241112203437.png|500](/img/user/Attachments/Pasted%20image%2020241112203437.png)

---
## 2.2 <u>Stages in compilation of a program</u>
### 1. Lexical Analysis
>[! def]
> In this stage, several things are done  
>1. Remove any whitespace.  
>2. Remove any comment statements.  
>3. Check for obvious errors in the use of identifier names (length within certain limit)  
>4. Replace each language keyword with its token using the **keyword** table.   
>5. All identifier names are replaced in the source code by a pointer to an address in memory which links to it in the **symbol** table. 

##### Keyword table
>It lists all **language keywords**, such as IF, ELSE, CLASS with a **token** that represent each keyword. 

##### Symbol table
>It contains the identifier it is refering to, and the value, data type of it. It also contains the constants used in the program, such as `<5>;<"word">;6.9;<'a'> ... `   
>For bigger table, the symbol table will be constructed as a [Hash](/A-Level/Computer%20Science/Chpt13_Data%20Representation/#2-3-hashing-algorithm) table with a hash key generated for each entry.  


### 2. Syntax Analysis
>[! def]
>Syntax checking esttablishes if a sequence of input characters matches the **language grammar rules**. 

##### Dynamix syntax checking
>This is provided by the IDE and it will go through the code in real-time and label error expression that does not match the language grammar rule.

##### Syntax analyser
>Found inside a compiler, this uses **language grammar rules** to identify remaining errors in the source code after being checked by IDE.
---

### 3. Code Generation 
>[! def]
>This process make reference to the information stored in symbol table and to code contained in various program libraries. Once the source code is compiled and no errors are found, an object file or executable file is generated.  

### 4. Optimisation
>[! def]
>This process is the final stage where final changes to the program is applied to make the code execute in less time or use less memory for the final object code.

---
## 2.3 Grammar expressed using syntax diagram or BNF notation

---
## 2.4 RPN's use in evaluation of expressions

<div style="page-break-after: always;"></div>  

# **Chapter 17**

>[! quote] 
># Encryption, Encryption Protocols and Digital certificates
>1. Encryption
>	1. [x] Including the use of public key, private key, plain text, cipher text, encryption, symmetric key cryptography and asymmetric key cryptography
>	2. How the keys can be used to send a private message from the public to an individual/organisation
>	3. [x] How the keys can be used to send a verified message to the public
>	4. How data is encrypted and decrypted, using symmetric and asymmetric cryptography
>	5. [x] Purpose, benefits and drawbacks of quantum cryptography
>2. SSL/TLS
>	1. [x] Purpose of SSL / TLS
>	2. [x] Use of SSL/TLS in client-server communication
>	3. [x] Situations where the use of SSL/TLS would be appropriate
>3. Digital Certificate
>	1. [x] How a digital certificate is acquired 
>	2. [x] How a digital certificate is used to produce digital signatures

# 1. Encryption
---
## 1.1 Symmetric and Asymmetric Keys
### Key terms 
>[! def]
> **Cipher text**: Encrypted text that's *meaningless* without decryption.
> **Plain text**: The *original* message.
> **Encryption**: To ensure that third parties are unable to understand the data if it is intercepted.
### Symmetric key
>[! def]
>A common key is used both for encryption and decryption

**Key distribution problem**
> There is problem to distribute to key safely.
### Asymmetric Key
>[! def]
>It uses two keys, a pair of **public key** and a **private key**, where the former one is used for encryption and the later one is used for decryption. In this encryption method, only the user with the private key can decryption the information encrypted with the public key. Usually, when they are generated, the public key made avaliable to people who wants to establish a communication and their plain text is encrypted with the public key, and the user with the private key recieves the cipher text and decrypts with the private key.
### Asymmetric vs Symmetric
>**Symmetric** cryptography uses a **single key** to *encrypt and decrypt* messages, **Asymmetric** cryptography *uses* **two**.
>The **symmetric key** is **shared**, whereas with **asymmetric**, *only* the **public key** is **shared** (and the private key isn't). Thus, the **risk of compromise** is **higher** with **symmetric** encryption and **asymmetric** encryption is *more* **secure**.
>**Symmetric** cryptography is a **simple** process that *can be carried out quickly*, but **asymmetric** is much *more* **complex**, so **slower**.
>The **length of the keys** in **symmetric** encryption are (usually) **shorter** than those for asymmetric (128/256 bits v 2048 bits).

## 1.3 Using private key as a Signature
>[! def]
>The private key can be used to encrypt messages. The user's public key is avaliable online. Thus, people can try if the message is able to be decrypted by the user's public key. If the private key and public key matches, i.e., the decryption went well, it means that the user is authentic. 

## 1.5 Quantum cryptography
### Purpose and Benefit of Quantum cryptography 
>[! def]
>to produce a virtually unbreakable encryption system / send virtually un-hackable secure messages...
>...using the laws / principles of quantum mechanics / properties of photons
>detect eavesdropping because the property of photons change
>to protect security of data transmitted over fibre optic cables
>to enable the use of longer keys.
### Drawbacks of Quantum cryptography 
>[! def]
>Limited range
>requires dedicated fibre (optic) line and specialist hardware 
>cost of dedicated fibre (optic) line and specialist hardware is expensive 
>polarisation of light may be altered whilst travelling down fibre optic cables

<br><br>

# 2. SSL/TLS
---
## 2.1 Purpose of SSL / TLS
>[! def]
> The SSL and TLS protocols provide communications security over the internet / network ... they provide encryption.   
> They enable two parties to identify and authenticate each other ...and communicate with confidentiality and integrity.
## 2.2 SSL / TLS in a client-server model
>[! def]
>An SSL/TLS connection is initiated by an application ... which becomes the client.   
>The application which receives the connection becomes the server.  
>Every new session begins with a handshake (as defined by the (SSL/TLS) protocols).  
>The client requests the digital certificate from the server // the server sends the digital certificate to the client The client verifies the server's digital certificate ...and obtains the server's public key.   
>The encryption algorithms are agreed. The symmetric ... session keys are generated / defined.  

## 2.3 Situation where SSL / TLS would be appropriate
>[! def]
> The use of **SSL/TLS** (Secure Sockets Layer/Transport Layer Security) is appropriate in scenarios requiring secure communication over a network.

<br><br>

# 3. Digital Certificate
---
## 3.1 Definition of Digital Certificate
```ad-def
1. A digital certificate is an electronic document
2. Used to authenticate the **identity** of a website and their **public key**
3. Typically Issued by CA
4. For example, contains the public key of the website
```

## 3.2 Process of obtaining a digital certificate
>[! def]
>The organisation requests a certificate from a Certificate Authority (CA)
>The organisation may send their public key to CA
>The organisation gathers all the information required by the CA in order to obtain their certificate, which includes information to prove their identity. 
>The CA verifies the organisation's identity
>The CA generates / issues the certificate including the organisation's public key (and other information).

## 3.3. Digital Signature
>[! def]
>In digital signature, the sender's private key is used to encrypt the digest, and receiver uses the sender's public key (which is publicly avaliable) to decrypt and compare the decrypted digest with the digest produced from the received document. 

## 3.4 Role of Digital Certificate in creating the Digital Signature
>[! def]
>The digital certificate provides the public key that can be used to validate the private key associated with the digital signature.

<div style="page-break-after: always;"></div>  

# **Chapter 18**

>[! quote]
>1. Show understanding of how graphs can be used to aid Artificial Intelligence (AI)
>	1. Purpose and structure of a graph
>	2. Use A* and Dijkstra’s algorithms to perform searches on a graph
>	3. Candidates will not be required to write algorithms to set up, access, or perform searches on graphs
>2. Show understanding of how artificial neural networks have helped with machine learning
>3. Show understanding of Deep Learning, Machine Learning and Reinforcement Learning and the reasons for using these methods.
>	1. Understand machine learning categories, including supervised learning, unsupervised learning
>4. Show understanding of back propagation of errors and regression methods in machine learning

# 18.1 Graphs and AI
## 1. Purpose of Path Finding Algorithm
>[! def]
>- to find the optimal / shortest / most cost-effective route   
>- … between two nodes in a graph  
>- … based on distance / cost / time  

## 2. Graphs aiding AI
>[! def]
>- Artificial Neural Networks can be represented using graphs  
>- Graphs provide structures for relationships // graphs provide relationships between nodes  
>- AI problems can be defined/solved as finding a path in a graph  
>- Graphs may be analysed/ingested by a range of algorithms   
>- …e.g. A* / Dijksta’s algorithm   
>- …used in machine learning.  
>- Example of method e.g. Back propagation of errors / regression methods  

# 18.2 Artificial Neural Network
## 1. How artificial neural networks have helped machine learning
>[! def]
>• Artificial neural networks are intended to replicate the way human brains work  
>• Weights / values are assigned for each connection between nodes  
>• The data are input at the input layer and are passed into the system  
>• They are analysed at each subsequent (hidden) layer where characteristics are extracted / outputs are calculated   
>• … this process of training / learning is repeated many times to achieve optimum outputs // reinforcement learning takes place   
>• Decisions can be made without being specifically programmed   
>• The deep learning net will have created complex feature detectors  
>• The output layer provides the results   
>• Back propagation (of errors) will be used to correct any errors that have been made  
### 2. Artificial Neural Networks
>[! def]
>It enables deep learning to take place
>
#### Hidden layers: 
>[! def]
>Where the problem you are trying to solve has a higher level of complexity it requires more layers to solve  
>To enable the neural network to learn and make decisions on its own  
>To improve the accuracy of the result.  

# 18.3 Deep, Machine and Reinforcement Learning
## 1. Deep Learning
>[! def]
>- Uses artificial neural network(s)   
>- … that contain(s) a high number of hidden layers   
>- … modelled on the human brain.   
>- Deep learning uses many layers to progressively extract higher level features from the (raw) input.   
>- Deep learning is a specialised form of machine learning.  

```ad-def
- Deep learning learns by finding hidden patterns that are undetectable to humans.
- It structures algorithms in layers: input layer, hidden layers and output layer.
	- … to create an artificial neural network to learn and make intelligent decisions on its own.
- It is trained using large quantities of unlabelled data.
- Deep learning requires/uses a large number of hidden layers.
	- … the larger the number of layers, the higher the level of success.
```
### Reason for Deep Learning
>[! def]
>- Deep learning makes good use of unstructured data.   
>- Deep learning outperforms other methods if the data size is large.  
>- Deep learning systems enable machines to process data with a nonlinear approach.  
>- Deep learning is effective at identifying (hidden) patterns / patterns that humans might not be able to see / patterns that are too complex / time consuming for humans to carry out.  
>- It can provide a more accurate outcome with higher numbers of hidden layers.  

## 2. Supervised Learning
>[! def]
>- Supervised learning allows data to be collected, or a data output produced, from the previous experience.  
>- In supervised learning, known input and associated outputs are given // uses sample data with known outputs (in training) // uses labelled input data.  
>- Able to predict future outcomes based on past data.  
## 3. Unsupervised Learning 
>[! def]
>- Unsupervised machine learning helps all kinds of unknown patterns in data to be found.  
>- Unsupervised learning only requires input data to be given.  
>- Uses any data // not trained on the right output // uses unlabelled input data.  

<div style="page-break-after: always;"></div>  

# **Chapter 19
# Big O-Notation
>[! def]
>Big O notation is a mathematical notation used to describe the performance or complexity of an algorithm in relation to the time taken or the memory used for the task. It is used to describe the worst-case scenario.
>![Pasted image 20250319210551.png](/img/user/Attachments/Pasted%20image%2020250319210551.png)

### Comparison between Linear and Binary Search
>[! def]
>Linear search O(n) and Binary search O(log 2n) / O(Log n) 
Time to search increases linearly in relation to the number of items in the list for a linear search and logarithmically for a Binary search 
Time to search increases less rapidly for a binary search and time to search increases more rapidly for a linear search




--- 
# Recursion
>[! def]
>A function that calls it self in definition. It have two cases; one is base case when it resolves to return a value; another one is recursive case when it calls back to itself. 

## Base case and recursive case
> This is used to help define a recursive function
