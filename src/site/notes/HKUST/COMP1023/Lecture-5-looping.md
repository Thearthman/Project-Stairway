---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-5-looping/"}
---

# Lecture 5: Looping Statements

## Introduction
In programming, many tasks are repetitive. Rather than repeating the same lines of code, we use loops to automate repeated operations. For example, instead of writing a `print` statement one hundred times, we use a loop to perform the task efficiently.

## Why Looping (or Iteration)?
Looping allows a set of statements to be executed multiple times based on specific conditions. In Python, the main looping constructs are:
- **while loop**
- **for loop**

## Components of a Loop
Every loop typically involves these four elements:
1. **Initialize**: Set up the initial loop control variable.
2. **Test Condition**: Check a condition (usually Boolean) to determine if looping continues.
3. **Loop Body**: Execute the block of code that is to be repeated.
4. **Update**: Alter the loop control variable in the loop body to eventually meet the termination condition.

## while Loop
A `while` loop repeats as long as its Boolean test condition evaluates to `True`.

**Syntax:**
```python
while <Boolean expression>:
    <statement 1>
    ...
    <statement N>
```

### Types of Loops
Loops are categorized as:
- **Counter-controlled**: Repeats a known number of times.
- **Sentinel-controlled**: Number of repetitions is unknown; a sentinel value signals when to stop.

### while Loop Examples
**Counter-Controlled Example:**
```python
def main():
    total, mark = 0.0, 0.0
    counter = 0
    while counter < 10:
        mark = float(input("Enter mark: "))
        total += mark
        counter += 1
    average = total / counter
    print("Average =", average)
```

**Sentinel-Controlled Example:**
```python
def main():
    total, mark = 0.0, 0.0
    counter = 0
    mark = float(input("Enter mark: "))
    while mark != -1:
        total += mark
        counter += 1
        mark = float(input("Enter mark: "))
    if counter != 0:
        average = total / counter
        print("Average =", average)
```

**Key Point:**
> Every loop must eventually make its test condition become `False`, otherwise it will result in an infinite loop.

## Numeric Errors in Loops
Floating-point representations can introduce numeric errors in loops. For example, summing incremental values may have off-by-one errors if the termination condition skips the last value due to floating point rounding.

```python
def main():
    total_sum = 0
    i = 0.01
    while i <= 1.0:
        total_sum += i
        i += 0.01
    print("The total sum is", total_sum)
```

Here, ideally the sum from 0.01 to 1.0 (step by 0.01) should be 50.5, but due to floating point approximation the loop may end before adding the last value.

## for Loop
The `for` loop is typically used for counter-controlled looping. 

**Syntax:**
```python
for <variable> in range(<initial>, <end>, <step>):
    <statement 1>
    ...
    <statement N>
for <variable> in <sequence>:
    <statements>
```

### range() Function
The `range()` function generates a sequence of integers:
```python
for i in range(5):             # 0 1 2 3 4
for i in range(4, 8):          # 4 5 6 7
for i in range(3, 9, 2):       # 3 5 7
for i in range(5, 1, -1):      # 5 4 3 2
```
All arguments for `range()` must be integers.

### while Loop vs for Loop
| while loop                    | for loop                             |
|------------------------------|--------------------------------------|
| More flexible                | Simpler for fixed number of repeats  |
| Used for sentinel-controlled | Used for counter-controlled loops    |

### Factorial Example with for loop
```python
def main():
    n = int(input("Enter value of n: "))
    if n == 0:
        result = 1
    else:
        result = n
        for i in range(n-1, 0, -1):
            result *= i
    print("The factorial of", n, "is", result)
```

## Choosing the Right Loop
- Use `while` for sentinel-controlled situations
- Use `for` for a known, fixed number of iterations

## break Statement
The `break` statement exits the innermost loop immediately.

```python
def main():
    area = 100.0
    while area > 50.0:
        length = float(input("Enter length of rect: "))
        if length < 5.0:
            break
        width = float(input("Enter width of rect: "))
        if width < 5.0:
            break
        area = length * width
        print("The area =", area)
```

## Simulating do-while Loop
Python doesn't have a do-while loop; use a `while True:` and break when valid input is received.

```python
def main():
    while True:
        user_input = input("Enter a positive number: ")
        if user_input.isdigit() and int(user_input) > 0:
            break
        print("Invalid input. Please try again.")
    print("Valid input received.")
```

## continue Statement
The `continue` statement skips to the next iteration of the nearest enclosing loop.

```python
def main():
    total = 0
    print("Enter 8 numbers")
    for i in range(8):
        data = int(input("Enter number {}: ".format(i + 1)))
        if data < 0:
            continue
        total += data
    print("The sum =", total)
```

## while-else and for-else Loops
A loop `else` block runs when the loop ends normally (not via `break`).

**while-else Example:**
```python
max_attempts = 3
attempts = 0
while attempts < max_attempts:
    user_input = input("Enter a valid number: ")
    if user_input.isdigit():
        print(f"Valid input: {user_input}")
        break
    else:
        print("Invalid input.")
    attempts += 1
else:
    print("Exceeded maximum attempts\nExiting program.")
```

**for-else Example:**
```python
number = int(input("Enter a number: "))
for i in range(2, number):
    if number % i == 0:
        print(number, "is not a prime number.")
        break
else:
    print(number, "is a prime number.")
```

## Nested Loops
A nested loop contains a loop inside another loop. Example: printing a multiplication table.

```python
for i in range(1, 10):
    for j in range(1, 10):
        print(str(i * j).rjust(3), end=" ")
    print()
```

## Pattern Printing (Nested Loops)
Example of pattern printing with nested loops:

```python
height = int(input("Height of the pattern: "))
for lines in range(1, height + 1):
    for a in range(1, height - lines + 1):
        print(" ", end="")
    for b in range(1, 2 * lines):
        print("*", end="")
    print()
```

## Variable Reuse and Persistence
- Reusing the same control variable in outer and inner loops can lead to unexpected changes.
- Loop variables persist after loop termination in Python (unlike C++ where they are block scoped).

## Key Terms
- break statement
- continue statement
- counter-controlled loop
- for loop
- infinite loop
- initialize statement
- iteration statements
- loop body
- looping statements
- nested loops
- sentinel-controlled loop
- sentinel value
- test condition statement
- update statement
- while loop

## Review Questions
1. Name the two types of repetition statements in Python.
2. What part of the loop contains the statements to be repeated?
3. What is an infinite loop?
4. What happens when the while loop's test condition is True or False?
5. What is a sentinel value?
6. Which loop is typically counter-controlled?
7. Which keywords alter loop behavior?
8. What does the `break` keyword do?
9. What does the `continue` keyword do?
10. Does a loop variable retain its last value after the loop ends?

**Answers:**
1. while, for
2. loop body
3. A loop statement that executes infinitely
4. If True, loop body executes; otherwise, terminates
5. A special value that signifies the end of input
6. for
7. break, continue
8. Immediately ends the innermost loop
9. Ends only the current iteration of the innermost loop
10. Yes, in Python

## Further Reading
Refer to Sections 5.1 - 5.13 of the recommended textbook: Introduction to Python Programming and Data Structures.

---
This markdown file omits the opening title page and the "Thanks" slide but preserves all critical concepts, explanations, and code. The structure and review questions emphasize the most essential learning objectives.