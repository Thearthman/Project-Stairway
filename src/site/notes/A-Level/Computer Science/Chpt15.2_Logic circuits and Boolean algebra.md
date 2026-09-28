---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt15.2_Logic circuits and Boolean algebra/"}
---

>[! quote] [Pasted image 20241021200154.png](/img/user/Attachments/Pasted%20image%2020241021200154.png)
># Boolean Algebra and Logic Circuits
>1. Produce truth table for logic circuit including half adder and full adders
>	1. Include logic gates with more than two inputs
>2. Understand flip-flop (SR,JK)
>	1. Draw logic circuit and derive a truth table for a flip-flop
>	2. Understand flip-flop's role as storage elements
>3. Understand Boolean Algebra
>	1. Understand and Use De Morgan's laws
>	2. Simplify a logic circuit/expression using Boolean algebra
>4. Understand Karnaugh maps
>	1. Understand of the benefits of K-maps 
>	2. Solve logic problem using K-maps

# 2.1 Half/Full Adder
## Half Adder
>[! def]
>With two input `A`,`B` and output `Sum`,`Carry`. It consist of an AND gate and a XOR gate.   

## Full Adder
>[! def]
>With three input `A`, `B`, `Carry` and output `Sum`,`Carry`. It consist of two Half Adder and one OR gate for `Carry`out.  
>![SCR-20241021-rsbo.png](/img/user/Attachments/SCR-20241021-rsbo.png)  

# 2.2 Flip-Flop
## SR Flip-Flop
>[! def]
>Consist of two NOR/NAND `(below is example for NOR)` gates. The S is set input, and R is reset input.  
>==S=1== and R=0 converts to ==set state==;  
>S=0 and ==R=1== converts to ==unset state==.  
>![Pasted image 20241023143817.png](/img/user/Attachments/Pasted%20image%2020241023143817.png)
>![Pasted image 20241021203233.png](/img/user/Attachments/Pasted%20image%2020241021203233.png)  
>
>***Use Case***`(reason to build this flip-flop)`:    
>SR flip-flop can be used as a storage device for 1 bit and therefore could be used as a component in RAM because a value is stored but can be altered. 
>
>***Disadvantages***:  
>The truth table does not contain rows for **R=1 and S=1** because this *leads to* an **invalid state** with both Q and Q’ having value 0. Because of this the circuit must be protected from receiving an input signal on R and S simultaneously.

>[! tk]
>For **NAND** gate SR flip-flops, *set* is done with **s=0, r=1**; and *unset* is done with **S=1, R=1**.

## JK Flip-Flop
>[! def]
>Consist of two 3-way AND gate and two normal AND gate.  **J** input is a *set* input; **K** is a *clear* input.  
>![Pasted image 20241023143552.png](/img/user/Attachments/Pasted%20image%2020241023143552.png)
>![Pasted image 20241023143706.png](/img/user/Attachments/Pasted%20image%2020241023143706.png)
>***Advantages***`(reason to build this new flip-flop)`:  
>1. JK flip-flop has a clock input and it helps synchronising the inputs, *preventing* the potential for the circuit to **arrive in uncertain state**.  
>2. JK flip-flop a **more reliable** device because there is **no combination of input states** that *leave uncertainty* as to which values are stored.

# 2.3 Boolean Algebra
## Basic rules
>[! def]
>![SCR-20241021-mstc.png](/img/user/Attachments/SCR-20241021-mstc.png)

## K-maps
>[! def]
>![Pasted image 20241023151034.png](/img/user/Attachments/Pasted%20image%2020241023151034.png)
>1. Identify the groups (in 2,4,8 cells only)
>2. Find the unchanged input, add to the expression using OR(+)

# 2.4 Karnaugh maps
