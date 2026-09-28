---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt17_Security/"}
---


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




---

<br><br>
<br><br>
<br><br>
<br><br>



![Screenshot 2024-11-19 at 15.25.45.png](/img/user/Attachments/Screenshot%202024-11-19%20at%2015.25.45.png)
TCP first establishes a connection between the user and the sever. Then, the browser automatically invokes handshake protocal which request a SSL digital certificate from the server that is signed by CA to verity its identity. The server sends back its digital certificate and its public key. The browser checks with CA to veritfy its identity, and uses the public key to encrypt a one time session key to establish a encryted secure connection over the network.