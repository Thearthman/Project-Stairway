---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt2_Communication and Networking Technologies/"}
---

# 2.01 Network
```ad-def
*Connection* of *different* **(one or more)** *computing* devices for *communication* or *data transmission* and *sharing resources* using *wired* or *wireless* connection
```
## Local Area Network | LAN  
```ad-def
It's a **network** that connects computing devices within a *limited geographical* *area* (like a building, company). **Typically** have a *higher* **transmission** rate (bandwidth), and connects to *workstations, [swtiches](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#switch-vs-hub), [acess points](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#wireless-lans-wla-ns)*, share resoureces like papers, files. **Cost** is usuallly *lower*. Usually owned by *private* **organization**.
- Wired: WiFi, Bluetooth
- Wried: Ethernet.

```
### Wireless Lans | WLANs
Wireless Lans which **needs** *WAPs* `(Wirelss access points)` to communicate.
**Access Points**: Like WiFi, it's a device that **gives** *wireless* *access* to the **network**.
## Metropolitan Area Network | MAN  
```ad-def
*Bigger* than **Lan**, **typically** in the size of a *City*. It is often *built on* the foundation of numerous **LANs**.
```
## Wide Area Network | WAN  
```ad-def
*Bigger* than **MAN**, **typically** in the size of a *country*, or **even** *world-wide*. 
```
## *LAN* Compared to *WAN*
| Aspect              | WAN (Wide Area Network)                  | LAN (Local Area Network)          |
| ------------------- | ---------------------------------------- | --------------------------------- |
| Definition          | Spans a large geographical area          | Confined to a small area          |
| Coverage            | Large geographical area                  | Limited area                      |
| Ownership           | Private or provided by telecom companies | Usually private or organizational |
| Speed and Bandwidth | Slower due to longer distances           | High-speed, local connections     |
| Hardware            | Routers, switches, leased lines          | Switches, access points, Ethernet |
| Latency             | Higher due to longer distances           | Lower, suitable for real-time     |
| Reliability         | May be less reliable                     | Generally more reliable           |
| Security            | Requires robust security                 | Typically more secure             |
| Cost                | More expensive to set up and maintain    | Cost-effective for local use      |
| Examples            | Internet, leased lines, MPLS             | Home networks, office networks    |


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
```ad-def
**Terminators** on each ends, all computers connects in the same line.
Only able to [BROADCAST](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#casting-system)
```
***Advantages***: Easy to expand, low cost, little cabling, not secure.
***Disadvantages***: Need to avoid **data collision** through [CSMA/CD](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#carrier-sence-multiple-access-with-collision-detection-csma-cd). if wire is broken, all connections are lost.
### Terminators
Devices that's used to *prevent* **signal reflection** (**rebounce**).

## Mesh
![Pasted image 20230925100207.png](/img/user/Attachments/Pasted%20image%2020230925100207.png)
```ad-def
Each computer connected using *point to point*
Able to do all *three* Casting Way
```
***Advantages***: relatively easy to implement `(not in full mesh)`, *stable*: indivisual connection are relatively independent. More secure.
***Disadvantages***: Hard to expand, more expensive (requires computers to have multiple UTP ports).

## Star
![Pasted image 20230925101112.png](/img/user/Attachments/Pasted%20image%2020230925101112.png)
```ad-def
For Swtiches, Each end-system has a point-to-point connection to the central device. Transmission is duplex.
Able to do all *three* Casting Way
```
***Advantages***: easy to expand when having central devices, more secure, still independent.
***Disadvantages***: relatively expensive, requires a central device.

## Ring
![Drawing 2023-09-25 14.53.00](/img/user/Attachments/Drawing%202023-09-25%2014.53.00.svg)
```ad-def
It goes in a ring. Like a bus, if one connection is lost, all connection are down.
```

## Hybrid
![Pasted image 20230925145807.png](/img/user/Attachments/Pasted%20image%2020230925145807.png)

## Client-Server Model
> [!def] 
> **Client** send a *request* to the **server**; **server** *sends back* the requested **data**.
> **Central server** *control* and *handles* everything `(not for Thick Clients)`.
> *Data* is stored on **servers**.
### Thick Clients  
**Clients** perform most of the *computing* on their *own*.  
**Server** does *minimum* computing.  
### Thin Clients  
**Server** perform most of the *computing*.  
**Clients** does *minimum* computing for *themselves*.  
### Disadvantages | Server Reliant & Overload
**Update** will cause *influence* to all **clients**.
Can become *bottlenecked* with **many** client **requests**.
**Service** will *stop* once server's **overloaded**.
## Peer-to-Peer  
> [!def]
> Each **node** *acts* as **server** and **clients**.
> *No* **central server**.
> Each node has **equal status** regarding of access control.
> *Suitable* for networks with **no more** than **10 nodes**.
### Disadvantages | Security & Scale
it's decentrailized. Harder to mainain security.
Update requires every node to update clients. Harder to maintain security.

# 2.03 Transmission media
## Copper based
### UTP | Un-shielded Twisted Pair
As the name suggested, UTP is Un-shielded. Prone to interfere.
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
*Large* range of **wavelengths**: *Microwave* or *Radio wave* 
### Satellite Earth Orbits
G`eostationary`EO: *distant* **telephone** and **computer** network *communication*.  
M`edium`EO: Used for **GPS**.  
L`ow`EO: Used by **mobile** **network**.  


# 2.04 LAN hardware
## Switch vs. Hub
![IMG_0689.jpg|300](/img/user/Attachments/IMG_0689.jpg) 
**Switch** can create *logical* *connection* inside itself, *Full-Duplex Connections* (like an inner point to point connection). See in the figure above.
**Hub** is like [bus](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#bus), uses same port, **Vulnerable** to *Data Collision*. Only able to *Broadcast!!!*
So the **Switch** is more *secure* and more *efficient*.

## Repeater
To *boost* the signal for *long distance* transfering.

## Bridge
```ad-def
Devices that *connect* **LAN** networks (uses the *same protocol*) together. 
Can also connect different parts of a LAN, make them a single LAN.
Deals with *Local*. *Small-scale* network.
```

## Gateway
![Pasted image 20231009112834.png|400](/img/user/Attachments/Pasted%20image%2020231009112834.png)
```ad-def
*Gate* to *another* **network**. Does *translation* between two networks (*different* protocols). ` (translation: when one network is fiber optics and is using fram relay, another one is UTP using Ethernet.)` Can still be LANs.
*Divide* **broadcast** signal.
```

## Modem
*Converts* **digital** signals to **analogue** data.
Usually combined inside the [Router](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#router)

## Bridge Vs. Gateway Vs. [Router](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#router)
| Device  | Job/Function                                                          | Scope                                     | Example Use Case                              |
| ------- | --------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------- |
| Bridge  | Connects LAN segments within the same network.                        | Extends a LAN by connecting segments.     | Connecting two buildings in a campus.         |
| Gateway | Connects networks with different protocols or architectures.          | Links networks with dissimilar protocols. | A home router connecting LAN to the Internet. |
| Router  | Routes data between networks, making decisions based on IP addresses. | Manages traffic between networks.         | Connecting a company LAN to the Internet.     |
**Bridges** are used to *extend* a **LAN** and *manage* **traffic** within the *same* **network type**. **Gateways** connect networks with *different* **protocols** or technologies. 
## Data Transfer Path
1. **Data Source**: The data originates from a device within the LAN. This device could be a computer, smartphone, server, or any other networked device.
2. **Router**: The data is first sent to the LAN's router. The router is responsible for directing data within the local network. It determines if the data is intended for another device within the LAN or if it needs to be forwarded to a device outside the LAN (in the WAN).
3. **Gateway**: If the data's destination is outside the LAN, it is then sent to the LAN's gateway. The gateway is often a separate device, but it can also be integrated into the router. Its primary function is to provide connectivity between the LAN and the WAN. It acts as a bridge between the two networks.
4. **WAN**: Once the data reaches the gateway, it is then forwarded to the Wide Area Network (WAN). The WAN typically represents a larger network, which can include the internet or a private network connecting multiple LANs.
5. **Internet Service Provider (ISP)**: If the data is destined for a remote location on the internet, it passes through the ISP's network infrastructure. The ISP routes the data through various networking equipment, such as switches and routers, to ensure it reaches its final destination.

In summary, the data from a LAN to a WAN goes through both the router and the gateway. The router determines if the data should be sent outside the LAN, and the gateway facilitates the connection between the LAN and the WAN.
### Local Network | *Necessary Servers*
1. DNS: *translation* between domain and IP address ^457651
2. DHCP: Dynamic **Local** **IP** *distribution*
3. **NAT**: Packaging servers, they remember which *local IP* **requested** which *external* *IP* with its **request**, they when external IP’s server responds, it sends the information back to the corresponding local IP.
![Drawing 2023-09-18 10.26.47](/img/user/Attachments/Drawing%202023-09-18%2010.26.47.svg)


# 2.05 Ethernet
```ad-def
A *protocal* used by many *wired* **LANs**.
Made up of
1. A **node**: *device* on LAN
2. **Medium**: cable, [transmission media](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#2-03-transmission-media)
3. **Frame**: a format the data is send, a frame. (source + destination address)

```

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
### Gateway & Router
Gateway is usually in the router. 
To answer question about router, say: if the gateway is in the router...
Answer like you know everything.
## Public switched telephone network | PSTN
Modem are used to swtich analog and digital signals.


# 2.07 Internet
## Internet | ***Inter***`connected` ***Net***`work`
```ad-def
Internet is the *biggest* **internetwork**. It is *not* a *WAN*. It has *no owner*. `(Contrast to WAN because WAN typically have owner and are private)`
It's a **global** network of **interconnected** computers and computer networks. It allows devices to **communicate** and **share** information with each other. 
```ad-tk
## *Internet is not a WAN*

```

## World Wide Web | WWW
```ad-def
A *service* or *distributed application* which provides access to the entire collection of *multimedia* and* web content* in the form of [HTML, CSS, Javascripts](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#html-css-java-script) along with other resources using *hyperlinks*, *http* and *https* protocols through a web brower. It relies on the [Domain Name Service](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/) to map domains and *URLs* with [IP](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/) addresses.
```
### HTML, CSS, JavaScript
HTML is the *structure* of the page
CSS is the *styles* of the page
JavaScript is the *action* of the page
### WWW VS. [Internet](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#2-07-internet)
WWW is a *service* of the Internet, a *subset*.
[Internet](/A-Level/Computer%20Science/Chpt2_Communication%20and%20Networking%20Technologies/#2-07-internet) is a global network which allows communication between devices.

## Cloud computing
```ad-def
A *remote* *service* that accessable to provide computing *resources*. 

```ad-tk
*Remote*: Stored at different location. When accessing, you are not where the server's at.
```
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
![Drawing 2023-10-09 10.36.25](/img/user/Attachments/Drawing%202023-10-09%2010.36.25.svg)
When *buffer* reaches the **mininum**, *starts* streaming "bytes".
When *buffer* reaches **maximum**, *stop* streaming "bytes" to buffer.
*Media Player* **constantly** *draws* *data* from *buffer*.
### Pros Vs. Cons
![Pasted image 20231011182335.png](/img/user/Attachments/Pasted%20image%2020231011182335.png)
### On demand Vs. Real time
**On demand**: *Pre-stored* file, yes **Buffer** to *smooth* playback; *control* over **playback**.
**Real time**: *live-generated* content, typically **no** **Buffer**, *no control* over **playback**.

## URL | Uniform Resource Service
> [!def]
> For the *purpose* of **convinience**
> *protocol*://***website address***/**path**/`filename`
> *Protocol* is usually **https**.

## DNS | Domain name service
> [!def]
> It finds IP addressese of a domain name.
> Domain name eliminate the need to memorise IP addresses. `(you won't want to)`

![Pasted image 20231026093847.png](/img/user/Attachments/Pasted%20image%2020231026093847.png)
  
① The user opens their web browser and types in the URL and the web browser asks the DNS server (1) for the IP address of the website.  
② The DNS server can’t find www.hoddereducation.co.uk in its database or its cache and sends out a request to DNS server (2). 
③ DNS server (2) finds the URL and can map it to 107.162.140.19; the IP address is sent back to DNS server (1) which now puts the IP address and associated URL into its cache/database.  
④ This IP address is then sent back to the user’s computer.  
⑤ The computer now sets up a communication with the website server and the required pages are downloaded. The web browser interprets the HTML and displays the information on the user’s screen.  


# 2.08 IP Addressing
## IPv4
```ad-def
4 denary(0-255) numbers
1100 000   1010 1000   0000 1010   0000 0001
$\hspace{5cm}\downarrow$
$\hspace{3.7cm}$ 192.168.10.1 
```
### ~~Classification of IPv4~~ (Now abandoned)
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
Benefit of subnetting:
- Subtnet ensures that the traffic is contained within the defined subnet. As a result, network congestion is avoided, and the network load is also considerably reduced. Thus making the speed of the network faster.
## Static & Dynamic IP
**Static IP**: The address is permenant. Same IP won't be allocated to different devices. IP is Assigned by ISP. 
**Dynamic IP**: Address is not permenant. Same IP can be allocated to different devices. IP is assigned by Network OS. 

## Public IP Vs. Private IP
**Public IP** are **"Normal"** IPs that's allocated user ISP to *identify* the **location** of device.  
These **devices** are *accessible* from **anybody** using Internet
**Private IP** are used *inside* a network, helped to *seperate* **internal network** from **Internet**. *Multiple* **Private IP** can be *allocated* to same **Public IP**.

## IPv6
> [!Def]
> Developed to address problems with IPv4; It uses 128-bit addressing, that's **8** groups of *4* *hexadecimal* digits, and **colons** ( **:** ) seperating them.

**Benefits**:
Allow more complex address structure. 
More address avaliable.
Has no need for NATs (network address translation). 
Removes risk of private IP address co llisions.
Has built in authentication  
Allows for more efficient routing
### Zero Compression
Neighboring zero are represented by two colons ( :: )
For example: AC87:F9A2 : 0000:0000 : 0000:0000 : B3C4:CCC3
is represented by: AC87:F9A2::B3C4:CCC3
( :: ) this can represent multiple groups of zero as long as they're adjecent, because total number of zero is same as total digit (32 digits) minus non-zero digits.
### Maping IPv6 from IPv4
**::255.255.255.255** is valid IPv6
Its' IPv6 representation is **::FFFF:FFFF**
  
## Network Address Translation | NAT
Port are unique between applications, identifies the applications.
![Pasted image 20231013131557.png](/img/user/Attachments/Pasted%20image%2020231013131557.png)
1. **Purpose**: NAT primarily serves two purposes. It allows multiple devices in a private network to access the internet using a single public IP address, which helps conserve IPv4 addresses. Additionally, it enhances network security by hiding the internal network structure from external sources.
2. **Translation Process**:
    - When a device in the private network wants to send data to the internet, it initiates a connection to a remote server.
    - The NAT device, typically a router or firewall, intercepts the outgoing data packets and replaces the private IP address of the sending device with its own public IP address.
    - It also maintains a translation table to keep track of which internal device sent the data and on which port.
    - The NAT device then forwards the modified data packet to the internet.

1. **Response Handling**:
    
    - When the external server sends a response back, it addresses it to the public IP of the NAT device.
    - The NAT device checks its translation table to determine which internal device the response is intended for and forwards the response to that device.

1. **Types of NAT**:
    - **Static NAT**: It maps a specific private IP to a specific public IP. Often used for services like web servers.
    - **Dynamic NAT**: It assigns a public IP address from a pool of available addresses to internal devices on a first-come, first-served basis.
    - **NAT Overload (PAT)**: Port Address Translation, also known as NAT Overload, maps multiple private IP addresses to a single public IP address using different port numbers to distinguish between internal devices.

**IPv6**: With the adoption of IPv6, which provides a vast number of unique addresses, NAT is less essential. IPv6 allows for every device to have a unique public IP, eliminating the need for NAT in most cases.






# Extended (recommand reading/needs a little )
## Wireless CSMA/CD
In wired Ethernet the assumption (generally true) is that all participants on a LAN can detect if another station is currently transmitting. This is the basis von the CDMA/CD protocol. Every device “listens” for transmissions going on on the medium; when they don’t detect anything the valid conclusion is that the medium is free. Which allows them to start their own transmission immediately. If two parties transmit at the same time (which by chance could well happen) they will detect the collision by listening to the signal on the line, and find that is is distorted. Thus they both back off, and in order to not repeat the story endlessly, wait for a random period of time, before they start again.  

In a WLAN (or other “quasi-local” network, like a 4G cell) the situation looks differently: it can happen that the base station is in signal range from device A and from device B, but device A and device B are mutually out of range ( think of a triangle situation). Thus the signal from transmitting station A is too weak to disturb the reception at station B. But they jointly produce a distorted signal at the base station.  

There are basically two remedies to that situation:  
- CDMA/CA, with CA for Collision Avoidance. (a) a random wait period is built into the transmission routine for every device. (b) Collisions are only detected after full transmission of a packet, through missing ACK from the base station, and require re-transmission. (c) Very often this is only applied to short packets. For longer packets, devices precede the transmission with a short Ready to Send (RTS) packet, which may experience collision. The base station replies by Clear to Send (CTS), which is received by all connected devices and signals that the channel is reserved for a longer transmission.  
- OFDMA, as in LTE, 5G and a lot of other protocols. In this case the base station can allocate fractional bandwidth to individual devices for transmission. In which case each device gets an a priori exclusive right to send for a certain bandwidth and limited timeframe. From 802.11ax OFDMA is the de facto standard access protocol for WLAN, and CDMA/CA is on its way out.  
