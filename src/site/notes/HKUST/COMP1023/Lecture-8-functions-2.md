---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-8-functions-2/"}
---

# Lecture 8: Functions (Part II)

COMP 1023 Introduction to Python Programming  
Dr. Cecia Chan, Prof. SC Cheung, Dr. Alex Lam, Dr. Desmond Tsoi  
Department of Computer Science & Engineering  
The Hong Kong University of Science and Technology, Hong Kong SAR, China

---

## Scope of Variables

### Understanding Variable Scope

The **scope** of a variable is the part of the program where the variable can be referenced. Understanding scope is crucial for writing functions that behave predictably and avoid naming conflicts.

There are two main types of variables based on where they are defined:

1. **Local Variables**: A variable created inside a function is referred to as a local variable. Local variables can only be accessed within the function where they are defined. The scope of a local variable starts from its creation and continues to the end of the function that contains the variable.

2. **Global Variables**: A variable created outside all functions is referred to as a global variable. Global variables are accessible to all functions in their scope. They exist at the top level of the program and can be accessed and modified by any function (with proper declaration).

### Example: Local vs Global Variables

```python
x: int = 1                          # Global variable

def f() -> None:
    y: int = 2                      # Local variable
    print(x)                        # Access global variable
    print(y)                        # Access local variable

f()
print(x)                            # Print x (global)
# y is out of scope
print(y)                            # Error: NameError
```

**Output:**
```
1
2
1
Traceback (most recent call last):
  File "Example.py", line 10, in <module>
    print(y)
NameError: name 'y' is not defined
```

This example demonstrates that:
- Inside the function `f()`, both the global variable `x` and the local variable `y` can be accessed.
- Outside the function, only the global variable `x` can be accessed.
- Attempting to access `y` outside the function results in a `NameError` because `y` only exists within the scope of function `f()`.

### Conditional Variable Creation and Scope

Variables created within conditional blocks have scope only within that block:

```python
x: int = int(input("Enter an integer: "))

if x > 0:
    y: int = 4                      # y is created only if x > 0
    print(y)
```

**Output (when x = 10):**
```
Enter an integer: 10
4
```

**Output (when x = -5):**
```
Enter an integer: -5
Traceback (most recent call last):
  File "example.py", line 5, in <module>
    print(y)
NameError: name 'y' is not defined
```

In this example:
- The variable `y` is created only if `x > 0`.
- If the user enters a positive value for `x`, the program runs fine.
- If the user enters a non-positive value, attempting to print `y` produces an error because `y` was never created.

---

## The `global` Statement

### Using `global` to Bind Variables to Global Scope

We can bind a local variable to the global scope using the **`global`** statement. This allows us to create a variable inside a function and use it outside the function, or to modify a global variable from within a function.

### Example 1: Creating a Global Variable Within a Function

```python
# Filename: global_example1.py

def create_global() -> None:
    global x                        # Declare x as global
    x = 7
    print(x)                        # Print 7

create_global()
print(x)                            # Print 7
```

In this example:
- The `global x` statement inside `create_global()` declares that we are creating or modifying a global variable named `x`.
- The variable `x` is created in the global scope with value 7.
- The `x` referenced in line after the function call refers to the same global variable `x` created inside the function.

### Example 2: Modifying a Global Variable From Within a Function

```python
# Filename: global_example2.py

x: int = 1                          # Global variable

def increase() -> None:
    global x                        # Bind to global x
    x += 1
    print(x)                        # Print 2

increase()
print(x)                            # Print 2
```

In this example:
- A global variable `x` is created with initial value 1.
- The `global x` statement inside `increase()` binds the local reference `x` to the global variable `x`.
- This means that any modifications to `x` inside the function affect the global variable.
- After calling `increase()`, the global `x` has been incremented to 2.

### Example 3: The Importance of `global` Declaration

```python
# Filename: global_example3.py

x: int = 20                         # x is a global variable

def my_function() -> None:
    print(x)                        # Accessing the global variable

def modify_global() -> None:
    global x                        # Commenting out this line results in an error
    x = x + 30                      # Modifying the global variable

my_function()                       # Print 20
modify_global()
print(x)                            # Print 50
```

