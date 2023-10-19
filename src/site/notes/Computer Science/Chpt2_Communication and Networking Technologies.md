---
{"dg-publish":true,"permalink":"/Computer Science/Chpt2_Communication and Networking Technologies/"}
---


# 2.01 Network
> [!definition]
*Connection* of *different* **(one or more)** *computing* devices for *communication* or *data transmission* and *sharing resources* using *wired* or *wireless* connection
  
## Local Area Network | LAN  
> [!definition]
It's a **network** that connects computing devices within a *limited geographical* *area* (like a building, company). **Typically** have a *higher* **transmission** rate (bandwidth), and connects to *workstations, [[Computer Science/Chpt2_Communication and Networking Technologies#Switch vs. Hub\|swtiches]], [[Computer Science/Chpt2_Communication and Networking Technologies#Wireless Lans WLANs\|acess points]]*, share resoureces like papers, files. **Cost** is usuallly *lower*.
- Wired: WiFi, Bluetooth
- Wried: Ethernet.

  
### Wireless Lans | WLANs
Wireless Lans which **needs** *WAPs* `(Wirelss access points)` to communicate.
**Access Points**: Like WiFi, it's a device that **gives** *wireless* *access* to the **network**.
## Metropolitan Area Network | MAN  
> [!definition]
*Bigger* than **Lan**, **typically** in the size of a *City*. It is often *built on* the foundation of numerous **LANs**.
  
## Wide Area Network | WAN  
> [!definition]
*Bigger* than **MAN**, **typically** in the size of a *country*, or **even** *world-wide*. 
  
## *LAN* Compared to *WAN*
|Aspect|WAN (Wide Area Network)|LAN (Local Area Network)|
|---|---|---|
|Definition|Spans a large geographical area|Confined to a small area|
|Coverage|Large geographical area|Limited area|
|Ownership|Private or provided by telecom companies|Usually private or organizational|
|Speed and Bandwidth|Slower due to longer distances|High-speed, local connections|
|Hardware|Routers, switches, leased lines|Switches, access points, Ethernet|
|Latency|Higher due to longer distances|Lower, suitable for real-time|
|Reliability|May be less reliable|Generally more reliable|
|Security|Requires robust security|Typically more secure|
|Cost|More expensive to set up and maintain|Cost-effective for local use|
|Examples|Internet, leased lines, MPLS|Home networks, office networks|

## *P2P* Vs. *Server-Client*
| Feature/Aspect        | Client-Server Model                                                                    | Peer-to-Peer Model                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Basic Functionality   | Client sends a request to the server; server sends back the requested data.            | each node acts as server and client. Sends and receives data.                                        |
| Dedicated Servers     | A central server exist. Controls and handles everything.                               | No central server; each node can act as both a server and a client.                                  |
| Data Storage          | Centralized on dedicated servers.                                                      | every node has their own file.                                                                       |
| Access Control        | Server dictates access; central security databases control access to shared resources. | each node has equal status.                                                                          |
| Software Installation | is done through the central server. Update will cause influence to all clients.        | Installation is done independently. Updates are done independently.                                  |
| Security              | Greater security; requires user IDs and passwords.                                     | it's decentrailized. Harder to mainain security.                                                     |
| Scalability           | depends on server compacity, can be great.                                             | Suitable for networks with no more than 10 nodes.                                                    |
| System Stability      | More stable; nightly backups can restore deleted resources.                            | single note failure doesn't effect overall ability.                                                  |
| Potential Issues      | Can become bottlenecked with many client requests.                                     | Performance and management issues with more than 10 nodes.                                           |
| File Sharing          | Central file server allows sharing without offline devices.                            | allow nodes to be offline. File sharing happen between nodes.                                        |
| Examples of Use       | Large companies like Amazon with a need for controlled access and good security.       | Small businesses with frequent user interaction and no need for robust security.                     |
| Advantage             | more centralized, can be controlled/updated relatively easily.                         | no central server, not prone to overload. Files can be shared easily; easier to maintain the system. |
| Disadvantage          | Can be overloaded; service will be stoped once the central server is down;             | Update requires every node to update clients. Harder to maintain security.                           |


