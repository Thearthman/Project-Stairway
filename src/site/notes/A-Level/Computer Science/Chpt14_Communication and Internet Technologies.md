---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt14_Communication and Internet Technologies/"}
---


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
>
><u>**Disadvantages**</u>
>- Time taken to reassemble packets at the destination time taken to reassemble packets at the destination
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




---
# <u>***OLD NOTE***</u>



# 14.01 Transfer Mode
**Circuit switching** and **packet switching** are two fundamental methods for transmitting data in communication networks. Both have distinct approaches to handling data, and each is suited for different types of communication.

### 1. **Connection Setup:**
   - **Circuit Switching**: A **dedicated communication path** is established between the sender and receiver before any data is transmitted. This path remains reserved for the duration of the communication session.
   - **Packet Switching**: There is **no need for a dedicated path**. Data is broken into smaller units called **packets**, and each packet is routed independently through the network to the destination.

### 2. **Resource Allocation:**
   - **Circuit Switching**: Resources (bandwidth, channels) are **reserved** for the entire duration of the communication session. This guarantees a fixed amount of bandwidth but can be inefficient if the connection is idle at times.
   - **Packet Switching**: Resources are **shared** across multiple users. Packets from different connections share the same network paths and bandwidth, which leads to more efficient use of resources.

### 3. **Data Transmission:**
   - **Circuit Switching**: Once the circuit is established, data flows **continuously** between the sender and receiver. There is no delay once the connection is established, but the setup phase can introduce some delay.
   - **Packet Switching**: Data is transmitted in **packets**, and each packet may take different paths to the destination, arriving in different orders. The packets are reassembled at the destination.

### 4. **Reliability:**
   - **Circuit Switching**: The **dedicated circuit** ensures consistent and reliable data transmission without interruption, making it ideal for applications requiring **real-time** communication, like traditional voice calls.
   - **Packet Switching**: Since packets may travel different routes, there can be delays, packet loss, or reordering. This makes packet switching less reliable for **time-sensitive** applications unless additional protocols (e.g., TCP) are used to ensure reliability.

### 5. **Efficiency:**
   - **Circuit Switching**: Less efficient because the dedicated circuit remains open and reserved, even when there is no data being transmitted, leading to potential waste of bandwidth.
   - **Packet Switching**: More efficient as bandwidth is **dynamically shared** between multiple users. Network resources are used only when there is data to transmit.

### 6. **Use Cases:**
   - **Circuit Switching**: Commonly used in **traditional telephone networks** where a continuous stream of data (voice) is transmitted and the connection needs to be reliable and stable throughout the call.
   - **Packet Switching**: Widely used in the **internet** and **data networks**, such as for email, web browsing, and streaming, where data can be sent in discrete chunks and occasional delays are acceptable.

### 7. **Scalability:**
   - **Circuit Switching**: Less scalable due to the need for dedicated circuits. The network's capacity is limited by the number of available circuits.
   - **Packet Switching**: More scalable as the network can accommodate more users by sharing resources, making it ideal for the modern internet.

### Summary:
- **Circuit Switching**: Establishes a dedicated, continuous communication path. It’s reliable and stable, but less efficient and scalable.
- **Packet Switching**: Transmits data in packets, using shared resources. It’s more efficient and scalable, but may experience delays and packet loss.

Packet switching is the foundation of most modern data networks, while circuit switching is more typical of traditional voice communication systems.


## Circuit Switching
```ad-def 
Whole of bandwidth is available 
Dedicated communication channel increases the quality of transmission
Data is transmitted with a fixed data rate
No waiting time at switches
Suitable for long continuous communication
Fast method of data transfer 
Data arrives in the same order as it was sent 
Data can’t get lost 
Data all follows the same path / route 
Better for real-time 
Simple method of data transfer
<!-- MISSING ASSET: Pasted image 20240926094707.png -->
```

## Packet Switching 
### Connectionless
The sender sends the data without the acknowledgement of whether or not the receiver is ready to receive the data. In this case, there is no way of figuring our whether the connection has achieved or not.

### Connection-oriented
The sender first sends a request for an acknowledgment of the transmission. When acknowledgement if received, the sender continues the transfer. If no acknoledgement sender tries again.


![Pasted image 20240926090538.png](/img/user/Attachments/Pasted%20image%2020240926090538.png)

# 14.02 Protocal
>[! definition]
> Provide standard set of rules that enable successful data transfer. Allows trans-platform communication. Make communication independent of the software and hardware.

