---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt6_Assembly Language and Machine Code/"}
---

>Assembly code is a low level language, depends on machines it can differ
>Assembly code is not the same as machine code.
# 6.01 Machine Code
>[! definition]
>The *only* language that **CPU** understands. 
>Each instruction contains an **opcode** and up to three **operands**. But you *must have one* **operand**.
>Machine codes are different between processors

## Instruction | Opecode & Operand
>[! definition]
>**Opcode** takes up the *first* *part* of the code, then is *followed* by **operand**.


## Decode in F-E Cycle in detail
>[! definition]
>1. CU first checks the opecode to see what action it defines.    
>   For example for a 24 bit instruction:   
>   `CU <- [CIR[23:16]]` from the 23(highest) bit to the 16(lowest) 
>2. Then CU identifies the operand. `CU <- [CIR[15:0]]`  



# 6.02 Introduction to Assembly Language
>[! definition]
>for the sake of *simplifying* **machine** code, assembly code is created.   
>*Each* Assembly code **instruction** *contains* a **mnemonic**(symbolic *abbreviation* for **opcode**) , a **character**(*representation* for **operand**).   
>Assembly Language is also different between processors.
>
>>[! tk] 
>>**Assembly Code** ***is not*** **Machine Code**

## Assembler
>[! definition]
>Assembler are translation program which helps to translate assmebly language into machine codes.
>It allows the code to have features below:
>- **Comments**: essential for understanding assembly code; things starting with ";" in below.  
>- **Mnemonic**: symbolic name for constans: easier to code.   
>- **labeling**: give name for addresses.   
>- **Macro**: like a function that can be used more than once.    
>- **Directives**: how things should be constructed. The special direction for asmmbler to explain what part of the code is what meant for what specific functionality,

## Example Assembly Code
```Opcode
.DATA                   ; <Directive> for the beginning of data segment

; Symbolic names for constants
CONSTANT_VALUE1 DW 5    ; Define a word-sized constant with value 5
CONSTANT_VALUE2 DW 10   ; Define another constant with value 10

result DW ?             ; Define a word for storing the result

.CODE                   ; Directive for the beginning of code segment

; <Macro> definition
MACRO AddTwoNumbers
    MOV AX, CONSTANT_VALUE1  ; Move the first constant into AX
    ADD AX, CONSTANT_VALUE2  ; Add the second constant to AX
    MOV [result], AX         ; Store the result in 'result'
ENDM

; Main program <label>
main PROC
    AddTwoNumbers       ; Call the macro to perform addition

    ; ... (other program code if necessary)

    main ENDP

END main                ; End of the assembly program

```


# 6.03 Addressing
## Addressing Method 
>[! definition]
> ==The addressing **methods** to *refer* **an address/memory locations**== (`<address>` in addressing modes). There are three methods of addressing an assembly code could be written in.  
> 
> 1. **Symbolic Addressing**: Is to use Symbolic Abbreviation for the actual address.
> 2. **Absolute Addressing**: Is to use Absolute Location of the address, in forms of numbers.
> 3. **Relative Addressing**: is to use Relative Reference to the **Base Address**, in forms of Base Address (Usually in Base register [BR]) + numbers. *Good for moving codes in memory, relocatable, and all locations can be referred as BR + Offset*.

## Addressing Modes  
>[! definition]
>The Addressing Modes *defines* **relation** *between* the **input** value **and** the **actual value** you are trying to get.  
>==They are different ways to define location **to get data**.==
>1. Immediate: The **operand value is used**.
>2. Direct: The **operand value** is the **address** *of the value* *to use*.
>3. Indirect: The **operand value** is and **address** that *holds the* **address** *which has the value* *to be used*.
>4. Indexed: The **operand value** is *combined* with **IX value** to get the **address** of the *value to be used*.

# 6.04 Two-pass Assembler  
Before translation can be done:  
1. remove comments  
2. replace macro with corresponding instructions  
3. remove and store position of directives.  

First pass:  
1. the code is read line by line 
2. creates symbol table![Pasted image 20240319102636.png](/img/user/Attachments/Pasted%20image%2020240319102636.png)  
3.   error detection, syntax, incorrect use of operand, semantic error.

Second pass:
1. Replace symbolic name with offset/actual address using symbol table
2. generates machine code (using lookup table)
3. final error checking

# 6.05 Instructions  
## Data movements  

