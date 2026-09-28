---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt15.1_Hardware and VM/"}
---

>[! quote] [Syllabus](/img/user/Attachments/Pasted%20image%2020241019200213.png)
># 1. Processors, Parallel Processing and Virtual Machines
>1. Understanding RISC and CISC (Focusing on difference)
>2. Pipeline and Registers in RISC
>3. SISD, SIMD, MISD, MIMD
>4. Characteristics of Massively Parallel Computers 
>5. Understanding the concept of Virtual Machines
>	1. examples to the role of virtual machines
>	2. benefits/limitations of virtual machines


# 1.1 CISC & RISC
## CISC | Complex Instruction Set Computer
>[! def]
> CISC contains **specialised instructions**, which *matches* the **requiremets for high-level programming**. **These** instructions *require* **multiple memory access**, which are **slow compares to register** access in RISC. The **complexity** of many of the CISC instructions *makes* **hard-wiring** much **more difficult** so **microprogramming** is the norm.
## RISC | Reduced Intruction Set Computer
>[! def]
>RISC primarly focus on the **reduction of complexity**. This simplicity *allows* RISC to *store* **data** *in* **registers**, which can be *accessed\manipulated* *without* **memory** being *involved*. The **simplicity** of RISC instructions makes it **easier** to *use* **hard-wiring** inside the control unit.

>[! tk] 
>1. smaller/larger simple/complex instruction set
>2. single cycle/multiple cycle
>3. different addressing mode
>4. number of general/special purpose register 
>5. pipelining
>6. microprogrammed/hard-wired CU
>7. Software orientated(RISC) Hardware orientated(CISC)
## Comparison
>[! quote]
>![Pasted image 20241019203803.png](/img/user/Attachments/Pasted%20image%2020241019203803.png)

**Hard-Wired vs Microprogrammed**
>**Hard-Wired** means the CU is constructed as a logic circuit.  
>**Microprogrammed** means the CU contains a ROM component that stores the microinstructions or microcode for microprogramming.
# 1.2 Pipeline
>[! def]
> Pipeline is a method to execute the **F-E cycle** that utilises parallelism. In pipelining, F-E cycle are *broken* *down* into **5 stages**: Instruction fetch, decode, operand fetch, instruction execute and result write back. ==The **CU** are made specially so that it *has* **5 independent units**, *each* *responsible* for **one** of the above **stages**. Each of these **units** have their *own* *registers*.==
> ![Pasted image 20241019214316.png](/img/user/Attachments/Pasted%20image%2020241019214316.png)  
> Once running, the pipeline will be handling the 5 stages at the same time, taking much less time than normal F-E cycle in CISC.
>> [! Interrupt Handling]
> This is the biggest problem to Pipelining, as there are multiple instructions underway.   
> **One** **option** is to *erase* the **pipeline** **contents** for the **latest** **four** **instructions** entered.   
> **Another** **option** is to *have* **individual** **program** **counter** **registers** which *stores* the **current** **data** and handle the interrupt.   

# 1.3 Computer Architectures
## SISD | Single Instruction Single Data
>[! def]
>Only able to execute one instruction on one data at a time.  
## SIMD | Single Instruction Multiple Data
>[! def]
>Can perform one instruction on multiple data at the same time. It is able to achive this by having multiple processing units that takes the same instruction and applies it on multiple data. (Parallelism applied to the data stream)
## MISD | Multiple Instruction Single Data
>[! def]
>Can perform multiple instructions on one data at the same time. Mostly used in fault tolerence system, like aerospace where multiple real-time calculation on data is critical for safety. **Ensured consistency**: Processing the same data through various methods increases the likelihood that the final decision is accurate and trustworthy.
## MIMD | Multiple Instruction Multiple Data
>[! def]
>It has multple processing units, and each processing unit inside can perform different instructions at the same time. 

# 1.4 Massively Parallel Computer System
>[! def]
>Cluster: Uses hardware for communication bewteen computer. This type of is a bunch of PCs strapped together.   
>MPPs: Multiple processing units working on the same question but in different part, uses specialised data pathway to communicate. This is a single PC with a bunch of processors. 


# 1.5 Virtual Machine
>[! def]
>A Virtual Machine runs on the Host OS and serves as a support for the Guest OS which the software running inside the Virtual Machine runs on. It serves as the virtual "Physical Hardware" for the Guest OS.   
>
>**Advantages**:   
>1. It is able to support legacy or other apps that does not run on the current OS.  
>2. It is able to run multiple OS on the same Hardware, which can be used for server consolidation. This refers to the practice of running multiple virtual servers on a single physical server.   
>
>**Disadvantages**:  
>1. Time and effot required to implement.  
>2. It will not offer the same level of performance on a normal system.  



---




![Screenshot 2024-09-25 at 15.47.33.png](/img/user/Attachments/Screenshot%202024-09-25%20at%2015.47.33.png)
1. CISC have a larger number of instruction set, while RISC's are rather small.
2. CISC's CU can be micro-programmed, while RICS's cannnot.
3. RISC supports pipelining better, while CISC's not.
4. RISC emphasizes software, CISC emphasizes hardware.
5. CISC more power hungery
![Pasted image 20240925155750.png](/img/user/Attachments/Pasted%20image%2020240925155750.png)

# Virtual Machine
![Screenshot 2024-09-29 at 09.32.53.png](/img/user/Attachments/Screenshot%202024-09-29%20at%2009.32.53.png)
1. Virtual machines allows running old software by emulating the original environment, including an outdated operating system, on modern hardware. This avoids compatibility issues and eliminates the need for obsolete hardware.
2. Able to run software in an isolated environment, therefore it is safer to use it to test software.
3. Share the same hardware resource as the main operating system, performance may not be as great as a independent machine. 
![Screenshot 2024-09-29 at 09.55.22 2.png](/img/user/Attachments/Screenshot%202024-09-29%20at%2009.55.22%202.png)