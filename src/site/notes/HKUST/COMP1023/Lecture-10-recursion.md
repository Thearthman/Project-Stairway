---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-10-recursion/"}
---

# Lecture 10: Recursion

## Introduction

**Recursion** is a technique that leads to elegant solutions for problems that are difficult to solve using simple loops. It is the process of defining a solution to a problem in terms of a simpler version of itself. Many natural phenomena exhibit recursion.

**Recursive functions** are functions that call themselves. They consist of two essential parts:

- **Base case(s)**: The conditions that stop the recursion. These are the simplest cases where the function returns a value without making further recursive calls.
- **Recursive case(s)**: The parts in which the function calls itself, typically with a modified set of parameters to move closer to the base case.

## The Handshake Problem

### Problem Statement

There are n people in the room. If each person shakes hands once with every other person, what will the total number of handshakes be?

**Examples:**
- 1 person (A): 0 handshakes
- 2 people (A and B): 1 handshake
- 3 people (A, B, and C): A↔B, A↔C, B↔C = 3 handshakes
- 4 people (A, B, C, and D): A↔B, A↔C, A↔D, B↔C, B↔D, C↔D = 6 handshakes

### Recursive Solution

The key insight is to recognize that when adding one more person to a group, that person shakes hands with everyone already in the room. This leads to a recursive pattern:

- If there are 2 people, there is 1 handshake
- If there are 3 people, we have the handshakes from 2 people PLUS 2 extra handshakes (the new person with each existing person)
- If there are 4 people, we have the handshakes from 3 people PLUS 3 extra handshakes

**Recursive definition:**

Let h(n) be the total number of handshakes among n people:

- **Base case**: h(1) = 0
- **General case**: h(n) = h(n - 1) + (n - 1)

Formally:

$$
h(n) = \begin{cases}
h(n-1) + (n-1), & \text{if } n \geq 2 \\
0, & \text{otherwise}
\end{cases}
$$

### Implementation

```python
# Filename: handshake.py
def handshake(n: int) -> int:
    if n <= 1:
        # Base case
        return 0  # No one to shake hands
    return handshake(n - 1) + (n - 1)  # General case

def main() -> None:
    for i in range(5):
        print(f"{i} Person: {handshake(i)} handshake(s)")

if __name__ == "__main__":
    main()
```

## General Structure of Recursive Functions

Every recursive function follows a standard pattern:

```python
def <recursive_function_name>(<parameter list>):
    # Base case: condition to stop recursion
    if <base_case_condition>:
        return <base_case_value>
    # General case: call the function itself with modified parameters
    return <recursive_function_name>(modified_parameters)
```

**Key principles:**

1. The recursive function uses an if or if-else statement to distinguish between different cases
2. **One or more base cases** (the simplest cases) are used to stop recursion
3. **Every recursive call must reduce the original problem**, bringing it increasingly closer to a base case until it becomes that case
4. Without proper base cases and reduction, the function will lead to infinite recursion

## The Factorial Problem

### Definition and Recursive Formula

The factorial of n is defined as \(n! = n \times (n-1)!\), where n is a non-negative integer.

Let f(n) represent n!; it is computed as follows:

$$
f(n) = \begin{cases}
n \times f(n-1), & \text{if } n > 0 \\
1, & \text{if } n = 0
\end{cases}
$$

### Implementation

```python
# Filename: factorial_recursive.py
def factorial(n: int) -> int:
    if n == 0:
        # Base case
        return 1
    return n * factorial(n - 1)  # General case

def main() -> None:
    for i in range(6):
        print(f"{i}! = {factorial(i)}")

if __name__ == "__main__":
    main()
```

### Execution Trace: factorial(3)

To understand how recursion works, trace through the execution of factorial(3):

```
factorial(3):
    3 == 0? No
    fac(3) = 3 * fac(2)
    
    factorial(2):
        2 == 0? No
        fac(2) = 2 * fac(1)
        
        factorial(1):
            1 == 0? No
            fac(1) = 1 * fac(0)
            
            factorial(0):
                0 == 0? Yes
                return 1
            
            fac(1) = 1 * 1 = 1
            return 1
        
        fac(2) = 2 * 1 = 2
        return 2
    
    fac(3) = 3 * 2 = 6
    return 6

fac(3) has the value 6
```

The execution demonstrates how each call creates a new instance of the function, and the results are combined as the calls return.

### Recursion vs. Iteration

While recursion is elegant, it is important to note that for certain problems like factorial, **an iterative solution using a loop is often simpler and more efficient**:

```python
def factorial(n: int) -> int:
    product: int = 1
    while n > 0:
        product *= n
        n -= 1
    return product
```

