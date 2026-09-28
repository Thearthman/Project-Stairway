---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-4-branching/"}
---

# COMP 1023 Introduction to Python Programming - Lecture 4: Branching

## Why Branching (Checking and Selection)?

Python statements are normally executed in sequence. Sometimes, we need to tell the computer to do something only when certain conditions are satisfied. This alters the normal sequential execution.

In Python, there are three main ways to achieve branching:
- **if statements**
  - if statement
  - if..else statement
  - if..elif..else statement
- **Nested if statements**
- **match..case statements**
- **Conditional expressions (ternary operator)**

---

## The if Statement

The if statement allows you to execute a statement or a block of statements when a condition is satisfied.

### Syntax
```python
if <Boolean expression>:
    <statement 1>    # Note that the statement must be indented
    <statement 2>    # Note that the statement must be indented
    ...
    <statement n>    # Note that the statement must be indented
```

Where:
- `<Boolean expression>` is an expression that returns a Boolean result
- `<statement 1>`, ..., `<statement n>` denote program statements that need to be executed when the `<Boolean expression>` is evaluated to True

### Example: The if Statement

```python
# Filename: if_mark.py
def main():
    mark = int(input("Enter your mark: "))
    if mark >= 80:
        print("You scored A!")
    print("Your mark is", mark)

if __name__ == "__main__":
    main()
```

**Output 1:**
```
Enter your mark: 90
You scored A!
Your mark is 90
```

**Output 2:**
```
Enter your mark: 52
Your mark is 52
```

**Key Point:** "You scored A!" is printed only if the input mark is 80 or higher.

---

## The if..else Statement

The if..else statement allows you to execute a statement or block of statements when a condition is satisfied or execute another statement or block of statements when the condition is not satisfied.

### Syntax
```python
if <Boolean expression>:
    # Note that the statements must be indented
    <statement A1>
    <statement A2>
    ...
else:
    # Note that the statements must be indented
    <statement B1>
    <statement B2>
    ...
```

Where:
- `<Boolean expression>` is an expression that returns a Boolean result
- `<statement A1>`, `<statement A2>`, ... denote program statements executed when `<Boolean expression>` is True
- `<statement B1>`, `<statement B2>`, ... denote program statements executed when `<Boolean expression>` is False

### Example 1: Temperature Check

```python
# Filename: if_else_temperature.py
def main():
    temperature = float(input("Body temperature: "))
    if temperature > 37.5:
        print("You are having a fever!")
    else:
        print("You have no fever.")

if __name__ == "__main__":
    main()
```

**Output 1:**
```
Body temperature: 36.9
You have no fever.
```

**Output 2:**
```
Body temperature: 37.8
You are having a fever!
```

### Example 2: Finding Larger Number

```python
# Filename: if_else_larger.py
def main():
    num1 = int(input("Enter the 1st number: "))
    num2 = int(input("Enter the 2nd number: "))
    if num1 >= num2:
        larger = num1
    else:
        larger = num2
    print("The larger number is", larger)

if __name__ == "__main__":
    main()
```

**Output:**
```
Enter the 1st number: 50
Enter the 2nd number: 57
The larger number is 57
```

---

## The if..elif..else Statement (if-else Ladder)

### Syntax
```python
if <Boolean expression 1>:
    # Note that the statement must be indented
    <statement A1>
    ...
elif <Boolean expression 2>:
    # Note that the statement must be indented
    <statement B1>
    ...
else:
    # Note that the statement must be indented
    <statement C1>
    ...
```

Where:
- `<Boolean expression 1>` and `<Boolean expression 2>` are expressions that return Boolean results
- `<statement A1>`, ... are executed when `<Boolean expression 1>` is True
- `<statement B1>`, ... are executed when `<Boolean expression 2>` is True
- `<statement C1>`, ... are executed when both expressions are False

**Note:** We may have as many elif statements as we want.

### Example: Grade Assignment

```python
# Filename: if_else_ladder_mark.py
def main():
    mark = int(input("Enter your exam mark: "))
    if mark >= 90:
        grade = 'A'
    elif mark >= 80:
        grade = 'B'
    elif mark >= 70:
        grade = 'C'
    elif mark >= 60:
        grade = 'D'
    else:
        grade = 'F'
    print("You scored", grade, "in your exam.")

if __name__ == "__main__":
    main()
```

**Output 1:**
```
Enter your exam mark: 81
You scored B in your exam.
```

**Output 2:**
```
Enter your exam mark: 59
You scored F in your exam.
```

### Equivalent Nested if..else Structure