**Important Note:** If you comment out the line `global x` in `modify_global()`, the statement `x = x + 30` is treated as an attempt to assign a value to a local variable `x`. Since `x` has not been defined as a local variable before this assignment, Python raises an **`UnboundLocalError`** when it tries to evaluate `x + 30` because it cannot find a local variable `x` that has been assigned a value yet.

This highlights a critical distinction: Python uses the **LEGB rule** (Local, Enclosing, Global, Built-in) to resolve variable names, but if a variable is assigned anywhere in a function, Python treats it as local throughout that function, unless explicitly declared as `global`.

---

## Memory Management

### Stack Frame

A **stack frame** is a block of memory that stores information about a function call. Each time a function is called:
- A new stack frame is created to hold the function's **local variables**, **parameters**, and **return address**.
- Local variables and parameters stored in the stack frame are temporary and exist only during the function's execution.
- When the function finishes executing, its stack frame is removed from the stack, and the local variables are destroyed.

### Global Frame

The **global frame** is the top-level scope in a Python program. It contains:
- **Global variables** that can be accessed from anywhere in the program.
- **Function definitions** that can be called from any scope.
- When the Python interpreter starts, it creates a global frame for the entire program.
- The global frame persists for the entire duration of the program's execution.

### Heap

The **heap** is a region of memory used for dynamic memory allocation. In Python:
- Objects (such as integers, floats, lists, dictionaries, and user-defined classes) are stored in the heap when they are created.
- Memory in the heap is managed automatically by Python through a process called **garbage collection**.
- Objects stored in the heap can have a longer lifetime than the functions that created them, as long as there are references to them.
- When an object has no references pointing to it, it becomes eligible for garbage collection and its memory is freed.

---

## Name Conflicts

### Handling Variables with the Same Name

When a global variable and a local variable have the same name, Python uses **name shadowing**. The local variable takes precedence within the function's scope.

### Example: Name Shadowing

```python
# Filename: name_conflict.py

x: int = 1                          # Global variable

def f() -> None:
    x: int = 2                      # Local variable with the same name
    print(x)                        # Print 2 (local x, not global)

f()
print(x)                            # Print 1 (global x)
```

**Explanation:**
- A global variable `x` is created with value 1.
- Inside function `f()`, a local variable with the same name `x` is created with value 2.
- From the point of declaration onward, the local variable `x` shadows the global variable `x` within the function.
- When `print(x)` is executed inside the function, it prints the local `x` (value 2), not the global `x`.
- Outside the function, the global variable `x` is still accessible and still has value 1.

**Key Takeaway:** While name shadowing is allowed, it is generally considered poor programming practice to create local and global variables with the same name, as it can lead to confusion and errors. It is better to use distinct, meaningful variable names.

---

## Modularizing Code

### Functions in Modules

In Python, we can place function definitions into a file called a **module** with the file-name extension `.py`. Modules provide several advantages:
- **Reusability**: Functions defined in a module can be imported into other programs and reused.
- **Organization**: Related functions can be grouped together in a single module.
- **Maintainability**: Code is easier to maintain when organized into logical modules.

**Module File Location:** The module file should be placed in the same directory as your other programs for easy importing.

**Multiple Functions:** A module can contain more than one function. When a module is imported, all functions defined in it become available.

**Question:** What happens if we define two functions with the same name in a module?

**Answer:** There is no syntax error in this case, but **the latter function definition prevails**. When you define a second function with the same name, it overwrites the first function definition.

### Example 1: GCD Function Module

**Filename: gcd_function.py**
```python
def gcd(n1: int, n2: int) -> int:
    """Return the gcd of two integers"""
    result: int = 1                 # Initial gcd is 1
    k: int = 2                      # Possible gcd is 2
    
    while k <= n1 and k <= n2:
        if n1 % k == 0 and n2 % k == 0:
            result = k              # Update gcd
        k += 1
    
    return result                   # Return gcd
```