| Opcode | Operand                                                         | Explanation                                                         |
| ------ | --------------------------------------------------------------- | ------------------------------------------------------------------- |
| LDM    | `#n` (denary value)                                             | *Load* whatever is in operand to **ACC**                            |
| LDR    | `#n`                                                            | *Load* whatever is in operand to **IX**                             |
| LDD    | `<address>` (Memory location: could be **number** or **label**) | *Load* *content* in the `<address>` to **ACC**                      |
| LDI    | `<address>` (*same as above*, could be number or label)         | *Load* *content* in `<address>` to **ACC**                          |
| LDX    | `<address>` (*same as above*, could be number or label)         | *Load* *content* in `<address>+number in index register` to **ACC** |
| MOV    | `<register>` (It's a location of a **Register**)                | *Move* *contents* of **ACC** to given **register**                  |
| STO    | `<address>` (*same* *as* *LDI* *and* *LDX*)                     | *Store* *contents* of **ACC** to given **address**                  |
## Input and Output
| Opcode | Operand   | Explanation                                           |
| ------ | --------- | ----------------------------------------------------- |
| IN     | character | Store the ASCII value of the character typed into ACC |
| OUT    | ASCII     | Output the character of the corresponding ASCII value |

## Comparisons and Jumps

| Opcode | Operand                                                 | Explanation                                                                                                |
| ------ | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| JMP    | `<address>`                                             | *Jump* to the given **address**                                                                            |
| CMP    | `#n` *or* `<address>`                                   | *Compare* the contents of **ACC** with contents of `<address>`  *or* `#n`                                  |
| CMI    | `<address>` (*same as above*, could be number or label) | *Compare* the contents of the **ACC** with contents of the address which is the content of the `<address>` |
| JPE    | `<address>` (*same as above*, could be number or label) | This is usually after a compare instruction, jump to `<address>` if comparision is True.                   |
| JPN    | `<register>` (It's a location of a **Register**)        | This is usually after a compare instruction, jump to `<address>` if comparision is False.                  |

## Arithmetic Operation 
| Opcode | Operand               | Explanation                                         |
| ------ | --------------------- | --------------------------------------------------- |
| CMP    | `#n` *or* `<address>` | Add the `#n` or content of `<address>` to ACC       |
| SUB    | `#n` *or* `<address>` | Substract the `#n` or content of `<address>` to ACC |
| INC    | `<register>`          | Add 1 to the contents of the register               |
| DEC    | `<register>`          | Substract 1 from the contents of the register       |

# 6.06 Bit Maniputation
>[! definition]
>I feel like the book haven't covered enough for a more fundamental understanding of bit maniputation . So, I made a whole section talking about it.
## Logical shift 

A logical right shift is the converse to the left shift. Rather than moving bits to the left, they simply move to the right. For example, shifting the number 12:

```
00000000 00000000 00000000 00001100
```

to the right by one position (`12 >>> 1`) will get back our original 6:

```
00000000 00000000 00000000 00000110
```

So we see that *shifting to the right* is **equivalent to** *division by powers of 2*.
The digit that gets shifted "off the end" is lost. ==It does not wrap around.==
### Lost bits are gone

However, a **logical shift** *cannot reclaim* **"lost" bits**. For example, if we logical shift this pattern:

```
00111000 00000000 00000000 00000110
```

to the left 4 positions (`939,524,102 << 4`), we get 2,147,483,744:

```
10000000 00000000 00000000 01100000
```

and then shifting back (`(939,524,102 << 4) >>> 4`) we get 134,217,734:

```
00001000 00000000 00000000 00000110
```

We *cannot get back our original value* once we have lost bits.

---
## Cyclic shift
Cyclic shift is logical shift but ==wraps the lost bit==. 
For example, if we shift this pattern:

```
[0011]1000 00000000 00000000 00000110
```

to the left 4 positions (`939,524,102 << 4`), we get:

```
10000000 00000000 00000000 0110[0011]
```

we can see that the lost bits are wrapped to the other end of the bits.

--- 
## Arithmetic shift

The arithmetic right shift is like logical right shift, except instead of padding with zero, *it pads with the most significant bit*. This is because the most significant bit is the _sign_ bit: the bit that distinguishes positive and negative numbers.  
==By padding with the most significant bit, the arithmetic right shift is *sign-preserving*.==
![Pasted image 20240508111904.png](/img/user/Attachments/Pasted%20image%2020240508111904.png)  
For example, if we interpret this bit pattern as a negative number:

```
10000000 00000000 00000000 01100000
```

we have the number -2,147,483,552. Shifting this to the right 4 positions with the arithmetic shift (-2,147,483,552 >> 4) would give us:

```x
11111000 00000000 00000000 00000110
```

or the number -134,217,722.

So we see that we have preserved the sign of our negative numbers by using the arithmetic right shift, rather than the logical right shift. And once again, we see that we are performing division by powers of 2.

## Bitwise logic operation
>[! definition]
>Bitwise operation: perform operation as if two bit inputs are boolean values (and actually they are boolean value). They can be used to filter data. 


| opcode | operand               | explaination                                                                       |
| ------ | --------------------- | ---------------------------------------------------------------------------------- |
| AND    | `#Bn` or `<address>`  | Bitwise AND operation between ACC and binary number `n` or contents of `<address>` |
| XOR    | `#Bn` or `<address>`  | Bitwise XOR operation between ACC and binary number `n` or contents of `<address>` |
| OR     | `#Bn` or  `<address>` | Bitwise OR operation between ACC and binary number `n` or contents of `<address>`  |