# 2.02 Network topologies
## Casting system
**Unicast**: only one to *one* connection.
**Multicast**: one to *more* connection
**Broadcast**: one to *all* connection.
## Point to point
![Pasted image 20230925100134.png](/img/user/Attachments/Pasted%20image%2020230925100134.png)
Easy as it seems.
## Bus  
![Pasted image 20230925095654.png](/img/user/Attachments/Pasted%20image%2020230925095654.png)
> [!definition]
**Terminators** on each ends, all computers connects in the same line.
Only able to [[Computer Science/Chpt2_Communication and Networking Technologies#Casting system\|BROADCAST]]
  
***Advantages***: Easy to expand, low cost, little cabling, not secure.
***Disadvantages***: Need to avoid **data collision** through [[Computer Science/Chpt2_Communication and Networking Technologies#Carrier Sence Multiple Access with Collision Detection CSMA/CD\|CSMA/CD]]. if wire is broken, all connections are lost.
### Terminators
Devices that's used to *prevent* **signal reflection** (**rebounce**).

## Mesh
![Pasted image 20230925100207.png](/img/user/Attachments/Pasted%20image%2020230925100207.png)
> [!definition]
Each computer connected using *point to point*
Able to do all *three* Casting Way
  
***Advantages***: relatively easy to implement `(not in full mesh)`, *stable*: indivisual connection are relatively independent. More secure.
***Disadvantages***: Hard to expand, more expensive (requires computers to have multiple UTP ports).

## Star
![Pasted image 20230925101112.png](/img/user/Attachments/Pasted%20image%2020230925101112.png)
> [!definition]
For Swtiches, Each end-system has a point-to-point connection to the central device. Transmission is duplex.
Able to do all *three* Casting Way
  
***Advantages***: easy to expand when having central devices, more secure, still independent.
***Disadvantages***: relatively expensive, requires a central device.

## Ring
![[Drawing 2023-09-25 14.53.00.excalidraw\|Drawing 2023-09-25 14.53.00.excalidraw]]
> [!definition]
It goes in a ring. Like a bus, if one connection is lost, all connection are down.
  

## Hybrid
![Pasted image 20230925145807.png](/img/user/Attachments/Pasted%20image%2020230925145807.png)



# 2.03 Transmission media
## Copper based
### UTP
Un-shielded Twisted Pair
*Properties*: 8 wires, **categories** `(higher the better)`, *150m max*. **LAN**
### Co-axial
Compare to **UTP**, **Co-axial** is *Shielded*
*Properties*: Serial, one signal at a time. **WAN**

## Fiber Optics
*Least* likely to have *interference*
Transmits in *light* *pulses*

## Radio
*Large* range of **wavelengths**
*Wireless* connection
*Less* likely to have *interference*

## Satellites
Large range of wavelengths: *Microwave* or *Radio wave* 

# 2.04 LAN hardware
## Switch vs. Hub
![IMG_0689.jpg|300](/img/user/Attachments/IMG_0689.jpg) 
**Switch** can create *logical* *connection* inside itself, *Full-Duplex Connections* (like an inner point to point connection). See in the figure above.
**Hub** is like [[Computer Science/Chpt2_Communication and Networking Technologies#Bus\|bus]], uses same port, **Vulnerable** to *Data Collision*. Only able to *Broadcast!!!*
So the **Switch** is more *secure* and more *efficient*.

## Repeater
To *boost* the signal for *long distance* transfering.

## Bridge
> [!definition]
Devices that *connect* **LAN** networks (uses the *same protocol*) together. 
Can also connect different parts of a LAN, make them a single LAN.
Deals with *Local*. *Small-scale* network.
  

## Gateway
![Pasted image 20231009112834.png|400](/img/user/Attachments/Pasted%20image%2020231009112834.png)
> [!definition]
*Gate* to *another* **network**. Does *translation* between two networks (*different* protocols). ` (translation: when one network is fiber optics and is using fram relay, another one is UTP using Ethernet.)` Can still be LANs.
*Divide* **broadcast** signal.
  

## Modem
*Converts* **digital** signals to **analogue** data.
Usually combined inside the [[Computer Science/Chpt2_Communication and Networking Technologies#Router\|Router]]

## Bridge Vs. Gateway Vs. [[Computer Science/Chpt2_Communication and Networking Technologies#Router\|Router]]
|Device|Job/Function|Scope|Example Use Case|
|---|---|---|---|
|Bridge|Connects LAN segments within the same network.|Extends a LAN by connecting segments.|Connecting two buildings in a campus.|
|Gateway|Connects networks with different protocols or architectures.|Links networks with dissimilar protocols.|A home router connecting LAN to the Internet.|
|Router|Routes data between networks, making decisions based on IP addresses.|Manages traffic between networks.|Connecting a company LAN to the Internet.|
  
**Bridges** are used to *extend* a **LAN** and *manage* **traffic** within the *same* **network type**. **Gateways** connect networks with *different* **protocols** or technologies. 
  
**Routers**, on the other hand, are used to *route* **data** between networks, making decisions based on IP addresses, and are essential for interconnecting LANs and managing traffic in complex network infrastructures.

## Data Transfer Path
1. **Data Source**: The data originates from a device within the LAN. This device could be a computer, smartphone, server, or any other networked device.
2. **Router**: The data is first sent to the LAN's router. The router is responsible for directing data within the local network. It determines if the data is intended for another device within the LAN or if it needs to be forwarded to a device outside the LAN (in the WAN).
3. **Gateway**: If the data's destination is outside the LAN, it is then sent to the LAN's gateway. The gateway is often a separate device, but it can also be integrated into the router. Its primary function is to provide connectivity between the LAN and the WAN. It acts as a bridge between the two networks.
4. **WAN**: Once the data reaches the gateway, it is then forwarded to the Wide Area Network (WAN). The WAN typically represents a larger network, which can include the internet or a private network connecting multiple LANs.
5. **Internet Service Provider (ISP)**: If the data is destined for a remote location on the internet, it passes through the ISP's network infrastructure. The ISP routes the data through various networking equipment, such as switches and routers, to ensure it reaches its final destination.

In summary, the data from a LAN to a WAN goes through both the router and the gateway. The router determines if the data should be sent outside the LAN, and the gateway facilitates the connection between the LAN and the WAN.
### Local Network | *Necessary Servers*
1. DNS: *translation* between domain and IP address
{ #457651}

2. DHCP: Dynamic **Local** **IP** *distribution*
3. **NAT**: Packaging servers, they remember which *local IP* **requested** which *external* *IP* with its **request**, they when external IP’s server responds, it sends the information back to the corresponding local IP.
![Pasted image 20231019111203.png](/img/user/Attachments/Pasted%20image%2020231019111203.png)

# 2.05 Ethernet
> [!definition]
> A *protocal* used by many *wired* **LANs**.
> Made up of
> 1. A **node**: *device* on LAN
> 2. **Medium**: cable, [[Computer Science/Chpt2_Communication and Networking Technologies#2.03 Transmission media\|transmission media]]
> 3. **Frame**: a format the data is send, a frame. (source + destination address)
  
## Carrier Sence Multiple Access with Collision Detection | CSMA/CD
When *two* **message** are sent using the *same* **channel**, a **collision** happens.
In Simple terms, CSMA/CD keep detecting collision, and when happens, stops transmission and sends a jam signal. Wait for a set time and resend the frame.
![Pasted image 20231011182008.png|350](/img/user/Attachments/Pasted%20image%2020231011182008.png)

# 2.06 The Internet Infrastructure
## Internet Service Provider | ISP
Company which allows users to connect to the internet.
## Router
Device which enables data pacakets to be routed between different networks.
It can join LANs to form a WAN.
The nodes of the meshed Internet. Routers are connected to one another.
## Public switched telephone network | PSTN
Modem are used to swtich analog and digital signals.

# 2.07 Internet
## Internet | ***Inter***`connected` ***Net***`work`
> [!definition]
Internet is the *biggest* **internetwork**. It is *not* a *WAN*. It has *no owner*. `(Contrast to WAN because WAN typically have owner and are private)`
It's a **global** network of **interconnected** computers and computer networks. It allows devices to **communicate** and **share** information with each other. 
>> [!warning]
>>  *Internet is not a WAN*

  

## World Wide Web | WWW
> [!definition]
A *service* or *distributed application* which provides access to the entire collection of *multimedia* and* web content* in the form of [[Computer Science/Chpt2_Communication and Networking Technologies#HTML, CSS, Javascripts\|HTML, CSS, Javascripts]] along with other resources using *hyperlinks*, *http* and *https* protocols through a web brower. It relies on the [[Computer Science/Chpt2_Communication and Networking Technologies#^457651\|Domain Name Service]] to map domains and *URLs* with [[Computer Science/Chpt2_Communication and Networking Technologies\|IP]] addresses.
  
### HTML, CSS, JavaScript
HTML is the *structure* of the page
CSS is the *styles* of the page
JavaScript is the *action* of the page
### WWW VS. [[Computer Science/Chpt2_Communication and Networking Technologies#Internet\|Internet]]
WWW is a *service* of the Internet, a *subset*.
[[Computer Science/Chpt2_Communication and Networking Technologies#Internet\|Internet]] is a global network which allows communication between devices.

## Cloud computing
> [!definition]
A *remote* *service* that accessable to provide computing *resources*. 

>[!warning]
*Remote*: Stored at different location. When accessing, you are not where the server's at.
  
### Advantages & Disadvantages
**adv**: To compute on cloud. Data is **retrievable** even if *local* device is lost. Access through *different* devices. Larger storage compared to local devices.
**dis**: Potential data leakage. Data privacy. Potential data loss if service provider is gone.
### Private Vs. Public  Vs. Hybrid
**Public**: *everyone* has *potential* **open**-access to the data.
**Private**: owned by a *specific* entity giving **restricted** access.
**Hybrid**: Both Public and Private.
### Redundancy
Files are stored in copies across multiple servers to prevent service failure when one server malfunctions.
### Server Farms
A place with bunch of servers.

## Bit Streaming
![Pasted image 20231019111224.png](/img/user/Attachments/Pasted%20image%2020231019111224.png)  
When *buffer* reaches the **mininum**, *starts* streaming "bytes".
When *buffer* reaches **maximum**, *stop* streaming "bytes" to buffer.
*Media Player* **constantly** *draws* *data* from *buffer*.
### Pros Vs. Cons
![Pasted image 20231011182335.png](/img/user/Attachments/Pasted%20image%2020231011182335.png)
### On demand Vs. Real time
**On demand**: *Pre-stored* file, yes **Buffer** to *smooth* playback; *control* over **playback**.
**Real time**: *live-generated* content, typically **no** **Buffer**, *no control* over **playback**.


## [[URL\|URL]]
- [ ] To be done

## [[DNS\|DNS]]
- [ ] To be done


# 2.08 IP Addressing
## IPv4
> [!definition]
4 denary(0-255) numbers
1100 000   1010 1000   0000 1010   0000 0001
$\hspace{5cm}\downarrow$
$\hspace{3.7cm}$ 192.168.10.1 
  
### Classification of IPv4
A $\to$ 0`000 0000` $_{\text{(the first byte of IPv4)}}$ *first* byte for network (that's $2^7$ networks) ,followed by 3 bytes for Host (that's $2^{24}$ hosts); So total is $2^7\times{2}^{24}=$  billion users.
B $\to$ 10`00 0000` $_{\text{(the first byte of IPv4)}}$ first two bytes for network (that's $2^{15}$ networks), followed by 2 bytes for Host (that's $2^{16}$ hosts); So total is $2^{15}\times{2}^{16}=$  thousands hosts
$\dots$
$\downarrow$
$\dots$
E  $\to$ 1111 `0000`
Total of 5 class, from A to E.

## CIDR | Classless Inter-domain Routing

0000 0000 $\dots$  0000 0000 / 0000000
What's behind the ID is the *Mask*
So, for example we have a Host:
$$
\begin{align}
\text{IP: }195.12.6.0/ & 21  \to1100\;0011\;\;0000\;1100\;\;0000\;0110\;\;0000\;0100\\
_{\text{ mask can be translate to}}& \downarrow \\
1111\;1111\;\;1111\;1111\; & \;1111\;1000\;\;0000\;0 000 \\
 \text{So, to get NET ID} & \text{ and Host ID} \\
\downarrow \\
\text{Host IP:} 1100\;0011\;\; 0 & 000 \;1100\; \; 0000 \;0110\; \;0000\;0100 \\
\text{NET Mast:} 1111\;1111\;\;1 & 1  11  \;1111\;\;1111\;1000\;\;0000\;0000 \\
\text{NET ID:} 1100\;0011\;\;0 & 000 \;1100\;\;0000\;0000\;\;0000\;0000 \\
\text{HOST ID:} 0000\;0000\;\;0 & 000 \;0000\;\;0000\;0110\;\;0000\;0100 \\
\end{align}
$$
## Sub-netting
The Sub-net ID follows behind the NET ID. Takes up bits that's originally HOST ID.

## Network Address Translation | NAT
Port are unique between applications, identifies the applications.
![[Pasted image 20231013131557.png\|Pasted image 20231013131557.png]]
Hide your local IPs, 



## Static & Dynamic IP



## Zero Compression