**Method 1: Import Specific Function**

**Filename: test_gcd_function1.py**
```python
from gcd_function import gcd        # Import the specific function

n1: int = int(input("First integer: "))
n2: int = int(input("Second integer: "))
print("The GCD for", n1, "and", n2, "is", gcd(n1, n2))
```

**Method 2: Import Entire Module**

**Filename: test_gcd_function2.py**
```python
import gcd_function                 # Import the entire module

n1: int = int(input("First integer: "))
n2: int = int(input("Second integer: "))
print("The GCD for", n1, "and", n2, "is", gcd_function.gcd(n1, n2))
```

**Output:**
```
First integer: 45
Second integer: 75
The GCD for 45 and 75 is 15
```

### Example 2: Prime Number Functions Module

**Filename: prime_number_function.py**
```python
def is_prime(number: int) -> bool:
    """Check whether a number is prime"""
    divisor: int = 2
    
    while divisor <= number / 2:
        if number % divisor == 0:   # If true, number is not prime
            return False
        divisor += 1
    
    return True                     # number is prime

def print_prime_numbers(number_of_primes: int) -> None:
    NO_OF_PRIMES_PER_LINE: int = 10 # 10 per line
    count: int = 0                  # Count the number of prime numbers
    number: int = 2                 # Number to be tested for primeness
    
    # Repeatedly find prime numbers
    while count < number_of_primes:
        if is_prime(number):
            count += 1              # Increase the count
            print(number, end=" ")
            if count % NO_OF_PRIMES_PER_LINE == 0:
                print()             # Move to the next line
        number += 1
```

**Filename: test_print_prime_numbers.py**
```python
from prime_number_function import print_prime_numbers

print("The first 50 prime numbers are:")
print_prime_numbers(50)
```

---

## Passing Lists to Functions

### Lists as Mutable Objects

When passing a list to a function, it is important to understand that **lists are mutable objects**. This means that any changes made to the list inside the function will affect the original list passed as an argument.

### Example 1: Modifying List Contents

```python
# Filename: passing_list_to_func1.py

def m(number: int, numbers: list[int]) -> None:
    number = 1001                   # Assign a new value to number
    numbers[0] = 5555               # Assign a new value to numbers[0]

def main() -> None:
    x: int = 1
    y: list[int] = [1, 2, 3]
    m(x, y)
    print("x is", x)                # Print x is 1 (unchanged)
    print("y[0] is", y[0])          # Print y[0] is 5555 (changed)

if __name__ == "__main__":
    main()
```

**Explanation:**
- When `m(x, y)` is called, a copy of the integer `x` (which is immutable) is passed, so changes to `number` inside the function do not affect the original `x`.
- However, the list `y` (which is mutable) is passed by reference, so changes to `numbers[0]` inside the function affect the original list.
- After the function call, `x` remains 1, but `y[0]` is changed to 5555.

---

## Default Mutable Arguments: A Common Pitfall

### The Problem with Mutable Default Arguments

One of the most subtle and potentially problematic issues in Python occurs when using **mutable objects as default arguments** in function definitions. Default arguments are created only once when the function is defined, not each time the function is called. This can lead to unexpected behavior.

### Example: Mutable Default Argument Problem

```python
# Filename: passing_list_to_func2.py

def add(x: int, l: list[int] = []) -> list[int]:
    if x not in l:
        l.append(x)
    return l

def main() -> None:
    list1: list[int] = add(1)
    print(list1)                    # Print [1]
    
    list2: list[int] = add(2)
    print(list2)                    # Print [1, 2]
    
    list3: list[int] = add(3, [11, 12, 13, 14])
    print(list3)                    # Print [11, 12, 13, 14, 3]
    
    list4: list[int] = add(4)
    print(list4)                    # Print [1, 2, 4]

if __name__ == "__main__":
    main()
```

**How This Happens:**

1. **First call: `add(1)`** - The default value `[]` for argument `l` is created when the function is defined. The function appends 1 to this list, so `l` becomes `[1]`. This list is returned and stored in `list1`.

