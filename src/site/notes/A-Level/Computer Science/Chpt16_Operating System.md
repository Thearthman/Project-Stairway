---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt16_Operating System/"}
---

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
## 2.1 How Interpreter execute program without compiling

---
## 2.2 Stages in compilation of a program

---
## 2.3 Grammar expressed using syntax diagram or BNF notation

---
## 2.4 RPN's use in evaluation of expressions


# <u>*OLD NOTE*</u>

# 1. Resource Maxing
---

The method of maximizing resource involves three main part: CPU, Memory, and I/O system.
## CPU
>[! def]
>The utilisation of CPU involves scheduling of processes (which will be explained in detail later).

<br><br>
## Memory 
>[! def]

<br><br>
## I/O operation
>[! def]
> By using DMA controller, data exchange between I/O and CPU or Memory does not require CPU to handle the data transfer which frees up CPU time. 

<br><br>
<br><br>
<br><br>
# 2. UI and Hardware (How does it hide compexity of hardware)
---

## Command Line Interface | CLI
>[! def]
>Text based user interface which requires you to type in command-lines to interact with the program. 
<br><br>
## Graphical User Interface | GUI
>[! def]
>The interaction makes us of a pointing device, a mouse or touch-screen, where its location on screen will be shown by a cursor. It can click on icons or buttons on screen to trigger events (The event can be complex, containing I/O operation, Memory Allocation and Read/Write Operationgs). It also has several windows visible that each display one of the processes currently loaded. 
<br><br>
## Device Drivers
>It simplifies the interaction between the user and the peripheral devices, such as printers, keyboards. They allows seemless integration bewteen the computer and the peripheral devices. 

<br><br>
<br><br>
<br><br>
# 3. Process Management
---

## 3.1 Multitasking
>[! def]
>It allows the computer to carry out multiple **processes** at a time. These processes all share the same resources, which is assigned to them by the OS. Scheduling is used to decide which process should be carreid out. 
>
>>[! def] Process
>**Process**: A program that has started to be executed

### How Multitasking is implemented by OS
>[! def]
>- <u>Processor time/CPU(hardwares)</u> are <u>shared</u> between tasks 
>- <u>Scheduling</u> is used to decide on the processes to be carried out to ensure multi-tasking operates correctly
>- One task of a <u>higher priority</u> can <u>interrupt</u> another task that is currently running

<br><br>
## 3.2 States
### "New" State | not on syllabus
> When a new process is created, A PCB is created and assigned to it. 
##### Process Control Block | PCB (not on syllabus)
>A complex data structure containing all data relevant to the running of a process, for example, its states(ready, running, blocked) or memory locations. 
### Ready State
>[! def]
>When a new process is created, it is put into the Ready Queue. A Dispatcher checks if the CPU is free. If it is free, the Dispatcher will give the first process in the Ready Queue access to CPU, and it changes to Running State.
### Running State
>[! def]
> When a processes takes up CPU time. When it is halted by a interrupt, it is changes back to Ready State.
### Blocked/Waiting State
>[! def]
>When a process can't progress until some action has happened(most likely I/O operation), it is put into Blocked State. When that event is complete, the process is notified and changes to Ready State.
### "Terminated" State | not on syllabus
> When a process in the running state completes execution, it changes to terminated state. 

<br><br>
## 3.3 Scheduling Algorithm
### Why we need Scheduling
>[! def]
>Scheduling is used to ensure the best use of computer resources in multitasking by controlling processes' access to CPU and Main Memory. There are three levels of scheduling, which is explained below. 
>
>High-Level Scheduling:  
>High-level scheduling control the moving of programs from disk to main memory.  
>
>Mid-Level Scheduling:  
>Mid-level scheduling controls the moving of programs from main memory to disk, which mostly is due to memory overcrowding.  
>
>Low-Level Scheduling:  
>Low-Level Scheduling controls the access to CPU for program(process) when it is in main memory.   

### Preemptive - Can be interrupted during execution, stops after a limited time
###### ***Round Robin***
> It sets limited amout of time, called **time-slice**, and all processes can only run this amount of time before moving to ready state, and the next process starts to run until its time-slice is over. This repeats until all processes have been ran.

>[! ben]
> It is fair to all tasks, regardless of their priority. Each process uses the same time-slice(execution time) and no process monopolizes the resource for an extended period of time. 
### Non-Preemptive - Cannot be interrupted during execution, stops after execution time
###### ***First Come First Serve | FCFS***  
> All processes in the **ready state** form a queue. The first that gets in to the queue will run first, while the last runs the last. The current process continues execution until ti must move to the suspended state(where it is swapped to disk due to insufficient main memory)  

>[! ben]
> - Simplicity: It's easy to understand and implement. 
> - Fairness: Processes are executed in the order they arrive, without favoritism. 
> - No starvation: Every process eventually gets CPU time (assuming processes terminate)