```python
# Filename: if_else_if_else_mark.py
def main():
    mark = int(input("Enter your exam mark: "))
    if mark >= 90:
        grade = 'A'
    else:
        if mark >= 80:
            grade = 'B'
        else:
            if mark >= 70:
                grade = 'C'
            else:
                if mark >= 60:
                    grade = 'D'
                else:
                    grade = 'F'
    print("You scored", grade, "in your exam.")

if __name__ == "__main__":
    main()
```

---

## Nested if Statement

Both the if branch and the else branch may contain if statement(s).

### Syntax
```python
if <Boolean expression 1>:
    if <Boolean expression 2>:
        # Note that the statement must be indented
        <statement(s) 1>
    else:
        # Note that the statement must be indented
        <statement(s) 2>
else:
    # Note that the statement must be indented
    <statement(s) 3>
```

Where:
- `<Boolean expression 1>` and `<Boolean expression 2>` are expressions that return Boolean results
- `<statement(s) 1>` are executed when `<Boolean expression 2>` is True
- `<statement(s) 2>` are executed when `<Boolean expression 2>` is False
- `<statement(s) 3>` are executed when `<Boolean expression 1>` is False

**Note:** The level of nested if statements can be as many as we want.

### Example: Finding Maximum of Three Numbers

```python
# Filename: nested_if_max.py
def main():
    num1 = int(input("Enter the 1st number: "))
    num2 = int(input("Enter the 2nd number: "))
    num3 = int(input("Enter the 3rd number: "))
    if num1 >= num2:
        if num1 >= num3:
            maximum = num1
        else:
            maximum = num3
    else:
        if num2 >= num3:
            maximum = num2
        else:
            maximum = num3
    print("The maximum is", maximum)

if __name__ == "__main__":
    main()
```

**Output:**
```
Enter the 1st number: 50
Enter the 2nd number: 99
Enter the 3rd number: 17
The maximum is 99
```

---

## Common Errors in Selection Statements

### Error 1: Indentation Issues

Consider the following code - which one is correct?

**(a) The print statement is not inside the if statement:**
```python
radius = -20
if radius >= 0:
    area = radius * radius * 3.14
print("The area is", area)  # This will always execute
```

**(b) The print statement is inside the if statement:**
```python
radius = -20
if radius >= 0:
    area = radius * radius * 3.14
    print("The area is", area)  # This executes only when condition is true
```

### Error 2: else Alignment Issues

**(a) The else is aligned with the first if:**
```python
i = 1
j = 2
k = 3
if i > j:
    if i > k:
        print('A')
else:
    print('B')  # This else matches the first if
```

**(b) The else is aligned with the second if:**
```python
i = 1
j = 2
k = 3
if i > j:
    if i > k:
        print('A')
    else:
        print('B')  # This else matches the second if
```

**Result:** Since `i > j` is False, code (a) displays B, but nothing is displayed from statement (b).

---

## match-case Statement

The match-case statement in Python provides a way to do structural pattern matching. It allows for more flexible and readable conditional logic compared to traditional if-elif-else chains.

### Key Features
- Enables matching against data structures based on their shape and content, not just values
- Introduced in Python 3.10

### Syntax
```python
match <expression>:
    case <value 1>:
        <statement(s) 1>
    case <value 2>:
        <statement(s) 2>
    ...
    case _:
        <statement(s) N>
```

Where:
- `<expression>` is a value or variable to be matched against
- `<value 1>`, `<value 2>`, ... are patterns that the subject is compared to
- The wildcard `_` refers to the default case that matches if no other case matches
- `<statement(s) 1>`, `<statement(s) 2>`, ..., `<statement(s) N>` are statements executed when the value matches the corresponding case

### Important Properties
- The `<expression>` can evaluate to any value
- Case values can be numbers, strings, booleans, or other objects
- Case values can include expressions with variables
- When a case matches, the statements following that case are executed
- `case _` is the default case (optional)
- Multiple values can be combined with the pipe operator (`|`)
- Patterns (sequences, mappings) can be used for matching
- A `None` value can be used as a case value

### Example: Calculator with match-case

```python
# Filename: match_case_add_subtract.py
def main():
    print("Select an operation:")
    print("(A) Addition")
    print("(S) Subtraction")
    choice = input("Your choice (A or S): ")
    num1 = int(input("First integer: "))
    num2 = int(input("Second integer: "))
    
    match choice:
        case 'A' | 'a':  # Support multiple patterns
            result = num1 + num2
            print(f"{num1} + {num2} = {result}")
        case 'S' | 's':  # Support multiple patterns
            result = num1 - num2
            print(f"{num1} - {num2} = {result}")
        case _:
            print("Not a proper choice!")

if __name__ == "__main__":
    main()
```

