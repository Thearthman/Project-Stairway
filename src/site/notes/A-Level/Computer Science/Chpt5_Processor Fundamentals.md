---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt5_Processor Fundamentals/"}
---

# 5.01 Model of Computer System  
## von Neumann model  
>[! Definition]  
>Uniqueness von Neumann model:    
>- Processor has direct access to memory  
>- Memory store program and data at the same time   
>- Stores individual instructions which will be executed sequentially.  
>
>Here is a simple representation.
>![Pasted image 20231121152736.png](/img/user/Attachments/Pasted%20image%2020231121152736.png)

<br>

## Components of processor
### ALU | Arithmetic Logic Unit
>[! definition]
>ALU is responsible for arithmetic and logic operation.   
### CU | Control Units 
>[! definition]
>CU reads instructions (that's read from memory) then generates a control signal. The signal are send across control bus to RAM and I/O devices.
### System Clock
#ComputerScience_Revision/P1 
>[! definition]
>System Clock produces **timing signals** for **synchronisation**. Operations in computer happen each clock cycle. This helps to sychronise operations between varies components.   
>- When asked in questions, always mention **timing signal** and **synchronisation**.  
### Immediate Access Store
>[! definition]
>*Just another name for RAM*. Holdes all the data and prorgram that the procesor needs to access. 

<br>

## Registers Used
### PC | Program Counter  
>[! definition]  
>**PC** Stores the **address** of the **next instruction**.   
>At the start of Fetch, for a brief moment, it *holds* the **address** of the **next instruction**. Most of the time, **after Fetch**, i.e. the last step of Fetch which is to *increase PC by 1*, it points to the next instruction.   
### MAR | Memory Address Register  
>[! definition]  
> **MAR** stores the address of **memory location** or I/O component which is ***About*** to be *R/W* from. 
### MDR | Memory Data Register  
>[! definition]
>**MDR** stores **data** that has ***Just Been*** *read* from memory or is just ***About*** to be *written* to memory.  
>Also, it is important to notice that **MDR** *acts* as a **buffer**, because transfering speed inside the CPU are much faster than outside the CPU.
### IX | Index Register  
>[! definition]
>**IX** Stores (usually) an address that's in memory. Only used for indexed addressing.
>>[! Index Addressing]   
>>A method by CPU to calculate the effective address of an operand in memory   
### SR | Status Register  
>[! definition]
>**SR** Contains **bits** that's used as **logical flags**. For example, there are flags like overflow, division by zero, which *when the corresponding event happens*, will be *set to 1* (true).  


### ACC | Accumulator  
>[! definition]
>An **Acc** is a **general purpose** register. It is used to *store* **single value** at **one time.** Usually stored for ALU to execute instructions.
>

<br><br>

# 5.02 Fetch-Execute Cycle  
> A great [simulator](https://www.peterhigginson.co.uk/lmc) for explaining the Cycle  
## Overview  
>[! definition]
>A complete F-E cycle contains:
>1. Fetch
>2. Decode
>3. Execute
>
>

## Fetch
>[! definition]
>Fetch is like initializing all the variables. That's why PC incremented by 1 in the end of the fetch cycle, not after the decoding and executing cycles, as PC's value will also take in part of both cycles.  
>
>The complete steps of **Fetch**/*Reading* data:  
>1. CU loads value of PC to MAR  
>2. MAR transfer the address to read to Memory through Address Bus
>3. CU sends a read signal though Control Bus to Memory
>4. Memory returns value stored in the address back through Data Bus into MDR.  
>5. Value of MDR is transfered to CIR
>6. PC is incremented by 1 (If the end of fetch)  

## Decode
>[! definition]
>Instruction stored in CIR is transfered to the circuitry of CU. CU will then send signals to appropriate components so Execute Stage can begin.

## Execute 
>[! definition]
>Discussed in depth in Chapter 6. Below is for thus who curious how writing of data works.
>The complete steps of **Execute**-*Writing* data:  
>1. CU loads value of Register(AddressToWrite) to MAR  
>2. CU loads value of Register(DataToWrite) to MDR  
>3. MAR transfer the address to write from through Address Bus, MDR transfer the data to write through Data Bus.  
>4. CU sends a write signal though Control Bus to Memory


>[! tk] 
>**Address** and **Data** itself are *seperate things*. When *R/W*, you need *both* **Address** and **Data**  

## Register transfer notation
>[! definition]
>- Things inside [] are the value stored inside that register
>- Things inside  are the value stored in the address that's stored by the register.
>- No [] means the register itself.

Use this example of F-E cycle (in registr transfer notation) to understand this method of notation.  
![Pasted image 20240318222101.png](/img/user/Attachments/Pasted%20image%2020240318222101.png)  


<br>



<br>




# 5.03 System Bus  
## Overview  
>[! definition]
>**Buses** are **lines** which transmite data.  
>Each **line** carries a *single* **bit**.  
>**System Bus** connects **CPU** to **memory** and **I/O System**.

## Control bus  
>[! definition]
>- *Transmit* **timing signal** from **CU** *to memory and I/O system* or **the opposite way around**. ==Ensures the timing signal is synchronised.==
>- **Biderectional** bus

## Address bus  
>[! definition]  
>- Only used to *carry* **address** that is *loaded* *by* **MAR**
>- **Unidirectional**, only **one way**, from **MAR** *to Memory and I/O system*.  
>
>It is important to note that Address bus **only carries address**, ==it doesn not carry data.==

## Data bus  
>[! definition]
>- *Carry* **data** from **CPU** *to Memory or I/O system* or *carrying data to* **CPU**  
>- **Biderectional** bus

<br>
<br>


# 5.04 Factor contributing to System Performance
## Overclock
*increase* **clock speed** -> *more* **cycle** *per time* -> *more* **calculation** **done** *per time*
## Bus Bandwidth
*Increase* **bus size/frequency** -> *quicker* *data transfer* between **CPU** and **Memory** -> *more* **calculation done** *per time*.
## Word Size
*Increase* the number of bits used by computer to represent a single unit of memory location -> *more* **data** **transfered** *per time* -> *more* **calculation** **done** *per time*. 
## CPU Cores
*Increase* **CPU cores count** -> *carry* out *more* **task** at the *same time* -> *higher* **multi-tasking** ability -> *more* **calculation** **done** *per time*. 
## Memory/Cache Memory Size
More data can be stored in Memory/Cache, more data have are able to be quickly accessed.

# 5.05 I/O ==Ports== (not devices)
## Ports and I/O devices 
>[! definition]
>- Each **I/O device** is *connected* to an interface called a **port**. 
>- Each **port** is *connected* to the *I/O or device* **controller**. 
>- This **controller** *handles* the **interaction** between the **CPU and an I/O device.**
### Internal ports / Internal devices
>[! definition]
>- **Port**: A port is internal if the device is internal  
>- **Device**: This term describes a **I/O device** *is* **integral part** of the **computer**  
>- They usually have a *better* **connection** and *more* **compatible** with the computer system. *Some* of them are **undetachable**.
### External ports / Peripheral devices
>[! definition]
>- **Port**: A port is external if the device is plug-and-play & uses USB ports
>- **Device**: This term describes a **I/O device** is plug-and-play & uses USB ports  
>- They providing *more* **flexibility** while sometimes *suffering* from **incompatibility** and *unsecure* **connection**.

## USB
#ComputerScience_Revision/P1 
>[! definition]
>A *standardised* **port** to *connect* **peripheral devices** to computer and *achieve* **plug-and-play**
>- Can *plug* up to **127** **devices**
>- Have *different* **types** of usb ports like type-A, type-B, type-C, thunderbolt, pd.

### how does a USB transfer data
#ComputerScience_Revision/P1
It transfers data 1 bit at a time and the transferring process can be synchronous or asynchronous.

## Multimedia Ports
**VGA**: only video, no audio  
**HDMI**: High-quality video including audio component.  


<br>  
<br>  

# 5.08 Interrupt Handling  
## Type of Interrupt  
>[! definition]
>Actually no clear definition of hardware and software interrupts. For easier understandind, I'll put up a few exampls of hardware and software interrupts.  
### Hardware Interrupt  
1. Printer jammed  
2. No ink/toner in printer  
3. Disk unable to read  

### Software Interrupt  
1. Fatal error in a program  
2. Insufficient memory for programs  
3. interrupt after F-E cycle  

## Interrupt Priority
### System Interrupt
These interrupts are generated to request attention from the CPU. They include:
- **Timer Interrupts**: Generated by the system timer to maintain system time and schedule tasks.
- **Hardware/Software Error Interrupts**: Triggered by hardware failures or errors, such as memory parity errors or overheating.
- **I/O Interrupts**: Issued by input/output devices like disk drives, network adapters, or keyboards to signal completion of operations or request service.
- **System Management Interrupts (SMIs)**: Reserved for critical system management tasks, such as power management or firmware updates. They typically have the highest priority.
### User Interrupt
These interrupts originate from user actions and typically have lower priority than system interrupts. Examples include:
- **Software Interrupts**: can be triggered by user interaction with the software
- **User Input Interrupts**: Generated by user actions, such as pressing keys on the keyboard or clicking the mouse.
## Interrupt handling through ISR
>[! definition]
>ISR is a part of the Operating System; a program to handle the interrupt.  
>
>The process of interrupt handling through ISR:   
>1. Contents inside PC and other registers are stored somewhere safe in memory.   
>2. ISR is initiated by loading its start address into the PC.  
>3. When ISR has been executed, another check is done to see if interrupt persists.   
>4. If interrupt presists, another round of ISR will begin.  
>5. If no further interrupts, the contents previously stored will load back and the program that was originaly running is resumed.  
