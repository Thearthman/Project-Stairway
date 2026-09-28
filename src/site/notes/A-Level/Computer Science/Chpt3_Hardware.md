---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt3_Hardware/"}
---

# 3.01 Catalog/Overview
## **Memory** | Data Storage  

| Category            | Closest to CPU to Furtherest | Transfer rate | Capacity & Size | Price   |
| ------------------- | ---------------------------- | ------------- | --------------- | ------- |
| Processor component | Register                     | highest       | smallest        | highest |
| Primary Storage     | Static RAM \| *Cache Memory* | higher        | smaller         | higher  |
| Primary Storage     | Dynamic RAM \| *Main Memory* | high          | small           | high    |
| Secondary Storage   | SSD                          | low           | large           | low     |
| Secondary Storage   | HDD                          | lower         | largest         | lower   |

![SCR-20240507-nxcs.png](/img/user/Attachments/SCR-20240507-nxcs.png)

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
## **Unique** **Features** of Embedded System:
These systems are *Single/Special-Purposed*, most only serve one *Single Function*  
They are *Intergraded* into the **Large System**.  
They are *Not easily modified.*  
**Other features:**  
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
> - Makes up the **main part** of the memory `(don't be confused with the Main Memory made up of DRAM)`  
> - Memory that can be *accessed* at **any** **location** *independently* of **previous location** that's used`(not like HDD which the R/W head has to go from previous location to the next location)` - *Direct-Access*  
> - **Mostly Volitile** - will lost data if swtiched off  
#### SRAM & DRAM  
**SRAM** | Static RAM  
- used for **Cache Memory** - The high speed portion of the memory.  
- Built from flip-flops so it's *does not need refresh*.
- ==But, **PER ACCESS**, consumes *More Power* than DRAM.== So, when *ACCESSED* at the **SAME RATE** as **DRAM**, It will consume More Power.  
   ==In **NORMAL CONDITION**, **SRAM** usually *consumes* **less**.==
- Shorter access time - *Quicker*. `(Made from Flip-Flops)`  
	
**DRAM** | Dynamic RAM  
- Used for **Main Memory**, DRAM is the most *common* type.  
- Built from capacitors so it *needs constant refresh*.  
- But, **PER ACCESS**,  consumes *Less Power* than SRAMs. ==In **NORMAL CONDITION,** **DUE TO REFRESHING**, DRAM usually *consumes* **more**.==
- Requires *fewer* **electronics per bit** stored - *Higher Storage Density*.  
- Less expensive to manufacture than SRAMs - *Cheaper*.


<br>