# 14.03 Protocal Stack
>[! definition]
>In a “protocol stack,” the term “stack” refers to the hierarchical arrangement of network protocols used to manage the communication between devices over a network. Each layer in the stack has specific responsibilities, and they work together to ensure data is transmitted efficiently and correctly.
>![Pasted image 20240919210743.png](/img/user/Attachments/Pasted%20image%2020240919210743.png)



# 14.04 TCP/IP Protocal
## Application layer
>[! definition]
> Contains HTTP(Hypertext Transfer Protocal) and other webpages service.\

>[! info] Protocals related to application layer
> | Protocal | Description  |
>| -------- | ------------------------------------------------------------------------------------------ |
>| **HTTP**     | protocal to make sure files that make up the web pages are transfered correctly  |
>| **SMTP**     | simple mail transfer protocol; this handles the sending of emails  |
>| **POP3/4**  | post office protocol; this handles the receiving of emails |\
>| **MIME** | MIME (Multipurpose Internet Mail Extensions) is a standard that allows email to include various types of content besides plain text, such as images, audio, video, and attachments. |
>| **IMAP**     | internet message access protocol; this handles the receiving of emails. |
>| **DNS**      | domain name service; protocol used to find the IP address, for example, when sending emails  |
>| **FTP**      | file transfer protocol; this is a protocol used when transferring messages and attachments |


## Transport
1. The transport layer is responsible for delivery of data from the source host to the destination host
2. It establishes end to end contact
3. On the **source side**, it break the data into TCP/UDP datagram and adds the sequence number to the packet header
4. On the **receiver side**, it reorganises the datagram, retransmits packets if lost, assemble them into webpages and delivers to Application layer.
5. This is where TCP resides  
### TCP
>[! definition]
>TCP (Transmission Control Protocol) is a crucial part of the Transport layer in the TCP/IP protocol stack. It facilitates reliable data transfer between the Application layer (where data originates or is received by applications) and the Network layer (which handles the actual routing of data across the network). 

#### Socket
>[! definition]
>Sockets are primarily used in the **Transport Layer** of the TCP/IP protocol suite, not the Internet Layer.  
>The socket is primarily a concept used in the transport layer of the Internet protocol suite or session layer of the OSI model. 


Here's a step-by-step explanation of how TCP receives and transfers information between these two layers, as well as the transformations that occur:

### 1. **Receiving Data from the Application Layer**
- **From the Application Layer:** Applications, such as web browsers or email clients, generate data in various forms (e.g., HTTP requests, emails). When an application wants to send data, it hands this information over to the Transport layer, where TCP resides.
- **Segmentation:** TCP breaks the data received from the Application layer into smaller, manageable segments. This process is called "segmentation." Each segment has a maximum size, determined by the Maximum Segment Size (MSS), to ensure it fits within the network's constraints.
- **Headers:** TCP attaches a TCP header to each segment. This header includes essential information such as source and destination ports, sequence numbers, acknowledgment numbers, flags (e.g., SYN, ACK), window size, and checksum. These elements are critical for ensuring reliable data transfer, error checking, and flow control.

### 2. **Transferring Data to the Network Layer**
- **Encapsulation:** Once TCP segments the data and adds the TCP header, it hands these segments to the Network layer (usually the Internet Protocol, or IP, in the TCP/IP stack). The Network layer encapsulates each TCP segment within an IP packet by adding its own IP header. This IP header contains information like source and destination IP addresses, which the network uses for routing.
- **Transmission:** The encapsulated data (now called an "IP packet") is then sent to the Network layer for routing across the network. The Network layer determines the best path for the packet to reach the intended destination.

### 3. **Receiving Data from the Network Layer**
- **Decapsulation:** When data arrives at the destination, it first reaches the Network layer, which removes the IP header and passes the remaining TCP segment to the Transport layer (TCP).
- **Reassembly:** TCP collects the segments and reassembles them in the correct order using the sequence numbers in the TCP headers. This step is crucial, as data might arrive out of order or be broken into multiple segments.
- **Error Checking:** TCP checks the integrity of each segment using the checksum included in the header. If errors are detected, TCP can request retransmission of the problematic segments.
- **Flow Control:** TCP manages data flow using the window size field in the header, which prevents the sender from overwhelming the receiver by sending too much data too quickly.

