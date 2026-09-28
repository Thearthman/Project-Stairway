---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-1-introduction-full/"}
---

# Introduction to Python Programming

## Part I: Understanding Computers and Basic Concepts

### What is a Computer?
- A computer consists of **hardware** and **software**.
- **Hardware**: physical components such as the CPU, Main Memory (RAM), Storage Devices (hard drives/SSDs), Input Devices (keyboard, mouse), Output Devices (monitors, printers), Communication Devices (network interface cards).
- All components are connected by a bus.
- **Software**: instructions that control hardware to perform tasks.

### Bits and Bytes
- Information is stored as sequences of 0s and 1s (bits: binary digits).
- 8 bits = 1 **byte**.
- Storage is measured as:
  - 1 KB = 1,024 bytes
  - 1 MB = 1,024 KB = 1,024 × 1,024 bytes
  - 1 GB = 1,024 MB = 1,024 × 1,024 × 1,024 bytes
  - 1 TB = 1,024 GB = 1,024 × 1,024 × 1,024 × 1,024 bytes

### Memory
- Memory is an ordered sequence of bytes for program and data storage.
- Each byte has a **unique address**.
- Example (addresses and binary content encode characters and numbers).

---

## Part II: Problem Solving, Algorithms & Computer Programming Languages

### Problem Solving and Algorithms
- Computers solve real-world problems quickly, but only if given instructions.
- **Algorithm**: a step-by-step description of how to accomplish a task.
- Algorithms can be represented as **flowcharts**, **pseudocode**, or **programs**.

#### Example Problem
- Calculate the discount rate for retail store customers.

##### Pseudocode:
    READ Membership Card No.
    READ ItemPrice
    IF Membership Card No. is valid THEN
        price = ItemPrice * 0.8
    ELSE
        price = ItemPrice
    END IF

##### Python Example:
```python
def is_valid(num):
    valid = False
    if num > 0 and num <= 100:
        valid = True
    return valid

card_no = int(input("Enter the card number: "))
item_price = int(input("Enter the item price: "))
price = 0
if is_valid(card_no):
    price = item_price * 0.8
else:
    price = item_price
print("The price is", price)
```
- Note: Representation as code depends on the programming language chosen.

### Computer Programs and Programming
- **Computer program**: Step-by-step instructions to solve a problem (games, word processors, web browsers, etc).
- **Programming**: Design and implementation of programs.
- Learning to code is similar to learning a language but more systematic.

### Programming Languages
- A **programming language** defines formal instructions for computers.
- Two key concerns:
  1. Program Syntax (grammar)
  2. Program Logic (problem-solving accuracy)

### Categorization of Programming Languages
- **High-Level Languages**: Closest to natural human language, portable (Python, C++, Java, etc). Translators: compilers/interpreters.
- **Assembly Language**: More human-readable, hardware-dependent, converted to machine code by assembler.
- **Machine Language**: Hardware-native, binary, not portable.

#### Compilers vs Interpreters
- **Compiler**: Translates entire source code to machine code (faster runtime).
- **Interpreter**: Reads and executes code line by line (flexible, slower).

#### High-Level Language Types
- **Procedural/Structured Languages**: COBOL, Pascal, C
- **Object-Oriented Programming (OOP) Languages**: Python, C++, Java

---

## Part III: Briefing on Python

### Python: A Brief History
- Created by Guido van Rossum in the late 1980s in the Netherlands
- Public release: 1991 (Python 1.0)
- Rapid growth (1990s-2010s), especially in web development, scientific computing, data science, ML, and AI
- Major versions: Python 2.0 (2000), Python 3.0 (2008)
- Current: Python 3.13; Python 2 not supported since 2020

### Python's Features
- Easy to learn (simple syntax)
- Interpreted (executed line by line)
- Versatile (web dev, data analysis, AI, and more)
- Large standard library
- Cross-platform (Windows, macOS, Linux)

### Essential Tools for Python Development
1. **Python SDK (v3.13):**
   - Includes interpreter, standard library, IDLE, pip, docs, tools.
2. **IDEs**:
   - VS Code, PyCharm, Jupyter Notebook, Atom, Sublime Text, Spyder
   - Integrated editor, interpreter, and extra features

### Development Cycle of a Python Program
1. Write source code in an editor, save as `.py`
2. Run the `.py` file (compile to bytecode `.pyc`, executed by Python Virtual Machine (PVM))
   - If errors, return to editing

### Types of Programming Errors in Python
- **Syntax errors**: Breaking Python’s grammar (e.g., missing quote)
- **Runtime errors**: Illegal operation during execution (e.g., divide by zero)
- **Logic errors**: Program runs but produces incorrect results

---

## Part IV: First Python Program

### Writing Your First Python Program
- Use a text editor to write a `.py` file:
```python
# Filename: welcome_students.py
print("Welcome to COMP 1023")
```
**Note:** Python is case-sensitive.

### Running the Program
- For Windows: Open command prompt, navigate to file location (`cd path`), type `python welcome_students.py`
- Ensure Python 3 is installed (check with `python --version`).

### Common Question
- IDEs can also run Python by clicking icons, but learning command-line basics is important.

---

## Key Terms
- Algorithms, Assembler, Assembly Language, Bits and Bytes, Bytecode, Case-Sensitive Language, Compiler, Computer Programs, Computer Programming, High Level Language, IDE, Interpreter, Logic error, Machine Language, Memory and Address, Object-Oriented Programming, PI, Procedural/Structured Programming, Pseudocode, PVM, Runtime error, SDK, Syntax error

---

## Review Questions (with Expanded Explanations)

1. A **bit** is a binary digit (0 or 1).
2. A **byte** is a sequence of 8 bits.
3. A **compiler** translates the entire source code into a machine code file, then executes it.
4. An **interpreter** reads each statement, converts and executes immediately.
5. The **python** command (in the Software Development Kit) executes Python programs.
6. A Python program file must end with the **.py** extension.
7. Programming errors: **syntax errors** (grammar mistakes), **runtime errors** (execution problems), **logic errors** (wrong outcomes despite successful execution).

### What to Focus On (Based on Review Questions):
- **Representation of information in computer memory** (bits/bytes/addresses)
- **Translate and run programs**: role of compiler, interpreter, program file extensions
- **Programming languages classification**, errors, and development cycle
- **Understanding and handling errors**: Knowing the difference is fundamental for debugging and development

---

## Further Reading
- Textbook: "Introduction to Python Programming and Data Structures" (Sections 1.2 - 1.3, 1.5 - 1.8)
- How to install Python SDK and VS Code: see course website