### ROM | Read-Only Memory  
>[! def]
> - Has same *direct-access* properties of RAM.  
> - Holds **boot-up sequence** & **basic input and output instructions** ([BIOS](/A-Level/Computer%20Science/Chpt3_Hardware/#bios-basic-input-output-system)).  
> - Preserves data after power off - *Non-Volatile*. **Permanent memory device**  

- **PROM | Programmable ROM**
	Can be only *programmed* **once** and never changed again.  
 - **EPROM | Erasable PROM**
	ROMs able to be *erased* and *reprogrammed* by **ultraviolet light**, need to remove from circuit.  
- **EEPROM |** ***Electrically*** **Erasable Programmable ROM**  
	ROMs able to be *erased* and *reprogrammed* by **electrical signal**, no need to remove from circuit.  
#### BIOS | Basic Input Output System 
BIOS performs essential tasks during the computer's *startup process*. 
- It *Initializes* and *tests* **hardware components**
- *Conducts* a **power-on self-test (POST)**
- *Provides* a **basic interface** between the operating system and the computer's hardware.
### Buffers
Buffer exist to *solve* for problem of **received data being overflown**. When the **rate of data entering** destination is *faster than* **it can receive**, an overflow occur. To solve this problem, a buffer is added so it first stores the data then transfers the data stored to the destination at the right speed.



<br><br>

# 3.04 Secondary Storage | Long Term Storage
## Magnetic | HDD  
>[! definition]  
>Usually in forms of a *magnetic* **disk**. Uses **states of** **magnetisation** as representation of 1 or 0. The R/W head reads or changes states of magnetisation.  
>- Usually *Cheaper* than SSD.
>- *Slower* **data access** compared to SSD. More **Latency**.  
>- Has better life span compared to SSD.
>- Can be recovered if only part of disk is damaged.
>**Note that**, on **HDD**:  
>- R/W head are on both side of the disk.  
>- There's multiple Disks  


![Pasted image 20231116145231.png|300](/img/user/Attachments/Pasted%20image%2020231116145231.png)  
**Formating of HDD**:   
Data is stored in *concentric* **tracks**. **Sector** is *a part of* a **track**.  
Overtime, the allocation of sectors can cause ==over-fragmentation== of sectors. Which can cause reading and writing speed to be slow and may cause data damage.
<br>

## Solid state (Semi-Conductor) | SSD  
>[! definition]
>Made up of NAND gates. Usually *Faster* than HDD.  
>*Greater* **storage density**.  
>More *Reliable* because they has more moving parts, less fragile, take less physical damage. **HOWEVER**, will have longivity problem.
>*Lower* **power** **Consumption**.  

<br>
## HDD vs SSD in terms of Longivity  
<!-- MISSING ASSET: Pasted image 20240507175623.png -->  

<br>

## Optical | CDs, DVDs, and Blu-ray Discs
>[! Definition]  
>Datas stored in **"pits"** and **"pumps"** on *a single spiral tracks* on the disk, where they represent 0 and 1. The laser reflects from the pits, back into the opti-electronic sensor.   
>
>CD:    
>- Red laser - highest wavelength  
>- The smallest, only one reflective layer.  
>
>DVD:    
>- Red laser - smaller wavelength  
>- Two layers - Dual Layering  
>- Store more than CD  
>
>Blu-ray  
>- Blue laser - smallest wavelength **->** less distance between tracks  
>- Single layer  
>- Store more than DVD  

### Reading Process: 
- The optical disc has one spiral track running from the inner extreme of the surface to the outer edge.   
- During operation, the disc spins.   
- Simultaneously the laser moves across ensuring that it is continuously focused on the spiral track.  
- The track on the surface of the disc has what are referred to as ‘pits’ and ‘lands’.  
- The laser beam is reflected from the surface of the disc.  
- The difference between the reflection from a pit compared to that from a land can be detected.  
- This difference in the intensity of the light the detector receives can be interpreted as either a 1 or a  0 to allow a binary code to be read from the disc.  
### Dual Layering
Dual layering of reflective layer as shown. 
![Pasted image 20231116215508.png](/img/user/Attachments/Pasted%20image%2020231116215508.png)
### Birefringence
When light is refracted into two separate beams causing reading error due to dual layering.

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
- 5 layers
- Uses polarisation to change brightness, blocking lights to achieve darker color.
## OLED
![Pasted image 20240318185558.png](/img/user/Attachments/Pasted%20image%2020240318185558.png)
When an electric field is applied to the electrodes, they give off light.
- No backlight is required.
- Able to achieve higher contrast, true black pixel.
### Virtual reality
The two eye-pieces, combined with the a fed paired images from the controlling system, will give out a 3D look.

## Printer
**Inkjet**:   
- uses resistor to heat up ink and ink is pushed/shoot out from pressure
- Vivid, good for color  

**Lazer**:   
- Uses laser to change charge distribution of the drum; the drum attracts toner. Then, toner is rolled onto a sheet of paper with charge. Then, the toner and paper are heated to fuse together. 
- precision, good for text.

**The steps of laser printing:**
![Pasted image 20240318153739.png](/img/user/Attachments/Pasted%20image%2020240318153739.png)
For, colored printing, the procedure is done multiple times to print each layer of color.

**The steps of inkjet printing**:  
if you need this reach out to me cause i'm too lazy writing this.  

## 3D Printer
### Printing process
![Pasted image 20240318185404.png](/img/user/Attachments/Pasted%20image%2020240318185404.png)

<br><br>

# 3.06 User Interaction devices
## Keyboard
Converting physical movements (contact of metal plates) to electric signal, i.e. the closing of the circuit. Then, the microcontroller detects the closing of the circuit *and where exactly did it happened*, compares the posisiton to the key value stored in the ROM chip. Then, communicates with the computer to signal a keypress.

## Screen
### Graphical user interface | GUI
GUIs provide user with a graphica icons representing control data input. This feature is even more useful with mouse, enhancing the efficiency.

### Touch screen
With modern touch screen, there are layers of touch-detecting layers beneath the surface of the screen. ==In both resistive and capacitive screen, a processor is used to calculate the position of touch.==  

**Resistive touch screen**  
-  Two layers of conductive material are placed under the screen with a thin spacing between them. The screen is not so rigid so when touch is applied, the two layers touches and a voltage devider is created. A microcontroller calculates the estimated position of touch.  

**Pros**:
 - Relatively inexpensive
 - Allows *not only bare fingers* (gloves, stylus)

 **Cons**:
 - *Visibility* is poor under strong lights
 - Only *Uni-touch* capability
 - Durability is not so good

**Capactive touch screen**    
- A circuit is placed beneath the screen with an array of capacitors. As fingers touch the glass screen, a capacitance change will happen in the circuit.     
### Inputing graphs  
A webcam containing a photosensitive camera sensor can be used to capture real-world image.  
![Pasted image 20240318160112.png](/img/user/Attachments/Pasted%20image%2020240318160112.png)  

<br>
<br>  

# 3.07 Input Output of Sound  
## Microphone working principle    
>[! definition]
>A microphone contains a diaphragm -- a flexible material/film, vibration to electricity mechanism, ADC circuit (optional), and amiplifier (optional).  

There are *two types* of **vibration to electricity mechanism**, one type is using **piezoelectric crystal** *another* type is using **condenser**.
Both of them will 
1. convert vibration to electrical signal
2. Then an ADC circuit ==(If included in microphone)== is used to convert the analogue signal to digital signal. 
3. Some microphone may include an amplifier to boost the electric signal.  

## Speaker working principle
>[! definition]
>A speaker contains a diaphragm, coil, permanent magnet, DAC (optional) and Amplifier (optional)
1. Digital data from computer transformed into analogue signal through DAC.
2. If an amplifier is present, it will boost the analogue signal to give stronger drive to the coil.
3. Analogue signal flows through a coil that's located above a permanent magnet.
4. The coil generates varying magnetic field which drives the diaphragm (which is connected to the coil) to vibrate and thus creating sound.
