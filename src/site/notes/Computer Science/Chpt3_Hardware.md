---
{"dg-publish":true,"permalink":"/Computer Science/Chpt3_Hardware/"}
---

# 3.01 Hardware Overview
## Data Storage  
|Closest to CPU to Furtherest| Transfer rate | Capacity & Size | Price |
| ----------- | ------------- | -------- | ----- |
| Register    |       highest        |     smallest     |   highest    |
| Static RAM  |        higher       |   smaller       |   higher    |
| Dynamic RAM |       high        |     small     |   high    |
| SSD         |       low        |    large      |   low    |
| HHD          |       lower        |     largest     |    lower   |

## Data Output  
Examples:  
- Screen Display  
- Hardcopy using a printer or plotter  
- Virtual headset display  
- Speaker  
 . . . etc  
## Data Input  
Examples:  
- Keyboard  
- Touch screen  
- Game controller  
- Scanner  
- Microphone  
 . . . etc  

<br><br>
# 3.02 Embedded System
>[! def]
>It must contain:
>1. **Processor**  
>2. **Memory**  
>3. **I/O Capability**  
>
>>[! tk] **Microcontroller**  
>>is when all things are *constructed* on *one* **chip**.  
## **Features** of Embedded System:
These systems are *Single/Special-Purposed*, most only serve one *Single Function*.  
They are *Intergraded* into the **Large System**.  
They are *Not easily modified.*  
`Consumes little power`  
`Relatively low cost to make`  
`Fast reaction to changing input`  
`Harder to protect against attacks`   
`Difficult to upgrade`

<br><br>

# 3.03 Primary Storage
> Primary Storage is accessed directly by CPU.   

### Registers 
Registers have the highest r/w speed. They are usually inside CPU providing high-speed temporary storage. Build from Flip-Flops.

<br>

### RAM | Random Access Memory
> [!def] 
> Makes up the **main part** of the memory `(don't be confused with the Main Memory made up of DRAM)`  
> Memory that can be *accessed* at **any** **location** *independently* of **previous location** that's used`(not like HDD which the R/W head has to go from previous location to the next location)` - *Direct-Access*  
> **Mostly Volitile** - will lost data if swtiched off  
#### SRAM & DRAM  
**SRAM** | Static RAM  
	used for **Cache Memory** - The high speed portion of the memory.  
	Built from flip-flops so it's **Non-Volitile**.  
	Shorter access time - *Quicker*. `(Made from Flip-Flops)`  
	
**DRAM** | Dynamic RAM  
	used for **Main Memory**, DRAM is the most *common* type.  
	Built from capacitors so it's **Volitile**.  
	~~But, consumes *Less Power* than SRAMs.~~  
	Requires fewer electronics per bit stored - *Higher Storage Density*.  
	Less expensive to manufacture than SRAMs - *Cheaper*.


<br>

### ROM | Read-Only Memory  
>[! def]
> Has same *direct-access* properties of RAM.  
> Holds **boot-up sequence** & **basic input and output instructions** ([[#BIOS Basic Input Output System|BIOS]]).  
> Preserves data after power off - *Non-Volatile*. **Permanent memory device**  

- **PROM | Programmable ROM**
	Can be only *programmed* **once** and never changed again.  
 - **EPROM | Erasable PROM**
	ROMs able to be *erased* and *reprogrammed* by **ultraviolet light**, need to remove from circuit.  
- **EEPROM | Electrically Erasable Programmable ROM**  
	ROMs able to be *erased* and *reprogrammed* by **electrical signal**, no need to remove from circuit.  
#### BIOS | Basic Input Output System 
BIOS performs essential tasks during the computer's startup process. It initializes and tests hardware components, conducts a power-on self-test (POST), and provides a basic interface between the operating system and the computer's hardware.



<br><br>

# 3.04 Secondary Storage | Long Term Storage
## Magnetic | HDD  
>[! definition]  
>Usually in forms of a *magnetic* **disk**. Uses **states of** **magnetisation** as representation of 1 or 0. The R/W head reads or changes states of magnetisation.  
>Usually *Cheaper* than SSD.
>*Slower* **data access** compared to SSD. More **Latency**.  
>**Note that**, on **HDD**:  
>- R/W head are on both side of the disk.  
>- There's multiple Disks  

![Pasted image 20231116145231.png|300](/img/user/Attachments/Pasted%20image%2020231116145231.png)
**Formating of HDD**:   
Data is stored in *concentric* tracks. Sector is a part of a track.  
Overtime, the allocation of sectors can cause over-fragmentation of sectors.  

<br>

## Solid state (Semi-Conductor) | SSD  
>[! definition]
>Made up of NAND gates. Usually *Faster* than HDD.  
>*Greater* **storage density**.  
>More *Reliable*.  
>*Lower* **power** **Consumption**.  

<br>

## Optical | CDs, DVDs, and Blu-ray Discs
>[! Definition]  
>Datas stored in **"pits"** and **"pumps"** on spiral tracks on the disk, where they represent 0 and 1. The laser reflects from the pits, back into the opto-electronic sensor. 

### Reading Process: 
- The optical disc has one spiral track running from the inner extreme of the surface to the outer edge.   
- During operation, the disc spins.   
- Simultaneously the laser moves across ensuring that it is continuously focused on the spiral track.  
- The track on the surface of the disc has what are referred to as ‘pits’ and ‘lands’.  
- The laser beam is reflected from the surface of the disc.  
- The difference between the reflection from a pit compared to that from a land can be detected.  
- This difference in the intensity of the light the detector receives can be interpreted as either a 1 or a  0 to allow a binary code to be read from the disc.  
### DVD
Two layer of reflective layer as shown.
![Pasted image 20231116215508.png](/img/user/Attachments/Pasted%20image%2020231116215508.png)

<br>
<br>

# 3.05 Output Device  
## Screen
### CRT
>[! Definition]
>Screen is covered with electron sensitive light emitting phosphor.  
>A Cathode Ray Tube shoots electrons ling by line, left to right to the screen.  
### LCD

![Pasted image 20231116220530.png](/img/user/Attachments/Pasted%20image%2020231116220530.png)

## Printer
Inkjet: uses resistor to heat up ink and ink is pushed/shoot out from pressure
	Vivid, good for color
Lazer: 
	precision, good for text.


