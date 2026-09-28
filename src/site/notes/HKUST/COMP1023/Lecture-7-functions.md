---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-7-functions/"}
---

# Lecture 7: Functions (Part I)

## Introduction

Suppose we need to find the sum of integers from 1 to 10, from 20 to 37, and from 35 to 49. A straightforward program for this would repeat similar blocks of code for each sum, only varying start and end values. This repetition highlights the need for more reusable code structures in programming.

```python
# Filename: sum_of_integers.py
def main():
    total = 0
    for i in range(1, 11):
        total += i
    print("Sum of integers from 1 to 10 is", total)
    total = 0
    for i in range(20, 38):
        total += i
    print("Sum of integers from 20 to 37 is", total)
    total = 0
    for i in range(35, 50):
        total += i
    print("Sum of integers from 35 to 49 is", total)

if __name__ == "__main__":
    main()
```

**Observation:** The code for computing these sums is very similar, differing only in the range parameters.

It is better to write commonly used code once and then reuse it. In Python, this can be achieved by defining a function. For example, the above can be rewritten using a function:

```python
# Filename: sum_of_integers_func.py
def sum_range(i1, i2):
    result = 0
    for i in range(i1, i2 + 1):
        result += i
    return result

def main():
    print("Sum of integers from 1 to 10 is", sum_range(1, 10))
    print("Sum of integers from 20 to 37 is", sum_range(20, 37))
    print("Sum of integers from 35 to 49 is", sum_range(35, 49))

if __name__ == "__main__":
    main()
```

---

## What is a Function?

A **function** is a collection of statements grouped together that performs an operation. For example, `input("Enter a value")` is a function in Python.

**Syntax:**
```python
def <function_name>(<parameter_list>):
    <statement_1>
    <statement_2>
    ...
    <statement_N>
```
Where `<function_name>` is the function name, `<parameter_list>` lists the parameters, and the statements form the function body. Note that `main` is itself a function, and serves as the entry point of a program.

---

## Analogy: The Machine Model

Think of a Python function as a **machine**:
- **Inputs:** Arguments or parameters (raw materials)
- **Processing:** The statements inside the function (machine operations)
- **Outputs:** The result returned (finished product)

Example:
```python
# Filename: add_numbers.py
def add(a: int, b: int) -> int:
    return a + b

result: int = add(5, 3)  # Inputs: 5 and 3; Output: 8
```

---

## Key Terminologies

```python
# Filename: maximum_two_numbers.py
def max(num1, num2):
    if num1 > num2:
        result = num1
    else:
        result = num2
    return result

def main():
    x, y = 10, 20
    z = max(x, y)
    print("The larger number is", z)

if __name__ == "__main__":
    main()
# Output: The larger number is 20
```

- **Function name:** `max`
- **Formal parameters:** `num1`, `num2`
- **Parameter list:** Variables inside function header
- **Function header:** First line declaring the function
- **Function body:** Logic of the function
- **Return statement:** Returns a value to the caller
- **Caller:** The function that invokes another function, e.g., `main()`
- **Actual parameters/arguments:** Values passed to the function, e.g., `x`, `y`

---

## Program Flow

When a function is called, control is transferred to the function and, upon completion, returns to the caller.

---

## Parameter Passing

Passing a variable like `x` to a function parameter (e.g., `num1`) means both refer to the same object if its value is unchanged. The same logic applies for other variables.

---

## Activation Records / Stack Frames

When a function is called, an **activation record** or **stack frame** is created on the call stack to store parameters, local variables, and return addresses.

---

## Type Hinting in Functions

Type hinting specifies expected data types for parameters and return values.
- Use a colon (:) for parameters, and an arrow (->) for return type.

```python
def max(num1: int, num2: int) -> int:
    if num1 > num2:
        result: int = num1
    else:
        result: int = num2
    return result
```

**Benefits:** Improved code clarity, easier debugging, better documentation.

---

## None Functions (Void Functions)

Every function in Python returns a value; if not, it returns `None`.
A function without a return statement is called a **None function** (or **void function** in other languages).
The syntax for explicit `None` return is `return` or `return None`.

```python
def sum(number1: int, number2: int) -> None:
    total: int = number1 + number2
    # No return statement

def main() -> None:
    print(sum(1, 2))  # Prints None

if __name__ == "__main__":
    main()
```