> **Cons:**   
> - Not Responsive: Will stay on the first task until the it is finished, regardless of its run-time. 

---
####### ***Shortest Job First |  SJF***
> Always give the processor to the process with the shortest estimated run-time.

>[! ben]
>- Efficient: Maximizes the system throughput by reducing the average waiting time. 

>**Cons**:  
> Not Fair (for longer processes): Might finish the heavy process that require long run-time last, which can sometimes be the important task to do first. 

---
####### ***Shortest Remaining Time First | SRTF***  
> Always give the process to the process with the shortest estimated remaining run time.   

>[! ben]
> - Responsive: Minimizes the waiting time for processes by selecting ones with the shortest remaining time. Processes will be passing through faster in this schema.   

>**Cons**:  
>Not Fair (for longer process): It can starve the longer processes and cause them to be perpetually postponed. 
---

<br><br>
## 3.4 Interrupt and Kernel
### Interrupt
> A **signal** from a software **source** or hardware device seeking the **attention** **of** **the** **processer**
### Kernel
> Kernel is the core interface between application/processes and hardware (I/O, Memory, and Devices). It provides a unified and standard method for application to access and manage hardware resource efficiently). It manages applications/processes' access to the hardware and avoid unneccessary usage of hardware. 

### How kernel is involved in handling interrupts
>[! def]
>When an interrupt is received, the system enters kernel mode, saving the current process on the kernel stack and enabling kernel instructions. Then, the kernel consults a interrupt dispatch table, which will give out the address of the appropriate low-level routine to handle the interrupt. The low-level routine is then ran, and once completed, the interrupted process is restored from the kernel stack and the interrupt is cleared. 
### How handling interrupts is used in managing low-level scheduling 
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


<br><br>
<br><br>
<br><br>
# 4. Memory Management
---

## 4.1 Paging
>[! def]
>Paging divides the physical memory **(RAM)** into *fixed-size* blocks called **frames** and the process (size) into blocks of *same size* called **pages**. **Frames** and **pages** are the same size, so a page and fit perfect into a frame when allocating. This simplifies the process of memory allocation and mapping between logical and physical memory (using a **page-table**). 

>**Benefits**:
>1. Easy Mapping: The operating system uses a page table to map logical pages to physical frames. Because the sizes are the same, the mapping process is straightforward.
>2. No External Fragmentation `(Def in below)`: Fixed-size pages prevent external fragmentation (which occurs when there are small gaps of free memory that are too small to use). Instead, internal fragmentation can occur if a page doesn’t completely fill a frame, but it’s generally more manageable.
>
>**Cons**:
>1. Internal Fragmentation, see below.
>

### Internal Fragmentation
> When a process requires memory, the operating system allocates a fixed-sized block (e.g., a page or a partition) to the process. If the process does not fully utilize the block, the remaining unused portion leads to internal fragmentation. For example, if the system uses 4KB pages, and a process needs 6KB, it will be allocated two pages (8KB total). However, 2KB will be wasted since the process only needs 6KB.
> 
> **Wasted Memory**: The unused portions within each allocated block accumulate, leading to wasted memory, which could otherwise be used by other processes.  
> **Inefficiency**: Even though memory is allocated to a process, not all of it is actually usable, reducing the overall efficiency of memory usage.

### External Fragmentation
> Similar to the above but the part that's unused is outside of the allocated process, instead of the above which has unused space insided the allocated memory. 

