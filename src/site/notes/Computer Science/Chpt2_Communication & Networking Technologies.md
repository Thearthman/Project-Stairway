---
{"dg-publish":true,"permalink":"/computer-science/chpt2-communication-and-networking-technologies/"}
---


# 2.01 Network
> [!definition]
*Connection* of *different* **(one or more)** *computing* devices for *communication* or *data transmission* and *sharing resources* using *wired* or *wireless* connection
  
## Local Area Network | LAN  
> [!definition]
It's a **network** that connects computing devices within a *limited geographical* *area* (like a building, company). **Typically** have a *higher* **transmission** rate (bandwidth), and connects to *workstations, [[Computer Science/Chpt2_Communication & Networking Technologies#Switch vs. Hub\|swtiches]], [[Computer Science/Chpt2_Communication & Networking Technologies#Wireless Lans WLANs\|acess points]]*, share resoureces like papers, files. **Cost** is usuallly *lower*.
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
Only able to [[Computer Science/Chpt2_Communication & Networking Technologies#Casting system\|BROADCAST]]
  
***Advantages***: Easy to expand, low cost, little cabling, not secure.
***Disadvantages***: Need to avoid **data collision** through [[Computer Science/Chpt2_Communication & Networking Technologies#Carrier Sence Multiple Access with Collision Detection CSMA/CD\|CSMA/CD]]. if wire is broken, all connections are lost.
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
**Hub** is like [[Computer Science/Chpt2_Communication & Networking Technologies#Bus\|bus]], uses same port, **Vulnerable** to *Data Collision*. Only able to *Broadcast!!!*
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
Usually combined inside the [[Computer Science/Chpt2_Communication & Networking Technologies#Router\|Router]]

## Bridge Vs. Gateway Vs. [[Computer Science/Chpt2_Communication & Networking Technologies#Router\|Router]]
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
![[Drawing 2023-09-18 10.26.47.excalidraw\|Drawing 2023-09-18 10.26.47.excalidraw]]


# 2.05 Ethernet
> [!definition]
> A *protocal* used by many *wired* **LANs**.
> Made up of
> 1. A **node**: *device* on LAN
> 2. **Medium**: cable, [[Computer Science/Chpt2_Communication & Networking Technologies#2.03 Transmission media\|transmission media]]
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
A *service* or *distributed application* which provides access to the entire collection of *multimedia* and* web content* in the form of [[Computer Science/Chpt2_Communication & Networking Technologies#HTML, CSS, Javascripts\|HTML, CSS, Javascripts]] along with other resources using *hyperlinks*, *http* and *https* protocols through a web brower. It relies on the [[Computer Science/Chpt2_Communication & Networking Technologies#^457651\|Domain Name Service]] to map domains and *URLs* with [[Computer Science/Chpt2_Communication & Networking Technologies\|IP]] addresses.
  
### HTML, CSS, JavaScript
HTML is the *structure* of the page
CSS is the *styles* of the page
JavaScript is the *action* of the page
### WWW VS. [[Computer Science/Chpt2_Communication & Networking Technologies#Internet\|Internet]]
WWW is a *service* of the Internet, a *subset*.
[[Computer Science/Chpt2_Communication & Networking Technologies#Internet\|Internet]] is a global network which allows communication between devices.

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
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Drawing_2023-10-09_1036.25.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.9.18","elements":[{"type":"rectangle","version":26,"versionNonce":1792668540,"isDeleted":false,"id":"dBbCRTOwoxV7ChFCP3wMn","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-275.59124755859375,"y":-390.68692779541016,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":103,"height":75,"seed":1842284612,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"id":"cUZ3qBWjim423_pacCUeo","type":"arrow"},{"type":"text","id":"jCxIJeny"}],"updated":1696819101918,"link":null,"locked":false},{"type":"text","version":16,"versionNonce":361698116,"isDeleted":false,"id":"jCxIJeny","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-254.2912139892578,"y":-378.18692779541016,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":60.399932861328125,"height":50,"seed":1164827260,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819097628,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"web \nserver","rawText":"web server","textAlign":"center","verticalAlign":"middle","containerId":"dBbCRTOwoxV7ChFCP3wMn","originalText":"web server","lineHeight":1.25,"baseline":42},{"type":"arrow","version":130,"versionNonce":590865220,"isDeleted":false,"id":"cUZ3qBWjim423_pacCUeo","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-164.92315673828125,"y":-354.2863952531952,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":66.83279212593482,"height":83.25786894704288,"seed":1679697148,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696821533118,"link":null,"locked":false,"startBinding":{"elementId":"dBbCRTOwoxV7ChFCP3wMn","gap":7.6680908203125,"focus":-0.029411728557165666},"endBinding":{"elementId":"tB4ZzNb3WtaNYZ-O2U-oA","gap":6.572662353515625,"focus":-0.10344860711777754},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[66.80804443359375,0.004023732199129881],[66.83279212593482,83.25786894704288]]},{"type":"rectangle","version":103,"versionNonce":66622460,"isDeleted":false,"id":"tB4ZzNb3WtaNYZ-O2U-oA","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-159.4599609375,"y":-264.4558639526367,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":136.9306640625,"height":67.9176025390625,"seed":496319940,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"cUZ3qBWjim423_pacCUeo","type":"arrow"},{"id":"c5Bcy5IqA6srvHt22oIsU","type":"arrow"}],"updated":1696819025581,"link":null,"locked":false},{"type":"rectangle","version":47,"versionNonce":868205692,"isDeleted":false,"id":"eSiFhpf6vII6bQKnFVIm6","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-32.3883056640625,"y":-169.15215301513672,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":187.321044921875,"height":131.45343017578125,"seed":2097331908,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"c5Bcy5IqA6srvHt22oIsU","type":"arrow"}],"updated":1696819030729,"link":null,"locked":false},{"type":"arrow","version":92,"versionNonce":1439383620,"isDeleted":false,"id":"c5Bcy5IqA6srvHt22oIsU","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-17.0521240234375,"y":-231.59252166748047,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":81.06298828125,"height":50.390472412109375,"seed":420399044,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819034387,"link":null,"locked":false,"startBinding":{"elementId":"tB4ZzNb3WtaNYZ-O2U-oA","focus":-0.03225847036473208,"gap":5.4771728515625},"endBinding":{"elementId":"eSiFhpf6vII6bQKnFVIm6","focus":-0.0005008858443180097,"gap":12.049896240234375},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[81.06298828125,0],[79.967529296875,50.390472412109375]]},{"type":"line","version":57,"versionNonce":452203132,"isDeleted":false,"id":"PsLgh-677_eJZ6U6GA6EK","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-125.501220703125,"y":-265.5513229370117,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":2.19091796875,"height":70.10848999023438,"seed":358809412,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819043577,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[2.19091796875,70.10848999023438]]},{"type":"line","version":44,"versionNonce":1338990972,"isDeleted":false,"id":"K6D3g_FgWO5X53suIv0ku","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-57.5836181640625,"y":-262.26497650146484,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.095458984375,"height":67.9176025390625,"seed":214528452,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819048133,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.095458984375,67.9176025390625]]},{"type":"text","version":20,"versionNonce":639614332,"isDeleted":false,"id":"gLlS7IBl","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-136.45556640625,"y":-189.9655990600586,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":26.379974365234375,"height":25,"seed":1008556996,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819061406,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"min","rawText":"min","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"min","lineHeight":1.25,"baseline":17},{"type":"text","version":29,"versionNonce":1656555900,"isDeleted":false,"id":"88MxIKVk","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-77.3016357421875,"y":-192.15648651123047,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":37.23997497558594,"height":25,"seed":554257348,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819063272,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"max","rawText":"max","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"max","lineHeight":1.25,"baseline":17},{"type":"text","version":79,"versionNonce":1537199740,"isDeleted":false,"id":"pqobucoR","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-164.93701171875,"y":-379.4776077270508,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":132.51988220214844,"height":25,"seed":651707516,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819142456,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"\"byts stream\"","rawText":"\"byts stream\"","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"\"byts stream\"","lineHeight":1.25,"baseline":17},{"type":"rectangle","version":55,"versionNonce":1407198076,"isDeleted":false,"id":"qSIcyBbQExPqpBz292CoL","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-157.26904296875,"y":-263.3390426635742,"strokeColor":"#1e1e1e","backgroundColor":"#1e1e1e","width":85.4447021484375,"height":66.82217407226562,"seed":263630972,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696821538069,"link":null,"locked":false},{"type":"ellipse","version":21,"versionNonce":524108668,"isDeleted":false,"id":"NLZGG69f5PlWbI7AFd4E3","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":55.247314453125,"y":-145.03093719482422,"strokeColor":"#1e1e1e","backgroundColor":"#ffc9c9","width":17.527099609375,"height":21.90887451171875,"seed":132667772,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819246087,"link":null,"locked":false},{"type":"line","version":33,"versionNonce":100250180,"isDeleted":false,"id":"0UvN7LfN3u2UtV0_tQiHi","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":48.674560546875,"y":-111.07213592529297,"strokeColor":"#1e1e1e","backgroundColor":"#ffc9c9","width":36.1497802734375,"height":3.28631591796875,"seed":843019260,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819251581,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[36.1497802734375,3.28631591796875]]},{"type":"line","version":24,"versionNonce":1609115204,"isDeleted":false,"id":"CoRx8rXUGGmHxn5PTJrPY","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":65.1063232421875,"y":-117.64482879638672,"strokeColor":"#1e1e1e","backgroundColor":"#ffc9c9","width":13.1453857421875,"height":42.72235107421875,"seed":1923785852,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819254692,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.095458984375,30.6724853515625],[-13.1453857421875,42.72235107421875]]},{"type":"line","version":35,"versionNonce":1464995012,"isDeleted":false,"id":"vXFoeMG7kxnHev6qeydks","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":65.1063232421875,"y":-86.97234344482422,"strokeColor":"#1e1e1e","backgroundColor":"#ffc9c9","width":13.145263671875,"height":14.24078369140625,"seed":8581244,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819259568,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[13.145263671875,14.24078369140625]]},{"type":"text","version":39,"versionNonce":1165360708,"isDeleted":false,"id":"MWORbKBS","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-229.5684814453125,"y":-242.52556610107422,"strokeColor":"#e03131","backgroundColor":"#ffc9c9","width":60.49992370605469,"height":25,"seed":1645376380,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819327855,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"buffer","rawText":"buffer","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"buffer","lineHeight":1.25,"baseline":17},{"type":"text","version":66,"versionNonce":1463311356,"isDeleted":false,"id":"EnWZBDut","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-94.8287353515625,"y":-330.1611862182617,"strokeColor":"#e03131","backgroundColor":"#ffc9c9","width":148.93984985351562,"height":25,"seed":1274428740,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819370480,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"increase buffer","rawText":"increase buffer","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"increase buffer","lineHeight":1.25,"baseline":17},{"type":"text","version":159,"versionNonce":174362236,"isDeleted":false,"id":"vxBbJakw","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-5.2736358642578125,"y":-256.67211151123047,"strokeColor":"#e03131","backgroundColor":"#ffc9c9","width":157.5398406982422,"height":25,"seed":1142328572,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819386839,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"decrease buffer","rawText":"decrease buffer","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"decrease buffer","lineHeight":1.25,"baseline":17},{"type":"text","version":111,"versionNonce":615602940,"isDeleted":false,"id":"HbvIMUv0","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"angle":0,"x":-166.89767456054688,"y":-110.34165573120117,"strokeColor":"#e03131","backgroundColor":"#ffc9c9","width":126.09989929199219,"height":25,"seed":1072620868,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1696819436602,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"Media Player","rawText":"Media Player","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Media Player","lineHeight":1.25,"baseline":17},{"id":"rRrxoZ14bUFk9iaQeOKSc","type":"freedraw","x":-262.190673828125,"y":-235.22239303588867,"width":0.0001,"height":0.0001,"angle":0,"strokeColor":"#1971c2","backgroundColor":"#1e1e1e","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"dashed","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"roundness":null,"seed":1262912764,"version":3,"versionNonce":804102212,"isDeleted":false,"boundElements":null,"updated":1696821543473,"link":null,"locked":false,"points":[[0,0],[0.0001,0.0001]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[0.0001,0.0001]}],"appState":{"theme":"light","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1971c2","currentItemBackgroundColor":"#1e1e1e","currentItemFillStyle":"hachure","currentItemStrokeWidth":1,"currentItemStrokeStyle":"dashed","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":1,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":288.48565673828125,"scrollY":487.29029846191406,"zoom":{"value":2},"currentItemRoundness":"sharp","gridSize":null,"currentStrokeOptions":null,"previousGridSize":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Drawing_2023-10-09_1036.25.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
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