**Output Examples:**

*Addition:*
```
Select an operation:
(A) Addition
(S) Subtraction
Your choice (A or S): A
First integer: 10
Second integer: 20
10 + 20 = 30
```

*Subtraction:*
```
Select an operation:
(A) Addition
(S) Subtraction
Your choice (A or S): S
First integer: 10
Second integer: 20
10 - 20 = -10
```

*Invalid Choice:*
```
Select an operation:
(A) Addition
(S) Subtraction
Your choice (A or S): M
First integer: 10
Second integer: 20
Not a proper choice!
```

### Important Cases

#### Repeated Cases
In Python, using the same value in a match-case statement does not raise an error. Instead, the cases after the first one will simply be ignored, and only the first matching case will be executed.

```python
# Filename: match_case_repeated_case.py
def main():
    value = 2
    match value:
        case 1:
            print("One")
        case 2:
            print("Two")
        case 2:  # This will be ignored
            print("Duplicate case")

if __name__ == "__main__":
    main()
```

**Output:** `Two`

#### Wildcard Placement Error
Placing the default case (`case _`) at the beginning of a match-case statement will raise an error because it makes the remaining patterns unreachable.

```python
# This raises a syntax error
def main():
    value = 2
    match value:
        case _:  # This is a syntax error: wildcard makes remaining cases unreachable
            print("Others")
        case 1: 
            print("One")
        case 2: 
            print("Two")
```

**Correct practice:** Place the default case at the end of the match statement.

---

## Comparison: match-case vs if-elif-else

| Feature | if-elif-else | match-case |
|---------|--------------|------------|
| **Introduced in** | Available since early Python versions | Introduced in Python 3.10 |
| **Readability** | Can become verbose with many conditions | More concise and readable with complex patterns |
| **Default Case** | Uses `else` for a default scenario | Uses `_` as a wildcard for the default case |
| **Pattern Matching** | Limited to simple condition checks | Supports complex pattern matching (e.g., sequences) |
| **Performance** | Generally efficient for simple conditions | Potentially more performant with complex patterns |

---

## Conditional Expressions (Ternary Operator)

Conditional expressions in Python allow us to perform conditional checks and assign values or perform operations in a single line. It is also known as a ternary operator.

### Syntax
```python
<variable name> = <expression 1> if <Boolean expression> else <expression 2>
```

Where:
- `<Boolean expression>` is a Boolean expression
- `<expression 1>` and `<expression 2>` are expressions
- `<variable name>` is the name of a variable to store the result

### How it Works
1. The `<Boolean expression>` is evaluated
2. Exactly one of either `<expression 1>` or `<expression 2>` is evaluated and returned
3. If `<Boolean expression>` evaluates to True, then `<expression 1>` is evaluated and returned, while `<expression 2>` is ignored
4. Conversely, if `<Boolean expression>` evaluates to False, `<expression 2>` is evaluated and returned, while `<expression 1>` is ignored

### Example: Odd/Even Check

**Using conditional expression:**
```python
# Filename: conditional_expression_odd_even.py
def main():
    n = 5
    result = "even" if n % 2 == 0 else "odd"
    print("n is an", result, "number")

if __name__ == "__main__":
    main()
```

**Equivalent if..else statement:**
```python
# Filename: if_else_odd_even.py
def main():
    n = 5
    if n % 2 == 0:
        result = "even"
    else:
        result = "odd"
    print("n is an", result, "number")

if __name__ == "__main__":
    main()
```

**Both produce the same output:**
```
n is an odd number
```

---

## Key Terms

- **Branching statements**
- **Checking and selection statements**
- **Conditional expressions**
- **if statements**
- **if..else statements**
- **if..elif..else statements**
- **if..else ladder**
- **Nested if statements**
- **match-case statements**

---

## Review Questions

Fill in the blanks in each of the following sentences about the Python environment:

1. Selection/branching statements are used for programming with alternative courses. There are several types of selection statements: _____ statements, _____ statements, nested _____ statements, _____, and _____.

2. The various _____ statements all make control decisions based on a _____. Based on the _____ or _____ evaluation of the expression, these statements take one of the two possible courses.

3. A _____ statement matches a value with a case and executes the statements for the matched case.

### Answers:
1. **if**, **if-else**, **if-elif-else**, **match-case**, **conditional expressions**
2. **if**, **Boolean expression**, **True**, **False**
3. **match-case**

---

## Further Reading

Read Sections 3.4 - 3.9, and 3.13 - 3.14 of "Introduction to Python Programming and Data Structures" textbook.