Another example with explicit `return None`:
```python
def sum(number1: int, number2: int) -> None:
    total: int = number1 + number2
    return

def main() -> None:
    print(sum(1, 2))  # Prints None

if __name__ == "__main__":
    main()
```

---

## Defining Function Order

Python functions can be defined in any order. They are loaded into memory only when called.

---

## Positional and Keyword Arguments

When calling functions, arguments can be:
- **Positional**: Must be in the same order as function parameters
- **Keyword**: Explicitly named, can be in any order

```python
def print_n_times(text: str, n: int) -> None:
    for i in range(n):
        print(text)

def main() -> None:
    print_n_times("COMP 1023", 3)  # Positional
    print_n_times(n=3, text="COMP 1023")  # Keyword

if __name__ == "__main__":
    main()
```

- Positional arguments cannot appear after any keyword arguments.

---

## Mutable vs Immutable (What do you observe?)

Passing integers (immutable objects) to a function does **not** change the original variable:
```python
def increment(n: int) -> None:
    n += 1
    print("n inside the function is", n)

def main() -> None:
    x: int = 1
    print("Before the call, x is", x)
    increment(x)
    print("After the call, x is", x)
```
**Output:**
Before the call, x is 1
n inside the function is 2
After the call, x is 1

Any modifications to the parameter inside the function do not affect the original variable.

---

## Immutable Objects

Numbers are immutable. Assigning a value to a variable creates a new object; the original reference remains unchanged unless reassigned.

```python
x: int = 1
y: int = x
print(id(x))  # id of x
print(id(y))  # id of y
y += 1
print(id(y))  # id of y after change
```

---

## Default Arguments

Functions can have default argument values, used when a call omits values for those parameters.

```python
def print_area(width: float = 1, height: float = 2) -> None:
    area: float = width * height
    print("Width:", width, "\theight:", height, "\tarea:", area)

def main() -> None:
    print_area()
    print_area(4, 2.5)
    print_area(height=5, width=3)
    print_area(10)
    print_area(width=1.2)
    print_area(height=6.2)

if __name__ == "__main__":
    main()
```

**Output:**
Width: 1	height: 2	area: 2
Width: 4	height: 2.5	area: 10.0
Width: 3	height: 5	area: 15
Width: 10	height: 2	area: 20
Width: 1.2	height: 2	area: 2.4
Width: 1	height: 6.2	area: 6.2

**Default arguments must come after required arguments.**

---

## Returning Multiple Values

A Python function can return multiple values, usually as a tuple.

```python
def sort(number1: int, number2: int) -> tuple[int, int]:
    if number1 < number2:
        return number1, number2
    else:
        return number2, number1

def main() -> None:
    n1, n2 = sort(3, 2)
    print("n1 is", n1)
    print("n2 is", n2)
```
**Output:**
n1 is 2
n2 is 3

---

## Pass Statement

The `pass` statement does nothing. It is a placeholder for where code will later be written, often used in empty functions or classes, or branches where no action is desired.

```python
def my_function() -> None:
    pass

class MyClass:
    pass

x: int = 5
if x > 10:
    pass
else:
    print("x is not greater than 10")

for i in range(5):
    if i == 3:
        pass
    else:
        print(i)
```

---

## Key Terms

- actual parameter
- argument
- caller
- default argument
- formal parameter (parameter)
- function
- function header
- immutable objects
- keyword arguments
- local variable
- None
- None function
- parameter
- positional arguments
- return value
- void function

---

## Review Questions

1. A function header begins with the __keyword__ followed by the __function’s name__ and its __parameters__, and ends with a colon.
2. A function is called a __void function__ if it does not return a value.
3. A __return__ statement can also be used in a void function for terminating the function and returning to the function’s caller.
4. The __arguments__ that are passed to a function should have the same __number__, __type__, and __order__ as the parameters in the function header if no default values or keywords are specified.
5. A function’s arguments can be passed as __positional arguments__ or __keyword arguments__.
6. Python allows you to define functions with __default argument values__. The __default values__ are passed to the parameters when a function is invoked without the arguments.
7. The Python return statement can return __multiple values__.

---

## Further Reading

Read Chapter 6 of “Introduction to Python Programming and Data Structures” textbook.

---