<br><br>
## 4.2 Virtual Memory
>[! def]
> It is used when the process to run requires more than the physical RAM. The additional pages are stored on Secondary Storage. When those processes are changed to ready state, they are loaded back to memory. 
### Page-Faults
>Everytime when accessing a page that's stored in virtual memory, page faults occurs and the page that's in virtual memory is swapped to a selected memory in primary memory, that previous memory is swapped to virtual memory.
### Pages Swapping
>[! def]
> When a page-fault occurs, i.e., an instruction is met that is in a page that's not currently loaded, this new page needs to swap with a existing page in the memory. There are multiple ways for the Memory Manager to choose a page to swap with.   
> 1. FIFO - requires tracking the time stamp entered  
>    When more pages are added, the important pages are treated like normal pages, which leads to more page faults (Belady's Anomoly)  
> 2. Optimal Page Replacement - looks forward in time to see which page can be replaced (impossible)  
> 3. Least Recently Used - requires tracking of the last accessed time  
### Disk Thrashing
>[! def] 
>Disk Thrashing can occur when page-fault happens so often that there is extensive effort spend on moving in and out the pages and the CPU had to wait in idle most of the time. This can lead to performance degradation. 

<br><br>
## 4.3 Segmentation
>[! def]
>The large processes are divided into **segments**. Each segment is loaded into a dynamic partition in memory. There exist a segment map table which stores the segment number, segment size, and segment offset(starting position).  
>**Segments**: are variable-sized blocks into which the logical memory is split up. 

##### Partition
>Partition moves the whole process into one block of memory called partition. 
>
>Benefits
>1. Consequtive sections for processs, thus better performance. 
>2. Segmentation can be controlled by user, user have control.
>3. Less vulnerable to 

<br><br>
## 4.4 Difference in Partition and Segmentation
>[! def]
>![Pasted image 20241112193244.png](/img/user/Attachments/Pasted%20image%2020241112193244.png)

<br><br>
<br><br>
<br><br>
# 5. Translation Software
## 5.1 Interpreter
### HOW Execute program without producing a translated version.
>[! def]
> A Interpreter is capble of running a source code without compiling it. This is because it reads and executes the program line by line, directly interpreting each instruction in the source code at runtime. The interpreter first read the line, checks if the syntax if fine. Then, it either interprets the code and executes it, or reports the error. 
> ![Pasted image 20241112203437.png|500](/img/user/Attachments/Pasted%20image%2020241112203437.png)

<br><br>
## 5.2 Stages in Compilation
### Lexical Analysis
>[! def]
> In this stage, several things are done  
>1. Remove any whitespace.  
>2. Remove any comment statements.  
>3. Check for obvious errors in the use of identifier names (length within certain limit)  
>4. Replace each language keyword with its token using the **keyword** table.   
>5. All identifier names are replaced in the source code by a pointer to an address in memory which links to it in the **symbol** table. 

##### Keyword table
>[! def]
>It lists all **language keywords**, such as IF, ELSE, CLASS with a **token** that represent each keyword. 

##### Symbol table
>[! def]
>It contains the identifier it is refering to, and the value, data type of it. It also contains the constants used in the program, such as `<5>;<"word">;6.9;<'a'> ... `   
>For bigger table, the symbol table will be constructed as a [Hash](/A-Level/Computer%20Science/Chpt13_Data%20Representation/#2-3-hashing-algorithm) table with a hash key generated for each entry.  

---

### Syntax Analysis
>[! def]
>Syntax checking esttablishes if a sequence of input characters matches the **language grammar rules**. 

##### Dynamix syntax checking
>[! def]
>This is provided by the IDE and it will go through the code in real-time and label error expression that does not match the language grammar rule.

##### Syntax analyser
>[! def]
>Found inside a compiler, this uses **language grammar rules** to identify remaining errors in the source code after being checked by IDE.
---

### Code Generation 
>[! def]
>This process make reference to the information stored in symbol table and to code contained in various program libraries. Once the source code is compiled and no errors are found, an object file or executable file is generated.  
>The usual process goes like this:
>1. 

---

### Optimisation
>[! def]
>This process is the final stage where final changes to the program is applied to make the code execute in less time or use less memory for the final object code.


<br><br>
## 5.3 Syntax Diagram
>[! def]
>It describes one structure of the programming language grammar. ==It is always read from left to right==    
>![Pasted image 20241113202953.png](/img/user/Attachments/Pasted%20image%2020241113202953.png)


<br><br>
## 5.4 Backus-Near Form | BNF
>[! def]
>It is a meta-language that is used to describe syntax and composition of statement.

>[! ep] 
> A syntax element is enclosed between `< >`  
>`<digit> ::= 0 | 1 | 2 | 3 | 4 | 5`  
>`<letter> ::= a | b | c | d | e |`  
>`<string> ::= <letter><letter><letter>`  
>`<number> ::= <digit><digit><digit>`  
>`<idnumber> ::= <string><number>`  


<br><br>
## 5.5 Reverse Polish Notation | RPN (postfix)
### Tranlating infix to RPN 
>[! exp]
>1. Construct a stack and a output.  
>2. Start from the first element of the RPN, if the element is a operand or a bracket, move it to the stack, if it is a number, move it to output.  
>3. Continue step two until encountering another operand, compare the priority of the operand in the stack and the one just found, if the new one has lower priority, output the existing operand and put the new operand into the stack; if the new one has higher priority, just stack it on top of the existing one. In case of encountering brackets, when they closes up, output whatever that's inside of them.   
>4. When you have finished putting things into the stack, output everything in the stack from top to buttom.  

### Translating RPN to infix notation 
>[! exp]
>1. Construct a stack.  
>2. Start from the first element of the infix, put the numbers into the stack. If encountring a operand, and there is more or two numbers already in the stack, output the bottom number first, then the operand, then the top number.   
>3. Continue step 2.  

>[! ben]
> 1. provides an unambiguous method of representing an expression  
> 2. never requires brackets  
> 3. processed from left to right  
> 4. no rules of precedence  
> 5. Easily converted to a binary tree or stack  