**Key insight**: For certain problems, a **recursive solution often leads to short and elegant code**. However, this elegance comes with performance trade-offs (discussed later). The choice between recursion and iteration depends on the problem's nature and the priorities (clarity vs. performance).

## Fibonacci's Bunnies Problem

### The Fibonacci Sequence

The sequence (1, 1, 2, 3, 5, 8, ...) is called the **Fibonacci sequence**, proposed by Leonardo Fibonacci in 1202 in *The Book of the Abacus*. It is believed to model nature to a certain extent, such as Kepler's observation of leaves and flowers in 1611.

**Fibonacci sequence**: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Each number in the sequence is the sum of the two preceding numbers.

### Recursive Definition

Let F(n) be the number of pairs of bunnies after n months; it is computed as follows:

$$
F(n) = \begin{cases}
1, & \text{if } n = 0 \\
1, & \text{if } n = 1 \\
F(n-1) + F(n-2), & \text{if } n \geq 2
\end{cases}
$$

The rationale: After n months, the total number of pairs equals:
- The pairs from (n-1) months (all existing pairs continue to live)
- PLUS the new pairs born in month n, which equals the number of fertile pairs, which is the number that existed two months ago: F(n-2)

### Implementation

```python
# Filename: fib.py
def fib(n: int) -> int:
    if n == 0 or n == 1:
        # Base cases
        return 1
    return fib(n - 1) + fib(n - 2)  # Recursive case

def main() -> None:
    m: int = int(input("Enter month: "))
    num_bunnies: int = fib(m)
    print(f"The number of pairs of bunnies after {m} \
month(s) is equal to {num_bunnies} pair(s)")

if __name__ == "__main__":
    main()
```

**Output:**
```
Enter month: 5
The number of pairs of bunnies after 5 month(s) is equal to 8 pair(s)

Enter month: 10
The number of pairs of bunnies after 10 month(s) is equal to 89 pair(s)

Enter month: 20
The number of pairs of bunnies after 20 month(s) is equal to 10946 pair(s)
```

### Efficiency Issue: Redundant Calculations

When computing fib(4), the recursive implementation performs many redundant calculations. For example, fib(2) is calculated multiple times:

```
fib(4)
├── fib(3)
│   ├── fib(2)
│   │   ├── fib(1) = 1
│   │   └── fib(0) = 1
│   └── fib(1) = 1
└── fib(2)
    ├── fib(1) = 1
    └── fib(0) = 1
```

Notice that fib(2) is computed twice, fib(1) is computed three times, and fib(0) is computed twice. As n grows larger, this redundancy becomes exponential, making naive recursive Fibonacci extremely inefficient for large values.

## Recursion vs. Loop

Both recursion and looping are used to perform repetitive tasks in programming. They can be employed to solve the same problems, often yielding the same results, though the approach and implementation differ.

| Aspect | Loop | Recursion |
|--------|------|-----------|
| **Initialization** | Initialize variables before the loop | Pass initial values as parameters |
| **Condition** | Check a condition at the beginning or end of each iteration | Base case checks to stop further calls |
| **Iteration/Recursion** | Update variables within the loop | Call the function with updated parameters |
| **Termination** | Exit when the condition is false | Return a value when the base case is reached |

**Key consideration**: Both approaches are fundamentally equivalent for repetitive tasks. The choice depends on problem structure, readability, and performance requirements.

## Recursion Stack Overflow and Its Handling

### What is Stack Overflow?

**Stack overflow** occurs when a recursive function exceeds the maximum call stack size. This can lead to a `RecursionError` in Python.

When a function is called, the system creates a new stack frame to store the function's local variables, parameters, and return address. With deep recursion, these stack frames accumulate until the available stack memory is exhausted.

### Strategies to Handle Stack Overflow

#### 1. Ensure Correct Base Case

The most critical strategy is to ensure that the base case is correctly defined and reachable.

**Example of correct base case:**
```python
def factorial(n: int) -> int:
    if n == 0:  # Base case must be reachable
        return 1
    return n * factorial(n - 1)
```

Without a proper base case, recursion continues indefinitely.

#### 2. Tail Recursion

**Tail recursion** is a specific type of recursion where the recursive call is the last operation in the function. This means that there is no additional computation after the recursive call.

**Example of tail recursion:**
```python
def factorial_tail(n: int, accumulator: int = 1) -> int:
    if n == 0:
        return accumulator
    return factorial_tail(n - 1, n * accumulator)  # Recursive call is the last operation
```

<u>Tail recursion can be optimized by some compilers (called **tail call optimization**) to reuse the same stack frame instead of creating a new one.</u> However, <u>**Python does not optimize tail recursion**</u>, but it's a good practice in other languages like Scheme, Scala, and functional programming languages.

#### 3. Iterative Solutions