2. **Second call: `add(2)`** - Since `l` is not provided, the default list is used. However, it is the **same list** created earlier, which is now `[1]`. The function appends 2 to it, making it `[1, 2]`. This is returned and stored in `list2`.

3. **Third call: `add(3, [11, 12, 13, 14])`** - A new list is explicitly provided, so the function appends 3 to `[11, 12, 13, 14]`, resulting in `[11, 12, 13, 14, 3]`.

4. **Fourth call: `add(4)`** - Again, the default list is used, which now contains `[1, 2]`. The function appends 4 to it, making it `[1, 2, 4]`.

**The Issue:** The default list persists across multiple function calls, accumulating values unexpectedly.

### Solution: Use `None` as Default

```python
# Filename: passing_list_to_func2_fix.py

def add(x: int, l: list[int] | None = None) -> list[int]:
    # Set default value to None
    if l is None:
        l = []
    
    if x not in l:
        l.append(x)
    return l

def main() -> None:
    list1: list[int] = add(1)
    print(list1)                    # Print [1]
    
    list2: list[int] = add(2)
    print(list2)                    # Print [2]
    
    list3: list[int] = add(3, [11, 12, 13, 14])
    print(list3)                    # Print [11, 12, 13, 14, 3]
    
    list4: list[int] = add(4)
    print(list4)                    # Print [4]

if __name__ == "__main__":
    main()
```

**Explanation:**
- By using `None` as the default value, each call to `add()` without an explicit list argument will create a **new empty list**.
- This prevents any unintended persistence of changes across function calls.
- Now each call produces the expected output with a fresh list.

**Key Takeaway:** When defining functions with default parameters, avoid using mutable types (lists, dictionaries, sets) as defaults. Instead, use `None` and create a new mutable object inside the function if needed.

---

## Returning a List from a Function

### List References

When a function returns a list, the **list's reference** is returned, not a copy. This means the caller receives a reference to the same list object in memory.

### Example: Reversing a List

```python
# Filename: reverse_list.py

def reverse(l: list[int]) -> list[int]:
    result: list[int] = [0] * len(l)
    for i in range(0, len(l)):
        result[i] = l[len(l) - 1 - i]
    return result

def main() -> None:
    list1: list[int] = [1, 2, 3, 4, 5, 6]
    list2: list[int] = reverse(list1)
    print(list2)                    # Print the reversed list

if __name__ == "__main__":
    main()
```

**Output:**
```
[6, 5, 4, 3, 2, 1]
```

**Explanation:**
- The function `reverse()` creates a new list `result` and populates it with the reversed elements of the input list.
- The function returns a reference to this new list.
- The caller receives this reference and can use it to access and modify the returned list.

---

## Passing Any Number of Parameters to Functions

### Variable-Length Arguments

Python allows functions to accept **any number of parameters**. This flexibility enables functions to handle a varying amount of input data without knowing in advance how many arguments will be passed.

### Using *args and **kwargs

Two special syntax constructs allow functions to accept variable numbers of arguments:

1. **`*args`**: Allows passing a **variable number of non-keyword arguments**. The `*args` parameter collects all positional arguments into a **tuple**.

2. **`**kwargs`**: Allows passing a **variable number of keyword arguments**. The `**kwargs` parameter collects all keyword arguments into a **dictionary**.

### Example: Variable-Length Arguments

```python
# Filename: example_any_num_parameters.py

def example_function(*args: int, **kwargs: str | int) -> None:
    print("Arguments:", args, type(args))
    print("Keyword Arguments:", kwargs, type(kwargs))

def main() -> None:
    example_function(1, 2, 3, name='Alice', age=30)

if __name__ == "__main__":
    main()
```

**Output:**
```
Arguments: (1, 2, 3) <class 'tuple'>
Keyword Arguments: {'name': 'Alice', 'age': 30} <class 'dict'>
```