### 4. **Passing Data to the Application Layer**
- **Data Extraction:** After reassembly and error checking, TCP extracts the original data from the segments and removes the TCP headers.
- **Delivering to the Application:** The cleaned, reassembled data is then passed up to the Application layer, where it is processed according to the application protocol in use (e.g., HTTP, SMTP).

### Summary of Information Transformation
- **At the Transport Layer (TCP):** Data from the Application layer is broken into segments and has TCP headers added, containing information necessary for reliable delivery.
- **At the Network Layer:** TCP segments are encapsulated into IP packets with IP headers, which are used for routing across the network.
- **Error checking and control:** TCP handles retransmission, sequencing, and flow control using information in the TCP headers (e.g., sequence numbers, acknowledgment numbers, window size).

By providing reliable, ordered, and error-checked data transfer between applications and the network, TCP ensures that information from the Application layer is correctly delivered to its destination and that data integrity is maintained throughout the transmission process.


## Network
>[! definition]
>It talks about IP addresses

adding additional information to the packets, such as address.  
### How the Physical Layer Can Route Data Despite Not Understanding IP:
The **Physical layer (Layer 1)** deals with the actual transmission of raw bits over a communication medium, like copper wires, fiber optics, or wireless signals. This layer doesn’t understand protocols like IP. However, it can still deliver data to the correct destination due to the following processes:

1. **Encapsulation into Lower Layers:**
   - Data from the Network layer is passed down to the **Data Link layer (Layer 2)**, where it is encapsulated into frames (e.g., Ethernet frames).
   - The Data Link layer adds a **MAC address** (Media Access Control) to the frame, which identifies the specific hardware device (such as a network interface card or NIC) on the local network.

2. **MAC Addressing at the Data Link Layer:**
   - Each device on a local network has a unique MAC address. The Data Link layer uses these MAC addresses to determine which device the frame should be sent to.
   - When a packet arrives at a router, the **router looks at the destination IP address, checks its routing table, and determines the next hop** ==(This is Network Layer)==. The Data Link layer then adds the MAC address of the next device (often another router) to the frame.
   - At each hop, the router strips off the old Data Link layer information and adds new MAC addresses for the next destination.

3. **Transmission by the Physical Layer:**
   - Once the Data Link layer encapsulates the frame with the appropriate MAC address, it is passed to the Physical layer.
   - The Physical layer then converts the frame into electrical, optical, or wireless signals and transmits these signals over the network to the next device.
   - The Physical layer is unaware of the IP addresses or routing decisions. It simply sends the bits provided to the next device based on the MAC addressing from the Data Link layer.

### Summary:
- The **IP protocol** ensures that data is routed to the correct destination using IP addresses and routing tables.
- The **Physical layer** doesn't need to understand IP addresses. It relies on the **Data Link layer's MAC addresses** to transmit the data to the next hop on the network.


## Network Interface
>[! definition]
> This is also referred as **Data Link** and **Physical** layer. 
> 
> Purpose:
> 1. It allows basic hardwares that the internet is built on (such as router and switch) to communication with each other. / It sets a agreed protocal for the above hardwares.
> 3. It transfers packets that's received from Network Layer between above hardwares using physical address to ensure direct transfer.
> 4. It packs the IP datagrams into frames by adding headings and trailers containing MAC address of the source and destination. 
> 5. Maps IP address to MAC address.
> 6. Enables upper layer to access the physical medium

### Data link 
>[! definition]
> It talks about MAC address


## Packet
>[! definition]
> Refered as Message/Data in Application and Transport layer. The name of Packet is only used in Interent/Network Layer. IP datagram in Network Layer. 

## Ethernet
![Pasted image 20240920104155.png](/img/user/Attachments/Pasted%20image%2020240920104155.png)


---
![Pasted image 20250407203817.png](/img/user/Attachments/Pasted%20image%2020250407203817.png)
(a)
	~~Circuit switching is to be used when connection quality if prioritised. Because Circuit switching uses a dedicated line to communicate, there is less chance to have internet traffic jam and packet loss.~~ Voice Communication, because for circuit switching, a dedicated path needs to be sustained though out the call.
(b) 
	Benefit1
		Dedicated line of communication, faster compared to packet swtiching due to less likely to have traffic jam
	Benefit2
		Less likely to have packet loss, more stable
	Drawback1
		Less secure, all packets go through the same route.
	Drawback2
		Less versatility, if the line goes down the system becomes unusable.