Convert recursive algorithms to iterative ones using loops and data structures (like stacks).

**Example:**
```python
def factorial_iterative(n: int) -> int:
    product = 1
    while n > 0:
        product *= n
        n -= 1
    return product
```

This avoids the overhead of recursive function calls entirely.

#### 4. Increase Recursion Limit

Python allows you to increase the maximum recursion depth using:

```python
import sys
sys.setrecursionlimit(limit)
```

**Caution**: Increasing the limit can lead to crashes if not managed properly. The operating system still has a finite stack size, and setting too high a limit can cause a system crash rather than a graceful error.

## Trade-offs of Recursion

### Advantages

- Enables **intuitive, straightforward, and simple solutions** to inherently recursive problems
- Code is often more elegant and closer to the mathematical definition
- Natural for problems that decompose into smaller subproblems

### Disadvantages

**Recursion bears substantial overhead:**

1. **Memory overhead**: Each time the program calls a function, the system must allocate memory for all of the function's **local variables** and **parameters**
2. **Time overhead**: Extra time is required to manage the additional memory and perform function call operations
3. This overhead can consume considerable computer memory

**Performance implications:**

- Calling a function consumes more time and memory than adjusting a loop counter
- High-performance applications (such as graphics-intensive games or simulations of nuclear explosions) rarely use recursion
- In less demanding applications, recursion can be an attractive alternative to iteration for the right problems

## Caution with Loops and Recursion

### Infinite Loops

If we use a loop, we must be careful not to create an infinite loop by accident:

```python
result = 1
while result > 0:
    ...
    result += 1  # Oops! This makes the condition always true
```

### Infinite Recursion

Similarly, if we use recursion, we must be careful not to create an infinite chain of function calls:

**Missing base case:**
```python
def factorial(n: int) -> int:
    return n * factorial(n - 1)  # No base case (Oops!)
```

**Incorrect recursion direction:**
```python
def factorial(n: int) -> int:
    if n == 1:
        return 1
    return n * factorial(n + 1)  # factorial(n + 1) moves away from base case (Oops!)
```

Both errors will result in a `RecursionError` when the call stack is exhausted.

## Conclusion

Recursion is one way to decompose a task into smaller subtasks. At least one of the subtasks is a simpler example of the same task.

**Essential requirements for recursive functions:**

1. A **recursive function must contain at least one non-recursive branch** (i.e., base case)
2. **The recursive calls must eventually lead to a non-recursive branch**

**Example: Factorial function**

$$n! = n \times (n-1)!$$

The simpler subtask is \((n-1)!\), and we have:

$$1! = 1$$

This is the simplest task where n = 1, serving as the base case. By ensuring both requirements are met, we guarantee that recursion terminates correctly.

## Key Terms

- **base case**: The condition(s) in a recursive function that stop the recursion; the simplest case(s) that return a value directly
- **infinite recursion**: A recursion that never terminates, leading to a stack overflow
- **recursive function**: A function that directly or indirectly invokes itself
- **stopping condition**: Another term for base case; the condition that must be met to stop recursive calls

## Review Questions and Answers

The following review questions highlight the key concepts in this lecture:

1. **A ___ is one that directly or indirectly invokes itself. For a ___ to terminate, there must be one or more ___.**
   - **Answer**: A **recursive function** is one that directly or indirectly invokes itself. For a **recursive function** to terminate, there must be one or more **base cases**.

2. **Recursion is an alternative form of program control. It is essentially repetition without a loop control. It can be used to write simple, clear solutions for inherently recursive problems that would otherwise be ___.**
   - **Answer**: **difficult to solve**

3. **Recursion bears substantial ___. Each time the program calls a function, the system must allocate memory for all of the function's ___ and ___. This can consume considerable computer memory and requires extra ___ to manage the additional memory.**
   - **Answer**: Recursion bears substantial **overhead**. Each time the program calls a function, the system must allocate memory for all of the function's **local variables** and **parameters**. This can consume considerable computer memory and requires extra **time** to manage the additional memory.

## Summary of Key Takeaways

- **Recursion** involves a function calling itself with modified parameters to solve a simpler version of the same problem
- **Base case** and **recursive case** are essential components; without a base case, infinite recursion occurs
- Recursive solutions are elegant for inherently recursive problems like factorial, Fibonacci, and tree traversal
- **Trade-offs exist**: while recursion provides clarity and elegance, it carries memory and time overhead compared to iterative solutions
- **Stack overflow** is a risk; strategies include ensuring correct base cases, using tail recursion (in languages that optimize it), converting to iterative solutions, or increasing recursion limits
- For performance-critical applications, iterative solutions are often preferred
- Both recursion and loops achieve repetition through different mechanisms; choice depends on problem structure and constraints