**Explanation:**
- The positional arguments `1, 2, 3` are collected into a tuple `args`.
- The keyword arguments `name='Alice', age=30` are collected into a dictionary `kwargs`.
- This allows the function to be called with any number of positional and keyword arguments.

**Note:** Tuples and dictionaries will be covered in detail in the next lecture topic.

---

## Passing Two-Dimensional Lists To Functions

### Working with Matrix Data

Two-dimensional lists (matrices) are often passed to functions for various computational tasks. Understanding how to pass and manipulate multidimensional lists is important for working with tabular data.

### Example: Matrix Accumulation

```python
# Filename: matrix_accumulate.py

def get_matrix() -> list[list[float]]:
    matrix: list[list[float]] = []  # Create an empty list
    number_of_rows: int = int(input("Enter the number of rows: "))
    
    for row in range(number_of_rows):
        s: str = input("Enter row " + str(row) + ": ")
        matrix.append([float(x) for x in s.split()])
    
    return matrix

def accumulate(m: list[list[float]]) -> float:
    total: float = 0
    for row in m:
        total += sum(row)           # Get the total in the row
    return total

def main() -> None:
    m: list[list[float]] = get_matrix()  # Get a list
    print(m)
    print("\nSum of all elements is", accumulate(m))

if __name__ == "__main__":
    main()
```

**Output:**
```
Enter the number of rows: 2
Enter row 0: 2 3
Enter row 1: 4 5
[[2.0, 3.0], [4.0, 5.0]]

Sum of all elements is 14.0
```

**Explanation:**
- The function `get_matrix()` prompts the user to enter the number of rows and then the elements of each row. It returns a 2D list.
- The function `accumulate()` takes a 2D list and sums all elements in all rows.
- List comprehensions are used to convert string input to float values: `[float(x) for x in s.split()]`.

---

## Lambda Functions

### What Are Lambda Functions?

**Lambda functions** are anonymous expressions, meaning they have no name unless explicitly assigned to a variable. They are a way to create small, unnamed functions in a single line.

**Characteristics:**
- A lambda function can take **any number of arguments**, but can only have **one expression**.
- The expression is evaluated and returned automatically.
- Lambda functions are useful for short, simple operations that don't warrant a full function definition.

### Syntax

```
lambda <arguments> : <expression>
```

### Examples of Lambda Functions

**Example 1: Lambda with Arguments**
```python
from collections.abc import Callable

result: int = (lambda x, y: x + y)(1, 2)  # Return 3

func: Callable[[int, int], int] = lambda x, y: x + y
print(func(1, 2))                          # Print 3
```

In this example:
- A lambda function is defined inline and immediately called with arguments `1` and `2`.
- A lambda function can also be assigned to a variable and called later.

**Example 2: Lambda with No Parameters**
```python
from collections.abc import Callable

greet: Callable[[], str] = lambda: "Hello, welcome to COMP 1023!"
print(greet())                             # Output: Hello, welcome to COMP 1023!
```

In this example:
- A lambda function with no parameters is defined and assigned to a variable.
- It is called without any arguments and returns a greeting string.

---

## Common Use Cases for Lambda Functions: filter(), map(), and reduce()

### Functional Programming with Higher-Order Functions

Lambda functions are commonly used in **functional programming**, particularly with functions like `filter()`, `map()`, and `reduce()`, which take other functions as arguments (i.e., **higher-order functions**) to process elements in a collection.

### filter() Function

**Syntax:**
```
filter(<function>, <iterable>)
```

**Purpose:** The `filter()` function applies the given function to each item of the iterable. If the returned value is `True`, the item is kept in a new iterable; otherwise, it is excluded.

**Example: Filtering Even Numbers**
```python
from collections.abc import Iterator

numbers: list[int] = [1, 2, 3, 4, 5, 6, 7, 8]
evens: Iterator[int] = filter(lambda x: x % 2 == 0, numbers)
even_list: list[int] = list(evens)
print(even_list)                           # Print [2, 4, 6, 8]
```

**Explanation:**
- The lambda function `lambda x: x % 2 == 0` returns `True` if `x` is even.
- `filter()` applies this function to each element and keeps only those for which the function returns `True`.
- The result is converted to a list for easy viewing.

---

### map() Function

**Syntax:**
```
map(<function>, <iterable>)
```

**Purpose:** The `map()` function applies the given function to each item of the iterable and keeps the returned value in a new iterable.

**Example: Computing String Lengths**
```python
fruits: list[str] = ['apple', 'banana', 'cherry']
lengths: list[int] = list(map(lambda x: len(x), fruits))
print(lengths)                             # Print [5, 6, 6]
```

**Explanation:**
- The lambda function `lambda x: len(x)` computes the length of each string.
- `map()` applies this function to each fruit name and collects the lengths.
- The result is converted to a list.

---

### reduce() Function

**Syntax:**
```
reduce(<function>, <iterable>)
```

**Purpose:** The `reduce()` function applies the given function to the first two items of the iterable, then takes the returned value and applies the function to it and the next item, and so on, until all items are processed. This function is available in the `functools` module.

**Example: Summing Numbers**
```python
from functools import reduce

numbers: list[int] = [1, 2, 3, 4, 5, 6, 7, 8]
result: int = reduce(lambda x, y: x + y, numbers)
print(result)                              # Print 36
```

**Explanation:**
- The lambda function `lambda x, y: x + y` adds two numbers.
- `reduce()` applies this function cumulatively: ((((1+2)+3)+4)+5)+6)+7)+8 = 36.
- This computes the sum of all numbers in the list.

---

## Performance of Lambda Functions

### Are Lambda Functions Faster?

Lambda functions are **not inherently faster** than standard functions. Both are compiled to similar bytecode by the Python interpreter.

### Advantages of Lambda Functions

However, lambda functions can provide practical benefits in certain scenarios:

1. **Reduced Overhead:** They can slightly reduce overhead in cases where defining a full function would add unnecessary boilerplate code.

2. **Inline Usage:** Lambda functions can be used inline as anonymous functions when passed directly to higher-order functions like `map()` or `filter()`. This avoids the need to define and reference a separate named function, reducing both boilerplate code and variable lookup overhead.

3. **Code Clarity:** For simple operations, using a lambda function inline can make code more concise and easier to read.

**Best Practice:** Use lambda functions for simple, single-expression operations. For more complex logic, define a regular named function for better readability and maintainability.

---

## Key Terms

- **argument**: A value passed to a function when it is called.
- **caller**: The code that invokes or calls a function.
- **default argument**: A predefined value for a function parameter if no argument is provided.
- **function**: A reusable block of code that performs a specific task.
- **function header**: The line that defines a function, including its name, parameters, and return type.
- **global variable**: A variable defined outside all functions, accessible throughout the program.
- **immutable objects**: Objects whose values cannot be changed after creation (e.g., integers, strings, tuples).
- **keyword arguments**: Arguments passed to a function using the name=value syntax.
- **local variable**: A variable defined inside a function, accessible only within that function.
- **None**: A special Python value representing the absence of a value.
- **None function**: A function that does not return a value, has return type `None`.
- **parameter**: A variable in a function definition that receives an argument value.
- **positional arguments**: Arguments passed to a function in a specific order.
- **return value**: The value returned by a function to the caller.
- **void function**: A function that does not return a value (equivalent to a None function).

---

## Review Questions

Fill in the blanks in each of the following sentences about the Python environment:

**1. A variable created in a function is called a ________________. Its scope starts from its ________________ and exists until the function ________________.**

**Answer:** local variable; creation; returns

**Explanation:** Local variables are limited to function scope. Their existence begins when they are first assigned and ends when the function completes execution.

**2. ________________ are created outside all functions and are accessible to all functions in their scope.**

**Answer:** Global variables

**Explanation:** Global variables have program-wide scope and can be accessed and modified by any function that explicitly declares them as global.

---

## Further Reading

Read Chapter 6 of "Introduction to Python Programming and Data Structures" textbook for additional examples and in-depth explanations of function concepts.
